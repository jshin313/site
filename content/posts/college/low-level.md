---
title: "Computer Systems and Low Level Programming"
publishdate: 2021-03-10
lastmod: 2021-04-17
draft: false
toc: true
tags:
  - notes
  - college
  - programming
  - c
---

## Storage Types
* **auto**: Default storage class. Stored on stack.
* **extern**: Global variable. Used for declarations only.
* **static**: Stored in data segment. Sort of like global
* **register**: Can be stored in register, but more of a suggestion to compiler.

## Base Conversions

### Decimal to Base B
* Divide N by Base B 
* Remainder is one of the digits
* Set N = floor(N/B)
* Repeat until N = 0  

Digits are in reverse

### Base B to Decimal
* Use the following to convert from base b to decimal
$$ n = a_k b^{k-1} + a_{k-2} b^{k-1} ... + a_{2} b^1 + a_1 b^0$$

#### Example
$$ 987_{10} = 9 \cdot 10^2 + 8 \cdot 10^1 + 7 \cdot 10^0$$

### Binary to Hexadecimal
Each nibble (4 bits) is one hexadecimal digit

#### Example
0100 1110 1100 0011 to hexadecimal  
4    E    C    B

### Hexadecimal to Binary
Opposite of above

### Binary to Octal
Every 3 bits is one octal digit

#### Example
110 111 011 001 011 to octal  
4   7   3   1   3

### Binary Addition
**And** determines whether a carry results  
**Xor** is like an addition

## Negative Number Representation

### Signed Magnitude Representation
* Just use the first bit as a flag to indicate whether the number is positive or negative
* E.g. 
  * -1 is just 1001 for a 4 bit integer
  * -4 is just 1100 for a 4 bit integer

* Cons
  * Wasted space by duplicate +0 and -0
  * Addition of a positive number and the corresponding negative don't yield an expected result

### One's Complement
* Take the bitwise inverse of the positive representation
* E.g.
  * 1 is 0001, so -1 is 1110
  * 4 is 0100, so -4 is 1011

### Two's Complement
* Bitwise inverse of positive representation + 1
* E.g. 
  * 1 is 0001, so -1 is 1111
  * 4 is 0100, so -4 is 1100

* Pros
  * No duplicate 0 representation
  * Addition of negative and positive numbers works

## IEEE 754 Floating Point Representation

### float: 32 bit (single precision)
* Sign (1 bit)
* Exponent (8 bits)
* Mantissa (23 bits)
  * The fractional part of the number  

#### Normalized Representation
* Sign (S): Either 0 or 1, for positive and negative respectively
* Exponent (E): Can't be all 0s or 1s
* Mantissa (M): Fractional part

Decimal value = $(0)^{s} \cdot (1.0 + M) \cdot 2^{E-127}$  

Range: $2^{-126}$ to $2^{127}$

* Used for most numbers
* Assumes Mantissa is 1. + M
* Bias is 127

#### Denormalized Representation
Exponent is 0b00000000

Formula:
$$ (-1)^{S} \cdot (0.0 + M) \cdot 2^{1-127}$$

* Used for values close to or equal to zero.

#### Special Values

##### Positive Infinity
S = 0  
E = all 1's  
M = all 0's  

##### Negative Infinity
Same as above except S = 1
   
##### NaN
S = Either 0 or 1  
E = all 1's  
M = anything except all 0's  

* divide by 0
* sqrt(-1)

##### Positive Zero
S = 0  
E = all 0's  
M = all 0's  

##### Negative Zero
S = 1  
E = all 0's  
M = all 0's  

#### Ranges
* Lowest positive normalized floating point: (1.0 + 0.0) * 2^(-126) = 2^(-126) = 1.1754943508 * 10^(-38)
* Lowest positive denormalized floating point: (0.0 + 2^(-23)) * 2^(-126) = 2^(-149)
* Highest positive normalized floating point: 
  * M set to all 1's, and E set to 0b11111110 (E can't be all 1's cause that's reserved for infinities and NaN)
  * M = (1 - 2^(-23)) = 0.99999988079
  * (1.0 + M) = (1.0 + (1 - 2^(-23)))
  * E = (255 - 1) - Bias = 254 - 127 = 127
  * Highest positive normalized = 1.99999988079 * 2^(127) = 3.402823466 * 10^38
* Highest positive denormalized floating point: 
  * M set to all 1's
  * M = (1 - 2^(-23)) = 0.99999988079
  * (0.0 + M) * 2^(-126) = 0.99999988079 * 2^(-126)
