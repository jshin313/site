---
title: "Calculus 3"
publishdate: 2021-05-07
lastmod: 2021-05-07
draft: false
toc: true
tags:
  - notes
  - college
  - math
  - calc3
---

## 12.1: Three-Dimensional Coordinate Systems

### Distance Formula for 3-Dimensions
$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}
$$
Derivation: Pythagorean Theorem

### Equation of a Sphere
Center, $C(h, k, l)$ and radius, $r$
$$ 
(x-h)^2 + (y-k)^2 + (z-l)^2 = r^2 
$$

### Exercises

#### 12.1 Problem 9
Find the lengths of the side of the triangle $PQR$. Is it a right triangle? Is it an isosceles triangle?  

$P(3, -2, -3), \ Q(7, 0, 1),\ R(1, 2, 1)$
$$
s_1 = PQ = \sqrt{(x_p - x_q)^2 + (y_p - y_q)^2 + (z_p - z_q)^2} = \sqrt{4^2 + 2^2 + 4^2} = \sqrt{36} = 6 
$$
$$
s_2 = QR = \sqrt{(x_q - x_r)^2 + (y_q - y_r)^2 + (z_q - z_r)^2} = \sqrt{6^2 + 2^2 + 0^2} = \sqrt{40} = 2\sqrt{10} 
$$
$$
s_3 = PR = \sqrt{(x_p - x_r)^2 + (y_p - y_r)^2 + (z_p - z_r)^2} = \sqrt{2^2 + 4^2 + 4^2} = \sqrt{36} = 6
$$
Isosceles Triangle  
Not a right triangle since $6^2 + 6^2 \neq 40$ (sides are not a pythagorean triplet)

#### 12.1 Problem 13
Find an equation of the sphere with center (-3, 2, 5) and radius 4. What is the intersection of this sphere with the $yz$-plane?
$$
(x-h)^2 + (y-k)^2 + (z-l)^2 = r^2 
$$
$$
(x+3)^2 + (y-2)^2 + (z-5)^2 = 4^2
$$
$$
(x+3)^2 + (y-2)^2 + (z-5)^2 = 16 
$$

The intersection with the $yz$-plane will yield a circle.

Let $r_2$ be the radius of the circle created from the intersection.

![Showing how to calculate r_2](/calc3/12.1.13.svg)

$$
r_2 = \sqrt{4^2 - 3^2} = \sqrt{7} 
$$

Thus the equation of the intersecting circle is 
$$
(z - 5)^2 + (y-2)^2 = r_2^2
$$
$$
(z - 5)^2 + (y-2)^2 = 7
$$ 

#### 12.1 Problem 15
Find an equation of the sphere that passes through the point (4, 3, -1) and has center (3, 8, 1)
$$
r = d = \sqrt{(4-3)^2 + (3-8)^2 + (-1 - 1)^2} = \sqrt{1 + 25 + 4} = \sqrt{30}
$$ 
$$
r^2 = (x-3)^2 + (y-8)^2 + (z - 1)^2 = 30
$$ 

## 12.2: Vectors
**Vector**: Quantity with both magnitude and direction (denoted *v* or $\vec{v}$ and graphically as an arrow)
* Initial Point indicated by the "tail" of the arrow and the ending point is represented by the "head" of the arrow

### Combining Vectors
* $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$
* The **Triangle Law** and **Parallelogram Law** are just ways of geometrically representing vector addition.

* **Scalar Multiplication**: If $c$ is a scalar and $v$ is a vector, then cv is just the vector, $v$ with length multiplied by $|c|$. If $v = 0$, then $cv = 0$
* Multiplying a vector by -1 means flipping the direction of the vector
* $u - v = u + (-v)$

### Components
* If a vector, $a$ starts at the origin, then the coordinates are either $(a_1, a_2)$ or $(a_1, a_2, a_3)$ (2d vs. 3d)
* These coordinates are called the **components** of $a$ and denoted with $\ev{a_1, a_2}$ or $\ev{a_1, a_2, a_3}$
Given the points $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$, the vector $\textbf{a}$ with representation $\overrightarrow{AB}$ is 
$$ \textbf{a} = \ev{x_2 - x_1, y_2 - y_1, z_2 - z_1}$$
* The magnitude/length of the vector $\textbf{v}$ is the following:
$$ |\textbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$

