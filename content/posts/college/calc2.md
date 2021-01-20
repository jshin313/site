---
title: "Calculus 2"
publishdate: 2021-01-20
lastmod: 2021-01-20
draft: false
toc: true
tags:
  - notes
  - college
---

## Appendix E: Summation 
Let m and n be positive integers with $n \geq m$

$$ a_m, a_{m + 1}, a_{m + 2}, ... , a_n \in \R $$

### Summation Notation:
$$ \sum_{i=m}^{n} a_i = a_m + a_{m + 1} + a_m + a_{m + 1} + a_{m + 2} + ... + a_n$$

### Examples:

$$ \sum_{t = 1}^{3} \frac{1}{2} = \frac{1}{1} + \frac{1}{2} + \frac{1}{3}  = \frac{11}{6} $$

### Properties of Summation:
Let m and n be positive integers, where $n \geq m$. Let $c \in \R$.

Let $a_m, a_{m+1}, a_{m + 2}, ... a_n \in \R$
Let $b_m, b_{m+1}, b_{m + 2}, ... b_n \in \R$

1. $$ \sum_{i = m}^{n} (ca_i) = c \sum_{i = m}^{n} (a_i)$$

2. $$ \sum_{i = m}^{n} (a_i + b_i) = \sum_{i = m}^{n} (a_i) + \sum_{i = m}^{n} (b_i) $$

3. $$ \sum_{i = m}^{n} (a_i - b_i) = \sum_{i = m}^{n} (a_i) - \sum_{i = m}^{n} (b_i) $$

4. $$\sum_{i=1}^{n} c = c \cdot n$$
  $$\sum_{i=m}^{n} c = c \cdot (n - m + 1)$$

### Common Summation Formulas:
1. $$ \sum{i = 1}_{n} i = \frac{n(n + 1)}{2}$$

  Proof: 
  $$ \text{First note that }$$ 
  $$ 2 \sum_{i = 1}^{n} = \sum_{i = 1}^{n} + \sum_{i = 1}^{n} $$
  $$ = (1 + 2 + 3 + 4 + ... (n - 1) + n) + (n + (n - 1) + (n - 2) + 4 + 3 + 2 + 1) $$
  $$ = \underbrace{(n + 1) + (n + 1) + (n + 1) ... (n + 1)}{n \text{ times}} $$

2. Telescoping Sum Formula
  $$ \sum_{i = 1}^{n} (a_{i + 1} - a_i) $$
  $$ = (a_2 - a_1) + (a_3 - a_2) + (a_4 - a_3) ... (a_n - a_{n - 1}) + (a_{n + 1} - a_n) $$
  $$ = - a_i + a_{n + 1} = a_{n + 1} - a{1} $$

Similarly:
$$ \sum_{i = 1}^{n} (a_{i} - a_{i - 1}) = a{n} - {a_0}$$

3. $$ \sum_{i = 1}^{n} i^2 = \frac{n(n + 1)(2n + 1)}{6} $$

  Proof :
  Use telescoping formula to get the following:
  $$ \sum_{i = 1}^{n} ((i + 1)^3 - i^3) = (n + 1)^3 - 1^3 = n^3 + 3n^2 + 3n $$
  But also:
  $$ \sum_{i = 1}^{n} ((i + 1)^3 - i^3) = \sum_{i = 1}^{n} (i^3 + 3i + 3i + 1 - i^3) = \sum_{i = 1}^{n} (3i^2 + 3i + 1)$$
  $$ =  \sum_{i = 1}^{n} (3i^2) + \sum_{i = 1}^{n} (3i^2) + \sum_{i = 1}^{n} 1$$
  $$ =  3 \sum_{i = 1}^{n} (i^2) + 3 \sum_{i = 1}^{n} (i^2) + n $$

### Examples Using Sum Formula
* Evaluate
  $$ \sum_{i = 1}^{5} (4i + 2)$$
  $$ \sum_{i = 1}^{5} (4i + 2) = \sum_{i=1}^{5}(4i) + \sum_{i=1}^{5}(2)$$
  $$ = 4 \sum_{i = 1}^{5} i + \sum_{i = 1}^{5} 2 = 4 \frac{5 (6)}{2} + 5(2) $$
* Evaluate using telescoping sum formula
$$ \sum_{i = 1}^{5} (2^i - 2^{i - 1}) = 2^5 - 2^0$$

* More Complicated Example
$$ lim_{n\to\infty} \sum_{i = 1}^{n} \frac{8}{n} \frac{i^3}{n} $$
$$ = lim_{n\to\infty} \sum_{i = 1}^{n} \frac{8i^3}{n^4} $$
$$ = lim_{n\to\infty} \frac{8}{n^4} \sum_{i = 1}^{n} ^3 $$
$$ = lim_{n\to\infty} \frac{8}{n^4} \sum_{i = 1}^{n} ^3 $$
