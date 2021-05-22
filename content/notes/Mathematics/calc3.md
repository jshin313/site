---
title: "Calculus 3"
publishdate: 2021-05-07
lastmod: 2021-05-11
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
5. $\textbf{a + (b + c) = (a + b) + c}$
6. $\textbf{a + (-a) = 0}$
7. $(c + d)\textbf{a} = c\textbf{a} + d\textbf{a}$
8. $1\textbf{a = a}$

### Standard Basis Vectors and Unit Vectors
$$ \textbf{i} = \ev{1, 0, 0}$$
$$ \textbf{j} = \ev{0, 1, 0}$$
$$ \textbf{k} = \ev{0, 0, 1}$$
$\textbf{i}$, $\textbf{j}$, and $\textbf{k}$ are **Standard Basis Vectors** which point in the direction of the x, y, or z axis and have a length of 1
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
$$(4)  \ev{-3, 4} + (2) \ev{9, -1}$$
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
$$ \textbf{u} = \frac{\textbf{a}}{|\textbf{a}|} = \ev{6, -2} \frac{1}{\sqrt{6^2 + (-2)^2}} = \ev{6, -2} \frac{1}{\sqrt{40} } = \ev{6, -2} \frac{1}{2\sqrt{10}} $$
$$
= \ev{\frac{6}{2\sqrt{10}}, \frac{-2}{2\sqrt{10} }} = \ev{\frac{3}{\sqrt{10}}, -\frac{1}{\sqrt{10}}} 
$$ 

#### Problem 25
Find a unit vector that has the same direction as the given vector.
$$
8\textbf{i} - \textbf{j} + 4\textbf{k}
$$
$$ \textbf{u} = \frac{\textbf{a}}{|\textbf{a}|} = (8\textbf{i} - \textbf{j} + 4\textbf{k} ) \frac{1}{\sqrt{8^2 + (-1)^2 + 4^2}} = (8\textbf{i} - \textbf{j} + 4\textbf{k} ) \frac{1}{\sqrt{64 + 1 + 16} } =(8\textbf{i} - \textbf{j} + 4\textbf{k} ) \frac{1}{\sqrt{81} } $$
$$
= (8\textbf{i} - \textbf{j} + 4\textbf{k} ) \frac{1}{9} = \frac{8}{9}\textbf{i} - \frac{1}{9}\textbf{j} + \frac{4}{9}\textbf{k} 
$$ 

#### Problem 26
Find the vector that has the same direction as $\ev{6, 2, -3}$ but has length 4.

$$
\textbf{u} = \frac{\textbf{a}}{|\textbf{a}|} = \ev{6, 2, -3} \frac{1}{\sqrt{6^2 + 2^2 + (-3)^2}} = \ev{6, 2, -3} \frac{1}{36 + 4 + 9} = \ev{6, 2, -3} \frac{1}{\sqrt{49}} = \ev{\frac{6}{7}, \frac{2}{7}, -\frac{3}{7}}
$$
$$
4\textbf{u} = 4 \ev{\frac{6}{7}, \frac{2}{7}, -\frac{3}{7}} = \ev{\frac{24}{7}, \frac{8}{7}, -\frac{12}{7}}
$$ 

#### Problem 29
If **v** lies in the first quadrant and makes an angle $\frac{\pi}{3}$ with the positive $x$-axis and |**v**| = 4, find **v** in component form.

<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.29.svg'>
</div>

$$
\ev{4\cos{\frac{\pi}{3}}, 4\sin{\frac{\pi}{3}}} = \ev{\frac{4(1)}{2}, \frac{4 \sqrt{3} }{2}}
$$ 
$$
\ev{2, 2\sqrt{3}} 
$$ 

#### Problem 43
If $A$, $B$, and $C$ are the vertices of a rectangle, find $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA}$ 

$$
\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA} = \overrightarrow{AC} + \overrightarrow{CA} = \overrightarrow{AA} = 0
$$ 

#### Problem 44
Let $C$ be the point on the line segment $AB$ that is twice as far from $B$ as it is from $A$. If $\textbf{a} = \overrightarrow{OA}$, $\textbf{b} = \overrightarrow{OB}$, and $\textbf{c} = \overrightarrow{OC}$, show that $\textbf{c} = \frac{2}{3} \textbf{a} + \frac{1}{3}\textbf{b}$.

<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.44.svg'>
</div>

