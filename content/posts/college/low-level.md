---
title: "Computer Systems and Low Level Programming"
publishdate: 2021-03-10
lastmod: 2021-03-29
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

Decimal value = $(-1)^{s} \cdot (1.0 + M) \cdot 2^{E-127}$  

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

### double: 64 bit (double precision)
* Sign (1 bit)
* Exponent (11 bits)
* Mantissa (52 bits)

Bias: 1023

* Provides Higher precision

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

## Assembly
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
