
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

## Class Description
Textbook: The Tools of Mathematical Reasoning

## Real Numbers, Rational Numbers, and Integers

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

### Proposition 1

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

* Let $x, y \in \mathbb{Q}$. Is it true that $xy \in \mathbb{Q}$? Answer: Yes.

## 6.1: Division Algorithm and Well Ordering Principle
Let $\mathbb{N} = \\{0, 1, 2, 3, 4, ...\\}$

### Well Ordering Principle
Every nonempty subset of sequence of non-negative integers has a least element. Example: $\mathbb{N}$ has a least element.

### Division Algorithm

#### Statement
Let $a \in \mathbb{Z}, b \in \mathbb{Z}$ and let $b > 0$  

There is a unique pair of integers $q$ and $r$ such that $a = bq +r, \ \ \ \ 0 \le r < b$  

q is the **quotient** and r is the **remainder**

#### Proof

##### Existence
First we need to prove that $q$ and $r$ exist such that $a = bq +r \ \ \ \ 0 \le r < b$. After that we'll prove that there is only one pair $q$ and $r$ that is unique for a certain $a$ and $b$.  

Define a set, $S$, as follows

$$ S = \\{a-bk: k \in \mathbb{Z}, a - bk \in \mathbb{N}\\}$$

In order to use the Well Ordering Principle (WOP), we need to show that $S \ne \emptyset$.

$$ \exists k :  k < \frac{a}{b}, k \in \mathbb{Z}$$
There is at least one integer less than $\frac{a}{b}$ since $b > 0$. If $a < b$, then the least integer would be 0.

$$ k < \frac{a}{b} \implies a - bk > a - b\left(\frac{a}{b}\right)$$
$$ a-bk > a - a$$
$$ a-bk > 0$$

Since $k \in \mathbb{Z}$ and $a, b \in \mathbb{Z}$, by closure, $a - bk \in \mathbb{Z}$. Since $a - bk > 0$, $a - bk \in S$. Since $S \subseteq \mathbb{N}$, by the WOP, $S$ has a least element.  

Now we need to prove that $0 \le r < b$.

Let $r$ denote the least element of $S$. Then since $r \in S, \exists q \in \mathbb{Z}: r = a - bq$  

Since $r \in S$, we know that $r \in \mathbb{N} = \\{0, 1, 2, 3, ...\\}$, so $r \ge 0$.  

Now we just need to prove the second part of the inequality, $r < b$. Use a Proof by contradiction and assume the opposite: $r \ge b$.

$$ r \ge b \implies r - b \ge 0$$
$$ \implies (a-bq) - b \ge 0$$
$$ \implies r-b = a - b(q + 1) \ge 0$$

If $r-b \ge 0$, then $r - b\in S$. If that were true, $r-b$ would be the least element in S, since $b \in \mathbb{Z}, b > 0$ and $r \ge 0$. This is a contradiction since $r$ is the least element in $S$, and not $r-b$.  

Thus $0 \le r < b$.

##### Uniqueness
Prove that $r$ and $q$ are unique solutions to $a = bq +r$.  

Define $r'$ and $q'$
$$ r' = bq' + t, \ \ \ \ 0 \le r' < b$$
Our goal is to show that $r' = r$ and $q' = q$.

$$ bq + r = a = bq' + r'$$
$$ r - r' = b(q' - q)$$

