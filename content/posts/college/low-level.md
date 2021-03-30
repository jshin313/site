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
