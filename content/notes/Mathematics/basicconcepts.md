
---
title: "Basic Concepts of Math"
publishdate: 2021-08-23
lastmod: 2021-08-23
draft: false
toc: true
tags:
  - notes
  - college
  - math
---

## Section 6

* $\forall$ = "for all", "for each"
* $\exists$ = "for some", "there exists"
* $\mathbb{R}$ = Set of all Real Numbers

### Properties of the Real Numbers
1. $\forall x, y, z \in \mathbb{R} \ \ \ \ \ (x +y) + z = x + (y + z)$
2. $\forall x \in \mathbb{R} x + y = y+ x$
3. $\exists 0 \in \mathbb{R}\text{ such that }\forall x \in \mathbb{R}, x + 0 =x$
4. $\forall x \in \mathbb{R} \exists (-x) \in \mathbb{R} \ \  \ \ \ \ \ \ \ x + (-x) = 0$
5. $\forall x, y, z \in \mathbb{R} (x y ) z = x(yz)$ Associative
6. $\forall x, y \in \mathbb{R}, xy = yx$ Commutative
7. $\exists 1 \in \mathbb{R} $ such that $\forall x \in \mathbb{R}, x \cdot 1 = x $
8. For any nonzero real number x, $\exists \frac{1}{x} \in \mathbb{R}$ such that $x \cdot \frac{1}{x} = 1$
9. $\forall x, y, z \in \mathbb{R}, x (y+z) = xy + xz$
10. $\forall x,y, z \in \mathbb{R} (y + z) x = yx + zx$
10. The sum or product of any two real numbers is also a real number.

### Example

#### Proposition
Let $x \in \mathbb{R}$, then $x \cdot 0 = 0$

#### Proof: 
By property 3, $0 + 0 = 0$.  
Multiply both sides by x to get $x \cdot (0 + 0) = x \cdot 0$  
$$ x \cdot 0 + x \cdot 0 = x \cdot 0$$

Property 4 $\exists -(x\cdot 0)$ such that $x \cdot 0 + - (x \cdot 0) = 0$
$$ (x \cdot 0 + x \cdot 0) + - (x \cdot 0) = (x \cdot 0) + -(x\cdot0)$$
$$ x \cdot 0 + (x \cdot 0 + (-x \cdot 0)) = 0$$
$$ x \cdot 0 + 0 = 0$$
$$ x \cdot 0 = 0$$

### Proposition 2

#### Proposition
Let $a, b \in \mathbb{R}$. Assume that $ab = 0$. Then $a = 0$ or $b = 0$

#### Proof
Either $a = 0$ or $a \neq 0$  

If $a = 0$, then there is nothing to prove. So we shall suppose $a \neq 0$, and try to prove $b =0$  

$$ ab = 0 \text{ and } a \neq 0$$ 
By property 8 there is a real number $\frac{1}{a}$ so that $\frac{1}{a} = 1$
$$ \frac{1}{a} (ab) = \frac{1}{a} \cdot 0$$
$$ \left(\frac{1}{a} \cdot a\right) b = \frac{1}{a} \cdot 0 $$
$$ 1 \cdot b = 0 $$
Hence $b = 0$. So $a = 0$ or $b = 0$.

### Set of Integers

$\mathbb{R}$ has a subset called the set of integers, denoted by $\mathbb{Z}$
$$ \mathbb{Z} = \\{0,\pm 1, \pm 2, \pm 3, \pm 4, \pm 5... \\}$$
* $\mathbb{Z}$ is closed under addition and multiplication
* If $x \in \mathbb{Z}$, and $y \in \mathbb{Z}$, then $x + y \in \mathbb{Z}$ and $xy \in \mathbb{Z}$


### Abbreviations
In $\mathbb{R}$, we can abbreviate $a\cdot \frac{1}{b}$ by $\frac{a}{b}$ if $b\neq 0$. $a + (-b)$ by $a-b$.

### Set of Rational Numbers
$$ \mathbb{Q} = \\{ \frac{a}{b} : a, b, \in \mathbb{Z} \text{ and } b \neq 0\\}$$
* $\mathbb{Q}$ is a subset of $\mathbb{R}$

#### Question

* Suppose $x, y \in \mathbb{Q}$. Is it true that $x + y \in \mathbb{Q}$?

#### Answer

Since $x \in \mathbb{Q}$, there are integers $a$ and $b$ ($b\neq 0$) so that $x = \frac{a}{b}$. Similarly there are integers  $c$ and $d$ ($d \neq 0$) so that $y = \frac{c}{d}$.
$$ \frac{x}{y} = \frac{a}{b} + \frac{c}{d} = \frac{ad}{bd} + \frac{bc}{bd} $$
$$ = \frac{ad + bc}{bd}$$

* $b\neq 0$ and $d \neq0$, so by Prop 2, $bd \neq 0$.
* $b \in \mathbb{Z} \text{ and } d \in \mathbb{Z}$, so $bd \in \mathbb{Z}$ by closure.
* $a \in \mathbb{Z}$ and $d \in \mathbb{Z}$, so $ad \in \mathbb{Z}$ by closure.
* $b \in \mathbb{Z}$ and $c \in \mathbb{Z}$, so $bc \in \mathbb{Z}$ by closure.
* One more use of closure shows that $ad + bc \in \mathbb{Z}$
* Hence $x + y$ is the ratio of two integers, with non-zero denominator.
* Thus $x + y \in \mathbb{Q}$. QED

* Let $x, y \in \mathbb{Q}$. Is it true that $xy \in \mathbb{Q}$? (For next class).