$$
-\textbf{a} = \overrightarrow{AO}
$$ 
$$
-a + b = \overrightarrow{AO} + \overrightarrow{OB} = \overrightarrow{AB}
$$ 
$$
\overrightarrow{AB} = \overrightarrow{AC} + \overrightarrow{CB} = \frac{1}{2}\overrightarrow{CB} + \overrightarrow{CB}
$$ 

$$
\overrightarrow{CO} + \overrightarrow{OB} = \overrightarrow{CB} = -\textbf{c} + \textbf{b}
$$ 

$$
\overrightarrow{AB} = \frac{1}{2}\overrightarrow{CB} + \overrightarrow{CB} = \frac{1}{2}(-c + b) + (-c + b)
$$ 

$$
(-a + b) = \frac{3}{2}(b - c)
$$ 
$$
\frac{2}{3}b - \frac{2}{3}a = b - c
$$ 

$$
\frac{2}{3}b - b - \frac{2}{3}a = -c
$$ 
$$
b - \frac{2}{3}b + \frac{2}{3}a = c
$$ 
$$
c = \frac{1}{3}b + \frac{2}{3}a
$$ 

#### Problem 45
a. Draw the vectors **a** = $\ev{3, 2}$, **b** = $\ev{2, -1}$, and **c** = $\ev{7, 1}$.  

b. Show, by means of a sketch, that there are scalars $s$ and $t$ such that $\textbf{c} = s\textbf{a} + t\textbf{b}$.

<div style='width: 100%' class='ui rounded images'>
<img class='ui image' src='/calc3/12.2.45.a.svg'>
</div>

#### Problem 47
If $\textbf{r} = \ev{x, y, z}$ and $\vb{r_0} = \ev{x_0, y_0, z_0}$, describe the set of all points $(x, y, z)$ such that $|\vb{r} - \vb{r_0}| = 1$.

$$
\vb{r} - \vb{r_0} = \ev{x - x_0, y-y_0, z-z_0}
$$ 
$$
|\vb{r} - \vb{r_0}| = \sqrt{(x-x_0)^2 + (y-y_0)^2 + (z-z_0)^2} = 1
$$ 
$$
(x-x_0)^2 + (y-y_0)^2 + (z-z_0)^2 = 1^2
$$ 
The set of all points will form a sphere with center $(x_0, y_0, z_0)$ with a radius of $1$.

