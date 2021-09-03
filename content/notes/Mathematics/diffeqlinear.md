---
title: "Differential Equations with Linear Algebra"
publishdate: 2021-08-30
lastmod: 2021-08-30
draft: false
toc: true
tags:
  - notes
  - college
  - math
  - linear algebra
  - differential equations
---

## Class Description
Textbook: Differential Equation and Linear Algebra by Stephen W. Goode Scott A. Annin

## 2.1: Matrix Definitions and Properties


* **m** x **n** matrix  
* 3 x 4 matrix in the example below
$$
A = \begin{bmatrix}
  a_{11} & a_{12} & a_{13} & a_{14} \\\\
  a_{21} & a_{22} & a_{23} & a_{24} \\\\
  a_{31} & a_{32} & a_{33} & a_{34} \\\\
\end{bmatrix}
$$

$$ A = [a_{ij}]$$

### Equality
Matrices $A$ and $B$ are equal if the following are true:
1. Same dimensions
2. $a_{ij} = b_{ij} \ \ \ \ \forall i, j \ \ \ 1 \le i \le m, \ \ 1 \le j \le n$

### Vectors
* **Row Vector**: A $1 \cross n$ matrix
$$
\overrightarrow{a}= \vb{a} = A = \begin{bmatrix}
   a_1 & a_2 & a_3 & a_4 \\\\
\end{bmatrix}
$$

* **Column Vector**: A $n \cross 1$ matrix  
$$
\overrightarrow{a} = \vb{a} = A = \begin{bmatrix}
   a_1 \\\\
   a_2 \\\\
   a_3 \\\\
   a_4 \\\\
\end{bmatrix}
$$

* The elements of a row or column vector are called the *components*
* Denoted via an arrow or in **bold**
* A list of row vectors arranged in a row will always consist of column vectors, and a list of vectors arranged in a column will consist of row vectors
  * Example
$$ \vb{a_1} = \begin{bmatrix} -1 \\\\ -7 \end{bmatrix}, \vb{a_2} = \begin{bmatrix} 0 \\\\ -5 \end{bmatrix}, \vb{a_3} = \begin{bmatrix} -2 \\\\ 4 \end{bmatrix}$$

$$ \begin{bmatrix} \vb{a_1} & \vb{a_2} & \vb{a_3} \end{bmatrix} = \begin{bmatrix} -1 & 0 & -2\\\\ -7 & -5 & 4\end{bmatrix}$$

### Transposition
* Interchange row vectors and column vectors
$$ a_{ij}^T = a_{ji}$$
* Example

$$ A = \begin{bmatrix} -1 & 0 & -2\\\\ -7 & -5 & 4\end{bmatrix}$$
$$ A^T = \begin{bmatrix} -1 & 7 \\\\ 0 & -5 \\\\ -2 & 4\end{bmatrix}$$

### Square Matrices
* **Square Matrix**: An $n\cross n $ matrix 
* **Main Diagonal**: $a_ii \ \ \, 1\le i \le n $
* **Trace**: $tr(A) = a_{11} + a_{22} + ... + a_{nn}$
* **Lower Triangular**: $a_{ij} = 0$ when $i < j$
$$ A = \begin{bmatrix} -5 & 0 & 0\\\\ 0 & 4 & 0 \\\\ 2 & -2 & -7 \end{bmatrix}$$
* **Upper Triangular**: $a_{ij} = 0$ when $i > j$
$$ A = \begin{bmatrix} 3 & 3 & 4\\\\ 0 & -5 & 1 \\\\ 0 & 0 & 9\end{bmatrix}$$
* **Diagonal Matrix**: $d_{ij} = 0$ whenever $i \neq j$
$$ D = \begin{bmatrix} 0 & 0 & 0\\\\ 0 & -2 & 0 \\\\ 0 & 0 & 9\end{bmatrix}$$
* **Symmetric**: $A^T = A$
$$ D = \begin{bmatrix} 0 & 2 & 3\\\\ 2 & 0 & 4 \\\\ 3 & 4 & 1\end{bmatrix}$$
* **Skew-Symmetric**: $A^T = -A$
$$ D = \begin{bmatrix} 0 & 2 & 3\\\\ -2 & 0 & 4 \\\\ -3 & -4 & 1\end{bmatrix}$$

## 2.2: Matrix Algebra

### Matrix Addition
* $A+B = [a_{ij} + b_{ij}]$

#### Properties
1. $A + B = B + A$  (Commutative)
2. $A + (B + C) = (A + B) + C$ (Associative)

