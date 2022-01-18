---
title: "Real and Complex Analysis I"
publishdate: 2022-01-17
lastmod: 2022-01-17
draft: false
toc: true
tags:
  - notes
  - college
  - math
  - complex analysis
  - real analysis
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

The absolute value function satisfies these properties  
i. 
$$ |ab| = |a | |b| $$ 
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
