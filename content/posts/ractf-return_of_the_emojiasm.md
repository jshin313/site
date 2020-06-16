---
title: "Return of the EmojASM"
date: 2020-06-15T21:01:15-04:00
draft: false 
toc: false
images:
tags:
  - ctf
  - writeup
  - security
---

It looks like we have another EmojiASM problem! 
Note: Depending on what editor/browser you view this on, the emoji's might not be shown properly. That means copying and pasting the emojis might not work well. Try using a browser.

## Problem Description
Impressive work. But the emojasm gods have provided you with one more foul challenge. Once again, the web interface should be above.

## Info from the EmojiASM Webpage
### Architecture
- General-purpose registers X and Y (both 8 bits wide)
- Accumulator Register A (8 bits wide)
- 3x Tape Drives, T0 T1 and T2 (descibed below), each with the following:
    - 1 input buffer register (TnI)
    - 1 ouput buffer register (TnO)
    - 1 write flag (TnW)
- Obviously each tape drive has a position on the tape as well, which changes as the tape gets moved. (TnP)

"n" here refers to the tape id, so for instance the input buffer register of tape 2 (T2) is known as T2I.

### Tape drive details
Each tape drive supports the following operations:

- Forward - move the tape forward one space (and other things, described below)
- Backward - move the tape backward one space
- Rewind - reset the tape's position to 0, and clear both buffers and the write flag.
- Set-write - write a byte to the output buffer and set the write flag.

The forward operation is special because it also does the following:
- Reads the data in the space it has just passed over into the input buffer register
- If the write flag is set:
    - Write the data in the output buffer register to the byte just passed over
    - Clear the write flag

None of those things happen when going backwards, and this is the only way to read and write to or from any tape.

Each tape drive is 256 bytes long. Trying to move forwards or backwards past the end of the tape has no effect.

