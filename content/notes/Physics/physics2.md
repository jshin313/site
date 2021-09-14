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

#### Isothermal
$$ \Delta E_{th} = 0$$
$$ W+ Q = 0$$

#### Isochoric

$$ Q = nC_V\Delta T$$
$$ W = 0, Q = \Delta E_{th}$$

#### Isobaric
$$ Q = nC_p\Delta T$$

#### Any Ideal Process
* Any two processes that change the thermal energy by $\Delta E_{th}$ will cause the same temperature change $\Delta T$
* For any ideal-gas process
$$\Delta E_{th} = nC_v \Delta T$$
* Heat depends on the path on the pV diagram

* Monatomic Gases: $$ C_V = \frac{3}{2} R \approx 12.5$$
* Diatomic Gases: $$ C_V = \frac{5}{2} \approx 20.8 $$
* For all ideal gases: $$ C_p - C_v = R$$

#### Adiabatic Process
$$ W = nC_v \Delta T$$
$$ \gamma = \frac{C_P}{C_V} $$
$$ p_f V_f^\gamma = p_i V_i^\gamma $$
$$ T_fV_f^{\gamma - 1}=  T_iV_i^{\gamma - 1}$$

* Image from wikipedia
![Image from wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Adiabatic.svg/341px-Adiabatic.svg.png)
* Temperature decreases during the adiabatic expansion
* Temperature increases during the adiabatic compression

### Heat-Transfer Mechanisms

#### Conduction
$$ \frac{dQ}{dt} = k \frac{A}{L} \Delta T$$
* **Thermal Conductivity**: Represented by $k$
* $L$ denotes the thickness of the slab in between the two hot and cold regions and $A$ is the cross-sectional area
* Heat transferred through direct physical contact
* Heat flows due to a difference in temperature
* Conduction results do to the collision of particles at the interface between the two materials
  * Molecules from hotter region collide and transfer energy to those in an adjacent cooler region
* $k$ value is large for metals due to electrons

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

## 20: The Micro/Macro Connection

### Questions
We still have the following questions:

* Why does the ideal gas law work on *every* gas?
* Why is the molar specific heat ($C_v$) the same for all monatomic gases (12.5), diatomic gases (20.8), and elemental solids (25.0)?
* What is Temperature?
* Why does a gas have pressure?

### Assumptions
* $N$ identical particles of mass $m$
* No intermolecular forces, so molecules only have kinetic energy, no potential energy
* Molecular motion is random (average speed is dependent on temperature)
* Collisions with the wall of the container are elastic


### Molecular Speeds and Collisions
* There is a distribution of velocities for gas particles, not just one speed
* Pressure and temperature are based on the **average** of these speeds

### Mean Free Path
* **Mean Free Path** ($\lambda$): The *average* distance between collisions
  * If a molecule has $N_{colli}$ collisions as it travels a distance $L$
$$ \lambda = \frac{L}{N_{colli}}$$
* Two molecules collide if the distance between their centers is less than $2r$
* The number of collisions is equal to the number of molecules in a cylindrical volume of length $L$ and radius of $2r$
$$ N_{colli} = \frac{N}{V} V_{cyl} = \frac{N}{V} \pi (2r)^2 L = 4\pi \frac{N}{V}r^2 L$$
$$ \lambda = \frac{L}{N_colli} = \frac{1}{4\pi (N/v)r^2}$$
* The above derivation assumed one particle was colliding with a stationary target particle. If we don't assume this, we get the following:
$$ \lambda = \frac{1}{4\sqrt{2} \pi (N/v)r^2}$$

### Pressure in a Gas
* Pressure comes from force over area. Force comes from change in momentum of a particle
$$ \Delta p_x = -2mv_x$$
$$ \Delta P_x = N_{colli} \Delta p_x  = -2N_{colli} mv_x$$

On average, half of the particles collide with the wall during the $\Delta t$
$$ N_{colli} = \frac{1}{2} n \Delta V = \frac{1}{2} \frac{N}{V} A\Delta L = \frac{1}{2}\frac{N}{V} A v_x \Delta t$$
$$(F_{\text{on gas}})_x = -\frac{2N_{colli} mv_x}{\Delta t}$$
$$(F_{\text{on gas}})_x = - (F_{\text{on wall}})_x$$
$$ F_{\text{on wall}} = \frac{N}{V} m(v_x^2)_{avg} A$$
$$ p = \frac{mN}{V} \overline{v^2_x}$$

### The Root-Mean-Square Speed
$$ (v_{x})_{avg}= 0 $$
$$ v = (v_x^2 + v_y^2 + v_z^2)^{1/2}$$
$$ (v^2)_{avg} =(v_x^2)_{avg} + (v_y^2)_{avg} + (v_z^2)_{avg} = 3\overline{v_x^2}$$
$$ v_{rms} = \sqrt{(v^2)_{avg}}$$
$$ (v^2_x)_{avg} = (v^2_y)_{avg} = (v^2_z)_{avg}$$
$$ (v_x^2)_{avg} = \frac{1}{3} v_{rms}^2$$
$$ F_{\text{on wall}} = \frac{1}{3} \frac{N}{V} mv_{rms}^2 A$$
$$ p = \frac{1}{3} \frac{N}{V} mv_{rms}^2 $$

### Temperature
$$ \epsilon_{avg} = \frac{1}{2} m(v^2)_{avg} = \frac{1}{2}mv^2_{rms} $$
$$ p = \frac{2}{3} \frac{N}{V}\epsilon_{avg}$$
$$ pV = Nk_B T $$
$$ \epsilon_{avg} = \frac{3}{2} k_B T$$
Temperature is a measure of the average translational kinetic energy.  

