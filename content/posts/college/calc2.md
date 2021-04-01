---
title: "Calculus 2"
publishdate: 2021-01-20
lastmod: 2021-03-29
draft: false
toc: true
tags:
  - notes
  - college
  - math
---
 
## Appendix E: Summation 
Let m and n be positive integers with $n \geq m$

$$ a_m, a_{m + 1}, a_{m + 2}, ... , a_n \in \mathbb{R} $$

### Summation Notation
$$ \sum_{i=m}^{n} a_i = a_m + a_{m + 1} + a_m + a_{m + 1} + a_{m + 2} + ... + a_n$$

### Examples

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

### Common Summation Formulas
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

## 5.5: The Substitution Rule
If f is even, then $$\int_{-b}^{b} f(x) \\;dx =  2 \int_{0}^{b} f(x) \\; dx$$

If f is odd, then $$\int_{-b}^{b} f(x) \\;dx =  0$$

## 6.1: Area between Two Curves
$$ A = \int_{a}^{b} (g(x) - f(x))\\;dx $$
where $\forall x \\; g(x) > f(x) $

## 6.2: Volume of Solid
$$ V = \int_{a}^{b} A(x) \\; dx $$ where $A(x)$ is the area of cross section at x.  
  
For the volume of a solid of revolution (disk method):
$$ V = \int_a^b f(x)^2 \pi\\; dx$$

A more general formula for a solid of revolution (washer method):
$$ V = \int_a^b \pi (R(x)^2 - r(x)^2) \\; dx $$
where $R(x)$ is the distance between the axis of revolution and the upper curve (farther from axis of revolution) and $r(x)$ is the distance between the axis of revolution and the curve that's closer to the axis of revolution.

## 6.5: Average Value of Function
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

### Integrating Odd powers of Sin/Cos
If $m$ is odd, then $m = 2k + 1, k \in \mathbb{Z}$
$$ \int \sin^m (x) \cos^n(x) dx = \int \sin ^{2k+1}(x) \cos^n(x)dx $$
$$ = \int \sin^{2k}(x)\cos^n(x)\sin(x)dx = \int (\sin^2(x))^k \cos^n(x) \sin(x)dx $$
$$ = \int (1 - \cos^2(x))\cos^n(x)\sin(x)$$

Use u substitution to solve

### Integrating Even Powers of Sin/Cos

#### Helpful Identities and Formulas
$$ \int \sin(qx)\\\; dx = - \frac{\cos(qx)}{q} + C$$
$$ \int \cos(qx)\\\; dx = \frac{\sin(qx)}{q} + C$$
where q is a integer

$$ \sin^2(x) = \frac{1 - \cos(2x)}{2}$$
$$ \cos^2(x) = \frac{1 + \cos(2x)}{2}$$

#### Solving Technique
If $m \leq n$ and they're both even:
$$ \int sin^m(x) cos^n(x) dx = \int \sin^{2k}(x)\cos^n(x)dx = \int (\sin^2(x))^k cos^n(x) dx$$
$$ = \int (1 - cos^2 (x))^k cos^n(x)dx$$
After this just use the half-angle formulas and integrate

if $n \leq m$ then just make everything in terms of $sin$ and do the same thing.

### Integral of Tan
$$ \int \tan(x)dx = \ln(|\sec(x)|) + C$$
Derivation: Use u substitution and use the fact that $tan(x) = \frac{\sin(x)}{\cos(x)}$

### Integral of Sec
$$ \int \sec(x) dx = \ln(|\sec(x) + \tan(x)|) + C$$

### Integrating Odd Powers of Tan and Sec
Example:
$$ \int \tan^5 (x) \sec^3(x) \\; dx$$
$$ \int \tan^4 (x) \sec^2(x) \sec(x) \tan(x) \\\; dx$$
$$ \int (\sec^2 (x) - 1)^2 \sec^2(x) \sec(x) \tan(x) \\\; dx$$
$$ u = \sec(x), \\; du = \sec(x) \tan(x) dx $$
$$ = \int (u^2 - 1)^2 u^2 du $$
Solve now