## 12.3: The Dot Product
If $\vb{a} = \ev{a_1, a_2, a_3}$ and $\vb{b} = \ev{b_1, b_2, b_3}$, then the **dot product** of $\vb{a}$ and $\vb{b}$ is denoted by $\vb{a} \cdot \vb{b}$ and is calculated by the following
$$ \vb{a} \cdot \vb{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

The result of the dot product is a scalar quantity, not a vector.

### Properties of the Dot Product
If $\vb{a}, \vb{b}, \vb{c}$ are vectors in $V_3$ and $c$ is a scalar, then

1. $\vb{a} \cdot \vb{a} = |\vb{a}|^2$
2. $\vb{a} \cdot \vb{b} = \vb{b} \cdot \vb{a}$
3. $\vb{a} \cdot (\vb{b} + \vb{c}) = \vb{a} \cdot \vb{b} + \vb{a} \cdot \vb{c}$
4. $(c\vb{a}) \cdot \vb{b} = c (\vb{a} \cdot \vb{b}) = \vb{a} \cdot (c\vb{b})$
5. $0 \cdot \vb{a} = 0$

If $\theta$ is the angle between the vectors $\vb{a}$ and $\vb{b}$, then 
$$\vb{a} \cdot \vb{b} = |\vb{a}||\vb{b}|\cos\theta$$

Two vectors $\vb{a}$ and $\vb{b}$ are perpendicular/orthogonal iff $\vb{a} \cdot \vb{b} = 0$

### Direction Angles and Direction Cosines
**Direction Angles** are the angles $\alpha, \beta, \gamma$ that $\vb{a}$ makes with the positive x-, y-, and z-axes, respectively.
$$ \vb{a} = |\vb{a}|\ev{\cos\alpha, \cos \beta, \cos\gamma}$$

Unit vector in direction of $\vb{a}$:
$$ u = \frac{1}{|\vb{a}|} \vb{a} = \ev{\cos \alpha, \cos \beta, \cos \gamma}$$

### Projections
* **Vector Projection** of $\vb{b}$ onto $\vb{a}$ is like the shadow of $\vb{b}$ in the direction of $\vb{a}$
* The **scalar projection** of $\vb{b}$ onto $\vb{a}$ (also called the **component of b along a**) is defined to be the signed magnitude of the vector projection
$$ comp_a \vb{b} = \frac{\vb{a} \cdot \vb{b}}{|\vb{a}|} = |\vb{b}| \cos \theta$$
$$ proj_a \vb{b} =  \left(\frac{\vb{a} \cdot \vb{b}}{|\vb{a}|}\right) \frac{\vb{a}}{|\vb{a}|} =  \frac{\vb{a} \cdot \vb{b}}{|\vb{a}|^2} \vb{a}$$


$\theta$ is just the angle between the vectors.  
The vector projection is the scalar projection times the unit vector in the direction of $\vb{a}$

### Work
$W = \vb{F} \cdot \vb{d}$

## 12.4: The Cross Product
* The **Cross Product** of $\vb{a}$ and $\vb{b}$ gives a vector that is perpendicular to both vectors (use right hand rule to find out direction of resultant vector)
* If $\vb{a} = \ev{a_1, a_2, a_3}$ and $\vb{b} = \ev{b_1, b_2, b_3}$, then the **cross product** of $\vb{a}$ and $\vb{b}$ is the vector
$$ \vb{a} \times \vb{b} = \ev{a_2b_3 - a_3 b_2, a_3 b_1 - a_1b_3, a_1b_2, a_1b_2 - a_2 b_1} $$
  Derivation: define a vector $\vb{c}$ that is perpendicular to both $\vb{a}$ and $\vb{b}$ such that the dot product is 0
* Matrices can represent the above in a simpler fashion and less arbitrary looking way:

$$ 
\vb{a} \cross \vb{b} =
\begin{bmatrix}
  \vb{i} & \vb{j} & \vb{k} \\\\
  a_1 & a_2 & a_3 \\\\
  b_1 & b_2 & b_3
\end{bmatrix} = \begin{bmatrix}
  a_2 & a_3 \\\\
  b_2 & b_3 
\end{bmatrix} \vb{i} - \begin{bmatrix}
  a_1 & a_3 \\\\
  b_1 & b_3
\end{bmatrix} \vb{j} +
\begin{bmatrix}
  a_1 & a_2 \\\\
  b_1 & b_2 
\end{bmatrix} \vb{k} 
$$

* Notice how the terms each have a unit vector and the determinant order 2 matrix is constructed from the original order 3 matrix with the row and column of the unit vector removed.

* The determinant of order 2:
$$
\begin{bmatrix}
  a & b \\\\
  c & d 
\end{bmatrix} = ad - bc
$$
* If $\theta$ is the angle between $\vb{a}$ and $\vb{b}$, then $|\vb{a} \cross \vb{b}| = |\vb{a} \mid \vb{b}| \sin\theta$
* Two nonzero vectors $\vb{a}$ and $\vb{b}$ are parallel if and only if $\vb{a} \cross \vb{b} = 0$
* The length of the cross product is equal to the area of the parallelogram formed by $\vb{a}$ and $\vb{b}$
* The cross product is NOT commutative or associative

### Properties of the Cross Product
1. $\vb{a} \cross \vb{b} = -\vb{b} \cross \vb{a}$
2. $(c\vb{a})\cross \vb{b} = c(\vb{a} \cross \vb{a}) = \vb{a} \cross (c\vb{b})$
3. $\vb{a} \cross (\vb{b} + \vb{c}) = \vb{a} \cross \vb{b} + \vb{a} \cross \vb{c}$
4. $(\vb{a} + \vb{b}) \cross \vb{c} = \vb{a} \cross \vb{c} + \vb{b} \cross \vb{c}$
5. $\vb{a} \cdot (\vb{b} \cross \vb{c}) = (\vb{a} \cross \vb{b}) \cdot \vb{c}$
6. $\vb{a} \cross (\vb{b} \cross \vb{c}) = (\vb{a} \cdot \vb{c}) \vb{b} - (\vb{a} \cdot \vb{b}) \vb{c}$

### Triple Products
* **Scalar triple product** (Property 5):
$$
\vb{a} \cdot (\vb{b} \cross \vb{c}) = \begin{bmatrix}
  a_1 & a_2 & a_3 \\\\
  b_1 & b_2 & b_3 \\\\
  c_1 & c_2 & c_3 
\end{bmatrix}
$$
* The scalar triple product describes the volume of the parallelepiped
* **Vector triple product**: Property 6

### Torque
$|\vb{\tau}| = |\vb{r} \cross \vb{F}|$

## 12.5: Equations of Lines and Planes

### Lines
$L$ is a line in 3d space. The **vector equation** of $L$ is the following
$$ \vb{r} = \vb{r_0} + t\vb{v}$$
where $t$ is a **parameter**, $\vb{r_0}$ is a position vector to a point on L, and $\vb{r}$ gives a point on L.  

If $\vb{r} = \ev{x, y, z}$ and $\vb{r_0} = \ev{x_0, y_0, z_0}$,
the **parametric equations** for a line through the point ($x_0, y_0, z_0$) and parallel to the direction vector $\ev{a, b, c}$ are
$$ x = x_0 + at, \ \ \ y = y_0 + bt, \ \ \ z = z_0 + ct$$  

**Symmetric Equations** of L:
$$ \frac{x-x_0}{a} = \frac{y-y_0}{b} = \frac{z-z_0}{c} $$
If $a$, $b$, or $c$ are 0: 
  * Example: If $a = 0$, then $x_0 = x \ \ \ \  \frac{y-y_0}{b} = \frac{z-z_0}{c}$, and the line L lies in the vertical plane $x=x_0$

**Line segment** from $r_0$ to $r_1$:
$$ \vb{r}(t) = (1-t)\vb{r_0} + t\vb{r_1} \ \ \ \ 0 \le t \le 1 $$

### Planes
**Vector Equation of the Plane**:
$$ \vb{n} \cdot (\vb{r} - \vb{r_0}) = 0$$
$$ \vb{n} \cdot \vb{r} = \vb{n} \cdot \vb{r_0}$$
$n$ is the **normal vector** (perpendicular to the plane)  
$r_0$ and $r$ are position vectors  
$r - r_0$ represent a line on the plane.

**Scalar Equation of the Plane**:
$$ a(x-x_0) + b(y-y_0) + c(z - z_0) = 0$$
where $\vb{n} = \ev{a, b, c}$ and point $P_0(x_0, y_0, z_0)$ is on the plane

**Linear Equation Form of the Scalar Equation of a Plane**
$$ ax + by + cz + d = 0$$
where $d = -(ax_0 + by_0 + cz_0)$

Two planes are **parallel** if their normal vectors are parallel.

### Distances
$$ D = \frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}}$$
Derivation: The distance from an arbitrary point to a plane is the scalar projection of the distance between any point on the plane and the arbitrary point onto the normal vector.