### Properties of Vectors
1. $\textbf{a + b = b + a}$
2. $\textbf{a + 0 = a}$
3. $c(\textbf{a + b}) = c\textbf{a} + c\textbf{b}$
4. $(cd)\textbf{a} = c(d\textbf{a})$
5. $\textbf{a + (b + c) = (a + b)_ + c}$
6. $\textbf{a + (-a) = 0}$
7. $(c + d)\textbf{a} = c\textbf{a} + d\textbf{a}$
8. $1\textbf{a = a}$

### Standard Basis Vectors and Unit Vectors
$$ \textbf{i} = \ev{1, 0, 0}$$
$$ \textbf{j} = \ev{0, 1, 0}$$
$$ \textbf{k} = \ev{0, 0, 1}$$
$\textbf{i}$, $\textbf{j}$, and \textbf{k}$ are **Standard Basis Vectors** which point in the direction of the x, y, or z axis and have a length of 1
* If **a** = $\ev{a_1, a_2, a_3}$, then **a** = $a_1 \textbf{i} + a_2 \textbf{j} + a_3 \textbf{k}$

**Unit Vector**: Vector with length 1 (So **i**, **j**, and **k** are examples of unit vectors)
* If $a \neq 0$, then the unit vector with the same direction as **a** is 
$$ \textbf{u} = \frac{\textbf{a}}{|\textbf{a}|} $$

### Applications
* Acceleration and Velocity
* Force
  * The **resultant force** or net force can be found by vector addition of the individual forces acting on an object

### Exercises

#### Problem 2
What is the relationship between the point (4, 7) and the vector $\ev{4, 7}$? Illustrate with a sketch.  

If the vector's tail or starting point is located at the origin, then the head will be at the point (4, 7).

<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.2.svg'>
</div>

#### Problem 3
Name all the equal vectors in the parallelogram shown.
<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.3.svg'>
</div>


$$\overrightarrow{EA} = \overrightarrow{CE}\ \ \ \ \ \ \ \ \overrightarrow{DE} = \overrightarrow{EB}\ \ \ \ \ \ \ \     \overrightarrow{DA} = \overrightarrow{CB} \ \ \ \ \ \ \ \overrightarrow{AB} = \overrightarrow{DC}$$

#### Problem 4
Write each combination of vectors as a single vector.
<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.4.svg'>
</div>

a. $\overrightarrow{AC}$  
b. $\overrightarrow{CB}$  
c. $\overrightarrow{DB} - \overrightarrow{AB} = \overrightarrow{DB} + \overrightarrow{BA} = \overrightarrow{DA}$  
d. $\overrightarrow{DC} + \overrightarrow{CA} + \overrightarrow{AB} = \overrightarrow{DA} + \overrightarrow{AB} = \overrightarrow{DB}$  

#### Problem 6
Copy the vectors in the figure and use them to draw the following vectors.

<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.6.svg'>
</div>

#### Problem 7
In the figure, the tip of **c** and the tail of **d** are both the midpoint of $QR$. Express **c** and **d** in terms of **a** and **b**.
<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.7.svg'>
</div>

$$
c + d = b
$$ 
$$
c + (-d) = a
$$ 

$$
(c+d) + (c - d) = b+a 
$$ 
$$
2c = b + a \implies c = \frac{b + a}{2}
$$ 

$$
\frac{b+a}{2} + d = b
$$ 
$$
d = b - \frac{b + a}{2} = \frac{2b - (b + a)}{2} = \frac{b - a}{2}
$$

#### Problem 8
If the vectors in the figure satisfy |**u**| = |**v**| = 1 and **u + v + w = 0**, what is |**w**|?
<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.8.svg'>
</div>

|**w**| = $\sqrt{2}$

#### Problem 9
Find a vector **a** with representation given by the directed line segment $\overrightarrow{AB}$. Draw $\overrightarrow{AB}$ and the equivalent representation starting at the origin.
$$ A(-2, 1), \ \ B(1, 2)$$
$$ \textbf{a} = \ev{1 - (-2), 2 - 1} = \ev{3, 1}$$

<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.9.svg'>
</div>

#### Problem 13
Find a vector **a** with representation given by the directed line segment $\overrightarrow{AB}$. Draw $\overrightarrow{AB}$ and the equivalent representation starting at the origin.
$$ A(0, 3, 1), \ \ B(2, 3, -1)$$
$$ \textbf{a} = \ev{2 - 0, 3 - 3, -1 - 1} = \ev{2, 0, -2}$$

#### Problem 15
Find the sum of the given vectors and illustrate geometrically.