### Integrating Even Powers of Tan and Sec
$$ \int sec^m (x) tan^n(x) dx = \int sec^{2j} (x) tan^n(x) dx$$
$$ = \int sec^{2j - 2}(x) tan^n(x)sec^2(x)dx = \int (sec^2(x)^{j-1} tan^n(x) sec^2(x) dx)$$
$$ = \int (tan^2(x) + 1)^{j-1} tan^n(x) sec^2(x) dx$$
$$ u = tan(x), \\; du = sec^2(x)dx$$
$$ = \int (u^2 + 1)^{j-1} u^n du$$

### Integral of Tan
$$ \int cotan(x)dx = \ln(|\sin(x)|) + C$$
Derivation: Use u substitution and use the fact that $cotan(x) = \frac{\cos(x)}{\sin(x)}$

### Integral of Sec
$$ \int \csc(x) dx = \ln(|\csc(x) - cotan(x)|) + C$$

### Integrating Powers of Cotan and Cosec
Same as tan and sec (above) except use the following
$$ \csc^2(x) = cotan^2(x) + 1$$
$$ \frac{d(cotan(x))}{dx} = - \csc^2(x)$$
$$ \frac{d(\csc(x))}{dx} = - \csc(x) cotan(x)$$

## 7.4 Integrating with Partial Fractions
If we want to integrate the following, where $P(x)$ and $Q(x)$ are polynomials,
$$ \int \frac{P(x)}{Q(x)} $$


If $degree(P(x)) \geq deg(Q(x))$ then just do long division to simplify. 

### Case I: Q(x) is the Product of Distinct Linear Factors
Once we have $deg(Q(x)) > deg(P(x))$, then we can say the following:

$$ \frac{P(x)}{Q(x)} = \sum_{i=1}^{n} \frac{A_i}{a_i x - b_i} $$ where $A_1, \\; A_2, \\; A_3,\\; ... A_n$ are constants.

Then we can integrate more easily since the following is true
$$\int \frac{A_i}{a_i x - b_i} = \frac{A_i}{a_i} ln(|a_i x - b_i|) + C $$

### Case II: Q(x) has Repeated Linear Factors
$$ \frac{P(x)}{Q(x)} = \sum_{i=1}^{n} \frac{A_i}{(a_i x - b_i)^n} $$ where $A_1, \\; A_2, \\; A_3,\\; ... A_n$ are constants.

#### Example:
$$ \int \frac{1}{x^3 (x - 1)} \\; dx$$
$$ \frac{1}{x^3 (x - 1)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x^3} + \frac{D}{x-1}$$
$$ x^3 (x-1) \cdot \frac{1}{x^3 (x - 1)} = \left(\frac{A}{x} + \frac{B}{x^2} + \frac{C}{x^3} + \frac{D}{x-1}\right) \cdot (x^3(x -1))$$
$$ 1 = Ax^2(x - 1) + Bx(x -1) + C(x-1) + Dx^3$$
$$ 1 = (A+D)x^3 + (B-A)x^2 + (C-B)x + (-C)$$
$$ 0x^3 + 0x^2 + 0x + 1 = (A+D)x^3 + (B-A)x^2 + (C-B)x + (-C)$$
\
$$ 0 = A+D$$
$$ 0 = B-A$$
$$ 0 = C-B$$
$$ 1 = -C $$
Solve for the other stuff and integrate

### Case III: Q(x) with a Prime Quadratic Factor
$Q(x)$ has a prime quadratic factor in 
$$\int \frac{P(x)}{Q(x)} \\; dx $$

The prime quadratic factor $ax^2 + bx + c$ of $Q(x)$ will contribute a partial fraction decomposition of 
$\frac{Dx+E}{ax^2 + bx + c}$

#### Example
$$ \frac{3x^2 + x}{x(x-1)(x^2 + 1)}$$
Here $x^2 +1$ is the irreducible prime quadratic factor.
$$ \frac{3x^2 + x}{x(x-1)(x^2 + 1)} = \frac{A}{x} + \frac{B}{x-1} + \frac{Cx + D}{x^2 + 1}$$

Solve for A, B, and D.

### Case IV: Q(x) has Repeated Prime Quadratic Factors
$Q(x)$ has repeated prime quadratic factors in 
$$ \int \frac{P(x)}{Q(x)} \\; dx $$

