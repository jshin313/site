---
title: "Calculus 2"
publishdate: 2021-01-20
lastmod: 2021-02-15
draft: false
toc: true
tags:
  - notes
  - college
---

## Appendix E: Summation 
Let m and n be positive integers with $n \geq m$

$$ a_m, a_{m + 1}, a_{m + 2}, ... , a_n \in \mathbb{R} $$

### Summation Notation:
$$ \sum_{i=m}^{n} a_i = a_m + a_{m + 1} + a_m + a_{m + 1} + a_{m + 2} + ... + a_n$$

### Examples:

$$ \sum_{t = 1}^{3} \frac{1}{t} = \frac{1}{1} + \frac{1}{2} + \frac{1}{3}  = \frac{11}{6} $$

### Properties of Summation
Let m and n be positive integers, where $n \geq m$. Let $c \in \mathbb{R}$.

Let $a_m, a_{m+1}, a_{m + 2}, ... a_n \in \mathbb{R}$  
Let $b_m, b_{m+1}, b_{m + 2}, ... b_n \in \mathbb{R}$  

1. $$ \sum_{i = m}^{n} (ca_i) = c \sum_{i = m}^{n} (a_i)$$

2. $$ \sum_{i = m}^{n} (a_i + b_i) = \sum_{i = m}^{n} (a_i) + \sum_{i = m}^{n} (b_i) $$

3. $$ \sum_{i = m}^{n} (a_i - b_i) = \sum_{i = m}^{n} (a_i) - \sum_{i = m}^{n} (b_i) $$

4. $$\sum_{i=1}^{n} c = c \cdot n$$
  $$\sum_{i=m}^{n} c = c \cdot (n - m + 1)$$

### Common Summation Formulas:
#### 1.
$$ \sum_{i = 1}^{n} i = \frac{n(n + 1)}{2}$$

  Proof: 
  $$ \text{First note that }$$ 
  $$ 2 \sum_{i = 1}^{n} = \sum_{i = 1}^{n} + \sum_{i = 1}^{n} $$
  $$ = (1 + 2 + 3 + 4 + ... (n - 1) + n) + (n + (n - 1) + (n - 2) + 4 + 3 + 2 + 1) $$
  $$ = \underbrace{(n + 1) + (n + 1) + (n + 1) ... (n + 1)}_{n \text{ times}} $$

#### 2. Telescoping Sum Formula
  $$ \sum_{i = 1}^{n} (a_{i + 1} - a_i) $$
  $$ = (a_2 - a_1) + (a_3 - a_2) + (a_4 - a_3) ... (a_n - a_{n - 1}) + (a_{n + 1} - a_n) $$
  $$ = - a_1 + a_{n + 1} = a_{n + 1} - a_{1} $$

Similarly:
$$ \sum_{i = 1}^{n} (a_{i} - a_{i - 1}) = a_{n} - a_0$$

#### 3. 
$$ \sum_{i = 1}^{n} i^2 = \frac{n(n + 1)(2n + 1)}{6} $$

  Proof :
  Use telescoping formula to get the following:
  $$ \sum_{i = 1}^{n} ((i + 1)^3 - i^3) = (n + 1)^3 - 1^3 = n^3 + 3n^2 + 3n $$
  But also:
  $$ \sum_{i = 1}^{n} ((i + 1)^3 - i^3) = \sum_{i = 1}^{n} (i^3 + 3i^2 + 3i + 1 - i^3) = \sum_{i = 1}^{n} (3i^2 + 3i + 1)$$
  $$ =  \sum_{i = 1}^{n} (3i^2) + \sum_{i = 1}^{n} (3i) + \sum_{i = 1}^{n} 1$$
  $$ =  3 \sum_{i = 1}^{n} (i^2) + 3 \sum_{i = 1}^{n} (i) + n $$
  $$ =  3 \sum_{i = 1}^{n} (i^2) + 3 \frac{n(n + 1)}{2} + n $$

