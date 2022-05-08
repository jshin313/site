---
title: "Real and Complex Analysis I"
publishdate: 2022-01-17
lastmod: 2022-04-21
draft: false
toc: true
tags:
  - notes
  - college
  - math
  - real analysis
  - convergence
  - derivative
  - power series
  - sets
---

## Class Info
### Textbook
S. Abbott's [Understanding Analysis](https://link.springer.com/book/10.1007/978-1-4939-2712-8)

## 1.2: Some Preliminaries
### Sets
$$
A^c = \\{x \in \mathbb{R}: x \not\in A \\}
$$ 
### De Morgan's Laws
$$
(A \cap B)^c = A^c \cup B^c
$$ 
$$
(A \cup B)^c = A^c \cap B^c
$$ 

### Absolute Value
$$
|x| = \begin{cases}
  x & \text{ if } x \ge 0 \\\\
  -x & \text{ if } x < 0 \\\\
\end{cases}
$$ 

Satisfies following
i. 
$$ |ab| = |a | |b| $$ 

### Triangle Inequality
ii. **The Triangle Inequality**
$$ |a+b| \le |a| + |b|$$

### Theorem 1.2.6
$a \in \mathbb{R}$ and $b \in \mathbb{R}$ are equal $\iff (|a - b| < \epsilon)$ for all real $\epsilon > 0$

## 1.3: Axiom of Completeness
### Properties of $\ \mathbb{R}$
* Every element of $\mathbb{R}$ has an additive inverse, and every nonzero element has a multiplicative inverse
* $\mathbb{R}$ is a **field**
  * addition and multiplication of real numbers is commutative, distributive, and associative
  * Ordering properties on $\mathbb{Q}$ extend to $\mathbb{R}$
    * $<, >, \le, \ge$
*  $\mathbb{Q} \subset \mathbb{R}$

### Axiom of Completeness
Every nonempty set of real numbers that is bounded above has a least upper bound

* Note that this does not apply to $\mathbb{Q}$

### Least Upper Bounds and Greatest Lower Bounds
* A set $A \subseteq \mathbb{R}$ is **bounded above** if $$
\exists b \in \mathbb{R} \   \forall a \in A \ \ a \le b
$$ 
  * $b$ is an *upper bound*
* A set $A \subseteq \mathbb{R}$ is **bounded below** if $$
\exists l \in \mathbb{R} \   \forall b \in A \ \ l \le b$$
  * $l$ is a *lower bound*

* A real number $s$ is a **Least Upper Bound** (or **supremum**) of $A \subseteq \mathbb{R}$ if the following is true
  1. $s$ is an upper bound of $A$
  2. if $b$ is any upper bound for $A$, then  $s \le b$

* A real number $t$ is a **Greatest Lower Bound** (or **infimum**) of $A \subseteq \mathbb{R}$ if the following is true
  1. $s$ is a lower bound of $A$
  2. if $l$ is any lower bound for $A$, then  $l \le t$
* There can only be one supremum (and one infimum)
* The supremum and infimum don't have to be an element of $S$

* A real number $a_0$ is a **maximum** of $A$ if  $a_0 \in A$ and  $\forall a \in A \ \ a_0 \ge a$
* A real number $a_1$ is a **minimum** of $A$ if  $a_1 \in A$ and  $\forall a \in A \ \ a_1 \le a$
* There supremum can exist without a maximum, but a maximum always implies the existence of a supremum

### Lemma 1.3.8
Suppose $s \in \mathbb{R}$ is an upper bound for a set $A \subseteq \mathbb{R}$.  

$s = sup \ A$ if and only if for every $\epsilon > 0$, $\exists a \in A$ satisfying $s - \epsilon < a$ 
 
### Proof
Another rephrasing of the lemma: If $s$ is an upper bound, $s$ is the least upper bound if and only if any number smaller than $s$ is not an upper bound.  