The prime quadratic factor $\left(ax^2 + bx + c\right)^n$ of $Q(x)$ will contribute a partial fraction decomposition of 
$$ \frac{D_1x+E_1}{ax^2 + bx + c} + \frac{D_2x+E_2}{ax^2 + bx + c} + \frac{D_3x+E_3}{ax^2 + bx + c} + \frac{D_nx+E_n}{ax^2 + bx + c}$$

#### Example
$$ \frac{3x-1}{x^3(x^2 + 9)^2} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x^3} + \frac{Dx + E}{x^2 + 9} + \frac{Fx + G}{(x^2 + 9)^2}$$

## 7.8: Improper Integrals

### Type I: Infinite Integrals
If the following is true:
$$ \forall t \ge a, \\, \int_{a}^{t} f(x)\\, dx$$
then, 
$$ \int_{a}^{\infty} f(x)\\, dx = \lim\limits_{t\to\infty} \int_{a}^{t} f(x)\\, dx$$
If it converges, then the limit exists.
If it diverges, then the limit does not exist and the limit is infinity or -infinity.

If both of the improper integrals on the right side of the equation converge, the following is true:
$$ \int_{-\infty}^{\infty} g(x)\\, dx = \int_{-\infty}^{a} g(x) \\, dx + \int_{a}^{\infty} g(x) \\, dx$$

#### Example
$$ \text{Evaluate } \int_{0}^{\infty} xe^{-x}\\,dx$$
If the antiderivative is not obvious, perhaps compute it first.
$$ \int xe^{-x}\\,dx = -x e^{-x} - \int (-e^{-x})\\,dx $$
$$ = -xe^{-x} + \int e^{-x} \\, dx = -xe^{-x} -e^{-x} + C$$
$$ u = x, \\, du = dx$$
$$ v = - e^{-x}, \\, dv = e^{-x} dx$$

$$ \int_{0}^{\infty} xe^{-x}\\,dx= \lim\limits_{r\to\infty} \int_{0}^{r} (xe^{-x})\\, dx = \lim\limits_{r\to\infty} \left. (-xe^{-x} - e^{-x} )\right\vert_{0}^{r} = \lim\limits_{r\to\infty}(-re^{-r} - e^{-r} + 1) $$
$$= \lim_{r\to\infty} ((-e^{-r}) (-r - 1) + 1) = \lim\limits_{r\to\infty} \left(\frac{r + 1}{e^r}  \right) + 1 = \lim\limits_{r\to\infty} \left(\frac{1}{e^r}\right) + 1 = 1$$

### Type II: Discontinuous Integrands

#### Example
Evaluate the following $$ \int_0^3 \frac{1}{(x-1)^2}$$
Since $f(x)$ has a VA at $x=1$, this integral is improper.

$$ \int_0^3 \frac{1}{(x-1)^2} dx = \int_0^1 \frac{1}{(x-1)^2} + \int_1^3 \frac{1}{(x-1)^2}$$

$$ \int_0^1 \frac{1}{(x-1)^2} = \lim\limits_{r\to1^{-}} \left(\int_0^r \frac{1}{(x-1)^2} dx\right) = \lim\limits_{r\to1^{-}} \left. \left(\frac{-1}{x-1} \right\vert_0^r\right) = \lim\limits_{r\to1^{-}} \left(\frac{-1}{r-1} + 1\right) = + \infty$$

We found $\int_0^1 \frac{1}{(x-1)^2} dx$ diverges, so we can say the whole integral diverges.

### The Comparison Test
Suppose f and g are continuous functions on $[a,\infty]$ and that $g(x) \ge f(x) \ge 0$ for all $x\ge a$

1. If $\int_a^{\infty} g(x) dx$ converges, then $\int_a^{\infty} f(x) dx$ also converges.

2. If $\int_a^{\infty} f(x) dx$ diverges, then $\int_a^{\infty} g(x) dx$ also diverges.

However, if we know $\int_a^\infty g(x)dx$ diverges, we cannot use C.T.

If we know $\int_a^\infty g(x)dx$ converges, we can't use C.T. as well.