Read more about EmojiASM [here](https://gist.github.com/Bentechy66/bce063ee26bb0ec2ae664d506ed28ad0#file-emojasm_16bitjmp_spec-md).

## Approach 
Basically we just have to xor each byte from tape0 with a byte from tape1.
Unfortunately we EmojiASM doesn't have an xor instruction. All the bitwise operations we have are `&` and `|`.

Fortunately, we can use a combination of the given operations to create something that's equivalent to the xor operation.
After some searching, I come across this stack overflow [post](https://stackoverflow.com/questions/4715232/xor-from-only-or-and-and).

After scrolling through the various answers, it seems like [this](https://stackoverflow.com/a/47588032/9512643) is the easiest to implement in emojiasm.
We'll use this to replace xor
```
a ^ b  = (a | b) - (a & b)
```

## Read data off of Tape0 and Tape1
We'll be using the practice mode first to make sure our asm actually works (make sure to check the "Include debug output" option).
First, let's see if we can read some of the data on tape0 and tape1.

Let's read from T1 first:
```
➡️🎞️             Move T1 forward        puts one character into T1I
👁️🎞️            A <- T1I               move the character in T1I into the Accumulator Register A
📤              output <- chr(A)       print out what's in A
```

We can put all the instructions in a compact line like this `➡️🎞️👁️🎞️📤`.
Let's see what's on T1 by stringing a bunch of these together:
```
➡️🎞️👁️🎞️📤➡️🎞️👁️🎞️📤➡️🎞️👁️🎞️📤➡️🎞️👁️🎞️📤➡️🎞️👁️🎞️📤➡️🎞️👁️🎞️📤➡️🎞️👁️🎞️📤➡️🎞️👁️🎞️📤➡️🎞️👁️🎞️📤➡️🎞️👁️🎞️📤
```

We get the following output 
```
Your program has been run successfully!

The output was:

xorkeyxork
```

Let's try doing the same for T0:

```
➡️📼👁️📼📤➡️📼👁️📼📤➡️📼👁️📼📤➡️📼👁️📼📤➡️📼👁️📼📤➡️📼👁️📼📤➡️📼👁️📼📤➡️📼👁️📼📤➡️📼👁️📼📤
```

Output:
```
Your program has been run successfully!

The output was:

⏽⏽⏽⏽⏽
⏽
```

It looks like Tape0 has non ASCII characters. Let's add 0x30 to each character from tape0 to make them viewable.
For example, if tape0 had `0` in the first byte, we would add 0x30 before displaying it. `chr(0 + 0x30) = "0"`. Then we would see `"0"` instead of `⏽`.

```
➡️📼             Move T0 forward         Puts one byte into T0I
👁️📼            A <- T0I                Move the byte in T0I into the Accumulator Register A
📦🔨            X <- A                  Put what's in A into X 
✉️😃😀           A <- 0x30               Puts 0x30 into A
➕🔨            A <- A + X              Adds X to A
📤              out <- chr(A)           Outputs A
```

The pseudocode below is equivalenet to the above
```python3
A = T0I + 0x30
print(A)
```

Make the above emojiasm more compact: `➡️📼👁️📼📦🔨✉️😃😀➕🔨📤`
And string a bunch together to read tape1: 
```
➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤➡️📼👁️📼📦🔨✉️😃😀➕🔨📤
```
Output:
```
Your program has been run successfully!

The output was:

:>AO32<:1O

```
So the first byte on tape0 is 10 since `ord(":") - 0x30 = 10`

Let's see what the first character of the flag should be by xoring the first byte from tape0 (10) with the first byte from tape1 (ord("x")):
```console
$ python -c 'print chr(10 ^ ord("x"))'
r
```
As we expected, the first character of the flag is `r`.

## Implement Subtraction
Now we can use `a ^ b  = (a | b) - (a & b)` to implement an xor function. However, emojiasm doesn't have a subtract operation, only a decrement op.  
So we have to first create a way to subtract before we make implement xor.  

The following code subtracts 0x02 from 0x43 and stores the result in T2:

```
01: ✉️😄😃               A <- 0x43 
02: ✏️🎥                 T2O <- A
03: ➡️🎥                 T2 <- T2O
04: T2[0] = 0x43
05:
06: ✉️😀😂               A <- 0x02
07: 📦🔨                X <- A
08: X = 0x2
09: 
10: ✉️😀😀               A <- 0
11: 📦⛏️                 Y <- A
12: Y = 0
13: 
14: ⏪🎥                Rewind T2
15: ➡️🎥👁️🎥             A <- T2               
16: 🦔🗃️                A <- A - 1
17: ⏪🎥                Rewind T2
18: ✏️🎥                 T2O <- A
19: ➡️🎥                 T2 <- T2O
20: A = T2[0]
21: A -= 1
22: T2[0] = A
23: 
24: 💡⛏️                 Y <- Y + 1
25: 🎁⛏️                 A <- Y
26: ❓🔨                flags ← cmp(X, A)
27: 🐇😀😀😁😅          RJMP <- value
28: 🏷️                  {if flags.EQ not set} PC ← RJMP
29: Y += 1
30: if y != A:
31:     goto 14
```

An uncommented version of the above:
```
✉️😄😃
✏️🎥
➡️🎥
✉️😀😂
📦🔨
⏪🎥
➡️🎥👁️🎥
🦔🗃️
⏪🎥
✏️🎥
➡️🎥
💡⛏️
🎁⛏️
❓🔨
🐇😀😀😁😅
🏷️
```

Let's run the above asm:

```
Your program has been run successfully!

The output was:


--Debug output

1-4: OP.LDA with args: ['😄', '😃']
6-8: OP.TOUT with args: 🎥
10-12: OP.TF with args: 🎥
14-17: OP.LDA with args: ['�', '😂']
18-20: OP.TAR with args: 🔨
21-23: OP.TRW with args: 🎥
25-27: OP.TF with args: 🎥
28-30: OP.TIN with args: 🎥
31-34: OP.DEC with args: 🗃️
35-37: OP.TRW with args: 🎥
39-41: OP.TOUT with args: 🎥
43-45: OP.TF with args: 🎥
46-49: OP.INC with args: ⛏️
50-53: OP.TRA with args: ⛏️
54-56: OP.CMP with args: 🔨
57-62: OP.LDJMP with args: ['�', '�', '😁', '😅']
[OP.LDJMP] - Setting RJMP to 21 for ldjmp [0x0, 0x0, 0x1, 0x5]
64-65: OP.JMPNEQ with args: None
[OP.JMPNEQ] - Setting PC to 21
21-23: OP.TRW with args: 🎥
25-27: OP.TF with args: 🎥
28-30: OP.TIN with args: 🎥
31-34: OP.DEC with args: 🗃️
35-37: OP.TRW with args: 🎥
39-41: OP.TOUT with args: 🎥
43-45: OP.TF with args: 🎥
46-49: OP.INC with args: ⛏️
50-53: OP.TRA with args: ⛏️
54-56: OP.CMP with args: 🔨
57-62: OP.LDJMP with args: ['�', '�', '😁', '😅']
[OP.LDJMP] - Setting RJMP to 21 for ldjmp [0x0, 0x0, 0x1, 0x5]
64-65: OP.JMPNEQ with args: None
Halting (pc: 65, maxidx: 64)
``` 

> Jumping:
Program memory offsets are the number of characters (unicode codepoints) from the start of the file. This takes into account emojis that are actually multiple codepoints, so beware.


If you have any problems or errors running the above code, make sure to remove any extraneous spaces. Any extra character will throw the jump offset off (see the above quote). Here we set the jump to 21 since the first OP.TRW (rewind) instruction is at 21.
If you have extra spaces or extra characters, you might need to adjust the offset to whereever the first rewind instruction is.
```
⏪🎥                Rewind tape2
➡️🎥👁️🎥             A <- one chr of tape2
📤                  out <- chr(A)
```

The full subtraction code with output:
```
✉️😄😃
✏️🎥
➡️🎥
✉️😀😂
📦🔨
⏪🎥
➡️🎥👁️🎥
🦔🗃️
⏪🎥
✏️🎥
➡️🎥
💡⛏️
🎁⛏️
❓🔨
🐇😀😀😁😅
🏷️
⏪🎥
➡️🎥👁️🎥  
📤
```

Output:
```
Your program has been run successfully!
The output was:
A
```
The program prints out `A`, which is the expected result since 0x43 - 2 = 0x41 and chr(0x41) = "A".

## Implement XOR
Now that our test subtraction program works, we use it to implement xor.
We'll basically use the following forumla and imlement that: a ^ b  = (a | b) - (a & b)
Note: In the pseudocode below, `i` is just the current index or current position on the tape 
When the program first starts, the i = 0, since the program starts at the beginning of each tape. 
Everytime we read, i is incremented since the position on the tape is also incremented.
```
01: ➡️📼👁️📼                     A <- one chr of tape0
02: 📦🔨                        X <- A
03: ➡️🎞️👁️🎞️                     A <- one chr of tape1
04: 🎷🔨                        A <- A | X
05: ⏪🎥                        Rewind Tape2
06: ✏️🎥                         T2O <- A
07: ➡️🎥                         T2 <- T2O (output buf of T2)
08: T2[0] = tape1[i] | tape0[i]
09: 
10: ⬅️📼⬅️🎞️                      Move T1 and T0 backwards by 1 since reading from the tapes moves the position forward
11: ➡️📼👁️📼                     A <- one chr of tape0
12: 📦🔨                        X <- A
13: ➡️🎞️👁️🎞️                     A <- one chr of tape1
14: 🍴🔨                        A <- A & X
15: 📦🔨                        X <- A
16: ✉️😀😀                       A <- 0
17: 📦⛏️                         Y <- A
18: X = T1[i] & T0[i]
20: Y = 0
21: 
22: ⏪🎥                        Rewind T2
23: ➡️🎥👁️🎥                     A <- T2               
24: 🦔🗃️                        A <- A - 1
25: ⏪🎥                        Rewind T2
26: ✏️🎥                         T2O <- A
27: ➡️🎥                         T2 <- T2O
28: A = T2[0]
29: T2[0] = A - 1
30: 
31: 💡⛏️                         Y <- Y + 1
32: 🎁⛏️                         A <- Y
33: ❓🔨                        flags ← cmp(X, A)
34: 🐇😀😀                  RJMP <- value
35: 🏷️                          {if flags.EQ not set} PC ← RJMP
36: Y += 1
37: if X != Y:
38:     goto 22
```

Uncommented version of above:
```
➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🎷🔨
⏪🎥
✏️🎥
➡️🎥
⬅️📼⬅️🎞️
➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🍴🔨
📦🔨
✉️😀😀
📦⛏️
⏪🎥
➡️🎥👁️🎥
🦔🗃️
⏪🎥
✏️🎥
➡️🎥
💡⛏️
🎁⛏️
❓🔨
🐇😀😀😄😋
🏷️
```

Just like in the subtraction program, we set the jump offset to where the first rewind instruction is (OP.TRW) which in this case is 75 or 0x4b.  

Now let's make sure the program is actually working by printing out the first byte in T2. We'll use this code snippet from earlier to print out the first byte of T2:
```
⏪🎥
➡️🎥👁️🎥  
📤
```

Now combine the output code with the xor implementation:
```
➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🎷🔨
⏪🎥
✏️🎥
➡️🎥
⬅️📼⬅️🎞️
➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🍴🔨
📦🔨
✉️😀😀
📦⛏️
⏪🎥
➡️🎥👁️🎥
🦔🗃️
⏪🎥
✏️🎥
➡️🎥
💡⛏️
🎁⛏️
❓🔨
🐇😀😀😄😋
🏷️
⏪🎥
➡️🎥👁️🎥  
📤
```

Ouput
```
Your program has been run successfully!

The output was:

r
```
We've got the first letter of the flag!
Now all we have to do is copy and paste the above code snippet about 4 times:
```
➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🎷🔨
⏪🎥
✏️🎥
➡️🎥
⬅️📼⬅️🎞️
➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🍴🔨
📦🔨
✉️😀😀
📦⛏️
⏪🎥
➡️🎥👁️🎥
🦔🗃️
⏪🎥
✏️🎥
➡️🎥
💡⛏️
🎁⛏️
❓🔨
🐇😀😀😄😋
🏷️
⏪🎥
➡️🎥👁️🎥  
📤

➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🎷🔨
⏪🎥
✏️🎥
➡️🎥
⬅️📼⬅️🎞️
➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🍴🔨
📦🔨
✉️😀😀
📦⛏️
⏪🎥
➡️🎥👁️🎥
🦔🗃️
⏪🎥
✏️🎥
➡️🎥
💡⛏️
🎁⛏️
❓🔨
🐇😀😀😄😋
🏷️
⏪🎥
➡️🎥👁️🎥  
📤

➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🎷🔨
⏪🎥
✏️🎥
➡️🎥
⬅️📼⬅️🎞️
➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🍴🔨
📦🔨
✉️😀😀
📦⛏️
⏪🎥
➡️🎥👁️🎥
🦔🗃️
⏪🎥
✏️🎥
➡️🎥
💡⛏️
🎁⛏️
❓🔨
🐇😀😀😄😋
🏷️
⏪🎥
➡️🎥👁️🎥  
📤

➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🎷🔨
⏪🎥
✏️🎥
➡️🎥
⬅️📼⬅️🎞️
➡️📼👁️📼
📦🔨
➡️🎞️👁️🎞️
🍴🔨
📦🔨
✉️😀😀
📦⛏️
⏪🎥
➡️🎥👁️🎥
🦔🗃️
⏪🎥
✏️🎥
➡️🎥
💡⛏️
🎁⛏️
❓🔨
🐇😀😀😄😋
🏷️
⏪🎥
➡️🎥👁️🎥  
📤
```

Output
```
Your program has been run successfully!

The output was:

ractf{testing_flag}
The expected output was:

ractf{testingflag}
This was a match.
```

We've got the whole flag!
Running the code just 4 times is able to produce the whole flag since the jump offset is constant at 75, which means that after we execute the 1st block, we'll loop to the beginning.

Runnning the above code on the actual challenge works and gives us the real flag.