## 12.6: Cylinders and Quadratic Surfaces
* **Traces**/Cross Sections: Curves of intersections of surfaces with planes parallel to the coordinate planes

* Steps for sketching surface:
  * Find intercepts by settings two variables to zero and solving for third
  * Make the "different" variable the axis that the surface is formed around (vertical axis) (e.g. all other variables on one side of equation or only one variable has negative)
  * Determine the "traces" by holding one variable constant and seeing what the equation with two variables represents (hyperbola, parabola, or ellipse)

### Cylinders

* **Cylinder**: Surface with all lines (**rulings**) parallel to a given line and pass through a given plane curve. 
* Equation only has two variables (e.g. $x^2 + y^2 = 1$, $y^2 + z^2 = 1$
* Example: $z = x^2$

* Let $z$ be the vertical axis
* If $y$ is set to be a constant, it doesn't affect the equation and the traces formed by intersection with the xz plane will form parabolic cross sections since $z= x^2$ is a parabola when graphed on the x-z plane
![Plot of function](/calc3/cylxz.png)

* If $z$ is held constant, you have $c = x^2$, where c is a constant. This equation is just two lines on the xy plane. So the traces formed from the intersection with the xz plane will form cross sections that consist of two lines.
* If $x$ is held constant, you have $z = c$, where c is a constant. This is just the equation of one line on the yz plane.
![Plot of function](/calc3/cyl.png)

![Plot of function](/calc3/cyl3d.png)

### Quadratic Surfaces
* Equations have the form $Ax^2 + By^2 + Cz^2 + Dxy + Eyz + Fxz + Gx + Hy + Iz + J = 0$

#### Ellipsoid
* All traces are ellipses
* If $a = b= c$, the ellipsoid is a sphere
* $\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$

![Plot of function](/calc3/ellipsoid.png)

#### Elliptic Paraboloid
* Horizontal traces (cross sections formed by intersection with xy plane) are ellipses
* Vertical traces are parabolas
* Axis of the parabola is the one that's different (the one with degree one in the equation)
* $\frac{z}{c} = \frac{x^2}{a^2} + \frac{y^2}{b^2}$

![Plot of function](/calc3/ellipticparaboloid.png)

#### Hyperbolic Paraboloid
* Horizontal traces (cross sections formed by intersection with planes parallel to the xy plane) are hyperbolas
* Vertical traces (cross sections formed by intersection with planes parallel to the yz and xz planes) are parabolas
* $\frac{z}{c} = \frac{x^2}{a^2} -\frac{y^2}{b^2}$

![Plot of function](/calc3/hyperbolicparaboloid.png)

#### Cone
* Horizontal traces are ellipses
* Vertical traces are planes (except when x = 0 and y = 0 when the traces are a pair of lines)
* $\frac{z^2}{c^2} = \frac{x^2}{a^2} + \frac{y^2}{b^2}$

![Plot of a function](/calc3/cone.png)

#### Hyperboloid of One Sheets
* Horizontal traces are ellipses
* Vertical traces are hyperbolas
* $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$

![Plot of function](/calc3/hyperone.png)

#### Hyperboloid of Two Sheets
* Horizontal traces are ellipses if they exist
* Vertical traces are hyperbolas
* $-\frac{x^2}{a^2} - \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$

![Plot of function](/calc3/hypertwo.png)

## 13.1: Vector Functions and Space Curves
**Vector Function**: Domain: A set of real numbers, Range: A set of vectors
* Let $\vb{r}$ be a vector function for 3-d vectors
* The components of $\vb{r}$ are $f$, $g$, and $h$.
$$ \vb{r}(t) = \ev{f(t), g(t), h(t)} = f(t)\vb{i} + g(t) \vb{j} + h(t) \vb{k}$$

### Limits and Continuity
$$\vb{r}(t) = \ev{f(t), g(t), h(t)}$$
$$ \lim_{t \to a} \vb{r}(t) = \ev{\lim_{t \to a} f(t), \lim_{t \to a} g(t), \lim_{t \to a} h(t)} $$
As long as the limits of the component functions exist.  

$\vb{r}$ is continuous at $a$ if $\lim_{t\to a} \vb{r}(t) = \vb{r}(a)$

### Space Curves
* $C$ is the set of all points $(x, y, z)$ where $x = f(t), y = g(t), z = h(t)$ (Parametric equations of C with $t$ as the parameter)
* **Space Curve**: The set of points in $C$
* $C$ is traced out by the tip of the vector $\vb{r}(t)$

### Drawing Curves
* To sketch parametric equations, remove $t$ from the equation and get the equations in terms of the $x$, $y$, and $z$ instead
* Then you can draw those equations on the x-y, y-z, and x-z planes. These "shadows" will represent the projections of the actual curve onto those planes.

## 13.2: Derivatives and Integrals of Vector Functions
$$
\frac{d \vb{r}}{dt} = \vb{r}'(t) = \lim_{h \to 0} \frac{\vb{r}(t+h) - \vb{r}(t)}{h}
$$
Unit Tangent Vector
$$
\vb{T}(t) = \frac{\vb{r}'(t)}{|\vb{r}'(t)|}
$$ 

If $f$, $g$, and $h$ are differentiable and $\vb{r}$ is a vector function
$$
\vb{r}'(t) = \ev{f'(t), g'(t), h'(t)}
$$

### Differentiation Rules
1. $\frac{d}{dt}[\vb{u}(t) + \vb{v}(t)]=\vb{u}'(t) + \vb{v}'(t)$
2. $\frac{d}{dt}[ c\vb{u}(t)] = c\vb{u}'(t)$
3. $\frac{d}{dt}[f(t)\vb{u}(t)] = f'(t) \vb{u}(t) + f(t) \vb{u}'(t)$
4. $\frac{d}{dt}[ \vb{u}(t) \cdot \vb{v}(t)] =\vb{u}'(t) \cdot \vb{t} + \vb{u}(t) \cdot \vb{v} '(t)$
5. $\frac{d}{dt} [\vb{u}(t) \cross \vb{v}(t)] = \vb{u}'(t) \cross \vb{v}(t) + \vb{u}(t) \cross \vb{v}'(t)$
6. $\frac{d}{dt}[ \vb{u}f(t)] = f'(t)\vb{u}'(f(t))$

### Integrals
$$
\int_{a}^{b} \vb{r}(t) dt = \left(\int_{a}^{b} f(t)dt\right) \vb{i} + \left(\int_a^b g(t)dt \right) \vb{j} + \left(\int_a^b h(t)dt\right)\vb{k}
$$
