---
title: "Differential Equations with Linear Algebra"
publishdate: 2021-08-30
lastmod: 2021-10-09
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
Textbook: Differential Equation and Linear Algebra by Stephen W. Goode and Scott A. Annin

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
* Denoted via an arrow or in **bold**: $\vb{v}$ or $\overrightarrow{v}$
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

### Row-Echelon Matrix (REF)
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

### Reduced Row Echelon Form (RREF)
* Same as REF but with only 0's above every leading 1

### Rank
* Rank(A) = number of pivotal columns = number of leading 1's = number of non zero rows in REF form
* Every row equivalent REF has the same rank
* Every RREF of a matrix is the same, but not all row equivalent REF of a matrix are the same

## 2.5: Gaussian Elimination
* **Gaussian Elimination**: To solve a system, use elementary row operations to convert a matrix to REF. Convert matrix back into corresponding equations and solve.
* **Gauss-Jordan Elimination**: Convert to RREF and solve.

* Always either no solution, infinite solutions, or one solution
* If there is a leading 1 in the last row, there are no solutions since the system is **inconsistent**

* **Homogeneous**: $\overrightarrow{b} = 0$ Always has one solution or more.

* **Free variables**: Correspond to a non-pivotal column, means there are infinite solutions to system
* **Non-Free variable**: Correspond to a pivotal column