* Machine Epsilon: 
  * Machine epsilon, $\epsilon$, is the smallest number such that $1.0 + \epsilon \neq 1.0$ on a machine
  * $\epsilon = 2^{-\text{Num of bits for mantissa}} = 2^{-23} \approx 1.19 \cdot 10^{-7}$
* The distance between adjacent floats is not the same for all numbers. 
  * Example: The distance between 1.0 and the next cloest positive float is the machine epsilon (1.19 x 10^(-7)), but the distance between 6.022 * 10^23 and the adjacent float is around 3.6 * 10^16.

### double: 64 bit (double precision)
* Sign (1 bit)
* Exponent (11 bits)
* Mantissa (52 bits)

Bias: 1023

* Provides Higher precision

### Summary of Floating Point Representations
![Chart of Floating Point](/slide_54.jpg)
Image from https://www.slideserve.com/yvon/arithmetic-for-computers

### Convert Decimal to Floating Point
#### Example: Convert 131.3 to Floating Point Representation  

First convert the part before decimal, so 131 to binary.

```
131 = 65 * 2 + 1
 65 = 32 * 2 + 1
 32 = 16 * 2 + 0
 16 =  8 * 2 + 0
  8 =  4 * 2 + 0
  4 =  2 * 2 + 0
  2 =  1 * 2 + 0
  1 =  0 * 2 + 1
```
So 131 to binary is 10000011  

Then convert 0.3 to binary
```
0.3 * 2 = 0.6 | 0
0.6 * 2 = 1.2 | 1
0.2 * 2 = 0.4 | 0
0.4 * 2 = 0.8 | 0
0.8 * 2 = 1.6 | 1
0.6 * 2 = 1.2 | 1
```

To convert fraction to decimal, multiply by 2 instead of dividing and the part before the decimal is the binary digit. Notice that the `0.6 * 2 = 1.2` repeats.    

So 0.3 to binary is 01001100110011001 and so on, but truncate it so there's 23 bits for the mantissa (24 bits total for the 1. + M)  

Now you have 10000011.0100110011001100  

Round the last digit to 1  

Now you have 10000011.0100110011001101  

Move the decimal point so that  you have the form 1.M
$$ 1.00000110100110011001101 \cdot 2^7$$

Exponent is $E- 127 = 7$, so $E = 134$  

Converting 134 to binary yields 10000110

Put it all together using the formula $(-1)^{S} \cdot (1.0 + M) \cdot 2^{E-127}$

$$E = 134$$
$$M = 00000110100110011001101$$
$$S = 0$$

So the binary representation is as follows:
```
S    E             M
0 10000110 00000110100110011001101
```

## Assembly Instructions
Note that AT&T syntax is used

### mov
```
mov src, dest
```

#### Types of moves
* imm = immediate value (e.g. \$0x4)
* reg = register
* mem = memory  

* Cannot do memory to memory transfer 
* Cannot do imm to imm
* e.g. mov (%rax), (%rdx) is invalid
* All other moves are valid (e.g. imm to reg, imm to mem, reg to mem, mem to reg, reg to reg)

#### Memory addressing mode
```
displacement(base_reg, idx_reg, scale) = base_reg + idx_reg * scale + displacement
```
* displacement: a constant that is usually 1, 2, or 4 bytes
* base_reg: any of the registers
* idx_reg: Any register except %rsp
* scale: 1, 2, 4, or 8  

##### Example
* mov 8(%rdx, %rcx, 4), %rax
* moves the memory at address rdx + rcx*4 + 8 into the rax register

### lea
```
lea src, dest
```

Set dest to src, where src is an address

#### Example
```c
long multiply_12(long x)
{
  return x * 12;
}
```
```asm
  lea (%rdi, %rdi, 2), %rax     # t = x+x*2 = 3*x
  sal $2, %rax                  # return t << 2
```
* First computes x + x*2
* Then does an arithmetic shift right by 2 (multiply by 4)

### cmp
```
cmp b, a
```
* Equivalent to (a - b) except without setting the result to a
* Used for comparison 
* Sets ZF if a and b are the same
* Uses CF for unsigned comparisons
  * Set when (a - b) < 0
  * So when b > a
* Uses SF for signed comparisons
  * Set when (a - b) < 0
  * So when b > a

### test
```
test b, a
```
* Equivalent to a & b without moving the result to a
* Sets ZF if a & b == 0
* Sets SF if a & b < 0

## Floating Point Assemby

### Floating Point Registers
* **XMM Registers**
  * 16 total registers
  * 16 bytes each
