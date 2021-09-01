---
title: "Physics 2"
publishdate: 2021-08-23
lastmod: 2021-08-28
draft: false
toc: true
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

## 19: Work, Heat, and the First Law of Thermodynamics

### Energy Principle
$$ \Delta K = W_c + W_{diss} + W_{ext} $$

1. $W_c$: Work done by conservative forces. Change in potential energy of system
$$ \Delta U = -W_c$$
2. $W_{diss}$: Work done by friction-like dissipative forces. Increases Thermal Energy in system
$$ \Delta E_{th} = - W_{diss}$$
3. $W_{ext}$: Work done by external forces

$$ \Delta K + \Delta U + \Delta E_{th} = W_{ext}$$

* **Mechanical Energy**: Kinetic and potential energy
$$ E_{mech} = K + U $$

$$ \Delta E_{sys} =  \Delta E_{mech} + \Delta E_{th} = W_{ext} $$
* **Isolated System**: $W_{ext} = 0$ Total energy in system is constant.

* There seems to be another way to transfer energy in a system since when heating a pot of water, there seems to be no external work done, yet the thermal energy increases.
* **Heat** (Q): Another way to transfer energy into a system through *thermal interactions*
$$ \Delta E_{sys} =  \Delta E_{mech} + \Delta E_{th} = W + Q $$

### Work in Ideal-Gas Processes
* **Mechanical Interaction**: System and environment interact via macroscopic pushes and pulls
* **Mechanical Equilibrium**: No net force on system
* Work is not a state variable, unlike thermal energy and mechanical energy
  * Work is the amount of energy that moves between a system and environment (So never use $\Delta W$)
$$ W = \int_{s_i}^{s_f} F_s ds$$
$$ W_{ext} = - \int_{V_i}^{V_f} p dV$$

* $W_{ext}$ is the work done by the environment on the gas
  * The environment can do either positive work on the gas or negative work on the gas (which means the gas is actually doing work on the environment)
  * $W_{ext} = - W_{gas}$
  * $\text{Work = the negative area of the pV curve between } V_i\text{ and }V_f$
  * Note: From now on $W_{ext}$ is denoted by $W$

#### Isochoric Process
$$ W = 0$$
$$Q = \Delta E_{int}$$

#### Isobaric Process
$$ W = -p \Delta V$$
$$ Q = \Delta E_{int} - W$$

#### Isothermal Process
$$ W = - \int_{V_i}^{V_f} p dV = - \int_{V_i}^{V_f} \frac{nRT}{V} dV = - nRT \int_{V_i}^{V_f} \frac{dV}{V} $$
$$ nRT = p_iV_i = p_f V_f$$
$$ W=  - nRT \ln(\frac{V_i}{V_f}) = - p_i V_i \ln(\frac{V_i}{V_f}) = - p_f V_f \ln(\frac{V_i}{V_f})$$
$$ Q = -W$$


#### Work Depends on the Path
* Work done during an ideal-gas process depends on the path in the pV diagram (path here does not represent a physical path)
* Work is independent of the path for only work done by conservative forces (physical path)

### Heat
* Work and heat are equivalent
* **Thermal Interactions**: No macroscopic interactions unlike mechanical interactions, used by heat to transfer energy
* **Thermal Equilibrium**: No temperature difference
* Heat is not a state variable, so $\Delta Q$ doesn't make sense
 * Heat is not the only way to change temperature since work can also change the temperature of a system

### First Law of Thermodynamics
$$ \Delta E_{sys} =  \Delta E_{mech} + \Delta E_{th} = W_{ext} + Q$$
* Assume $\Delta E_{mech} = 0$, if there is no macroscopic motion for the system
* First Law of Thermodynamics:
$$\Delta E_{th} = W + Q $$

#### Isothermal Process
* $\Delta E_{th} = 0$
* Temperature doesn't change, because heat and work are exchanged

#### Isochoric Process
* $W = 0$

#### Adiabatic Process
* $Q = 0$
* No heat is transferred
* $\Delta E_{th} = W$
* Temperature can still change

### Thermal Properties of Matter
* **Specific Heat**: Amount of energy needed to raise 1kg of a substance by a 1K
$$ \Delta E_{th} = Mc\Delta T$$
$$ W + Q = Mc\Delta T$$
* For most liquids and solids, we heat the matter instead of doing work
$$ Q = Mc\Delta T$$
* The **heat of transformation** (L) is the energy needed to make a substance undergo a phase change
  $$ Q = ML$$

### Calorimetry
If there is sufficient insulation
 
$$ Q_{net} = 0$$

### The Specific Heats of Gases
* Temperature change at Constant Volume
$$ Q = nC_V\Delta T$$
* Temperature change at Constant Pressure
$$ Q = nC_p\Delta T$$
* Any two processes that change the thermal energy by $\Delta E_{th}$ will cause the same temperature change $\Delta T$
$$ C_p = C_v + R$$
* For any ideal-gas process
$$\Delta E_{th} = nC_v \Delta T$$
* Heat depends on the path on the pV diagram

#### Adiabatic Process
$$ W = nC_v \Delta T$$
$$ \gamma = \frac{C_P}{C_V} $$
$$ p_f V_f^\gamma = p_i V_i^\gamma $$
$$ T_fV_f^{\gamma - 1}=  T_iV_i^{\gamma - 1}$$

* Image from wikipedia
![Image from wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Adiabatic.svg/341px-Adiabatic.svg.png)

### Heat-Transfer Mechanisms

#### Conduction
$$ \frac{dQ}{dt} = k \frac{A}{L} \Delta T$$
* **Thermal Conductivity**: Represented by $k$

#### Convection
* Transfer of thermal energy by moving fluids
* Air is a poor conductor of heat, but thermal energy is transferred easily due to **convection**
* No simple equation due to turbulence

#### Radiation
* Electromagnetic waves carry energy
$$ \frac{dQ}{dt} = e \sigma AT^4$$
* **Emissivity** (e): How effectively a surface radiates energy
* **Stefan-Boltzmann Constant** ($\sigma$): $\sigma = 5.67 \cdot 10^{-8} W/m^2 K^4$
* Since objects emit and absorb radiation, the net amount of radiated power:
$$ \frac{dQ_{net}}{dt} = e \sigma A(T^4 - T_0^4)$$
* **Black body**: Perfect absorber and emitter