Use this to prove the forward and reverse implications.


## 2.2: The Limit of a Sequence
### Definition 2.2.3 (Convergence of a Sequence)
A sequence $(a_n)$ **converges** to $a \in \mathbb{R}$ if 
$$\forall \epsilon > 0\ \exists N \in \mathbb{N} \ni (n \ge N \implies |a_n - a| < \epsilon) $$

## 3.2: Open and Closed Sets
## 3.3: Compact Sets
## 3.4: Perfect Sets and Connected Sets

## 4.2: Functional Limits
### Definition 4.2.1 (Functional Limit)
Let $f: A \to \mathbb{R}$ and let $c \in A$. Let $x \in A$
We say $\lim_{x\to c} f(x) = L$ if 

$$\forall \epsilon > 0, \exists \delta > 0 \ni (0 < |x-c| < \delta \implies| f(x) - L| < \epsilon)$$


* Note that $0 < |x-c|$ is just a compact way of saying $x \neq c$

### Theorem 4.2.3 (Sequential Criterion for Functional Limits)
Given $f: A \to \mathbb{R}$ and a limit point $c \in A$, the following are equivalent
i. $\lim\limits_{x\to c} f(x) = L$
ii. $\forall (x_n) \subseteq A$ satisfying $x_n \neq c$, it follows that $f(x_n) \to L$

### Corollary 4.2.4 (Algebraic Limit Theorem for Functional Limits)

### Corollary 4.2.5 (Divergence Criterion for Functional Limits)
Let $f: A \to \mathbb{R}$ and let $c$ be a limit point of $A$

If $\exists (x_n), (y_n) \subseteq A \ni x_n \neq c \land y_n \neq c$ and 
$$\lim x_n = \lim y_n = c \text{ but } \lim f(x_n) \neq \lim f(y_n)$$
then $\lim_{x\to c} f(x) = DNE$

## 4.3: Continuous Functions
### Definition 4.3.1 (Continuity)
A function $f: A \to \mathbb{R}$ is *continous* at a point $c \in A$ if

$$ \forall \epsilon > 0, \exists \delta > 0 \ni (x \in A \land |x - c| < \delta \implies |f(x) - f(c)| < \epsilon )$$

### Theorem 4.3.2 ( Characterization of Continuity)
Let $f: A \to \mathbb{R}$ and $c\in A$. Let $x\in A$. 

$f$ is continuous is equivalent to saying any of the three following equivalent statements
i. 
$$\forall \epsilon > 0, \exists \delta > 0 \ni |x-c| < \delta \implies |f(x) - f(c) | < \epsilon$$
ii. 
$$ \forall V_\epsilon (f(c)), \exists V_\delta (c) \ni \left(x \in V_\delta (c) \implies f(x) \in V_\epsilon(f(c))\right)$$
iii.
$$ \forall (x_n) \subseteq A \to c \implies f(x_n) \to f(c)$$

iv. If $c$ is a limit point of $A$
$$ \lim_{x\to c} f(x) = f(c)$$

### Corollary 4.3.3 (Criterion for Discontinuity)
Let $f: A \to \mathbb{R}$ and let $c \in A$ be a limit point of $A$

If $\exists (x_n) \subseteq A$ where $(x_n) \to c$ but $f(x_n)$ does not converge to $f(c)$, then $f$ is not continous at $c$

### Theorem 4.3.4 (Algebraic Continuity Theorem)
Assume $f: A \to \mathbb{R}$ and $g: A \to \mathbb{R}$ are continous at $c \in A$. Then the following are all continous at $c \in A$

i. $kf(x)  \forall k \in \mathbb{R}$
ii. $f(x) + g(x)$
iii. $f(x) g(x)$
iv. $f(x) / g(x) $ if $g(c) \neq 0$

## 4.4: Continous Functions on Compact Sets
### Theorem 4.4.1 (Preservation of Compact Sets)
Let $f : A \to \mathbb{R}$ be continous on $A$. 