#### Example
Determine if the integral $\int_2^\infty \frac{1}{x-sin^2(x)} dx$ converges or diverges.

Use the Comparison Test.

Let the new function be the ratio of the leading terms (term with most rapid growth) of the numerator and denominator.

$$ f(x) = \frac{1}{x-\sin^2(x)} $$
$$ g(x) = \frac{1}{x}$$ since $\sin^2(x)$ is just bounded to $[0 , -1]$.

Notice then that $\frac{1}{x-\sin^2(x)} \ge \frac{1}{x} \ge 0$

$$\frac{1}{x-\sin^2(x)} \ge \frac{1}{x} \ge 0$$

$$ \int_2^\infty \frac{1}{x} dx = \lim\limits_{r\to\infty} \left(\int_2^r \frac{1}{x}\right) = \lim\limits_{r\to\infty} \left. \left(ln(|x|)\right\vert_2^r\right)$$
$$ = \lim\limits_{r\to\infty} (ln(r) - ln(2)) = \infty$$

Since $\frac{1}{x-\sin^2(x)} dx \ge \frac{1}{x} \forall x \ge 2$ and $\int_2^\infty \frac{1}{x}dx$ also diverges, we can say that $\int_2^\infty \frac{1}{x-\sin^2(x)} dx$ also diverges by the Comparison Test.

The Comparison Test also works on Type II Improper Integrals.

## 11.1: Sequences
### Sequence
**Definition**: A sequence of real numbers whose domain is (some infinite number of the non negative integers)

Customary to write $a_n$ instead of $a(n)$

Can also be represented by recursion.

### Limits of a Sequence
**Definition**: Let $\\{a_n\\}$ be a sequence. We say that $\lim\limits_{n\to\infty} a_n = L$ if we can make the value of $a_n$ arbitrarily close to $L$ by choosing $n$ sufficiently large.

**Theorem**: Let $f$ be a function from $[1, \infty]$ to $\mathbb{R}$. Define a sequence ${a_n}$ by the formula $a_n = f(n)$. If $\lim\limits_{x\to\infty} f(x) = L$, then $\lim\limits_{n\to\infty} a_n = L$.

#### Examples
$$ \lim\limits_{n\to\infty} \left(\frac{\ln(n)}{n^2}\right)$$
$$ \lim\limits_{n\to\infty} \left(\frac{\ln(n)}{n^2}\right)=\lim\limits_{x\to\infty} \left(\frac{\ln(x)}{x^2}\right) $$
Now you can use L'Hopital's rule
$$ \lim\limits_{x\to\infty} \frac{1/x}{2x} = 0$$

Squeeze Theorem also applies as well as Limit Laws

### Limit of Sequence DNE
If $a_n > 0$ for all n and $\lim\limits_{n\to\infty \neq 0}$, then $\lim\limits_{n\to\infty} (-1)^n a_n$ Does not exist.

#### Example
$$ \lim\limits_{n\to\infty} \left(\frac{(-1)^n n}{n+3}\right)$$
Limits does not exist

### Increasing, Decreasing, Monotone
Let $\left. a_n \right\vert_{n=1}^{\infty}$ be a sequence
1. We say that the sequence is **increasing** if $a_n \le a_{n+1} \forall n$ 
2. We say that the sequence is **decreasing** if $a_n \ge a_{n+1} \forall n$ 
3. We say that the sequence is **monotone** if $a_n$ is increasing or decreasing for all n

#### Find if sequence is monotone
* You can substitute $a_{n+1}$ and see if a sequence is increasing or decreasing compared to $a_n$
* Find the derivative of $a_n$

### Upper and Lower Bounds
If S is a subset of $\mathbb{R}$
1. S is **bounded above** if there is a number, B, so that $\forall x \in S, x \le B$. B is called an upper bound of S.
2. S is **bounded below** if there is a number, B, so that $\forall x \in S, x \ge B$. B is called a lower bound of S.

#### Example
$$S = [2, 9)$$
12 is an upper bound of $S$  


9 is the least upper bound

### Axiom of Completeness
1. Any nonempty subset of $\mathbb{R}$ which is bounded above has a least upper bound.
2. Any nonempty subset of $\mathbb{R}$ which is bounded below has a greatest upper bound.