$$ \iff 3 \sum_{i = 1}^n (i^2) = (n^3 + 3n^2 + 3n) - n - \frac{3 n^2 + 3n}{2}$$
$$ \iff 3 \sum_{i = 1}^n (i^2) = \frac{(2\cdot n^3 + 2 \cdot 3n^2 + 2\cdot 3n)}{2} - \frac{2n}{2} - \frac{3 n^2 + 3n}{2}$$
$$ \iff 3 \sum_{i = 1}^n (i^2) = \frac{(2n^3 + 6n^2 + 6n)}{2} - \frac{2n}{2} - \frac{3 n^2 + 3n}{2}$$
$$ \iff 3 \sum_{i = 1}^n (i^2) = \frac{(2n^3 + 3n^2 + n)}{2} $$
$$ \iff \sum_{i = 1}^n (i^2) = \frac{n(2n+1)(n+1)}{6} $$

#### 4. 

$$ \sum_{i = 1}^{n} i^3 = \left[\frac{n(n + 1)}{2}\right]^2$$

### Examples Using Sum Formula
1. Evaluate
  $$ \sum_{i = 1}^{5} (4i + 2)$$
  $$ \sum_{i = 1}^{5} (4i + 2) = \sum_{i=1}^{5}(4i) + \sum_{i=1}^{5}(2)$$
  $$ = 4 \sum_{i = 1}^{5} i + \sum_{i = 1}^{5} 2 = 4 \frac{5 (6)}{2} + 5(2) $$
2. Evaluate using telescoping sum formula
$$ \sum_{i = 1}^{5} (2^i - 2^{i - 1}) = 2^5 - 2^0$$

3. More Complicated Example
$$ \lim_{n\to\infty} \sum_{i = 1}^{n} \frac{8}{n} \frac{i^3}{n^3} $$
$$ = \lim_{n\to\infty} \sum_{i = 1}^{n} \frac{8i^3}{n^4} $$
$$ = \lim_{n\to\infty} \frac{8}{n^4} \sum_{i = 1}^{n} i^3 $$
$$ = \lim_{n\to\infty} \frac{8}{n^4} \frac{n^2 (n+1)^2}{4} $$
$$ = \lim_{n\to\infty} \frac{2 (n^2 + 2n + 1)}{n^2} $$

## 5.1: Sums

### Riemann Sums
$$ x_i = a + i \Delta x$$
$$ c_i \in [x_{i-1}, x_i]$$
$$ C_n = \\{c_1, c_2, c_3, ... c_n\\}$$

Divide [a, b] into n equal subintervals with endpoints a = $x_0 < x_1 < x_2 < ... < x_n = b$ Each subinterval has length $\frac{b-a}{n} = \Delta x $  

Define $$ R_n (f, C_n) = \sum_{i = 1}^{n} f(c_i) \Delta x$$

If $lim_{n\to\infty} (R_n(f, C_n))$ exists and is the same regardless of how $C_n$ is chosen, $f$ is integrable on [a, b] and we define the following:
$$ \int_{a}^{b} f(x) \, dx = \lim_{n\to\infty} (R_n (f, C_n))$$

### Special Riemann Sums

#### The n-th Right-Endpoint Sum
Choose $c_i$ to be the right-endpoint  
Set $c_i = x_i$  
$$ R_n = \sum_{i=1}^{n} f(x_i) \Delta x$$

#### The n-th Left-Endpoint Sum
Choose $c_i$ to be the left-endpoint  
Set $c_i = x_{i - 1}$  
$$ R_n = \sum_{i=1}^{n} f(x_{i-1}) \Delta x$$

#### The n-th Left-Endpoint Sum
Choose $c_i$ to be the midpoint  
Set $c_i = \frac{x_{i - 1} + x{i}}{2}$  
$$ R_n = \sum_{i=1}^{n} f\left(\frac{x_{i - 1} + x_{i}}{2}\right) \Delta x$$