### Theorem 2.5.9
Let $A$ is a coefficient $m \cross n$ matrix. $A^\\#$ is the augmented matrix
1. If $rank(A) < rank(A^\\#)$, then the system is inconsistent
2. If $rank(A) = rank(A^\\#)$, then the system is consistent 
  * $rank(A) = n$ if and only if there is only one solution
  * $rank(A)  < n $ if and only if there is an infinite amount of solutions (free variables exist)

### Corollary 2.5.11
For a **homogeneous system**, if $m < n$, then there is an **infinite** amount of solutions.

#### Proof
We know $rank(A) = rank(A^\\#)$ since it's a homogeneous system.  
We also know $rank(A) \le m$ for any system. If $m < n$, then  $rank(A) < n$ by transitivity.  
By [Theorem 2.5.9](#theorem-259), the system has an infinite amount of solutions

#### Remark
The inverse is not true. There can still be an infinite amount of solutions if $m \ge n$ for a homogeneous system

## 2.6: The Inverse of a Square Matrix
When $A$ and $B$ are both $n \cross n$ matrices:
$$ AB = I_n \land BA = I_n$$
this chapter is about finding what $B$ is and if $B$ even exists.

Potential application of $B$: Solving a system $A\overrightarrow x= \overrightarrow b$
$$ A\overrightarrow x= \overrightarrow b$$
$$ (BA)\overrightarrow x= \overrightarrow Bb$$
$$ \overrightarrow x = B\overrightarrow b$$

We can solve for $\overrightarrow{x}$ simply by multiplying $B$ and $\overrightarrow{b}$. However, in practice this is slow, so it isn't really used much.

### Theorem 2.6.1
**Theorem**: There is only one matrix $B$ for a corresponding $A$.

**Proof:**
$$ AB = BA = I_n$$
$$ AC = CA = I_n$$
$$ C = CI_n = C(AB) $$
$$ C = (CA)B = I_n B = B $$
$$ C = B $$
(Uniqueness proof). See [these notes](/notes/mathematics/basicconcepts/#uniqueness-1)

$$ AA^{-1} = A^{-1}A = I_n $$
If $A^{-1}$ exists, then it's called the **inverse** and $A$ is called **invertible**  

* **Nonsingular Matrix**: Sometimes called **invertible**
* **Singular Matrix**: Sometimes called **non-invertible** or **degenerate**

Remark: $A^{-1}$ does not mean $\frac{1}{A}$

### Theorem 2.6.5
**Theorem**: If $A^{-1}$ exists, then the $n \cross n$ system of linear equations $A \overrightarrow{x} = \overrightarrow{b}$ has a **unique** solution $\vb{x} = A^{-1} \vb{b} \ \ \forall b \in \mathbb{R}^n$  

**Proof**: Verify that $\vb{x} = A^{-1} \vb{b}$ is a solution with direct substitution. To show that $x$ is unique, assume we have solutions $x_1$, $x_2$, $x_3$ and so on. So we have $A\vb{x_1} = A\vb{x_2} = A\vb{x_3}= \vb{b}$. But multiplying by $A^{-1}$ reveals the following
$$ \vb{x_1} = \vb{x_2} = \vb{x_3} = \vb{x_4} = A^{-1} \vb{b}$$
Thus there is only one solution since we know $A^{-1}$ is also unique.

### Theorem 2.6.6
* This theorem shows when a matrix is invertible and how to efficiently compute the inverse  

**Theorem**: An $n \cross n$ matrix $A$ is invertible if and only if $rank(A) = n$  

**Proof**:   
Let's prove $A^{-1} \text{ exists} \implies rank(A) = n$ first. If $A^{-1}$, then by [Theorem 2.6.5](#theorem-265), any $n\cross n$ linear system has a unique solution. Thus by Theorem [2.5.9](#theorem-259), we know that $rank(A) = n$  

Now we prove the converse:
$$rank(A) = n \implies A \text{ is invertible}$$
We must show that there exists an $n \cross n $ matrix $X$ such that the following is true:
$$ AX = I_n = XA$$

Given $rank(A)=n$, each column of A is pivotal and every row on REF of $A$ is non-zero. Thus the RREF of $A = I_n$ since $A$ has $rank(A)=n$. $A\vb{x} = \vb{b}$ has one solution as well since $rank(A) =n$. Since there is only one solution, $X$, for $A X = I_n$. We can then use the Gauss-Jordan method to solve for $X$.  

Now we show that $XA = I_n$ as well:
$$ I_n \cdot A = A$$
$$ (AX) A = A$$
$$ (AXA) - A = 0_n$$
$$ A(XA - I_n) = 0_n$$
$A(XA - I_n)$ doesn't necessarily imply $XA-I_n = 0$ for all matrices, since two non zero matrices can be multiplied to yield 0. But in this case $XA-I_n = 0$ due to the following reasons:

Let $y_i$ be the columns of the $n \cross n$ matrix $XA - I_n$.
$$ A\vb{y_i} = \vb{0}, \ \ \ i = 1, 2, 3, ..., n$$
$rank(A) = n$, so each system in the above has a unique solution. So since the system is homogeneous, each unique solution, $y_i$, must be $0$ (the trivial solution). Thus $XA - I_n = 0$

$$ XA = I_n$$

### Corollary 2.6.7
**Corollary**: If $A\vb{x} = \vb{b}$ has a unique solution, then $A^{-1}$ exists

### Gauss-Jordan Technique
* Augment the matrix $A$ with the ith column vector of the identity matrix to get the ith column of $A^{-1}$. To get the whole identity matrix, just augment $A$ with the entire identity matrix and reduce to RREF. The result will be the identity matrix augmented with $A^{-1}$.

$$ (A | I_n) \sim ... \sim (I_n | Y)$$
$$ AY = I_n$$
$$ Y = A^{-1}$$

### Properties of the Inverse
If both $A$ and $B$ are invertible

0. $I_n^{-1} = I_n$
1. $A^{-1}$ is invertible and $(A^{-1})^{-1} = A$
2. $AB$ is invertible and $(AB)^{-1} = B^{-1}A^{-1}$ 
3. $A^T$ is invertible and $(A^T)^{-1} = (A^{-1})^T$

#### Corollary
$$ (A_1 A_2... A_k)^{-1} = A_{k}^{-1} A_{k-1}^{-1} ... A^{-1}_1$$

### Theorem 2.6.12
**Theorem**: Let $A$ and $B$ be $n\cross n$ matrices. If $AB = I_n$, then both $A$ and $B$ are invertible and $B = A^{-1}$

**Proof**
$$ A(B\vb{b}) = I_n \vb{b} = \vb{b}$$
For *every* $b$, $A \vb{x} = \vb{b}$ has the solution $\vb{x} = B\vb{b}$, which implies $rank(A) = n$.

## 3.4: Summary of Determinants

### Formulas for Determinants
1. If $A = \begin{bmatrix} a_{11} \end{bmatrix}$, then $det(A) = a_{11}$
2. If $A = \begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \end{bmatrix}$, then $det(A) = a_{11}a_{22} - a_{12}a_{21}$
3. $det(A) = a_{i1}C_{i1} + a_{i2}C_{i2} + ... + a_{in}C_{in}$

    $det(A) = a_{j1}C_{j1} + a_{j2}C_{j2} + ... + a_{jn}C_{jn}$

$$C_{ij} = (-1)^{i + j} M_{ij}$$
$M_{ij}$ is the determinant of the matrix obtained by deleting the $i$th row and $j$th column of A.

#### Example
$$A = \begin{bmatrix} 3 & 5 \\\\ 2 & 7 \end{bmatrix}$$
$$M = \begin{bmatrix} 7 & 2 \\\\ 5 & 3 \end{bmatrix}$$
$$C = \begin{bmatrix} 7 & -2 \\\\ -5 & 3 \end{bmatrix}$$

### Properties of Determinants
Let $A$ and $B$ both be $n \cross n$ matrices
1. IF $B$ is obtained by permuting two rows (or columns) of $A$, then $$ det(B) = -det(A)$$
2. If $B$ is obtained by multiplying any row (or column) of $A$ by a scalar $k$, then $$ det(B) = k det(A)$$
3. If $B$ is obtained by adding a multiple of any row (or column) of $A$ to another row (or column) of $A$, then 
$$ det(B) = det(A)$$
4. For any scalar $k$
$$ det(kA) = k^n det(A)$$
5. $det(A^T) = det(A)$
6. Let $a_1, a_2, \ldots,a_n$ denote the row vectors of $A$. Let $B = \[a_1, a_2, \ldots b_i \ldots, a_n\] ^T $ and $C = \[a_1, a_2, \ldots c_i \ldots a_n\] ^T $. If the $i$th row vector of $A$ is the sum of two vectors, $a_i = b_i + c_i$, then $$ det(A) = det(B) + det(C) $$
7. If $A$ has a row (or column) of zeroes, then $det(A)=0$
8. If two rows (or columns) or $A$ are scalar multiples of one another, then $det(A)=0$
9. $det(AB) = det(A) det(B)$
10. If $A$ is invertible, then $det(A) \neq 0$ and $det(A^{-1}) = \frac{1}{det(A)}$

### Basic Theoretical Results
1. The volume of a parallelepiped is $|det(A)|$, where $A$ is a matrix with the 3 vectors of the parallelepiped

### Theorem 3.2.5
* An $n \cross n$ matrix is invertible if and only if $det(A) \neq 0$
* An $n \cross n$ linear system $A\vb{x} = \vb{b}$ has a unique solution if and only if $det(A) \neq 0$


### Corollary 3.2.6
An $n \cross n$ **homogeneous** linear system $A \vb{x} = \vb{0}$ has an infinite number of solutions if and only if $det(A) = 0$

### Adjoint Method
$$A^{-1} = \frac{1}{det(a)} adj(A)$$
The $adj(A)$ is the transpose of the cofactor of $A$

### Cramer's Rule
If $det(A) \neq 0$, then the unique solution to $A\vb{x} = \vb{b}$ is $\vb{x} = (x_1, x_2, x_3, \ldots, x_n)$, where $x_i = \frac{det(B_i)}{det(A)}$ and $B_i$ is obtained by replacing the $i$th column vector of $A$ with $\vb{b}$

## 4.2: Definition of a Vector Space
* **Vector Space**: Nonempty set $V$ with two operators 
  * **Addition**
  * **Multiplication By Scalars**

### Axioms
0. The vector space is closed under both addition and multiplication by scalars
$$ \overrightarrow{v} \in V, \overrightarrow{w} \in V, \ \ \overrightarrow{v} + \overrightarrow{w} \in V$$
$$ \overrightarrow{k} \in \mathbb{R}, \overrightarrow{v} \in V, \ \ k \cdot \overrightarrow{v} \in V$$
1. Commutative $$ \overrightarrow{v} \in V, \overrightarrow{w} \in V, \ \ \overrightarrow{v} + \overrightarrow{w} =\overrightarrow{w} + \overrightarrow{v}$$
2. Associative $$ \overrightarrow{v} \in V, \overrightarrow{w} \in V,\overrightarrow{u} \in V, \ \ (\overrightarrow{v} + \overrightarrow{w}) + \overrightarrow{u} =\overrightarrow{w} + (\overrightarrow{v} + \overrightarrow{u})$$
3. $\exists \overrightarrow{0} \in V, \ \ u + \overrightarrow{0} + \overrightarrow{u} = \overrightarrow{u} + \overrightarrow{0} = \overrightarrow{u} \ \ \forall u \in V$
4. $\forall v \in V \ \ \exists - \overrightarrow{v} \ \  s. t. \ \ -\overrightarrow{v} + \overrightarrow{v} = \overrightarrow{0}$
5. $1 \cdot \overrightarrow{v} = \overrightarrow{v} \ \ \forall v \in V $
6. $r \cdot (s \cdot \overrightarrow{v}) = (r \cdot s) \overrightarrow{v}$
7. $(r+s) \cdot \overrightarrow{v} = r \overrightarrow{v} + s\overrightarrow{v}$
8. $r \cdot (\overrightarrow{v} + \overrightarrow{w}) = r \overrightarrow{v} + r\overrightarrow{w} $

### Theorem
Let $V$ be a vectorspace
1. The zero vector is unique in $V$
2. $r \overrightarrow{0} = \overrightarrow{0} $
3. $0\overrightarrow{v} = \overrightarrow{0}$
4. Every $\overrightarrow{v} \in V$ has a unique additive inverse, $-\overrightarrow{v}$
5. If $r \overrightarrow{v} = \overrightarrow{0}$, then $r = 0 \land \overrightarrow{v} = \overrightarrow{0}$

### Function Example

### Matrix Example

### Polynomial Example

## 4.3: Subspaces
**Subspace**: Let $V$ be a vector space. A non-empty subset $S \subset V$ is called a **subspace** if $S$ is also a vector space (closed under addition and multiplication by scalars).

### Proposition
$$ \text{S is a subspace} \iff \text{S is closed under both addition and multiplication by scalars}$$

### Observation
If $S \subset V$ and $S$ is a subspace of $V$, then $\overrightarrow{0} \in S$

### Examples

### Nullspace
The solution set of a homogeneous system is the **nullspace**

## 4.4: Spanning Sets
Let $\\{\overrightarrow{v_1}, \overrightarrow{v_2},\overrightarrow{v_3},\overrightarrow{v_4}, ..., \overrightarrow{v_k}\\} \subset V$. We say $\overrightarrow{v_1}, \overrightarrow{v_2}, ...\overrightarrow{v_k}$ **spans** $V$ if every vector in $V$ is a linear combination of $\overrightarrow{v_1}, \overrightarrow{v_2},\overrightarrow{v_3},\overrightarrow{v_4}, ..., \overrightarrow{v_k}$

$$ c_1 \cdot \overrightarrow{v_1} + c_2 \cdot \overrightarrow{v_2} + c_3 \cdot \overrightarrow{v_3} + c_4 \cdot \overrightarrow{v_4}+ ...+ c_k \cdot \overrightarrow{v_k} = \overrightarrow{b}, \ \ \forall \overrightarrow{b} \in V$$
where $\overrightarrow{b}$ represents a vector in $V$

### Definition
Given $\overrightarrow{v_1}, \overrightarrow{v_2},\overrightarrow{v_3},\overrightarrow{v_4}, ..., \overrightarrow{v_k}$, the set of all linear combinations is the **span** of $\\{ \overrightarrow{v_1}, \overrightarrow{v_2},\overrightarrow{v_3},\overrightarrow{v_4}, ..., \overrightarrow{v_k}\\}$

$$ span(\emptyset) = \\{\overrightarrow{0}\\}$$
$$ span(\\{\overrightarrow{v}\\}) = \\{r \overrightarrow{v} \ | \ r \in \mathbb{R}\\}$$

### Observation
$$ \overrightarrow{v_1}, \overrightarrow{v_2},...\overrightarrow{v_k} \in S, \ \ S \subset V$$
$span(\\{\overrightarrow{v_1}, \overrightarrow{v_2},...\overrightarrow{v_k}\\}) $ is a subspace of $V$

### Terminology
We can also say $v_1, v_2, v_3,...v_k$ **spans** a subspace, $W$, if $W = span(\\{v_1, v_2, ..., v_k\\})$

We say $\\{v_1, v_2, ..., v_k\\}$ is a **spanning set** of $W$

### Example

## 4.5: Linear Dependence and Independence

### Minimal Spanning Set
* **Minimal Spanning Set**: The smallest set of vectors that spans a vector space

* A minimal spanning set of $V = \mathbb{R}^2$ is $\\{(1,0), (0,1)\\}$
$$ span(\\{(1,0),(0,1)\\}) = span(\\{(1,0),(0,1), (1, 2)\\}) = \mathbb{R}^2$$

#### Theorem 4.5.2
If you have a spanning set, you can remove a vector from a spanning set if it is a linear combination of the other vectors and still get a spanning set.

### Linear Dependence/Independence
Let $\\{v_1, v_2, ..., v_k\\}$ be a non-empty subset in $V$. $\\{v_1, v_2, ..., v_k\\}$ is **linearly dependent** if $\exists (c_1, c_2, ... c_k) \in \mathbb{R}^k$ and at least one $c_j \neq 0$ and $c_1 \overrightarrow{v_1} + c_2 \overrightarrow{v_2} ... + c_k \overrightarrow{v_k} = \overrightarrow{0}$ 

$\\{v_1, v_2, ..., v_k\\}$ is **linearly independent** if $c_1 \overrightarrow{v_1} + c_2 \overrightarrow{v_2} ... + c_k \overrightarrow{v_k} = \overrightarrow{0} \implies c_1 = 0 = c_2 = c_k $

### Example

### Theorem 4.5.6
A set of vectors (with at least two vectors) is linearly dependent $\iff$ there is at least one vector that is a linear combination of the other vectors

### Proposition 4.5.8
1. Any set of vectors with the zero vector is linearly dependent
2. Any set of **two** vectors is linearly dependent if and only if the vectors are proportional

### Corollary 4.5.14
Any nonempty, finite set of linearly dependent vectors contains a subset of linearly independent with the same linear span

#### Proof
By [Theorem 4.5.6](#theorem-456), there is a vector that is a linear combination of the other vectors. If we delete that, we still have same span. If the resulting subset is linearly independent, then we're done. If the resulting subset is linearly dependent, then we can repeat the same process of removing the vector that is a linear combination.

### Corollary 4.5.17
For a set of vectors $v_1, v_2, v_3, ..., v_k$ where $v_i \in \mathbb{R}^n$, and $A = [v_1, v_2, v_3, ..., v_k]$ with A having dimensions $n \cross k$
1. If $k > n$, then the vectors are linearly dependent (since there is an infinite number of solutions due to free variables [Corollary 2.5.11](#corollary-2511)) 
2. If $k = n$, then the vectors are linearly dependent if and only if $det(A) = 0$ ([Corollary 3.2.6](#corollary-326))
3. If $k < n$, nothing can be concluded

### Wronskian
Let $f_1, f_2, ... f_k \in C^{k-1}(I)$ be functions that are differentiable up to $k -1$.
$$ W\[f_1, f_2, ..., f_k\](x) = \begin{vmatrix}
f_1 & f_2 & f_3 & \cdots & f_k \\\\
f'_1 & f'_2 & f'_3 & \cdots & f'_k \\\\
\vdots & \vdots & \vdots & \ddots &\vdots \\\\
f_1^{(k-1)} & f_2^{(k-1)} & f_3^{(k-2)} & \cdots & f_k^{(k-1)} \\ \\
\end{vmatrix}$$

Order matters 
$$ W\[f_1, f_2, f_3, ..., f_k\](x) = - W\[f_2, f_1, f_3, ..., f_k\](x)$$

### Theorem 4.5.23
If $W\[f_1, f_2, f_3, ..., f_k\](x) \neq 0$ for some $x_0$ on $I$, then $f_1, f_2, f_3, ..., f_k$ is linearly independent on $I$

#### Proof
Suppose the following, for all $x$ in $I$
$$c_1 f_1 (x) + c_2 f_2 (x) + · · · + c_k f_k (x) = 0$$

If we differentiate, we get the following:
$$c_1f_1 + c_2 f_2 + c_3 f_3 + \cdots + c_k f_k $$
$$ c_1 f'_1 + c_2 f'_2 + c_3 f'_3 + \cdots + c_k f'_k$$
$$ \vdots $$
$$ c_1 f_1^{(k-1)} + c_2 f_2^{(k-1)} + c_3 f_3^{(k-2)} + \cdots + c_k f_k^{(k-1)} $$

This is a system, and if we get the determinant (Wronskin) to be nonzero, then there is only one solution (trivial) by [Theorem 3.2.5](#theorem-325)

#### Remarks
* If the Wronskian is zero, we don't know if the functions are linearly dependent or independent
* The Wronskian only needs to be nonzero at one point for us to conclude that the functions are independent


## 4.6: Bases and Dimension

### Definition
A set $\\{v_1, v_2, ..., v_k\\}$ in a vector space $V$ is a basis of $V$ if 
1. $\\{v_1, v_2, ..., v_k\\}$ is linearly independent
2. $span\\{v_1, v_2, ..., v_k\\} = V$

A vector space is called **finite dimensional** if it admits a **finite basis**. Otherwise, $V$ is **infinite dimensional**.

#### Note
All minimal spanning sets form a basis and all bases are minimal spanning sets


#### Example
$\mathbb{R}^n, M_{k\cross n}(\mathbb{R}), P_n(\mathbb{R})$ are all finite dimensional  

#### Example
$P(\mathbb{R}) \subset C^{(k)}(\mathbb{R}) \subset F(\mathbb{R})$ are all infinite dimensional vector spaces  

#### Example
$$ \mathbb{R}^{n} \ \ \ \ \ \vb{e_1} = \begin{bmatrix}
   1 \\\\
   0 \\\\
   0 \\\\
   0 \\\\
   \vdots \\\\
   0 \\\\
\end{bmatrix},
\vb{e_2} = \begin{bmatrix}
   0 \\\\
   1 \\\\
   0 \\\\
   0 \\\\
   \vdots \\\\
   0 \\\\
\end{bmatrix}, \cdots,
\vb{e_n} = \begin{bmatrix}
   0 \\\\
   0 \\\\
   0 \\\\
   0 \\\\
   \vdots \\\\
   1 \\\\
\end{bmatrix}
$$
$\\{\vb{e_1}, \vb{e_2}, \vb{e_3} ..., \vb{e_n}\\} $ is the **standard basis** for $\mathbb{R}^n$

**Standard Basis**: A set of vectors for a vector space where each vector has has zero in all of its components except one

#### Example
$$ M_{2}(\mathbb{R}) \ \ \ \ \ \vb{E_{11}} = \begin{bmatrix}
   1 & 0\\\\
   0 & 0\\\\
\end{bmatrix},
\vb{E_{12}} = \begin{bmatrix}
   0 & 1\\\\
   0 & 0\\\\
\end{bmatrix},
\vb{E_{21}} = \begin{bmatrix}
   0 & 0 \\\\
   1 & 0 \\\\
\end{bmatrix},
\vb{E_{22}} = \begin{bmatrix}
   0 & 0 \\\\
   0 & 1 \\\\
\end{bmatrix}
$$
$$ a \begin{bmatrix}
   1 & 0\\\\
   0 & 0\\\\
\end{bmatrix} + 
b \begin{bmatrix}
   0 & 1\\\\
   0 & 0\\\\
\end{bmatrix} + 
c \begin{bmatrix}
   0 & 0 \\\\
   1 & 0 \\\\
\end{bmatrix} + 
d \begin{bmatrix}
   0 & 0 \\\\
   0 & 1 \\\\
\end{bmatrix}
= \begin{bmatrix}
   0 & 0 \\\\
   0 & 0 \\\\
\end{bmatrix}
$$
$$ \implies a= b = c = d = 0$$

$\\{\vb{E_{11}}, \vb{E_{12}}, \vb{E_{21}}, \vb{E_{22}}\\}$ is the *standard basis* for $M_2(\mathbb{R})$

#### Example
$\\{1, x, x^2, x^3, ..., x^n\\}$ is the standard basis for $P_n(\mathbb{R})$

### Observation
If $\\{\vb{v_1}, \vb{v_2}, ..., \vb{v_k}\\}$ is a basis of $V$, then every vector $\vb{v} \in V$ can be written **uniquely** as $\vb{v} = c_1 \vb{v_1} + c_2 \vb{v_2} + ... + c_k \vb{v_k}$

#### Proof
$$\vb{v} = c_1 \vb{v_1} + c_2 \vb{v_2} + ... + c_k \vb{v_k} = \vb{v} = d_1 \vb{v_1} + d_2 \vb{v_2} + ... + d_k \vb{v_k} $$
$$ (d_1 - c_1) \vb{v_1} + (d_2 - c_2) \vb{v_2} +... + (d_k - c_k) \vb{v_k} = 0 $$

Since the vectors are linearly independent:
$$ d_1 - c_1 = 0 = d_2 - c_2 = d_k - c_k$$
$$ \implies d_1 = c_1, d_2 = c_2, ..., d_k = c_k$$

### Theorem 4.6.4
If a vector space, $V$, has a basis with exactly $n$ vectors, then any set $\\{\vb{w_1}, \vb{w_2}, ..., \vb{w_k}\\}$ of $k > n$ vectors is linearly dependent in $V$

#### Proof
Let $\\{\vb{v_1}, \vb{v_2}, ..., \vb{v_n}\\}$ be a basis of vector space, $V$  

Let $\\{\vb{u_1}, \vb{u_2}, ..., \vb{u_m}\\}$ be a set of $m$ arbitrary vectors that is a subset of $V$ with $m > n$  

NTS $\\{\vb{u_1}, \vb{u_2}, ..., \vb{u_m}\\}$ is linearly dependent.  

Since $\\{\vb{v_1}, \vb{v_2}, ..., \vb{v_n}\\}$ is a basis, it is a spanning set, so every vector in $\\{\vb{u_1}, \vb{u_2}, ..., \vb{u_m}\\}$ can be written as a linear combination of $\vb{v_1}, \vb{v_2}, ..., \vb{v_n}$.

There must exist $a_{ij}$ such that
$$ \vb{u_1} = a_{11}\vb{v_1} + a_{21}\vb{v_2} ... + a_{n1} \vb{v_n}$$
$$ \vb{u_2} = a_{12}\vb{v_2} + a_{22}\vb{v_2} ... + a_{n2} \vb{v_n}$$
$$ \vdots$$
$$ \vb{u_m} = a_{1m}\vb{v_2} + a_{2m}\vb{v_2} ... + a_{nm} \vb{v_n}$$

NTS that $c_1 \vb{u_1} + c_2 \vb{u_2} + ... + c_m \vb{u_m} = \vb{0}$ to show that $\vb{u_1}, \vb{u_2}, ..., \vb{u_m}$ is linearly dependent.  

Combine the last two equations:
$$ c_1(a_{11}\vb{v_1} + a_{21}\vb{v_2} ... + a_{n1} \vb{v_n}) + c_2 (a_{12}\vb{v_2} + a_{22}\vb{v_2} ... + a_{n2} \vb{v_n}) + ... + c_m(a_{1m}\vb{v_2} + a_{2m}\vb{v_2} ... + a_{nm} \vb{v_n}) = \vb{0}$$

Rearrange:
$$ (a_{11}c_1 + a_{12}c_2 + ... a_{1m}c_m)\vb{v_1} + (a_{21}c_1 + a_{22}c_2 + ... a_{2m}c_m)\vb{v_1} + ... +(a_{n1}c_1 + a_{n2}c_2 + ... a_{nm}c_m)\vb{v_n} $$

We know $\vb{v_1}, \vb{v_2}, ..., \vb{v_n}$ is linearly independent, so the following is true:
$$ (a_{11}c_1 + a_{12}c_2 + ... a_{1m}c_m) = 0$$
$$ (a_{21}c_1 + a_{22}c_2 + ... a_{2m}c_m) = 0$$
$$ \vdots$$
$$ (a_{n1}c_1 + a_{n2}c_2 + ... a_{nm}c_m) = 0$$

This forms an $n\cross m$ matrix with $n < m$. So by [Corollary 2.5.11](#corollary-2511), there is an infinite amount of solutions, and the vectors $\vb{u_1}, \vb{u_2}, ... \vb{u_m}$ is linearly **dependent**.

### Corollary 4.6.5
All bases of a finite dimensional vector space have the same number of vectors

#### Proof
Let there be a basis with $m$ vectors and another basis with $n$ vectors.  
If $m > n$, then by [Theorem 4.6.4](#theorem-464), then one of the set of vectors is linearly dependent (not a basis). If $m < n$, then the other set of vectors is linearly dependent. Thus $m =n$ is the only way for both to be linearly independent.

### Observation
If $A$ is an invertible $n\cross n$ matrix, then the columns of $A$ form a basis of $\mathbb{R}^n$

#### Proof
NTS every $\vb{b} \in \mathbb{R}^n$ belongs to a span of the columns of $A$  

In other words, NTS $A\vb{x} = \vb{b}$ is consistent  
$A^{-1} \vb{b}$ is a solution of $A\vb{x} = \vb{b}$

Now NTS columns of $A$ are linearly independent. NTS $A\vb{x} = \vb{0}$ has only the trivial solution.
$$ A\vb{x} = \vb{0}$$
$$ A^{-1} A \vb{x} = A^{-1}\vb{0} = \vb{0}$$
$$ \implies \vb{c} = \vb{0}$$

### Definition
If $V$ is a finite dimensional vector space, then $dim(V) = \text{number of vectors in any basis of V}$  

Convention:
$$ dim(\\{\vb{0}\\}) = 0$$

#### Examples
$$ dim(\mathbb{R}^n) = n$$
$$ dim(P_n(\mathbb{R})) = n + 1$$
$$ dim(M_{n\cross k}) = nk $$

### Corollary 4.6.6
If $dim(V) = n$, then any spanning set of $V$ must have at least $n$ vectors

#### Proof
If the spanning set had less than $n$ vectors, there would be a basis with less than $n$ vectors, which contradicts [Corollary 4.6.5](#corollary-465)

### Theorem 4.6.10
If $dim(V) = n$, then any set of $n$ linear independent vectors in $V$ form a basis of $V$

#### Proof
Let $\vb{v}\in V$ and $\\{\vb{v}, \vb{v_1}, \vb{v_2}, ..., \vb{v_n}\\}$ be a linearly dependent set by [Theorem 4.6.4](#theorem-464).  
Then the following is true

$$ c_0 \vb{v} + c_1 \vb{v_1} + c_2 \vb{v_2} + ... + \vb{v_n} = \vb{0} $$

We know $c_0 \neq 0$ since we can use a proof by contradiction. We know $c_1 \vb{v_1} + c_2 \vb{v_2} + ... + c_n\vb{v_n} = \vb{0}$ is linearly independent, so if $c_0 = $, then $c_1 = 0 = c_2 = ... = c_n$, which is a contradiction.

$$ \vb{v} = \frac{1}{c_0} (c_1 \vb{v_1} + c_2 \vb{v_2} + ... + c_n \vb{v_n})$$

Every $\vb{v} \in V$ can be written as a linear combination of the $n$ linearly independent vectors in $V$, so they span $V$. Since the vectors span $V$ and are linearly independent, they also form a basis.


### Theorem 4.6.12
If $dim(V) = n$, then any spanning set with exactly $n$ vectors is also a basis of $V$

### Corollary 4.6.14
If $W$ is a subspace of $V$and $V$ is a finite dimensional vector space, then $dim(W) \le dim(V)$  
If $W$ is a subspace of $V$ and $dim(W) = dim(V)$, then $W=V$

## 6.6: Linear Transformations

## Appendix A: Review of Complex Numbers
* **Complex Number**: Has a **real** part and an **imaginary** part 
$$ z = a + ib$$
$$ Re(z) = a$$
$$ Im(z) = b$$

* **Conjugate**: If we have $z = a + ib$, then the conjugate is $\bar z = a - ib$
$$ \bar{\bar{z}} = z$$
$$ \bar{z} z = z \bar z = a^2 + b^2 $$
* **Modulus/Absolute Value**: $|z| = \sqrt{a^2 + b^2}$
$$ |z|^2 = a^2 + b^2 = z\bar z$$

### Complex Valued-Functions
Complex valued functions are of the following form:
$$ w(x) = u(x) + i v(x)$$

* **Euler's Formula**
Derivation involves using Maclaurin expansion for $e^x$
$$ e^{ib} = \cos{b} + i \sin{b}$$

$$ e^{(a+ib)x}= e^{ax} (\cos bx + i \sin bx)$$

$$ x^{a+bi} = e^{a+ib} \ln{x} $$
$$ x^r = e^{r \ln{x}}$$

### Differentiation of Complex-Valued Functions
$$ w'(x) = u'(x) + iv'(x)$$
$$ \dv{}{x}(e^{rx}) = re^{rx}$$
where $r$ is a complex number
$$ \dv{}{x}(x^r) = rx^{r-1}$$
where $r$ is a complex number

## 7.1: The Eigenvalue/Eigenvector Problem
* If $A$ is an $n\cross n$ matrix
$$ A\vec{v} = \lambda \vec{v}$$
The *nontrivial* solutions $\vec{v}$ are called **eigenvalues** of A. The corresponding non-zero vectors $\vec{v}$ are called eigenvectors of $A$

* A way to formulate this is by interpreting $A$ as a matrix of a linear transformation $T: \mathbb{C}^n \to \mathbb{C}^n$
$$ T(\vec{v}) = A\vec{v}$$
* Geometrically, the linear transformation leaves the direction of $\vec{v}$ unchanged, but stretches $\vec{v}$ by a factor of $\lambda$.

### Solution to the Problem
$I$ is the identity matrix
$$ (A-\lambda I)\vec{v} = \vec{0}$$
According to [Corollary 3.2.6](#corollary-326), nontrivial solutions exist only when
$$ det((A-\lambda I)\vec{v}) = 0$$

1. Find scalars $\lambda$ with $det(A-\lambda I) = 0$
2. If $\lambda_1, \lambda_2, ..., \lambda_k$ are the distinct eigenvalues obtained from above, then solve the $k$ systems of linear equations to find the eigenvectors corresponding to each eigenvalue
  * Solve by solving the system $(A - \lambda I) \vb{v} = 0$

## 7.2: General Results for Eigenvalues and Eigenvectors
$$ p(\lambda) = (-1)^n(x - \lambda_1)^{m_1} (x - \lambda_2)^{m_2} (x -\lambda_3)^{m_3} ... (x - \lambda_k)^{m_k}$$
$$ m_1 + m_2 + ... + m_k = n$$

### Definition
The **Eigenspace** $E_i$ is the set of all vectors $\vb{v}$ satisfying $A\vb{v} = \lambda_i \vb{v}$  

The **Eigenspace** contains the zero vector

### Theorem 7.2.3
1. For each $i$, $E_i$ is a subspace of $\mathbb{C}^n$
2. $1 \le dim(E_i) \le m_i$

* **Algebraic Multiplicity**: $m_i$
* **Geometric Multiplicity**: $dim(E_i)$

### Theorem 7.2.5
Let $\lambda_1, \lambda_2, ... \lambda_m$ be distinct eigenvalues corresponding to eigenvectors $\vb{v_1}, \vb{v_2}, ..., \vb{v_m}$

Eigenvectors corresponding to **distinct** eigenvalues are **linearly independent**

Note 1: By definition of linear independence $\vb{v_1}, \vb{v_2}, ..., \vb{v_m}$ are distinct. However, there can exist more eigenvectors of the same $A$ that are not linearly independent and correspond to non-distinct eigenvalues  

Note 2: It is impossible for (non)distinct linearly dependent eigenvectors to correspond to distinct eigenvalues  

Note 3: Eigenvectors corresponding to nondistinct eigenvectors can be either linearly independent or linearly dependent

#### Proof

Proof by induction  
Base Case: $\\{\vb{v_1}\\}$ is linearly independent  
Inductive hypothesis: Suppose $\\{\vb{v_1}, \vb{v_2}, ..., \vb{v_k}\\}$ is linearly independent  

Need to show (NTS): $\\{\vb{v_1}, \vb{v_2}, ..., \vb{v_k}, \vb{v_{k+1}}\\}$ is also linearly independent

### Corollary 7.2.6
Let $E_1, E_2, .., E_k$ be eigenspaces of the $n\cross n$ matrix $A$
. In each eigenspace, choose a set of linearly independent eigenvectors. Then union of linearly independent sets is also linearly independent.

### Proof
Proof by contradiction. Assume the union of linearly independent sets is linearly dependent.
$$ c_1 \vb{v_1} + c_2 \vb{v_2}, ..., c_k\vb{v_k} = 0$$
$$= \vb{w_1} + \vb{w_2} + ... + \vb{w_k} = 0$$

Linearly dependence between $w_i$ implies there is a $w_j \neq 0$. But since each set is linearly independent, $w_j = 0$ for all $j$. This is a contradiction.

### Definition
An $n\cross n$ matrix $A$ with $n$ linearly independent eigenvectors is **nondefective**  

Any $n$ linearly independent eigenvectors of $A$ form an **eigenbasis** of $A$  

$A$ is **defective** if $A$ has less than $n$ linearly independent eigenvectors  

Note: $A$ cannot have more than $n$ linearly independent eigenvectors, but $A$ can still have more than $n$ eigenvectors

### Corollary 7.2.10
If an $n\cross n$ has a $n$ **distinct** eigenvalues, then it is nondefective.

Note: if $A$ does *not* have $n$ distinct eigenvalues, it may still be nondefective

### Proof
Use [Theorem 7.2.5](#theorem-725)

### Theorem 7.2.11
For an $n\cross n$ matrix $A$

$$A \text{ is nondefective} \iff (\forall i) (dim[E_i] = m_i) $$

or 

$$ m_1 + m_2 + ... m_k = n$$

## 7.3: Diagonalization

### Definition
Let $A$ and $B$ be $n \cross n$ matrices. $A$ and $B$ are **similar** if there exists $S$ such that $B = S^{-1} AS$

### Theorem 7.3.3
Similar matrices have the same eigenvalues (including multiplicities)  

They also have the same characteristic polynomial

#### Proof
$$det(B-\lambda I) = det(S^{-1}AS - \lambda I) =det(S^{-1}AS - \lambda S^{-1}S)$$
$$ = det(S^{-1}(A-\lambda I) S) = det(S^{-1})det(A-\lambda I ) det(S)$$
$$ = \frac{1}{det(S)} det(A-\lambda I) det(S) = det(A-\lambda I)$$

### Theorem 7.3.4
An $n\cross n$ matrix $A$ is similar to a diagonal matrix iff $A$ is nondefective

#### Proof
First suppose $A$ is a diagonal matrix
$$S^{-1}AS = D $$
$$ AS = SD $$
$$ [A\vb{v_1}, A\vb{v_2}, ..., A\vb{v_n}] = [\lambda_1\vb{v_1}, \lambda_2 \vb{v_2},...,\lambda_n \vb{v_n}]$$
So $\vb{v_1}, \vb{v_2}, ... \vb{v_n}$ are linearly independent. Thus $A$ is nondefective  

Conversely, suppose $A$ is nondefective. Then
$$ AS = A[\vb{v_1}, \vb{v_2}, ..., \vb{v_n}] = [\lambda_1 \vb{v_1}, \lambda_2 \vb{v_2}, ..., \lambda_n \vb{v_n} $$
$$ AS = SD$$
where $D = diag(\lambda_1, \lambda_2, ..., \lambda_n$.   
$S$ is invertible since the columns of $S$ is linearly independent. So the following is true
$$ S^{-1} AS = D$$
A is similar to a diagonal matrix

### Definition
A matrix is **diagonalizable** if it is similar to a diagonal matrix

### Solving Systems of Differential Equations
$$ \frac{dx_1}{dt} = a_{11}x_1 + a_{12} x_2$$
$$ \frac{dx_2}{dt} = a_{21}x_1 + a_{22} x_2$$
the above can be represented as
$$ \vec{x'} = A \vec{x}$$

where

$$ \vec{x} = \begin{bmatrix} x_1 \\\\ x_2 \end{bmatrix}, \ \ \ \ \ \vec{x'} = \begin{bmatrix} x_{1}' \\\\ x_{2}' \end{bmatrix}, \ \ \ \ \  A = [a_{ij}] $$

Let $S = [\vb{v_1}, \vb{v_2}]$

$$ \vec{x} = S\vec{y}$$
$$ \vec{x'} = S\vec{y}$$
$$ S\vec{y'} = AS \vec{y}$$
$$ \vec{y'} = (S^{-1} AS) \vec{y}$$
$$ \begin{bmatrix} y_{1}' \\\\ y_{2}' \end{bmatrix} = \begin{bmatrix} \lambda_1 & 0 \\\\ 0 & \lambda_2 \end{bmatrix} \begin{bmatrix} y_1 \\\\ y_2 \end{bmatrix}$$
$$ y_1' = \lambda_1 y_1, \ \ \ \ \ y_2' = \lambda_2 y_2$$
$$ y_1(t) = c_1 e^{\lambda_1 t}, \ \ \ \ y_2(t) = c_2 e^{\lambda_2 t}$$
$$ \vec{x}(t) = c_1 e^{\lambda_1 t} \vec{v_1} + c_2 e^{\lambda_2 t} \vec{v_2}$$

## 7.4: An Introduction to the Matrix Exponential Function
If $A$ is an $n \cross n$ matrix of constants, the **matrix exponential function** is as follows:
$$ e^{At} = I_n + At + \frac{1}{2!} (At)^2 + \frac{1}{3!}(At)^3 + ... + \frac{1}{k!}(At)^k ...$$

### Properties of the Matrix Exponential Function
1. If A and B are $n \cross n$ matrices satisfying $AB = BA$
$$ e^{(A+B)t} = e^{At}e^{Bt}$$
2. For all $n \cross n$ matrices $A$, $e^{At}$ is invertible and
$$\left( e^{At}\right)^{-1} = e^{(-A)t} = e^{-At}$$
$$ e^{At}e^{-At} = I_n$$

### More results
If $A = diag(d_1, d_2, ... d_n)$ then $e^{At} = diag(e^{d_1 t}, e^{d_2 t}, ... e^{d_nt})$  

### Theorem 7.4.3
If $A$ is not a diagonal matrix, but is diagonalizable
$$ e^{At} = Se^{Dt}S^{-1}$$


## 1.2: Basic Terminology and Ideas
* Definition of **Linear Differential Equation**
$$ a_0 (x) y^(n) + a_1(x) y^{(n-1)} + ... + a_n(x) y = F(x)$$
where $a_0, a_1, ..., a_n$ and $F$ are functions of $x$ only
* The **order** of the above equation is $n$
* A **nonlinear** differential equation does not satisfy the above form

### Examples of Linear Differential Equations
Order 3
$$ y''' + e^{3x}y'' + x^3 y' + (cos x) y = \ln x$$
Order 1
$$ xy' - \frac{2}{1+x^2} y = 0$$

### Examples of Nonlinear Differential Equations
$$ y'' + x^4 \cos (y') - xy = e^{x^2}$$
$$ y'' + y^2 = 0$$
Both order 2

### Solutions to Differential Equations

#### Definition 1.2.4
A function $y=f(x)$ that is (at least) $n$ times differentiable on an interval $I$ is called a **solution** to the differential equation on $I$ if the substitution $y=f(x), y' = f'(x) , ..., y^(n) = f^(n)(x)$ reduces the differential equation to an identity valid for all $x$ in $I$

#### Definition 1.2.8
A solution to an $n$-th order differential equation on an interval $I$ is called the **general solution** on I if the following is satisfied
1. The solution contains $n$ constants $c_1, c_2, ..., c_n$
2. All solutions to the differential equation can be obtained by assigning appropriate values to the constants

Not all differential equations have a general solution

### Initial-Value Problems
An $n$-th order differential equation together with $n$ auxiliary conditions of the form 

$$ y(x_0) = y_0 , y'(x_0) = y_1, ..., y^(n-1)(x_0) = y_{n-1}$$
where $y_0, y_1, ..., y_{n-1}$ are constants

### Theorem
For the initial value problem 
$$ y^{(n)} + a_1 (x) y^{(n-1)} + ... + a_{n-1}(x)y' + a_n(x)y = F(x) $$
$$ y(x_0) = y_0 , y'(x_0) = y_1, ..., y^(n-1)(x_0) = y_{n-1}$$

if $a_1, a_2, ..., a_n, F$ are continuous on $I$, then there is a unique solution on $I$

## 1.4: Separable Differential Equations

### Definition
A first-order differential equations is called **separable** if it can be written in the following form
$$ p(y) \frac{dy}{dx} = q(x) $$

## 1.6: First Order Linear Differential Equations

### Definition
$$ a(x) \frac{dy}{dx} +b(x)y = r(x)$$

$$ \frac{dy}{dx} + p(x) y = q(x)$$
First Order Linear differential equations can be represented as the above forms  

### Solving the Differential Equation

$h(x)$ is called the **integrating factor**:
$$ h(x) = h'(x) p(x) = e^{\int p(x) \ dx}$$

There can be multiple integrating factors, but we only need one (which means we only need one anti-derivative of $p(x)$ to obtain the integrating factor

$$ h(x) \cdot \left( \frac{dy}{dx} + p(x)y\right)= h(x) \cdot q(x)$$
$$ h(x)\cdot \frac{dy}{dx} + h(x) \cdot p(x)y= h(x) \cdot q(x)$$

By the product rule

$$ \dv{(h(x) \cdot y(x))}{dx} = h(x) q(x)$$

$$ \implies h(x) \cdot y(x) = \int h(x) q(x) \ dx $$

$$ y(x) = \frac{1}{h(x)} \int h(x) q(x) \ dx$$

## 8.1: Linear Differential Equations

## 8.2: Constant Coefficient Homogeneous Linear Differential Equations

For the differential equation
$$ y^{(n)} + a_1 y^{(n-1)} + ... + a_{n-1}y' + a_n y =0$$
if $a_1, a_2, ..., a_n$ are **constant**, then we can write it as follows

$$ P(D) y = 0$$
$$ P(D) = D^n + a_1 D^{n-1} + ... a_{n-1}D + a_n$$

* $P(D)$ is the **polynomial differential operator**
* **Auxiliary Polynomial**
$$P(r) = r^n + a_1 r^{n-1} + .. a_{n-1} r + a_n$$

* **Auxiliary Equation**
$$P(r) = 0$$

### Theorem 8.2.2
If $P(D)$ and $Q(D)$ are polynomial differential operators, then 
$$ P(D) Q(D) = Q(D) P(D)$$

* Polynomial differential operators are **commutative**
* Note: When we write $P(D) Q(D) f$, we mean $P(D) \circ Q(D) f$
* Note: The polynomial differential operators commute because polynomials commute!
