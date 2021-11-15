
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

#### Proof
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
$$ \neg(\forall x P(x)) \iff \exists x \neg P(x)$$
$$ \neg(\exists x P(x)) \iff \forall x \neg P(x)$$
$$ \neg(\exists x P(x)) \iff \nexists \ \  x  \ \ P(x)$$

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

### Basic Properties of Real Numbers
For all real numbers $a$, $b$, and $c$
1. Closure under addition and multiplication: $a + b \in \mathbb{R}, ab \in \mathbb{R}$
2. Associative Properties: $(a+b) +c = a+(b+c)$ and $(ab)c = a(bc)$
3. Commutative Properties: $a + b = b+a$ and $ab = ba$
4. Distributive Properties: $a(b + c) = ab + ac$
5. Identities: $0 \neq 1, a + 0 = a, a \cdot 1 = a, a \cdot 0 = 0$
6. Additive Inverses: $\exists! -a = -1 \cdot a: a + (-a) = 0$
7. Subtraction: $b-a$ is defined to equal $b + (-a)$
8. Multiplicative Inverses: $a \neq 0 \implies \exists! a^{-1} = \frac{1}{a}: a\cdot a^{-1} = a \cdot \frac{1}{a} = 1$
9. Division: $a \neq 0  \implies \frac{b}{a} = b \cdot \frac{1}{a}$

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
Let $a, b \in \mathbb{Z}$ and let $p $ be a prime number. If $p | ab$, then $p | a\lor p | b$

#### Proof
If $p | a$, then we are done, so suppose $p \nmid a$ and try to show $p | b$.  
If $p \neq a$ and $p$ is prime, then $gcd(a, p) = 1$  
By Bézout's Theorem, $\exists m, n \in \mathbb{Z}$ so that $am + pn = 1$
$$ \exists x \in \mathbb{Z}: px = ab$$
$$ b(am + pn) = 1b$$
$$ (ba)m + pnb = b$$
$$ (px)m + pnb = b $$
$$ p(xm + nb) = b $$
$xm + nb \in \mathbb{Z}$, so $p | b$, as desired.

## 2.4: Statements Including Mixed Quantifiers
### $\forall \exists$
To prove a statement of the form $\forall x \in S \ \ \exists y \in T \ \ P(x, y)$, we let $x$ be an arbitrary element of S, and we try to find $y \in T$ for which $P(x, y)$ is true.

#### Example
Let $\mathbb{R}^{+}$ = set of positive real numbers.  
Prove that $\forall \epsilon \in \mathbb{R}^{+} \ \ \exists \delta \in \mathbb{R}^+$ such that $|4x - 12| < \epsilon$, whenever $0 < |x -3 | < \delta$.  

##### Proof
Let $\epsilon \in \mathbb{R}^+$ be given.   
Choose $\delta = \frac{\epsilon}{4}$. Now, if $0 < |x - 3| < \frac{\epsilon}{4}$, then $|4x - 12| = 4 | x - 3| < 4\cdot \frac{\epsilon}{4} = \epsilon$  
So that $|4x - 12 < \epsilon$ as desired. 

### $\exists \forall$

To prove a statement of the form $\exists x \in S \ \ \forall y \in T \ \ P(x, y)$, we carefully choose $x \in S$ and try to show that $\forall y \in T$, $P(x, y)$ holds.

#### Example
Prove that $\exists x \in \mathbb{Z}$ such that $\forall y \in \mathbb{R}, \ xy \in \mathbb{Z}$. 

##### Proof
Put $x = 0\in \mathbb{Z}$, $\forall y \in \mathbb{R}, x\cdot y = 0 \cdot y = 0 \in \mathbb{Z}$, as desired.  

Changing the order of mixed quantifiers changes the meaning of the statement.

### Epsilon Delta Definition of Limit
We say $\lim_\limits{x\to c} f(x) = L$ if $\forall \epsilon \in \mathbb{R}^+ \exists \delta \in \mathbb{R}^+$ such that $(0 < |x - c| < \delta) \implies (|f(x) - L|) < \epsilon$

### Triangle Inequality
$$ \forall x, y \in \mathbb{R}, | x + y | \le |x| + |y|$$