### Examples
#### Example 1
$f(x) = cos\left(\frac{x}{4}\right) + 2$  
Interval $[0, 8\pi]$  
Let n = 4

$$ \Delta x = \frac{8\pi - 0}{4} = 2\pi$$
$$x_0 = 0, \\; x_1 = 2\pi, \\; x_2 = 4\pi, \\; x_3 = 6\pi,\\; x_4 = 8\pi $$

$$ R_4 = \sum_{i=1}^{4} f(x_i) \Delta x = \sum_{i=1}^{4} f(x_i) 2\pi =  2\pi \sum_{i=1}^{4} f(x_i) = 2\pi [f(x_1) + f(x_2) + f(x_3) + f(x_4)]$$
  

$$ L_4 = \sum_{i=1}^{4} f(x_{i-1}) \Delta x = \sum_{i=1}^{4} f(x_{i-1}) 2\pi =  2\pi \sum_{i=1}^{4} f(x_{i-1}) = 2\pi [f(x_0) + f(x_1) + f(x_2) + f(x_3)]$$

#### Example 2 
$f(x) = 2x + 1$   
$$ n = 5$$ 
$$ \Delta x = \frac{b - a}{n} = \frac{10 - 0}{5} = 2 $$
$$ x_0 = 0,\\; x_1 = 2,\\; x_2 = 4,\\; x_3 = 6,\\; x_4 = 8,\\; x_5 = 10$$
Note: $m_i$ is the midpoint
$$ m_1 = 1,\\; m_2 = 3,\\; m_3 = 5,\\; m_4 = 7,\\; m_5 = 9$$

$$ M_5 = \sum_{i=1}^{5} f\left(\frac{x_{i-1} + x_i}{2}\right) \Delta x = \sum_{i=1}^{5} f(m_i) \Delta x = \sum_{i = 1}^{5} f(m_i) 2 $$

### Remarks
A = area under the graph of $f$ on [a, b]  
1. If $f$ is increasing, then $R_n \ge A$
2. If $f$ is increasing, then $L_n \le A$

If $f$ is decreasing, you get the opposite of the above

### More Examples
#### Example 1
Find a region where area is given by 
$$ \lim_{n\to\infty} \left(\sum_{i=1}^{n}\left[\left(\frac{5}{n}\right)\left(3 + i \left(\frac{5}{n}\right)\right)^3\right] \right) $$

$$ \Delta x= \left(\frac{5}{n}\right) $$
$$  a = 3 $$
$$ f(x) = x^3$$
$$ \frac{b - a}{n} = \frac{5}{n} \text{ and } a = 3 \text{ , so } \frac{b - 3}{n} = \frac{5}{n} \implies b = 8 $$
$$ \[a, b\] = \[3, 8 \] $$

## 5.3: Fundamental Theorem of Calculus Pt 2
Let $f$ be continuous on $[a, b]$. Let $F$ be an antiderivative of $f$ on $[a, b]$ (i.e. $F(x) = f(x)\\; \forall x \in [a, b] $). Then the following is true:

$$ \int_{a}^{b} f(x) \\; dx = F(b) - F(a) $$

Proof: f(x) is continuous on $[a, b]$. Use riemann sums and get a telescoping sum. Use Mean Value Theorem

### Fundamental Theorem of Calculus Pt 1
Let f be continuous on $[a, b]$

## 5.5 
If f is even, then $$\int_{-b}^{b} f(x) \\;dx =  2 \int_{0}^{b} f(x) \\; dx$$

If f is odd, then $$\int_{-b}^{b} f(x) \\;dx =  0$$

## 6.1: Area between Two Curves
$$ A = \int_{a}^{b} (g(x) - f(x))\\;dx $$
where $\forall x \\; g(x) > f(x) $

## 6.2: Volume of Revolved Solid
$$ V = \int_{a}^{b} A(x) \\; dx $$ where $A(x)$ is the area of cross section at x.  
  
For the volume of a solid of revolution (disk method):
$$ V = \int_a^b f(x)^2 \pi\\; dx$$