The following two equations relates macroscopic state variables ($T$ and $P$) to microscopic quantities:
$$ p = \frac{2}{3} \frac{N}{V} \epsilon_{avg} $$
$$ T = \frac{2}{3k_B} \epsilon_{avg} $$

We can assume collisions are elastic because if the collisions were inelastic, then the temperature of the gas would continue to decrease due to the loss of kinetic energy. This doesn't happen in real life, so we can assume that collisions are elastic.

### Thermal Energy and Specific Heat

$$ E_{th} = K_{micro} + U_{micro}$$

#### Monatomic Gases
Atoms have no molecular bonds in an ideal gas so $U_{micro} = 0$
$$ E_{th} = K_{micro} = N\epsilon_{avg} = \frac{3}{2} Nk_BT = \frac{3}{2} nRT$$
$$ \Delta E_{th} = \frac{3}{2} nR\Delta T$$
$$ \Delta E_{th} = nC_V \Delta T$$
$$ nC_V \Delta T = \frac{3}{2} n R \Delta T$$
$$ C_v = \frac{3}{2} R = 12.5 \ J/(mol\cdot K)$$

#### Equipartition Theorem
* In addition to kinetic energy, non-monatomic gases can have the ofllowing forms of energy
1. Kinetic and potential energy associated with the vibrations from the spring like bond between molecules 
2. Rotational Kinetic energy 
* **Degrees of Freedom**: The number of independent modes of energy storage
  * Monatomic have 3 degrees of freedom since there are 3 different types of translational kinetic energy along x, y, and z
* **Equipartition Theorem**: The thermal energy is distributed evenly among all the different possible types of degrees of freedom. Each degree has the following energy: $\frac{1}{2} Nk_B T$ 
  * Monatomic had 3 degrees so thermal energy was $\frac{3}{2} Nk_B T$
* Vibration: For diatomic 2 degrees of freedom (one for each atom)
* Rotational: For diatomic only 2 degrees (since rotation along one axis has no rotational kinetic energy)

#### Solids 
* 6 degrees of freedom
  * 3 translational kinetic and 3 vibrational (potential)
$$ E_{th} = 3Nk_BT = 3nRT$$

#### Diatomic Molecules
* 8 total degrees of freedom but only 5 are available at room temperature due to quantum effects
$$ E_{th} = \frac{5}{2} Nk_B T = \frac{5}{2} nRT$$
$$ C_v = \frac{5}{2} R$$
$C_v$ is $\frac{3}{2}R$ at very low temperatures and $\frac{7}{2}R$ at high temperatures

### Thermal Interactions and Heat
* Heat is the energy transferred via collisions
* When thermal equilibrium is reached the following is true
$$ (\epsilon_{1})_{avg} = (\epsilon_{2})_{avg}$$
$$ T_{1f} = T_{2f}$$

### Second Law of Thermodynamics
* Equilibrium is the most probable state
* **Entropy**: Measures the probability that a macroscopic state will occur spontaneously or the measure of disorder
* Reversible microscopic events lead to irreversible macroscopic behavior since some macroscopic states are more probable

* **Second Law of Thermodynamics**: The entropy of a system never decreases
  * Heat always travels from hot to cold
  
## 21: Heat Engines and Refrigerators
* Practical devices transform heat into work
* All devices must obey two two laws of thermodynamics
  1. Energy is conserved $$ \Delta E_{th} = W_{\text{done on system}} + Q$$
  2. Most macroscopic processes are irreversible. Heat energy is transferred spontaneously from a hooter system to a cold system but never the other way around  

### Questions
1. What are the limitations imposed by the above laws on these practical devices
2. How do these devices transform heat into work?

### Heat into Work
* So far we've defined $W$ as the work done on the system (by an external force). Now we define $W_{s}$ as the work done by the system, since we only care about that when talking about practical devices.
$$ \Delta E_{th} = W + Q$$
$$ W = - W_{s}$$
$$ \Delta E_{th} = -W_s + Q$$
$$  Q = \Delta E_{th}  + W_s$$
* Energy is transferred into the system as heat to do work or stored within the system as increased thermal energy

* **Heat Reservoir**: An object that is so large that its temperature does not change when heat is transferred between the system and reservoir
* $Q_H$: Amount of heat transferred into a hot reservoir called 
* $Q_C$: Amount of heat transferred into a cold reservoir

* Converting heat to work can be done with thermal expansion, but the system is at a different state. A heat engine must be a closed cycle.

### Heat Engine
1. Extract heat, $H_S$ from hot reservoir
2. Do useful work
3. Exhausts heat energy ($Q_c$) to colder reservattor

#### Sterling Engine
* Two isotherms and two isochoric processes in one cycle
* Heat transfers occur in all four processes

#### Thermal Efficiency
* The purpose of heat engines is to transform as much of the heat absorbed $Q_H$ into work done $W_{out}$
* **Thermal Efficiency** is denoted by $\eta$
$$ \eta = \frac{W_{out}}{Q_H}$$

$$W_{out} = Q_{net} = Q_{H} - Q_{C}$$
$$ \eta = 1 - \frac{Q_C}{Q_H}$$
* Actual engines have $\eta$ of 0.1 to 0.5

### Ideal-Gas Heat Engines
* An ideal gas heat engine can be represented by a **clock-wise** loop
* The **net work** is the area **inside** the loop, not the area under the loop

### Refrigerator
Opposite of heat engine
* $ W_{in}$ and $Q_c$ as inputs
* $Q_H$ as output