### Proposition
Suppose $\lim\limits_{x\to c} f(x) = L$ and $\lim\limits_{x \to c} g(x) = M = L$, then $\lim\limits_{x \to c} \left( f(x) + g(x) \right) = \lim\limits_{x\to c} f(x) + \lim\limits_{x \to c} g(x)$

#### Proof
We want $\forall \epsilon \in \mathbb{R}^+ \exists \delta \in \mathbb{R}^+$, so that $(f + g)(x) - (L + M) < \epsilon$ whenever $ 0 < | x -c < \delta$. We let $\epsilon \in \mathbb{R}^+$ be given.   

Since $\lim\limits_{x \to c} f(x) = L$, $\exists \delta \in \mathbb{R}$, so that $f(x) -L < \frac{\epsilon}{2}$ whenever $0 < |x - c| < \delta_1$
Since $\lim\limits_{x \to c} f(x) = M$, $\exists \delta \in \mathbb{R}$, so that $f(x) -M < \frac{\epsilon}{2}$ whenever $0 < |x - c| < \delta_2$  

Let $\delta = min(\delta_1, \delta _2$
$$  \mid (f(x) + g(x)) - (L +M) \mid = | f(x) + g(x) - L - M| $$
$$| (f(x) - L) + (g(x) - M)| \le | f(x) - L| + | g(x) - M| < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon $$

## 3.1: Mathematical Induction
### Weak Induction Law
Suppose $S \subseteq \mathbb{N}$ has the following 2 properties
1. $1 \in S$
2. $n \in S \implies n + 1 \in S$

Then $S = \mathbb{N}$

#### Proof
Let $T$ = set of positive integers NOT in $S$  
Suppose BWOC, that $T \neq \emptyset$    
$T \subseteq \mathbb{N}$, so by the Well-Ordering Principle, $T$ has a least element, $m$.  
By 1. $m \neq 1$, so $m > 1$. Then $m - 1 \in \mathbb{N}$  
$m -1 < m$, and $m$ is the least element of $T$, so $m -1 \in S$  
By 2. $(m - 1) + 1 \in S$, i.e. $m \in S$, but this contradicts our choice of $m$.  
So we must have that $T$  is empty, and $S = \mathbb{N}$  

### Example 1
* Prove that the following is true:
$$ \sum_{i=1}^{n} \frac{n(n+1)}{2} \ \ \forall n \in \mathbb{N}$$

* **Base Case**: $n = 1$
$$ \sum_{n=1}^{1} i = 1 = \frac{1 \cdot (1 + 1)}{2} = \frac{2}{2} = 1$$

  so the result is true when n = 1

* **Inductive Hypothesis**: Suppose that $ \sum_{i=1}^{m} i = \frac{m(m+1)}{2}$ for some $m \in \mathbb{N}$
  * We will prove that $\sum_{i=1}^{m+1} i = \frac{(m+1)((m+1) + 1)}{2} = \frac{(m+1)(m+2)}{2}$

  $$ \sum_{i=1}^{m+1} = \left( \sum_{i=1}^{m} i \right) + (m+1) = \frac{m(m+1)}{2} + (m+1) = \frac{(m+1)(m+2)}{2}$$
  * So by induction $ \sum_{i=1}^{n} i = \frac{n(n+1)}{2} \ \ \forall n \in \mathbb{N} $

### Example 2
* Prove that for all integers $n$ with $n \ge 4$, we have $2^n < n!$  
* We proceed by induction
* **Base Case:** $n = 4$
$$ 2^4 = 16$$
$$ 4! = 1 \cdot 2 \cdot 3 \cdot 4 = 24$$

* **Inductive Hypothesis**: Suppose that $2^m < m!$ for some integer $m \ge 4$.  
* We show that $2^{m+1} < (m+1)!$
$$ 2^{m+1} = 2^m \cdot 2^1 < m! \cdot 2 \underbrace{<}_{\text{since } m \ge 4 \text{, so } 2 < m+1} m! \cdot (m+1) = (m+1)!$$
* So by induction, $2^{n} < n!$ for all integers $n \ge 4$

### Strong Induction Law
Let $S$ be a subset of $\mathbb{N}$, and suppose $S$ has the following true properties:
1. $1 \in S$
2. $\left( \\{1, 2, 3, 4 \ldots n \\} \subseteq S \right)  \implies n + 1\in S$
  Then $S = \mathbb{N}$

#### Proof
Let $T  = \\{ k \in \mathbb{N}: \\{1, 2, 3, 4 \ldots k\\} \subseteq S\\}$  
(If $k \in T$, then $k \in S$, i.e. $T \subseteq S$)   
$1 \in S$, so $\\{1\\} \subseteq S$, and so $1 \in T$  
Now if $k \in T$, then $\\{1, 2, 3 \ldots k \\} \subseteq S$  
So by 2. $k + 1 \in S$
But then $\\{1, 2, 3 \ldots k , (k+1)\\} \in S$, so $k + 1 \in T$  
So $1 \in T$ and $(k \in T) \implies (k+1 \in T)$. So by Weak Induction, $T= \mathbb{N}$. It follows that $S=\mathbb{N}$

The difference between Weak Induction and Strong Induction is that Weak Induction only assumes $P(n)$ to be true and then shows that $P(n+1)$. However, Strong Induction has a "stronger" assumption by assuming that $P$ is true for all elements before $n$. Strong Induction assumes that $P(1), P(2), ...P(n)$ are all true. Then Strong Induction shows that $P(n+1)$ is true based on this assumption.

### Proposition
Let $n \in \mathbb{N}, \ n \neq 1$. Then $n$ is a product of prime numbers. 

#### Proof
* **Base Case**: $n = 2$
$2$ is prime, so $2$ is its own prime factorization.

* **Inductive Hypothesis**: Suppose the numbers $2, 3, 4, 5, 6\ldots m $ are all products of primes. We must show that $m + 1$ is also a product of primes.  

* Since $m + 1 > 1$ either $m+1$ is prime or $m+1$ is composite.  
* If $m+1$ is prime, it is its own prime factorization.
* Else $m+1$ is composite. 
$$ \exists a, b \in \mathbb{N} \ \ s.t. m + 1 = ab $$
$$ a \in \\{2, 3, 4, \ldots m\\}$$
$$ b \in \\{2, 3, 4, \ldots m\\}$$
* By IH (Inductive Hypothesis), $ a = \prod_{i=1}^{s} p_i$ and $b = \prod_{j=1}^{t} q_j$ where each $p_i$ and $q_j$ is prime. 
$$ m+1 = ab = \left( \prod_{i=1}^{s} p_i  \right) \left( \prod_{j=1}^{t} q_j \right) $$

This is an example of where strong induction is useful and not weak.


## 4.1: The Language of Sets
* A Set is a collection of objects
  * Order doesn't matter
  * No duplicate elements
* $x \in A$ means $X$ is an element of $A$
* $\text{#}A$ is the cardinality (# of elements)

### Set Builder Notation
$$ \\{varabie: condition\\} $$
$$ \\{x \in A| P(x)\\} $$

### Subset
If $A$ and $B$ are sets, we write $A \subseteq B$ if $\forall x \in A, x \in B$

$$ A \subseteq B \land B \subseteq A \equiv A= B $$

$A \not\subseteq B$ means $\exists x \in A \ s.t. \  x \notin  B$

If we want to prove $A \subseteq B$, then we can use the following skeleton:
Let $x\in A$   

Then check that $x$ also satisfies the membership criteria of $B$
Hence $x \in B$


#### Example
1. Let $A = \\{x \in \mathbb{Z}: \exists a \in \mathbb{Z}$ so that $x = a^2\\}$   
Let $B = \\{x \in \mathbb{Z}: x \equiv 0 \pmod 4 \lor x \equiv 1 \pmod 4 \\}$  
Prove $A \subseteq B$  
Let $x \in A$. Then $x\in \mathbb{Z}$, and $ \exists a \in \mathbb{Z}$ so that $ x = a^2$.  
By the division algorithm, we can write $a = 4q + r, \ \  q \in \mathbb{Z}, \ \ r \in \\{0, 1, 2, 3\\}$  
If $r = 0$, then $x = a^2 = \left( 4q \right)^2 = 4(4q^2) + 0$, so $x$ leaves remainder $0$ on division by $4$  
If $r = 1$, then $x = a^2 = \left( 4q  + 1\right)^2 = 4(4q^2 + 2q) + 1$, so $x$ leaves remainder $1$ on division by $4$  
If $r = 2$, then $x = a^2 = \left( 4q  + 2\right)^2 = 4(4q^2 + 4q + 1) $, so $x$ leaves remainder $0$ on division by $4$  
If $r = 3$, then $x = a^2 = \left( 4q  + 3\right)^2 = 4(4q^2 + 6q + 2) + 1 $, so $x$ leaves remainder $1$ on division by $4$  

    In each case $x \equiv_0 \pmod 4 \lor x \equiv 1 \pmod 4$. Thus $x \in B$, and it follows that $A \subseteq B$

2. Let $A = \\{x \in \mathbb{Z}: \exists a \in \mathbb{Z}$ so that $x = a^2\\}$   
    Let $B = \\{x \in \mathbb{Z}: x \equiv 0 \pmod 4 \lor x \equiv 1 \pmod 4 \\}$  
    Prove $B \not\subseteq A$  

    Consider $32 \in \mathbb{Z}$  
    $ 32 = 4(8) + 0 $, so $32 \equiv 0 \pmod 4$, and we see that $32 \in B$  
    $5^2 = 25 < 32$, and $6^2 = 36 > 32$, so $5 < \sqrt{32} < 6$, and $32 \not\subseteq A$

    3. Let $A$ and $B$ be sets. $A = B$, if $(A \subseteq B) \land \\{B \subseteq A\\}$
    Equivalent to $x \in A \\iff x \in B $  
    Let $C = \\{x \in \mathbb{Z}: \text{x is odd}\\} $ 
    Let $D = \\{x \in \mathbb{Z}: x \equiv 1 \pmod 4 \lor x \equiv 3 \pmod 4\\} $ 
    Prove $C = D$  

    x \in \mathbb{Z}, \$ and $\exists x = 2q + 1$. Prove that $x = 4t + 1 \lor x = 4+3$. Suppose by BWC, suppose that $x$ does not leave remainder 3 or 1. In the end, $x$ is found to be even, which is a contradiction since $x$ is supposed to be odd.

    Prove the converse:
* Let $x \in D$. Then $\forall \mathbb{Z}$ and $ x \equiv 1 \pmod 4 \lor x \equiv 3 \pmod 4$
* If $x \equiv 1 \pmod 4$, then $x = 4t+1$, for some $t \in 2$
* $x$ is still odd
* If $x \equiv 3\pmod 4$ and $x =4t + 3$, for some $t \in \mathbb{Z}$, $x$ is still odd. In both cases, $x \in C$

### Proposition
Let $A, B, C$ be sets.  
Suppose $A \subseteq B \land B \subseteq C$. Is it true that $A \subseteq C$?

### What Sets Can't Be
Let $S$ be a set  
Call $S$ normal if $S \not\in  S$  
Let $X = \text{set of all normal sets}$    
Is $x$ itself normal?

## Midterm 1 Review
### Problem 2
Prove that $6 | 13^n - 7^n$  

#### Inductive Hypothesis
#####  Strong Induction
Assume that for $\text{ } k = 1, 2, 3 \ldots m, \ \ 6 | 13^k - 7^k$, 
#####  Weak Induction
Assume that for some $ m \in \mathbb{N}, \ \ 6 | 13^m - 7^m$  
   
Show that $6 | 13^{m+1}- 7^{m+1}$

### Problem 3
Show by induction that $\forall n \in \mathbb{N} \ \ \sum_{i=1}^{n} i^2 = \frac{n(n+1)\left( 2n+1 \right) }{6}$  

#### Base Case
$$ \sum_{i=1}^{1} i^2 = 1^2 = 1, \ \ \frac{1(1+1)(2(1) + 1}{6 }= 1$$


#### Inductive Hypothesis
##### Weak Induction
Suppose that for some $m \in \mathbb{N}, \ \ \sum_{i=1}^{m} i^2 = \frac{m(m+1)(2m+1)}{6}$  
We will prove that $\sum_{i=1}^{m+1} i^2 = \frac{(m+1)(m+2)(2m+3}{6}$

## 4.2: Set Operations
Let $A$ and $B$ be sets.

### Union
$$A \cup B = \\{x: x \in A \lor x \in B\\} $$

Commutative since or is commutative

### Intersection
$$ A \cap B = \\{x: x \in A \land x \in B\\}$$

Commutative since and is commutative

### Relative Complement or Set Difference
$$ A - B = \\{x: x \in A \land x \neq B\\}$$

Not commutative

### Example
Let $A = \\{0, \pi e, i, 1\\}$  
Let $B = \\{\pi, e, \sqrt{2}, \sqrt{3} \\}$

a. $A \cup B = \\{0, \pi, e, i, 1, \sqrt{2} , \sqrt{3} \\}$
b. $ A \cap B = \\{\pi, e\\} $
c. $ A - B  = \\{0, i, 1\\}$

### Universal Set
$U - A = A^{C}$

### Proposition
1. $A \cup B = B \cup A$
2. $a \cap B = B \cap A$
3. $(A \cup B)\cup C = A \cup (B\cup C)$
4. $(A \cap B) \cap C = A \cap (B\cap C)$
5. $A \cap \emptyset = \emptyset$
6. $A \cup \emptyset = A$
7. $A \cup (B\cap C) = (A \cup B) \cap (A \cup C)$
8. $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$

#### Proof of 8
$$ A \cap (B \cup C) = \\{x: x \in A \land x \in B \cup C\\}$$
$$ = \\{x: x \in A \land (x \in B \lor x \in C)\\}$$
$$ = \\{x: (x \in A \land x \in B) \lor (x \in A \land x \in C)\\}$$
$$ = (A \cap B) \cup (A \cap C)$$

### Cardinality
If $A$ and $B$ are finite sets, then $\text{#}(A \cup B) = \text{#} A + \text{#} B - \text{#} (A \cup B)$

### Cartesian Product
The Cartesian product $A \cross B$:
$$ A \cross B = \\{(a, b): a \in A, b \in B\\}$$

### Power Set
If $X$ is a set, then $P(X) = \\{A: A \subseteq X\\}$ is called the **power set**

### Example
$$x = \\{a, b\\}$$
$$P(X) = \\{\emptyset, \\{a\\}, \\{b\\}, \\{a, b\\}\\}$$

#### Proposition
Let $A$ and $B$ be sets.
$$ (A \subseteq B) \iff \left( P(A) \subseteq P(B) \right)  $$

Proof:

Prove $(A \subseteq B) \implies \left( P(A) \subseteq P(B) \right)$
$$ C\in P(A) \implies C \subseteq A $$
$$ A \subseteq B\implies C \subseteq B \text{     by transitivity}$$
$$ C \subseteq B \implies C \in P(B)$$

Prove the converse
$$ A \subseteq A \implies A \in P(A)$$
$$ A \in P(B) \implies A \subseteq B $$

### DeMorgan's Laws
1. $ A - (B \cup C) = (A - B) \cap (A - C) $
2. $A - (B \cap C) = (A - B) \cup (A - C)$

#### Proof of 1
$$ x \in A \land \left( x \notin \left( B \cup C \right)  \right) $$
$$ x \in A \land \neg\left( x \in B \lor x \in C \right) $$
$$ x \in A \land x \notin B \land x \notin C$$
$$ \left( x \in A \land x \notin B \right) \land \left( x\not\in  C \land x \in A \right) $$
$$ A - B \cap A - C$$

Converse
$$ \left( A - B \right) \cap \left( A - C \right) $$
$$ x \in \left( A - B \right) \land x \in \left( A - C \right) $$
$$ x \in A \land x \not \in B \land x \in A \land x \notin C$$
$$x\in A \land \neg\left( x \in b\lor x \in C \right) $$
$$ x \in A \land x \not\in  \left( B \cup C \right) $$
$$ A - B\cup C$$

## 4.3: Arbitrary Unions and Intersections
$$ \left( A \cup B  \right) \cup C = A \cup \left( B \cup C \right) $$
$$ \left( A \cap B \right)  \cap C = A \cap \left( B \cap C \right) $$
so we can just write $A \cap B \cap C$ and $A \cup B \cup C$ without parentheses.

### Definitions
Let $A_1, A_2, A_3, \ldots, A_n, \ \ \ n \in \mathbb{N}$ be sets
1. $\bigcap_{i=1}^{n} A_i = A_1 \cap A_2 \cap A_3 \cap \ldots \cap A_n $
1. $\bigcup_{i=1}^{n} A_i = A_1 \cup A_2 \cup A_3 \cup \ldots \cup A_n $

### Proposition
Let $n \in \mathbb{N}$, and $B_1, B_2, B_3, \ldots B_n$ be sets.
1. $A \cap \left( \bigcap_{i=1}^{n} B_i \right) = \bigcap_{i=1}^{n} \left( A \cap B_i \right) $
2. $A \cup \left( \bigcup_{i=1}^{n} B_i \right) = \bigcup_{i=1}^{n} \left( A \cup B_i \right) $
3. $A - \left( \bigcup_{i=1}^{n} B_i \right) = \bigcap_{i=1}^{n} \left( A - B_i \right) $
4. $A - \left( \bigcap_{i=1}^{n} B_i \right) = \bigcup_{i=1}^{n} \left( A - B_i  \right) $

#### Proof of 2
Base Case: $n = 1$
$$ \bigcap_{i=1}^{1} \left( A \cup B_i \right) = A \cup B_1 = A \cup \left( \bigcap_{i=1}^{1} B_i \right) $$

Inductive Hypothesis:  
Suppose that for some $m \in \mathbb{N}$, $A \cup \left( \bigcap_{i=1}^{m} B_i \right) $ holds  
Let $B_1, B_2, B_3, \ldots B_n$ be sets
$$ A \cup \left( \bigcap_{i=1}^{m+1} B_i \right) = A \cup \left( \bigcap_{i=1}^{m} B_i \cap B_{m+1} \right) $$
$$ A \cup \left( \bigcap_{i=1}^{m} B_i \right) \cap \left( A \cup B_{m+1} \right) $$
$$ \bigcap_{i=1}^{m} \left( A \cup B_i \right) \cap \left( A \cup B_{m+1} \right) = \bigcap_{i=1}^{m+1} \left( A \cup B_i \right)  $$

## 8.2: 
Recall: Let $A$ be a set. $\forall n \in \mathbb{N}$, let $I_n = \\{1, 2, 3, ...n\\}$
1. We say $A$ is finite if $A = \emptyset$ or $\exists n \in N \ s.t. \ \exists f: A \rightarrow I_n$ (bijection)
$$\\# A = 0 \text{ or } \\#A = n$$

2. Every subset of a finite set is finite.
3. If $A$ and $B$ are finite sets, and $A \cup B = \emptyset$, then $\\#(A \cup B) = \\#A + \\#B$

### Pigeonhole Principle
If $n +1 $ or more pigeons are placed into $n$ pigeonholes, then at least one pigeonhole will contain more than 1 pigeon

#### Example 1
Choose 5 points interior to a 2m by 2m square. Prove that among these 5 there is a pair such that the distance between the two points in the pair is $\le \sqrt{2}$ m.

**Answer**: Divide square into four $1 \cross 1$ square. Notice that there must be one square with 2 points. The greatest distance between any two points in one of the sub squares is just the diagonal $\sqrt{2}$.

#### Example 2
Show there is a multiple of $7$ whose decimal digits are all 1's or 0's  

Consider $1, 11, 111, 1111, 11111, 111111, 1111111, 11111111$  
2 numbers on this list must leave the same remainder upon division by $7$

Say there are 

$$ a_j = \underbrace{111...1}_{\text{j-ones}} $$

$$ a_k = \underbrace{111...1}_{\text{k-ones}} \ \ \ \ k > j$$  

Then $7 | a_k - a_j$ since $a_k \equiv a_j \mod 7$  
Thus the $a_k - a_j$ have only 0 and 1 as digits.

1. Suppose $A_1, A_2, A_3, ..., A_n$ are pairwise disjoint sets ($A_i \cap A_j = \emptyset, \text{ whenever } i \neq j$)  
Then $\\#\left(\cup_{i=1}^{n} A_i\right) = \sum_{i=1}^{n} \left(\\#A_i\right)$

2. Let $A$ and $B$ be finite sets. Then $\\# (A \cup B) = \\#A + \\#B - \\#(A \cap B)$

$$ \\#(A \cross B) = (\\#A) \cdot (\\#B)$$