A more general formula for a solid of revolution (washer method):
$$ V = \int_a^b \pi (R(x)^2 - r(x)^2) \\; dx $$
where $R(x)$ is the distance between the axis of revolution and the upper curve (farther from axis of revolution) and $r(x)$ is the distance between the axis of revolution and the curve that's closer to the axis of revolution.

## 6.5
Average value from a to b:
$$ f_{avg} = \frac{1}{b - a} \int_{a}^{b} f(x) \\; dx $$

## 7.1: Integration by Parts
### Formula
Let u and v be differentiable functions
$$ \int u(x) v'(x) \\; dx = u(x) \\; v(x) - \int v(x) u'(x) \\;dx$$
or 
$$ \int u dv = uv - \int v\\;du$$

### Derivation
Use Product rule
$$ \frac{d}{dx} \left(u(x) \cdot v(x)\right) = u(x) \cdot v'(x) + u'(x) \cdot v(x)$$
$$ u(x) \cdot v(x) = \int u(x) \cdot v'(x) + \int u'(x) \cdot v(x)$$

### Notes on using Integration by Parts

Note: Integration by parts is useful when $\int v du$ is easier to compute than the $\int u dv$. So choosing u is very important. You want du to be "simpler" than u.

How to choose u in Integration by Parts (Ranked from best to worst)
1. Logarithmic Functions
2. Inverse Trig Functions
3. Polynomials
4. Exponential Functions (Just leads to the same exponential and a constant)
5. Trigonometric Functions (Often just leads to another trig function)

### Examples

#### Example 1
$$ u = ln(x), \\; du = 1 \cdot dx$$
$$ du = \frac{1}{x}  dx, \\; v = x$$
$$ \int_{1}^{e^3} ln(x) \cdot 1 \\;dx = \left. uv \right\vert_{1}^{e^3} - \int_{1}^{e^3} v du$$
$$ = \left. x ln(x) \right\vert_{1}^{e^3} - \int_{1}^{e^3} x \left(\frac{1}{x}\right) dx$$

## 7.2: Trigonometric Functions Integration Techniques
### Odd powered Sin/Cos Trig Integrals
If $m$ is odd, then $m = 2k + 1, k \in \mathbb{Z}$
$$ \int \sin^m (x) \cos^n(x) dx = \int \sin ^{2k+1}(x) \cos^n(x)dx $$
$$ = \int \sin^{2k}(x)\cos^n(x)\sin(x)dx = \int (\sin^2(x))^k \cos^n(x) \sin(x)dx $$
$$ = \int (1 - \cos^2(x))\cos^n(x)\sin(x)$$

Use u substitution to solve

### Even Powered Sin/Cos Trig Integrals

#### Helpful Identities and Formulas
$$ \int \sin(qx)\\\; dx = - \frac{\cos(qx)}{q} + C$$
$$ \int \cos(qx)\\\; dx = \frac{\sin(qx)}{q} + C$$
where q is a integer

$$ \sin^2(x) = \frac{1 - \cos(2x)}{2}$$
$$ \cos^2(x) = \frac{1 + \sin(2x)}{2}$$

#### Solving Technique
If $m \leq n$ and they're both even:
$$ \int sin^m(x) cos^n(x) dx = \int \sin^{2k}(x)\cos^n(x)dx = \int (\sin^2(x))^k cos^n(x) dx$$
$$ = \int (1 - cos^2 (x))^k cos^n(k)dx$$
After this just use the half-angle formulas and integrate

if $n \leq m$ then just make everything in terms of $sin$ and do the same thing.

## Integral of Tan
$$ \int \tan(x)dx = \ln(|\sec(x)|) + C$$
Derivation: Use u substitution and use the fact that $tan(x) = \frac{\sin(x)}{\cos(x)}$

## Integral of Sec
$$ \int \sec(x) dx = \ln(|\sec(x) + \tan(x)|) + C$$