Real numbers include rational numbers + everything else to keep the number line continuous (irrational numbers)

### Monotone Convergence Theorem
Every bounded monotone sequence converges.

Proof: way too long

### Limit of Factorial Sequences

#### Limit of Factorial over Factorial
Just express the larger factorial as the smaller one

#### Limit of Exponential and Factorial
$$ \lim\limits_{n\to\infty} \frac{r^n}{n!} = 0$$ for any real number r
Proof: Use squeeze theorem for all the cases: $r < 1$, $r > 0$, $r < 0$, etc.

$$ \lim\limits_{n\to\infty} \frac{n!}{r^n} = \infty$$

## 11.2: Series

### Geometric Series
If $r$ is a real number and $r \neq 1$, a geometric sum is as follows
$$ \sum_{n=0}^{\infty} r^n$$

Nth partial sum of the series
$$ S_n = \sum_{n=0}^{N} r^n = 1 + r + r^2 + r^3 ... r^N$$

#### Geometric Sum Formula
$$ \sum_{n=0}^{\infty} r^n = \frac{1}{1-r} $$ if $|r| < 1$

### Divergence Test
If $\lim\limits_{a\to\infty} a_n \neq 0$, then $\sum_{n=1}^{\infty} a_n$ diverges.
The converse is not true.

## 11.3: The Integral Test
Assuming $a_n$ can be a continuous function, is positive, and decreasing:
$\sum_{n=1}^{\infty} a_n$ converges iff $\int_{1}^{\infty} f(x)dx$ also converges.

## The P-Test
p is a real number $$ \sum_{n=1}^{\infty} \frac{1}{n^p}$$
converges  iff $p > 1$  

Proof: Use Divergence Test for $p \ge 0$ and Integral Test

## 11.4: Comparison Tests

### Direct Comparison Test
$$ 0 \leq a_n \leq b_n$$
1. $$\text{If } \sum_{n=1}^{\infty} b_n \text{ converges, then } \sum_{n=1}^{\infty} a_n \text{ also converges}$$
2. $$\text{If } \sum_{n=1}^{\infty} a_n \text{ diverges, then } \sum_{n=1}^{\infty} b_n \text{ also diverges}$$

### Limit Comparison Test
If $a_n$ and $b_n$ are positive for all n and $$ \lim\limits_{n\to\infty} \left(\frac{a_n}{b_n}\right) = L > 0$$
Then $\sum_{n=1}^{\infty} a_n$ converges iff $\sum_{n=1}^{\infty} b_n$ converges  

If $\sum_{n=1}^{\infty} b_n$ diverges, $\sum_{n=1}^{\infty} a_n$ diverges.

#### Example
Determine if $\sum_{n=1}^{\infty} \frac{1}{n^{1+(1/n)}}$ converges or diverges.

$$ a_n = \frac{1}{n^{1+(1/n)}},\\, b_n = \frac{1}{n}$$

$$ \lim\limits_{n\to\infty} \left(\frac{a_n}{b_n}\right) = \lim\limits_{n\to\infty} \left(\frac{1}{n^{1+(1/n)} \cdot \frac{n}{1}}\right) = \lim\limits_{n\to\infty} \left(\frac{1}{n^{1/n}}\right) = \lim\limits_{n\to\infty}e^{ln(n^{-1/n})}$$
$$ = e^{(\lim\limits_{n\to\infty} -ln(n)/n)}= e^{(\lim\limits_{n\to\infty} -(1/n)/n)} = e^0 = 1 $$

  

$$b_n = \frac{1}{n}\text{ diverges with the P-test with } p = 1$$
Since $b_n$ diverges and $\lim\limits_{n\to\infty} \left(\frac{a_n}{b_n}\right) = L > 0$, $a_n$ also diverges.

## 11.5: The Alternating Series Test
If the sequence $a_n$ is a **decreasing** sequence with non-negative terms, and $\lim\limits_{n\to\infty} a_n = 0$, then $\sum_{n=1}^{\infty} (-1)^{n+1} a_n$ converges.

Proof:  
* Prove using the Monotone Convergence Theorem
* Find that the sequence is bounded and monotone for odd indexes and even indexes separately