$$ \ev{-1, 4}, \ \ \ev{6, -2}$$
$$ \ev{6 + (-1), -2 + 4} = \ev{5, 2}$$

#### Problem 17
Find the sum of the given vectors and illustrate geometrically.
$$ \ev{3, 0, 1}, \ \ \ev{0, 8, 0}$$
$$ \ev{3 + 0, 0 + 8, 1 + 0} = \ev{3, 8, 1}$$

#### Problem 19
Find **a + b**, 4**a** + 2**b**, |**a**|, and |**a** - **b**|.  
**a** = $\ev{-3, 4}$, **b** = $\ev{9, -1}$  

**a** + **b** = 
$$\ev{-3 + 9, 4 + (-1)} = \ev{6, 3}$$

4**a** + 2**b** = 
$$4 \cdot \ev{-3, 4} + 2 \cdot \ev{9, -1}$$
$$ = \ev{-12, 16} + \ev{18, -2}= \ev{-12 + 18, 16 + (-2)}$$
$$  = \ev{6, 14}$$

|**a**| = 
$$ \sqrt{(-3)^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5 $$

**a** - **b** = 
$$ \ev{-3, 4} - \ev{9, -1} = \ev{-3, 4} + \ev{-9, 1}$$
$$
\ev{-3 + -9, 4 + 1} = \ev{-12, 5}
$$ 

|**a** - **b**| = 
$$ \sqrt{(-12)^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13 $$

#### Problem 21
Find **a + b**, 4**a** + 2**b**, |**a**|, and |**a** - **b**|.  
**a** = $4\textbf{i} - 3\textbf{j} + 2\textbf{k}$, **b** = $2\textbf{i} - 4\textbf{k}$    

**a** + **b** = 
$$ (4 + 2)\textbf{i} + (-3 + 0)\textbf{j} + (2+ (-4))\textbf{k} = 6\textbf{i} -3\textbf{j} - 2\textbf{k} $$

4**a** + 2**b** = 
$$
4(4\textbf{i} - 3\textbf{j} + 2\textbf{k}) + 2(2\textbf{i} - 4\textbf{k}) = (16\textbf{i} - 12\textbf{j} + 8\textbf{k}) + (4\textbf{i} - 8\textbf{k}) = 20\textbf{i} -12\textbf{j} + 0\textbf{k} 
$$ 
$$
= 20\textbf{i} - 12\textbf{j}
$$ 

|**a**| = 
$$
\sqrt{4^2 + (-3)^2 + (2)^2} = \sqrt{16 + 9 + 4} = \sqrt{29}
$$ 

**a** - **b** = 

$$ (4 - 2)\textbf{i} + (-3 - 0)\textbf{j} + (2 - (-4))\textbf{k} = 2\textbf{i} -3\textbf{j} + 6\textbf{k} $$


|**a** - **b**| = 
$$
\sqrt{2^2 + (-3)^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7
$$
#### Problem 23
Find a unit vector that has the same direction as the given vector.
$$
\ev{6, -2}
$$ 
$$ \textbf{u} = \frac{\textbf{a}}{|\textbf{a}|} = \ev{6, -2} \cdot \frac{1}{\sqrt{6^2 + (-2)^2}} = \ev{6, -2} \cdot \frac{1}{\sqrt{40} } = \ev{6, -2} \cdot \frac{1}{2\sqrt{10}} $$
$$
= \ev{\frac{6}{2\sqrt{10}}, \frac{-2}{2\sqrt{10} }} = \ev{\frac{3}{\sqrt{10}}, -\frac{1}{\sqrt{10}}} 
$$ 

#### Problem 23
Find a unit vector that has the same direction as the given vector.
$$
8\textbf{i} - \textbf{j} + 4\textbf{k}
$$
$$ \textbf{u} = \frac{\textbf{a}}{|\textbf{a}|} = (8\textbf{i} - \textbf{j} + 4\textbf{k} )\cdot \frac{1}{\sqrt{8^2 + (-1)^2 + 4^2}} = (8\textbf{i} - \textbf{j} + 4\textbf{k} )\cdot \frac{1}{\sqrt{64 + 1 + 16} } =(8\textbf{i} - \textbf{j} + 4\textbf{k} )\cdot \frac{1}{\sqrt{81} } $$
$$
= (8\textbf{i} - \textbf{j} + 4\textbf{k} ) \cdot \frac{1}{9} = \frac{8}{9}\textbf{i} - \frac{1}{9}\textbf{j} + \frac{4}{9}\textbf{k} 

#### Problem 26

$$ 
