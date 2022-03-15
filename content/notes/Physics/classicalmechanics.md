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
$$ x(t) = c_1 e^{i\omega_0 t} + c_2 e^{-\omega_0 t}$$

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
