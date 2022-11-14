---
title: "Analytical Mechanics"
publishdate: 2022-11-14
lastmod: 2022-11-14
draft: false
toc: true
tags:
  - notes
  - college
  - physics
  - hamiltonian mechanics
  - lagrangian mechanics
---

## Class Information
Moving coordinate systems, three-body problems, partial differential equations, wave propagation (strings, membranes, fluids), boundary value problems, normal modes, fluid equations of motion, viscosity; virtual work, Lagrange's equations, Hamilton's equations; angular momentum of a rigid body, inertia tensor, Euler's equations, Euler angles, tops and gyroscopes, small vibrations.

Textbook: Classical Mechanics by John Taylor

(This description is a bit outdated. The inertia tensor and other rigid body stuff like Euler angles, tops, etc. was covered in Classical Mechanics).

## Mechanics in Non-Inertial Frames
For a point on a **rigid** body
$$ \vec{v} = \vec{\omega} \cross \vec{r}$$

### Proof
![Diagram of point on rigid body](/analyticalmechanics/v=omegacrossr.PNG)
$$ v =  \omega \ (\rho \sin \theta)  = \vec{\omega} \cross \vec{r}$$

## Example Problems

### Example 1: Double Pendulum -- Lagrangian Mechanics

For the first mass:
$$ \vec{v_1} = \dot{\phi_1} l_1 \hat{\phi_1}$$
$$ \implies T = (\dot{\phi_1} l_1 )^2 \frac{m_1}{2}  $$
For the second mass:
$$ \vec{v_2} = \dot{\phi_1} l_1 \hat{\phi_1} +  \dot{\phi_2} l_2 \hat{\phi_2}$$
$$ v_2^2 =  a^2 + b^2 + 2\vec{a} \cdot \vec{b} $$
$$ v_2^2 =  l_1^2 \dot{\phi_1}^2 + l_2^2 \dot{\phi_2}^2 + 2 l_1 l_2 \phi_1 \phi_2 \left(\hat{\phi_1} \cdot \hat{\phi_2}\right) $$
$$ v_2^2 =  l_1^2 \dot{\phi_1}^2 + l_2^2 \dot{\phi_2}^2 + 2 l_1 l_2 \phi_1 \phi_2 \cos (\phi_1 - \phi_2) $$

### Example 2: 7.29 From Taylor -- Lagrangian Mechanics
A particle with mass $m$ moving with fixed $\omega$

![Image of particle moving](/analyticalmechanics/7.29.PNG)

Just use cartesian coordinates, since there is no symmetry we can take advantage of
$$ \vec{r} = x \hat{x} + y \hat{y}$$
$$ x = l \sin \phi + R \cos \theta = l \sin \phi + R \cos \omega t$$
$$ y = - l \cos \phi + R \sin \theta = - l \cos \phi + R \sin \omega t$$
$$ v_x = \hat{x} $$
$$ v_y = \hat{y} $$

$$ v^2 = v_x^2 + v_y^2$$

In the end, we have $T(\phi,  t)$ with the other variables being constants

### Example 3: Mass on Cylindrical Surface -- Hamiltonian Mechanics
A bead of mass $m$, is constrained to move on the surface of a cone
$$ \rho = cz $$
where $c$ is a constant

See the [Derivation of Velocity for Polar Coordinates](/notes/physics/classicalmechanics/#2-newtons-laws-of-motion)
$$ \vec{v} = \dot{\rho} \hat{\rho} + \rho \dot{\phi} \hat{\phi} + \dot{z} \hat{z}$$

Then we get
$$ v^2 = \dot{z}^2 + (\rho \dot{\phi})^2 + \dot{\rho}^2$$

Note that the particle is not part of a rigid body, since it has freedom to move more freely.

There are no cross terms since $\hat{z}$, $\hat{\phi}$,$\hat{\rho}$ are all orthogonal, so 

$$ \hat{\rho} \cdot \hat{\phi} = 0$$