### Scalar Multiplication
* **Scalar**: Real or complex number
* **Scalar Multiplication**: If $s$ is a scalar, then $sA = [sa_{ij}]$

#### Properties 
* (if $s$ and $t$ are scalars while $A$ and $B$ are matrices)
1. $1A = A$
2. $s(A+B) = sA + sB$
3. $(s + t)A = sA + tA$
4. $s(tA) = (st)A = (ts)A = t(sA)$

### Subtraction
$$ A-B = A+(-1)B $$

### Zero Matrix
* Matrix full of all zeros $0_{m\cross n}$
* Denoted with just a $0$ if dimensions are clear

#### Properties
1. $A + 0 = A$
2. $A - A= 0$
3. $0A = 0$

### Multiplication
* If $A = [a_{ij}]$ is an $m \cross n$ matrix, $B = [b_{ij}]$ is an $n \cross p$ matrix, and $C = AB$, then
$$ c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj} \ \ \ \ \ \ 1 \le i \le m, \ \ \ 1 \le j \le p$$

#### Properties
1. $A(BC) = (AB)C$
2. $A(B + C) = AB + AC$
3. $(A + B)C = AC + BC$
4. $AB \neq BA$

* Proof
$$ (A+B)C_{ij} = \sum_{k=1}^{n} (a_{ik} + b_{ik}) c_{kj} = \sum_{k=1}^{n} a_{ik} c_{kj} + \sum_{k=1}^{n} b_{ik} c_{kj} $$
$$ = (AC)_{ij} + (BC)_{ij} $$
$$ = (AC + BC)_{ij}$$

Thus $(A+B)C = AC +BC$

### Identity Matrix
* $I_n$: Main diagonals are just 1's and zeros everywhere else
* Example
$$ I_3 = \begin{bmatrix} 1 & 0 & 0\\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\end{bmatrix}$$

#### Kronecker Delta
* A function that gives the values for the identity matrix
$$ 
\delta_{ij} = 
\begin{cases} 
      1 & i = j \\\\
      0 & i \neq j
   \end{cases}
$$

#### Properties of Identity Matrix
1. $A_{m\cross n} I_n = A_{m \cross n}$
2. $I_m A_{m \cross p} = A_{m \cross p}$ 

* Proof: Use $\delta_{ij}$ in proof and definition of multiplication

### Properties of Transpose
1. $(A^T)^T = A$
2. $(A + C)^T = A^T + C^T$
3. $(AB)^T = B^T A^T$

* Proof
$$ (AB)^T_{ij} = (AB)_{ji}$$
$$ = \sum_{k=1}^n a_{jk} b_{ki}$$
$$ = \sum_{k=1}^{n} b_{ki} a_{jk} = \sum_{k=1}^{n} b_{ik}^T a^T_{kj}$$
$$ = (B^T A^T)_{ij}$$

### Properties of Triangular Matrices
* The product of two lower triangular matrices is a lower triangular matrix (and the same applies to upper triangular matrices)

### The Algebra and Calculus of Matrix Functions
* Matrices can have functions as their elements instead of just scalars
* If $A$ and $B$ are matrices:
1. $\frac{dA}{dt} = \left[\frac{da_{ij}(t)}{dt}\right]$
2. $\frac{d}{dt}(AB) = A\frac{dB}{dt} + \frac{dA}{dt}B$ 
3. $\int_a^b A(t) dt = \left[\int_a^b a_{ij}(t) dt\right]$

## 2.3: Systems of Linear Equations
System of Linear Equations

$$ a_{11}x_1 + a_{12} x_2 + ... + a_{1n}x_n = b_1$$
$$ a_{21}x_1 + a_{22} x_2 + ... + a_{2n}x_n = b_2$$
$$ \vdots$$
$$ a_{m1}x_1 + a_{m2} x_2 + ... + a_{mn}x_n = b_m$$

* **System Coefficients**: $a_{ij}$
* **System Constants**: $b_j$
  * Scalars
  * Correspond to $x_1, x_2, ..., x_n$ (unknowns)
* **Homogeneous**: If $b_i = 0 \forall i$
* **Solution**: Ordered $n$-tuple with values for the unknowns ($x_1, x_2, x_3, ..., x_n$)
* **Solution Set**: Set of all solutions to the system
* If there are two equations with two unknowns, we have two lines, so there can only be the following solutions:
  1. No solution
  2. One solution (one intersection point)
  3. Infinitely many solutions (the lines overlap or are the same)