If $K \subseteq A$ is *compact*, then $f(K)$ is compact as well

### Theorem 4.4.2: Extreme Value Theorem
If $f: K \to \mathbb{R}$ is continous on a compact set $K \subseteq \mathbb{R}$, then $f$ attains a maximum and minimum value.

$$ \exists x_0, x_1 \in K \ni f(x_0) \le f(x) \le f(x_1)\  \forall x \in K$$

### Definition 4.4.4: Uniform Continuity
$f: A \to \mathbb{R}$ is **uniformly continous** on $A$ if

$$ \forall \epsilon > 0 \ \exists \delta > 0, \ni \forall x, y  \in A \ (|x-y| < \delta \implies |f(x) - f(y)| < \epsilon) $$

* Note that a function is continous if $\forall c \in A \ \forall \epsilon > 0, \exists \delta > 0 \ni |x-c| < \delta \implies |f(x) - f(c) | < \epsilon$
* For Regular continuity $\delta$ could depend on the value of $c$, but for uniform continuity, $\delta$ does not depend on the $c \in A$

### Sequential Criterion for Absence of Uniform Continuity
A function $f: A \to \mathbb{R}$ fails to be uniformly continous on $A$ if and only if 
$ \exists \epsilon_0 > 0 $ and $\exists (x_n), (y_n) \subseteq A$ such that
$$ |x_n - y_n| \to 0\text{ but } |f(x_n) - f(y_n)| \ge \epsilon_0$$

### Theorem 4.4.7 (Uniform Continuity on Compact Sets)
A function is that is continous on a compact set $K$ is uniformly continous on $K$

## 4.5: The Intermediate Value Theorem
### Theorem 4.5.1 (Intermediate Value Theorem)
Let $f: \[a, b\] \to \mathbb{R}$ be continuous. If $L \in \mathbb{R}$ and $f(a) < L < f(b)$ or $f(b) > L > f(a)$, then $\exists c \in (a, b)$ where $f(c) = L$

### Theorem 4.5.2 (Preservation of Connected Sets)
Let $f: G \to \mathbb{R}$ be continuous. If $E \subseteq G$ is connected, then $f(E)$ is connected.

## 5.2: Derivatives
### Definition 5.2.1 (Differentiability)
Let $g: A \to \mathbb{R}$ be defined on interval $A$. Given $c \in A$, the derivative of $g$ at $c$ is given by
$$ g'(c) = \lim_{x\to c} \frac{g(x) - g(c) }{x-c}$$
if the limit exists

### Theorem 5.2.3
If $g: A\to \mathbb{R}$ is differentiable at $c \in A$, then $g$ is continuous at $c$

### Theorem 5.2.4 (Algebraic Differentiability Theorem)
Let $f$ and $g$ be defined on interval $A$

### Theorem 5.2.5 (Chain Rule)

### Theorem 5.2.6 (Interior Extermum Theorem)
Let $f$ be differentiable on $(a, b)$. If $f$ attains a maximum value at $c \in (a, b)$, then $f'(c) = 0$. The same applies if $f$ attains a minimum.

### Theorem 5.2.7 (Darboux's Theorem)
If $f$ is differentiable on $[a, b]$ and if $f'(\alpha)  < \alpha < f'(b)$, then $\exists c \in (a, b) \ni f'(c) = \alpha$

## 5.3: The Mean Value Theorem
### Theorem 5.3.1 (Rolle's Theorem)
Let $f: \[a, b\] \to \mathbb{R}$ be continuous on $\[a, b\]$ and differentiable on $(a, b)$. If $f(a) = f(b)$, $\exists c \in (a, b)$ where $f'(c) = 0$

### Theorem 5.3.2 (Mean Value Theorem)
Let $f: \[a, b\] \to \mathbb{R}$ be continuous on $\[a, b\]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$ where $f'(c) = \frac{f(b) - f(a)}{b-a}$

