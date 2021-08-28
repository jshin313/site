---
title: "Physics 2"
publishdate: 2021-08-23
lastmod: 2021-08-23
draft: false
toc: false
tags:
  - notes
  - college
  - physics
  - electricity
  - thermodynamics
  - optics
  - waves
---

## 18: A Macroscopic Description of Matter

### Solids, Gases, Liquids
* **Temperature**: Amount of **thermal energy**
* **Ideal Gas**: Used for modeling. Consists of tiny, hard spheres that collide but don't interact with each other in any other way.
  * **Ideal Gas Law**: $pV = nRT$
* Solids and Liquid are nearly *incompressible*, gases are compressible
* **State Variables**: When taken together, describe state of macroscopic system
* **Thermal Equilibrium**: When state variables are constant

### Atoms and Moles
* The **Number of Particles** is denoted by $N$
* **Number Density**: Number of atoms/molecules per cubic meter
$$ \text{Number density } = \frac{N}{V} $$
  * For a uniform system, the number density is the same whether you look at a portion or the whole system and is independent of the volume, $V$

* **Atomic Mass Number**: number of protons + number of neutrons
* **Atomic Mass Unit (U)**: 12 U = Mass of Carbon-12
* **Molecular Mass**: Sum of atomic masses for a molecule
* **Avogadro's Number**: $N_A = 6.02 \cdot 10^{23} mol^{-1}$
$$ \text{moles of substance} = n = \frac{N}{N_A}$$
* The **number of moles of a substance** is denoted by $n$
* **Molar Mass $M_m$**: Mass of one mol of a substance
* For a system of mass, $M$
$$ n =  \frac{M}{M_m}$$

### Temperature
**Thermal Energy**: Kinetic and potential energy as particles vibrate or move
* Linear relationship between $V$ and $T$
* All gases extrapolate to zero pressure at -273 C
* **Absolute Zero**: When all movement of particles ceases

### Thermal Expansion
* Objects expand when heated
* For solids, where $\alpha$ is the **coefficient of linear expansion** (Not used for liquids)
$$ \frac{\Delta L}{L} = \alpha \Delta T$$
  * Solids expand linearly in all directions
  * For a cube of length, $L$, and $V=L^3$
  $$ dV = 3L^2 dL \implies \frac{dV}{V} = 3 \frac{dL}{L} \implies \beta_{solid} = 3\alpha $$
  * The above derivation from the textbook isn't very clear, so https://physics.stackexchange.com/a/386024
* Volume Expansion, where $\beta$ is the **coefficient of volume expansion** (Only used for liquids)
$$ \frac{\Delta V}{V} = \beta \Delta T$$
* Water is weird between 4C and 0C (expands instead of contracting)

### Phase Changes
* **Phase Equilibrium**: When more than one phase can coexist; two phases are in phase equilibrium along a phase boundary
* Slope of **Solid-Liquid boundary layer** differs between water and $CO_2$
  * If you compress $CO_2$ gas along the boundary, it first turns into liquid, and then a gas like most substances
  * However, compressing ice along the boundary turns it into liquid water due to the negative slope of the boundary
* **Critical Point**: Where the liquid-gas boundary ends; No clear distinction between liquid and gas or phase changes exists here
* **Triple Point**: The one point at a specific temperature and pressure where all three phases are at equilibrium (all phases can coexist)
  * The Kelvin scale used to be **defined** as the scale starting at 0 K and passing through 273.16 K (the triple point of water)

### Ideal Gases
* **Ideal Gases**: Ignore weak attractions between each particle and treat each particle as "hard spheres" (elastic collisions); Treat all gases as consisting of just single particles
* Ideal gases fail to describe the correct behaviour for the following conditions:
  1. Density is low
  2. Temperature is well above the condensation point
* Graphing a PV vs. nT graph for any gas yields the same slope
  * Slope = R = 8.31 J /mol K

$$ pV = nRT = \frac{N}{N_A}RT = N\frac{R}{N_A}T = Nk_BT$$
* **Boltzmann's Constant**: $k_B = \frac{R}{N_A}$
  * $k_B$ is the **gas constant per molecule**
  * $R$ is the **gas constant per mole**
* The Ideal Gas Law applies only when state variables are constant and not changing, but we assume the state variables are changing so slowly that the system is never far from equilibrium
* **Quasi-static process**: Process that is at thermal equilibrium at all times
  * Quasi-static processes are *reversible*
* **Isochoric Process**: Constant volume process
  * Vertical line for PV diagram
* **Isobaric Process**: Constant pressure process
  * Horizontal line for PV diagram
* **Isothermal Process**: Constant temperature
  * Hyperbola for PV diagram