* Similarly, with three equations and three unknowns, we have three planes, so there can only be the following solutions
  1. No solution
  2. One solution (Three planes intersect at one point)
  3. Infinitely Many Solutions (the three planes intersect at one line)
  4. Infinitely Many Solutions (the three planes are the same)
* **All** systems can only have one of the three above solution possibilities (no solution, one solution, or infinitely many solutions)
* **Consistent**: At least one solution to system
* **Inconsistent**: No solution to a system

* **Matrix of Coefficients**
$$ A = \begin{bmatrix} a_{11} & a_{12} & ... & a_{1n} \\\\ a_{21} & a_{22} & ... & a_{2n} \\\\ \vdots \\\\ a_{m1} & a_{m2} & ... & a_{mn}\end{bmatrix}$$
* **Augmented Matrix**: 
$$ A = \begin{bmatrix} a_{11} & a_{12} & ... & a_{1n} & b_1 \\\\ a_{21} & a_{22} & ... & a_{2n} & b_2 \\\\ \vdots \\\\ a_{m1} & a_{m2} & ... & a_{mn} & b_m\end{bmatrix}$$

### Vector Formulation
If we have the following:
$$ a_{11}x_1 + a_{12} x_2 + ... + a_{1n}x_n = b_1$$
$$ a_{21}x_1 + a_{22} x_2 + ... + a_{2n}x_n = b_2$$
$$ \vdots$$
$$ a_{m1}x_1 + a_{m2} x_2 + ... + a_{mn}x_n = b_m$$

The vector formulation:
$$ \begin{bmatrix} a_{11} & a_{12} & ... & a_{1n} \\\\ a_{21} & a_{22} & ... & a_{2n} \\\\ \vdots \\\\ a_{m1} & a_{m2} & ... & a_{mn}\end{bmatrix} \begin{bmatrix} x_1 \\\\ x_2 \\\\ \vdots \\\\ x_n \end{bmatrix} = \begin{bmatrix}b_1 \\\\ b_2 \\\\ \vdots \\\\ b_m \end{bmatrix}$$
$$ \vb{x} =  \begin{bmatrix} x_1 \\\\ x_2 \\\\ \vdots \\\\ x_n \end{bmatrix}, \ \ \ \ \vb{b} = \begin{bmatrix}b_1 \\\\ b_2 \\\\ \vdots \\\\ b_m \end{bmatrix}$$
$$ A\vb{x} = \vb{b}$$

* **Right-Hand Side Vector**: $\vb{b}$
* **Vector of Unknowns**: $\vb{x}$

### Notation
* The set of all ordered $n$-tuples of real numbers $(c_1, c_2, c_3, c_4, ..., c_n)$ is denoted with $\mathbb{R}^n$
* For scalar values that are reals:
$$ (x_1, x_2, ..., x_n) \Longleftrightarrow \begin{bmatrix}x_1 & x_2 & ... & x_n\end{bmatrix} \Longleftrightarrow \begin{bmatrix}x_1 \\\\ x_2 \\\\ \vdots \\\\ x_n \end{bmatrix}$$
* Tuples, row vectors, and column vectors are basically interchangeable in this context

### Differential Equations
$$ \frac{d\vb{x}}{dt} = A(t) \vb{x}(t) + \vb{b}(t)$$

## 2.4: Row-Echelon Matrices and Elementary Row Operations
* Method for solving a system by reducing a system of equations to a new system with the same solution set, but easier to solve

### Row-Echelon Matrix
Let A be a $m \cross n$ matrix with the following conditions
1. All zero rows of A (if any) are grouped at the bottom
2. The leftmost non-zero entry of every non-zero row is 1 (called the leading 1 or pivotal 1)
3. The leading 1 of a non-zero row below the first row is to the right of the leading 1 in the row above it

$$ 
\begin{bmatrix}
0 & 1 & ... \\\\
0 & 0 & 0 & 1 & ... \\\\
0 & 0 & 0 & 0 & 1 & ... \\\\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & ... \\\\
0 & 0 & 0 & 0 & 0 & ... & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & ... & 0 & 0 & 0
\end{bmatrix}
$$

* Values after the leading 1 can be any value
* Pivotal Columns are columns where there is a leading 1

### Elementary Row Operations
1. Permute row $i$ and $j$
2. Multiply row $i$ by a non-zero scalar $k$
3. Add the multiple $kR_j$ of row $j$ to $R_i, \ \ \ \ i \neq j, \ \ k \in \mathbb{R}$

* $A \sim B$ denotes that $B$ was obtained using one of the above operations
* The elementary row operations are reversible