### Theorem 5.3.6: L'Hospital's Rule
$$ \lim_{x \to a} \frac{f'(x)}{g'(x)} = L \implies \lim_{x\to a} \frac{f(x)}{g(x)} = L$$

## 6.2: Uniform Convergence of a Sequence of Functions
### Definition 6.2.1: Pointwise Convergence
Let $f_n$ be a function defined for each $n \in \mathbb{R}$ on set $A\subseteq \mathbb{R}$ 

The sequence $(f_n)$ **converges pointwise** on $A$ to $f$ if
$$ \forall x \in A, f_n(x) \to f(x)$$

### Definition 6.2.3 (Uniform Convergence)
Let $(f_n)$ be a sequence of functions defined on $A \subseteq \mathbb{R}$. Then $(f_n)$ converges uniformly on $A$ to $f$ on $A$ if 
$$ \forall \epsilon > 0, \exists N \in \mathbb{N} \ni $$
$$ n\ge N \land x \in A \implies |f_n(x) - f(x)| < \epsilon$$

Note the definiton of pointwise convergence:
$$ \forall x \in A \ \forall \epsilon > 0, \exists N \in \mathbb{N} \ni$$
$$ n \ge N \implies | f_n(x) - f(x) | < \epsilon$$
* Similar to uniform continuity, the value for $N$ does not depend on $x$ just like how $\delta$ did not depend on the value of $x$

### Cauchy Criterion for Uniform Convergence
$(f_n)$ defined on $A$ converges uniformly on $A$ if and only if 
$$ \forall \epsilon > 0, \exists N \in \mathbb{N} \ni $$
$$ m, n \ge N \land x \in A \implies |f_n(x) - f_m(x) | < \epsilon $$

### Theorem 6.2.6 (Continuous Limit Theorem)
Let $(f_n)$ be a sequence of functions on $A$ that converge *uniformly* on $A$ to $f$. If each $f_n$ is continuous at $c \in A$, then $f$ is continous at $c$

## 6.4: Series of Functions
### Definition 6.4.1
For each $n\in \mathbb{N}$, let $f_n$ and $f$ be functions on $A$.

Then the infinite series
$$ \sum_{n=1}^\infty f_n(x) = f_1(x) + f_2(x) + f_3(x) + ... f_n(x) + ...$$
converges pointwise on $A$ to $f(x)$ if the sequence of partial sums $s_k(x)$ converge pointwise to $f(x)$. If $s_k$ converges uniformly on $A$, then the infinite series converges uniformly on $A$

$$ s_k(x) = f_1(x) + f_2(x) + ... + f_k(x)$$

### Definition 6.4.2 (Term-by-term Continuity Theorem)
Let $f_n$ be continuous functions defined on a set $A \subseteq \mathbb{R}$ and assume $\sum_{n=1}^\infty f_n$  converges uniformly on $A$ to $f$. Then $f$ is continuous on $A$

### Theorem 6.4.4 (Cauchy Criterion for Uniform Convergence of Series)

A series $\sum_{n=1}^\infty f_n$  converges uniformly on $A \subseteq \mathbb{R}$ if and only if
$$ \forall \epsilon > 0 \exists N \in \mathbb{N} \ni$$
$$ |f_{m+1} (x) + f_{m+2}(x) + f_{m+3}(x) + ... + f_n(x) < \epsilon$$
whenever $n > m\ge N$ and $x \in A$

### Corollary 6.4.5 (Weierstrauss M-Test)
For each $n\in \mathbb{N}$, let $f_n$ be defined on $A$ and let $M_n > 0$ be a real number satisfying

$$ |f_n(x)| \le M_n \ \forall x \in A$$

If $\sum_{n=1}^\infty M_n$ converges, then $\sum_{n=1}^\infty f_n$ converges uniformly on $A$

## 6.5: Power Series