### Floating Point Instructions
```
addsd %xmm1, %xmm0
```
* (Add scalar double)
Adds what's in the xmm1 register to what's in xmm0, and store the result in xmm0
* addss would just be for single precision floating points

## Virtual Memory
### Problems
* Problem 1: Not enough addressable memory 
  * Not really a big problem with modern computers
  * 2^32 = 4 GB, so only around 4 billion addressable addresses for each program
  * In reality around 2GB since other addresses are used by OS
  * For a 32-bit processor, if you don't have 4GB of RAM, the program could crash since it assumes it can access the whole 2^32 address space.
* Problem 2: Memory Fragmentation
  * Holes in address space if you run multiple programs together and then quit one
* Problem 3: Programs overwriting/accessing each other's memory

#### Solving Problem 1
* The problem is that every program uses the same 32-bit memory space.  
* Virtual memory gives each program it's own virtual memory space and uses mapping from a program's virtual memory to physical memory (RAM).  
* Virtual memory also allows us to map virtual memory to disk if we run out of RAM. 

#### Solving Problem 2
* Mapping from virtual to physical allows program's virtual memory to consist of multiple chunks of memory that might have holes or discontinuities

#### Solving Problem 3
* Each program has it's own address space, so no overwriting of memory
* A possible downside is that program isolation might mean redundant memory spaces
* If programs have shared resources (e.g. fonts, graphics, icons, libraries), redundancy can be mitigated by just mapping the virtual memory spaces of both programs to the same physical memory space.

### How Virtual Memory Works
* **Virtual Memory**: What the program sees
  * e.g. `mov $0x4, %(eax)` writes 4 to the virtual address stored in eax
* **Physical Memory**: The physical RAM of the computer
* **Virtual Address (VA)**: What the program uses
* **Physical Address (VA)**: What the hardware uses. 

### Translation
1. Program executes a load or mov with a virtual address (VA)
2. Computer translates the address to the physical address (PA) in memory
3. (If the physical address (PA) is not in memory, the OS loads it from disk to memory and updates the map)
4. The computer reads from RAM using the physical memory and returns the data to program

### Page Table
* **Page Table**: The map from VA (Virtual Addresses) to PA (Physical Addresses)
* Problem: If we have a page table entry (PTE) for every virtual address, the number of entries will be the number of addressable virtual addresses. For MIPS assembly, only words are addressable, so the number of addressable addresses is the number of addresses divided by 4. So (2^32)/(4) = 2^30 = 1 billion addressable virtual addresses for MIPS, which means around 1 billion page table entires. This is a problem since we would need to store 1GB of mappings for every program if we wanted to use virtual memory.
* Solution: Divide virtual memory into chunks (**pages**) instead of words
* Page = Chunk of memory 
* Page size: (Usually around 4kB or 1024 words per page) or even 2MB
* Each page table entry now covers a range/chunk of data that is a page instead of just a word
* Tradeoff: less flexible with how to use RAM since you have to move a page at a time

#### Address Translation Example 1
What happens if a 32-bit machine has 256 MB of RAM and 4kB pages?  
* Page offset size for physical and virtual addresses stay the same 
* Both **page offsets** are 12 bits: 4096 addresses that don't get translated = 4kB = 2^12  
* Page offsets don't get translated by the page table, since they're the same for both physical and virtual, only page numbers get translated
* 256 MB = 2^28 = 28 bits for total physical address
* 28 bits - 12 bits (for page offset) = 16 bits for **physical page number**
* 32 bits - 12 bits (for page offset) = 20 bits for **virtual page number**

![Page Translation Example of Above](/pagetranslation.png)
Slide from https://youtu.be/ZjKS1IbiGDA

* Page offsets: tell us where in the page we're at
* Page number: Which page

* In this example there are more bits for the virtual page number than the physical page number since the virtual memory size (32 bits) is greater than the physical memory size (28 bits)
* In this example, you would map the rest of the virtual pages to disk once physical memory is exhausted

#### Address Translation Example 2
What happens if a 32-bit machine has 8 GB of RAM and 4kB pages?  
* Page offsets are the same as above since we still have 4kB pages
* Virtual page numbers are the same as above since we still have a 32-bit machine
* The only thing that would change from the above example is the virtual page size with a virtual page size of 21 bits instead
* If you had one program running, you wouldn't need to map to disk, but with 2 or more, you still might need to.

### Page Faults
When a page is not mapped in the virtual address space. Takes a long time since there's a lot of writes/reads from the disk.

