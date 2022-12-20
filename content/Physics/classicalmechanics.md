---
title: "Classical Mechanics"
publishdate: 2022-03-07
lastmod: 2022-03-15
draft: false
toc: true
tags:
  - notes
  - college
  - physics
  - projectile motion
  - energy
  - momentum
  - vectors
  - newton
  - oscillations
---

## Class Information
Newton's laws of motion, one-dimensional motion, second order differential equations, harmonic oscillators (damped, forced), vector analysis, conservation laws, three-dimensional motion, central forces, motion in electromagnetic fields, collisions, center-of-mass transformations, two-body problem, numerical/computer solutions, coupled oscillators. Rigid body rotation, statics, elasticity, fluid equilibrium, gravitation.

Textbook: Classical Mechanics by John Taylor

## 2: Newton's Laws of Motion

### Newton's Laws in 2D Polar Coordinates
See [Wikipedia](https://en.wikipedia.org/wiki/Polar_coordinate_system#Vector_calculus) for an alternative derivation

We have $\hat{\rho}$ and $\hat{\phi}$ for 2D polar coordinates
$$ \vec{r} = \rho \hat{\rho}$$
Note that the position vector, $\vec{r}$, does not depend on $\phi$ explicitly

$$ \vec{v} = \dv{\vec{r}}{t} = \dv{}{t} \left(\rho \hat{\rho}\right)= \rho \dv{\hat{\rho}}{t} + \dot{\rho}\hat{\rho} $$

Now we find $\dv{\hat{r}}{t}$
$$ \left|\dv{\hat{r}}{t}\right| = \lim_{\Delta t \to 0} \frac{\hat{\rho}(t + \Delta t) - \hat{\rho} (t)}{\Delta t} = \lim_{\Delta \to 0} \frac{\Delta \phi \cdot |\hat{\rho}|}{\Delta t} = \lim_{\Delta t \to 0} \frac{\Delta \phi \cdot 1}{\Delta t} = \frac{d\phi}{dt} $$

We can find that the direction is in the $\hat{\phi}$ by looking at a diagram.

$$\dv{\hat{r}}{t} = \dot{\phi} \hat{\phi} $$



$$ \vec{v} = \dot{\rho} \hat{\rho} + r \dot{\phi} \hat{\phi}$$

## 5: Oscillation

### Damped Oscillations
Consider a mass attached to a spring which is attached to a wall. Consider horizontal motion only.

$$ \vec{F} =m \vec{a}$$
* Assume negligible friction from ground
* We have drag from air $F_{fr} = -b \dot{x}$
$$ \vec{F} = -kx - b \dot{x}$$

$$ \ddot{x} + \frac{b}{m} \dot{x} + \frac{k}{m}x = 0$$
* Let $ \frac{b}{m} = 2\beta$, where $\beta$ is the **damping constant**
* $\omega_0=\sqrt{k/m}$ is the **natural frequency**
$$ \ddot{x} + 2 \beta \dot{x} + \omega_0^2 x = 0$$
Trial Solution 
$$x(t) = e^{rt}$$

$$ r^2 e^{rt} + 2 \beta r e^{rt} + \omega_0^2 e^{rt} = 0$$
$$ r^2  + 2 \beta r  + \omega_0^2 = 0$$

Find roots of above

$$ r_1 = -\beta + \sqrt{\beta^2 - \omega_0^2 } $$
$$ r_2 = -\beta - \sqrt{\beta^2 - \omega_0^2 } $$

General solution
$$ x(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t}$$

$$ x(t) = e^{-\beta t} \left\[c_1 e^{t\sqrt{\beta^2 - \omega_0^2}} + c_2 e^{-t\sqrt{\beta^2 - \omega_0^2}}\right\]$$

#### Undamped ($\beta = 0$)
$$ x(t) = e^{-\beta t} \left\[c_1 e^{t\sqrt{- \omega_0^2}} + c_2 e^{-t\sqrt{ - \omega_0^2}}\right\]$$
$$ x(t) = c_1 e^{i\omega_0 t} + c_2 e^{-i\omega_0 t}$$

This is the equation is what we got earlier for a SHO without any force damping

#### Weak Damping ($\beta < \omega_0$)
$$\beta < \omega_0 \implies \sqrt{\beta^2 - \omega_0^2} = \text{Imaginary} \implies \text{Oscillations} $$

* Define $\omega_1 = \sqrt{\omega_0^2 - \beta^2}$

$$ x(t) = e^{-\beta t} \left\[c_1 e^{i \omega_1 t} + c_2 e^{-i \omega_1 t}\right\]$$
* Notice that the solution is very similar to the undamped case except for the $e^{-\beta t}$ and a different frequency, $\omega_1 < \omega_0$
* The $e^{-\beta t}$ term controls the damping and the smaller frequency means longer periods compared to the undamped case

Phase shifted Solution:
$$ x(t) = Ae^{-\beta t} \cos (\omega_1 t - \delta) $$

* Larger $\beta$ means more damping and a quicker decrease in amplitude

#### Strong Damping ($\beta > \omega_0$)
$$ \beta > \omega_0 \implies \sqrt{\beta^2 - \omega_0^2} \in \mathbb{R} \implies \text{No oscillations}$$

$$ x(t) = e^{-\beta t} \left\[c_1 e^{-t\sqrt{\beta^2 - \omega_0^2}} + c_2 e^{t\sqrt{\beta^2 - \omega_0^2}}\right\]$$
$$ x(t) = c_1 e^{-\left(\beta  - \sqrt{\beta^2 - \omega_0^2}\right)t} + c_2 e^{-\left(\beta + \sqrt{\beta^2 - \omega_0^2}\right)t}$$

* After a long period of time the first term dominates since the second term goes to 0 faster. Thus damping is mostly controlled by the first term
* Damping Parameter: $\beta - \sqrt{\beta^2 - \omega_0^2}$

#### Critical Damping ($\beta = \omega_0$)
$$ r_1 = -\beta + \sqrt{\beta^2 - \omega_0^2 }  = -\beta$$
$$ r_2 = -\beta - \sqrt{\beta^2 - \omega_0^2 } = -\beta$$
$r_1 = r_2$ is call the degeneracy

* First solution: $e^{-\beta t} $
* Second Solution $t e^{-\beta t}$

$$ x(t) = c_1 e^{-\beta t} + c_2 t e^{-\beta t}$$
* Dampin Parameter: $\beta = \omega_0$

### Driven Damped Oscillation
* In the real world there is friction, which eventually dampens oscillations until there are no oscillations as we saw above. To combat this, we can drive the oscillations by using a motor to provide an external force, $F(t)$

$$ \vec{F}_{\text{net}} = \text{spring force} + \text{Damping force} + \text{External force} $$
$$ m \ddot{x} = -kx - b \dot{x} + F(t)$$

$$ m\ddot{x} + kx + b \dot{x} = F(t)$$
$$ \ddot{x} + \frac{k}{m} x + \frac{b}{m} \dot{x} = \frac{F(t)}{m} $$

$$ \frac{k}{m} = \omega_0^2, \ \ \frac{b}{m} = 2 \beta, \ \ f(t) = \frac{F(t)}{m}$$

$$ \implies \ddot{x} + 2 \beta \dot{x} + \omega_0^2 x = f(t)$$

In order to solve the above non-homogenous linear differential equation, we need the homogenous, $x_h$ and particular solution, $ x_p $

* We have the linear operator, $D$
$$ D x = f(t)$$
* Since $D$ is a linear operator
$$ D(x_h + x_p) = D x_h + D x_p = 0 + f(t) = f(t) $$
This means that $x(t) = x_h + x_p$ is a solution

* Homogenous (weakly damped case)
$$ \ddot{x_h} + 2 \beta \dot{x_h} + \omega_0^2 x_h = 0 $$
$$ x_h = Ae^{-\beta t} \cos (\omega_1 t - \delta) $$

* Particular
Suppose $f(t) = f_0 \cos (\omega t)$, where the frequency of the motor, $\omega$ can be different than the frequency the mass oscillates at

$$ f(t) = Re(f_0 e^{i \omega t})$$

Consider the complex version of the differential equation, where $z$ is complex

$$ Re(z(t)) = x_p(t)$$
$$ \ddot{z} + 2 \beta \dot{z} + \omega_0^2 z = f_0 e^{i \omega t}$$

Trial Solution
$$ z(t) = ce^{i\omega t}$$
$$ (-\omega^2 + 2 i \beta + \omega_0^2) c e^{i\omega t} = f_0 e^{i \omega t}$$
$$ (-\omega^2 + 2 i \beta + \omega_0^2) c = f_0 \implies c = \frac{f_0}{\omega_0^2 - \omega + 2i \beta \omega} $$

For any $D$ is a complex number, you can write it as follows
$$ D = A e^{-i\delta}$$
where $A$ is the real magnitude of the complex number and $\delta$ is the phase (imagine complex plane where $\delta$ is an angle, sort of like plane polar coords)

So you can write $$ c = A e^{-i\delta}$$
* $A^2 = c c^{\*}$, where $c^{\*}$ is the complex conjugate

$$ A^2 = c c^* = \frac{f_0^2}{(\omega_0^2 - \omega^2)^2 + 4 \beta^2 \omega_0^2} $$
$$ A e^{-i\delta} = \frac{f_0}{\omega_0^2 - \omega^2 + 2 i \beta \omega}$$

$$ f_0 e^{-i\delta} = A (\omega_0^2 - \omega^2 + 2 i \beta \omega)$$

$$\delta = arctan(\frac{Im}{Re}) = arctan(\frac{2\beta \omega}{\omega_0^2 - \omega^2}) $$

$$ z(t) = ce^{i\omega t} = Ae^{-i\delta} e ^{i \omega t}= A e^{i (\omega t - \delta)}  = A(\cos (\omega t - \delta) + i \sin(\omega t - \delta))$$
$$ x_h(t) = Re(z(t)) =  Re (A(\cos (\omega t - \delta) + i \sin(\omega t - \delta))) = A\cos (\omega t - \delta) $$

$$ x(t) = x_p (t) + x_h(t) $$

$$ x(t) = A_1 \cos(\omega t - \delta_1) +  (A_2)(\cos (\omega_1 t - \delta_2)e^{-\beta t}$$
$$ x(t) = A \cos(\omega t - \delta_1) + (c_1 e^{i\omega_1 t} + c_2 e^{-\omega_1 t} ) e^{-\beta t}$$

## Chapter 8: Rigid Bodies
$$ \vec{L} = \underbrace{I}_{3 x 3 \text{  matrix }} \omega$$

$$ I = \begin{bmatrix} I_{xx} & I_{xy} & I_{xz} \\\\ I_{yx} & I_{yy} & I_{yz} \\\\ I_{zx} & I_{zy} & I_{zz} \end{bmatrix}$$

$I$ is a symmetric matrix, which guarantees it is diagonalizable, which means we can find the eigenvectors and thus the principal axes.

### Inertia Tensor of a Solid Cone
Consider a cone with the vertex at the origin, with uniform density $\rho$, height $h$, mass $M$, and radius $R$
$$ I_{zz} = \sum_\alpha m_\alpha (x^2_\alpha + y^2_\alpha)$$

* Choose cylindrical polar coordinates ($r, \phi, z$)

$$ I_{zz} = \sum_\alpha m_\alpha (x^2_\alpha + y^2_\alpha) = \int_V  r^2 \ dm$$
$$ dm = \rho \ dV  = \rho \ r\  d \phi \ dr \ dz $$
$$ I_{zz} =\rho \int_V  \ r^3 \   dr  \ d\phi \ dz $$
Physics integration notation is weird
$$ I_{zz} =\rho \int_0^h dz \int_0^{2\pi} d\phi \int_{0}^{z\frac{R}{h}} dr \ r^3 = \rho \int dz \int d\phi   $$
Note the bounds for $r$ ends at $r = z \frac{R}{h}$ since every $z$ has a differnet $r$. Note the following relation is always true for any value of $r$ and $z$:
$$ \frac{r}{z} = \frac{R}{h}$$
Now continue with the integration
$$ I_{zz} = \rho \int dz \int d\phi \ \left. \frac{r^4}{4} \right\vert_{0}^{\frac{zR}{h}}  = \rho \int dz \int d\phi \  \left(\frac{R}{h}\right)^4 \frac{z^4}{4}  = \frac{3}{10} MR^2$$
Now find $I_{xx}$
$$ I_{xx} = \sum_\alpha m_\alpha (y_\alpha^2 + z_\alpha^2)$$
$$ I_{xx} = \int_V dm \ (y^2 + z^2)= \rho \int dV \ (y^2 + z^2) = \int dz \int d\phi \int r \ dr \ (y^2 + z^2) $$
$$ I_{xx} = \int dz \int d\phi \int r \ dr \ y^2  + \int dz \int d\phi \int r \ dr \ z^2)$$
Note that
$$ I_{zz} = \rho \int_V (x^2 + y^2) \ dV = \frac{3}{10} MR^2$$
$$ I_{zz} = \rho \int_V (y^2)\ dV + \rho\int_V (y^2) = \frac{3}{10}MR^2 \ dV \implies  \rho \int_V (y^2)\ dV = \frac{3}{20}MR^2$$
since x and y are symmetric since we have a circle
$$ I_{xx} = \int dz \int d\phi \int r \ dr \ y^2 + \int dz \int d\phi \int r \ dr \ z^2$$

$$ I_{xy} = - \sum_\alpha m_\alpha x_\alpha y\alpha = -\rho \int_V dV \ x y = 0$$
Since along the x axis, the cone is symmetric, and along the $y$-axis, the cone is symmetric.

$$ I_{cone} = \begin{bmatrix} \frac{3}{20}M(R^2 + 4h^2) & 0 & 0 \\\\ 0 & \frac{3}{20}M(R^2 + 4h^2) & 0 \\\\ 0 & 0 & \frac{3}{10}MR^2 \end{bmatrix}$$

### Principal Axes of Inertia
$$ \vec{L} = I \vec{\omega}$$
* So $\vec{L} \neq \vec{\omega}$ in general
* Can we find particular directions of $\vec{\omega}$ so that the resulting $\vec{L}$ is in the same direction of $\vec{\omega}$?
	* If so, then we get 
	$$\vec{L} = \lambda \vec{\omega}, \ \lambda \in \mathbb{R}$$
	* It turns out we *can* find principal axes for any rigid body, and these directions are called **principal axes**
	* Note in the above, $\lambda$ is an **eigenvalue**!

* **Statement of Existence of Principal axes**: For any rigid body at any point $\underbrace{O}_{\text{origin}}$, there are at least three principal axes and the inertial tensor, $I$, is diagonal. When $\vec{\omega}$ is along any of the three axes, the $\vec{L}$ will be along the same direction of $\vec{\omega}$

$$\vec{L} = I \vec{\omega} = \lambda \vec{\omega}$$
Eigenvalue problem!

$$ \hat I = \begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\end{bmatrix}$$
$$ I \omega = \lambda \hat I \vec{\omega} \implies$$
$$ \left(I - \lambda \hat I \right)\vec{ \omega} = 0 $$

Define $A = I - \lambda \hat I$
$$ A \vec{\omega} = 0$$

The above is satisfied only if $\vec{\omega} = 0$ or $det(A) = 0$. The former is when there is no rotation at all.  

We are guaranteed to have $\lambda_1, \lambda_2, \lambda_3$ and $\omega_1, \omega_2, \omega_3$


### Finding Principle Axes
Find Eigenvectors