This means that $b | (r - r')$, so b is a multiple of $r-r'$.   

Also since $0 \le r' < b$ and $0 \le r < b$, $-b < r-r' < b$.
$$ -b < r - r' < b$$
$$ -b < b(q' - q) < b$$
$$ -1 < q' - q < 1$$
Since $q' - q \in \mathbb{Z}$, $q'-q = 0$. So $q' = q$.
$$ bq + r = bq' + r'$$
$$ r = r'$$

### Using the Division Algorithm
The Division Algorithm can reduce proofs about integers to finitely many cases.  

We say that $a | b$, a divides b, if *b* is a multiple of *a*. $$ \exists q: b = aq + 0, \ \ q \in \mathbb{Z}$$

#### Example
Prove that the square of any integer can be expressed in one of the following forms: $4k +1$  or $4k + 0$

$$n \in \mathbb{Z}, n = (4q + r), r\in \\{0, 1, 2, 3\\}$$

##### Case r = 0
$$ n^2 = (4q+0)^2 = 16q^2$$
$$ n^2 = 4(4q^2)$$
$$n^2 = 4k + 0 ,\ \ \ \ \ \ k = 4q^2 \in \mathbb{Z} \text{ by closure}$$

##### Case r = 1
$$ n^2 = (4q+1)^2 = 16q^2 + 8q + 1$$
$$ n^2 = 4(4q^2 + 2q) + 1$$
$$n^2 = 4k + 1 ,\ \ \ \ \ \ k = 4q^2 + 2q \in \mathbb{Z} \text{ by closure}$$

##### Case r = 2
$$ n^2 = (4q+2)^2 = 16q^2 + 16q + 4$$
$$ n^2 = 4(4q^2 + 4q + 1) + 0$$
$$n^2 = 4k + 0 ,\ \ \ \ \ \ k = 4q^2 + 4q + 1\in \mathbb{Z} \text{ by closure}$$

##### Case r = 3
$$ n^2 = (4q+3)^2 = 16q^2 + 24q + 9$$
$$ n^2 = 16q^2 + 24q + 2(4) + 1$$
$$ n^2 = 4(4q^2 + 6q + 2) + 1 $$
$$n^2 = 4k + 1 ,\ \ \ \ \ \ k = 4q^2 + 6q + 2 \in \mathbb{Z} \text{ by closure}$$

Thus since $n^2 = 4k + 1$ or $n^2 = 4k +0$ for all values of r, we have proven that the square of any integer can be expressed in just those forms.

## 1.1: Language of Proofs

### Proposition
* **Proposition**: Sentence which has exactly one truth value
  * Not a proposition: 
    * $4 \cdot 5$ (no verb in sentence)
    * $18 | n$ (The truth of falsity depends on the value of $n$)
* **Predicate**: A sentence whose truth value depends on values assigned to free variables
* Propositions can be combined with **logical operators** like **AND**, **OR**, **NOT**, **IF**, **THEN**, **IFF**


### Implication
$$P \implies Q$$
* P implies Q
* If P then Q
* P is sufficient for Q
* P only if Q
* Q when P
* Q if P

* P is called the hypothesis of the implication
* Q is called the conclusion

<!-- Taken from https://people.engr.tamu.edu/hlee42/csce222/truth-table.pdf -->
$$
\begin{array}{|c c|c|}
% |c c|c| means that there are three columns in the table and
% a vertical bar ’|’ will be printed on the left and right borders,
% and between the second and the third columns.
% The letter ’c’ means the value will be centered within the column,
% letter ’l’, left-aligned, and ’r’, right-aligned.
p & q & p \implies q \\\\ % Use & to separate the columns
\hline % Put a horizontal line between the table header and the rest.
T & T & T \\\\
T & F & F \\\\
F & T & T \\\\
F & F & T \\\\
\end{array}
$$
$$ p\implies q \equiv \neg p \lor q $$

* **Converse**: $Q \implies P$
* **Contrapositive**: $\neg Q \implies \neg P$
  * Has the same truth table as the regular $P \implies Q$

* **Example**
  * **Theorem**:
$$ \text{If } \sum_{n=1}^\infty a_n \text{ converges, then } \lim_{n\to\infty} a_n = 0 $$

  * **Contrapositive of Theorem**:
  $$ \text{If } \lim_{n\to\infty} a_n \neq 0 \text{, then } \sum_{n=1}^\infty a_n \text{ diverges (Divergence Test)}$$

  * **Converse**:
  $$ \text{If } \lim_{n\to\infty} a_n = 0 \text{, then } \sum_{n=1}^\infty a_n \text{ converges (Not True)}$$


### DeMorgan's Laws & Formulas
Let $P$ and $Q$ be propositions
1. $\neg (P \lor Q)$ is logically equivalent to $(\neg P) \land (\neg Q)$
2. $\neg (P \land Q)$ is logically equivalent to $(\neg P) \lor (\neg Q)$

Proof of 1.
$$
\begin{array}{|c c|c|c|}
p & q & p \lor q & \neg(p \lor q) \\\\ % Use & to separate the columns
\hline % Put a horizontal line between the table header and the rest.
T & T & T & \mathbf{F} \\\\
T & F & T & \mathbf{F} \\\\
F & T & T & \mathbf{F} \\\\
F & F & F & \mathbf{T} \\\\
\end{array}
$$

$$
\begin{array}{|c c|c|c|c|}
p & q & \neg p & \neg q & (\neg p) \land (\neg q) \\\\ % Use & to separate the columns
\hline % Put a horizontal line between the table header and the rest.
T & T & F & F & \mathbf{F}  \\\\
T & F & F & T & \mathbf{F}  \\\\
F & T & T & F & \mathbf{F}  \\\\
F & F & T & T & \mathbf{T}  \\\\
\end{array}
$$

### Quantifiers
* **Universal Quantifier**: $\forall$ = "for any", "for all", or "for each"
* **Existential Quantifier**: $\exists$ = "there exists", "for some"
  * $\exists!$ = "there is a unique" or "there is exactly one"
* Examples
  1. Some positive integers are both perfect squares and perfect cubes
    <!-- * $\exists k, n, m: k = m^2 \land k= n^3, n \in \mathbb{Z}, m \in \mathbb{Z}, k \in \mathbb{Z}^+$ -->
    * $\exists x \in \mathbb{Z}^+ \vert (\exists y \in \mathbb{Z} \vert x = y^2) \land (\exists w \in \mathbb{Z} \vert x= w^3)$

#### Negating Quantifiers
$$ \neg(\forall x P(x)) \implies \exists x \neg P(x)$$
$$ \neg(\exists x P(x)) \implies \forall x \neg P(x)$$

#### Example
$$ \forall x \in \mathbb{R} \  \exists k \in \mathbb{R}\  (x > 0 \land x=k^2)$$
The negation of the above would be
$$ \neg(\forall x \in \mathbb{R} \ \exists k \in \mathbb{R} \ (x > 0 \land x=k^2))$$
$$ \exists x \in \mathbb{R} \ \neg(\exists k \in \mathbb{R} \ (x > 0 \land x=k^2))$$
$$ \exists x \in \mathbb{R}\  \forall k \in \mathbb{R} \ \neg(x > 0 \land x=k^2))$$
Use Demorgan's laws
$$ \exists x \in \mathbb{R}\  \forall k \in \mathbb{R}\  \neg(x > 0) \lor \neg(x=k^2)$$

Since $P \implies Q \equiv \neg P \lor Q$
$$ \exists x \in \mathbb{R}\  \forall k \in \mathbb{R}\  (x > 0 \implies x\neq k^2)$$

## 1.2: Direct Proofs
We can assume $P$ to be true and show that $Q$ is true.

## 2.1: More on Direct Proofs

### Additional Axioms for Real Numbers

1. $\forall a, b \in \mathbb{R}$ exactly one of $a <b$, $a=b$, or $a > b$ is true
2. $\forall a, b , c\in \mathbb{R} \ \ \ (A < b) \implies (a + c < b+c)$
3. $\forall a, b, c \in \mathbb{R}  \ \ (a < b \land c > 0) \implies ac < bc$
4. $\forall a, b, c \in \mathbb{R}  \ \ (a < b \land c < 0) \implies ac > bc$
5. $\forall a, b, c \in \mathbb{R}  \ \ (a < b \land b < c) \implies a < c$ (Transitive)

### Counterexamples
The negation of $\forall x \in S, P(x)$ is $\exists x \in S, \neg P(x)$.  
To disprove $\forall x \in S, P(x)$, we need only find one example of an x for which P(x) is false.

#### Prime Numbers
**Definition**: $n \in \mathbb{Z}^+$ is prime the following is true:
$$n\neq 1 \land (x \in \mathbb{Z}^+ \land x | n) \implies (x = 1 \lor x = n)$$

### Double Implications
* To prove $P \iff Q$, you need to prove both $P \implies Q$ and $Q \implies P$

### Uniqueness
To prove a property is unique for a certain object, assume that there are two objects with this property $x$ and $y$ and show that they are the same.

#### Example
Prove the following statement:
$$ \exists x \in \mathbb{R} \forall y \in \mathbb{R} x + y = y+x = y$$
We will prove that this additive property is unique to just one number.

1. Let $a\in\mathbb{R}$ be such that $a + w = w+a = w, \ \ \forall w \in \mathbb{R}$
2. Let $b\in\mathbb{R}$ be such that $b + w = w+b = w, \ \ \forall w \in \mathbb{R}$

* $a + b = b$ by line 1
* $a + b = a$ by line 2
* Thus we can conclude that $a = b$ and that only one unique number has the additive property we were interested in

## 2.2: Indirect Proofs
Note: $\therefore$ means therefore and $\because$ means because

### Proof  by Contradiction
To prove statement $P$ is to assume $\neg P$ and then derive a statement of the form $Q \land (\neg Q)$. If $\neg P$ implies a falsehood, then $\neg (\neg P)$, which means $P$ itself is true.

### Proof  by Contrapositive
$$ \neg Q \implies \neg P \iff P \implies Q $$

## 2.3: Two Important Theorems

### Theorem: $\ \sqrt{2}\text{ }$  is irrational
Let $\sqrt{2}$ denote the positive real number $y$ satisfying $y^2 = 2$.

Suppose BWOC (By way of contradiction), 
$$ \sqrt{2} \in \mathbb{Q} \implies \exists a, b \in \mathbb{N}: \sqrt{2} = \frac{a}{b}$$

If we cancel common factors so no integer divides both $a$ and $b$ except $\pm 1$, we can say $\sqrt{2} = \frac{p}{q}$, where $p, q \in \mathbb{Z}$ and they share no common factors.

$$ 2 = \frac{p^2}{q^2} \implies 2 q^2 = p^2 $$
$$ 2 | p^2 \implies 2 | p, \ p = 2t, \  t \in \mathbb{Z}$$
$p$ is even since $p^2$ is even.

$$ 2q^2 = (2t)^2$$
$$ 2q^2 = 4t^2$$
$$ q^2 = 2t^2 \implies 2 | q^2 \implies 2 | q$$

$2 | p \land 2 | q$, contradicting our choice of $p$ and $q$ sharing no common factors.

Thus $\sqrt{2} \notin \mathbb{Q}$

### Greatest Common Divisor (GCD)
Let $a, b \in \mathbb{Z}$ and $a \neq 0 \land b \neq 0$.  
$$S = \\{ x \in \mathbb{Z} : x | a \land x | b \\}$$
$S$ is the set of common integer divisors of $a$ and $b$

$$ \forall a, b \in \mathbb{Z}: 1 \in S \implies S \neq \emptyset$$  
If $|k| > max(a, b)$, then $k \nmid a \land k \nmid b$, so $k \notin S$
So $S$ is finite and $S$ has a maximum element.

Define GCD as the following:
$$ gcd(a, b) = max(S)$$

If $a = b = 0$, we define $gcd(0, 0) = 0$

### Bézout's Lemma
Lemma: Let $a, b \in \mathbb{Z}$. Then $\exists m, n \in \mathbb{Z}: gcd(a, b) = am + bn$

#### Proof
Case 1
$$a = b = 0$$
$$gcd(0, 0) = 0 = a \cdot 0 + b \cdot 0$$
Case 2
$$ a = 0 \land b \neq 0$$
$$ gcd(0, b) = |b|$$
Case 3
$$ a \neq 0 \land b = 0$$
* Same as Case 2

Case 4
$$ T = \\{x \in \mathbb{N}: \exists u, v \in \mathbb{Z} : x = au + bv\\}$$
$$ a^2 + b^2 = a(a) + b(b) > 0$$
$$ a^2 + b^2 \in \mathbb{T}$$
$$ T \neq \emptyset \land T \in \mathbb{N} \implies d = min(T)$$
* By the Well Ordering Principle (WOP), the set $T$ has a minimum element.

* Now we show that $d | a$
$$ a = dq + r \ \ \  q, r \in \mathbb{Z}, \ \ \ 0 \le r < d$$
$$ d \in T \implies \exists s, t \in \mathbb{Z}: d = as + bt$$

* If $r \neq 0$, then $r \in \mathbb{N}$ and $r = a - dq = a - (as + bt)q = a(1 - qs) + b(-tq)$, so that $r \in T$

* But $r < d$, so this would contradict that $d = min(T)$, since $r < d$. Hence $r = 0$ must be true and $d | a$. Similarly $d | b$

* We've shown that $d|a \land d | b$. Now we show that $d$ is the **greatest** of the common divisors of $a$ and $b$. Let $c$ be another common divisor of $b$ and $a$
$$ c \in \mathbb{Z}: c | a \land c| b$$
$$ \exists w, z \in \mathbb{Z}: q = cz, \ b = cw$$
$$ d = as + bt = (cz) s + (cw) t$$
* Since $d > 0$, this means $c \le d$ since $c$ is a divisor of $d$. So $d$ is the **greatest** common divisor of $a$ and $b$

### Euclid's Lemma
