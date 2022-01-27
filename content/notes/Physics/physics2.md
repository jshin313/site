---
title: "Physics 2"
publishdate: 2021-08-23
lastmod: 2021-10-5
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
  - circuits
  - magnetism
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
* Adiabatic curves are steeper than isotherms

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
* By definition $Q_C$ and $Q_H$ are always positive since they only show magnitude

* Converting heat to work can be done with thermal expansion, but the system is at a different state. A heat engine must be a closed cycle.

### Heat Engine
* Clockwise PV diagram
1. Extract heat, $H_S$ from hot reservoir
2. Do useful work
3. Exhausts heat energy ($Q_c$) to colder reservoir

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
Opposite of heat engine (Counter clockwise PV diagram)
* $W_{in}$ and $Q_c$ as inputs
  * $W_{in}$ is the work done on the system
* $Q_H$ as output
* A Refrigerator transfers heat out of its cooler interior to its warmer surroundings
* Refrigerators don't violate the 2nd Law since you have to "pay" to have heat flow from $T_c$ to $T_H$
  * Requires $W_{in}$ (work input)
* In any closed-cycle refrigerator, all state variables return to their initial values once every cycle
* Over one cycle: $\Delta E_{th} = 0$
* 1st Law
$$ Q_{H} = Q_{C} + W_{in}$$

#### Efficiency
$$ K = \frac{Q_c}{W_{in}} = \frac{\text{what you get}}{\text{what you had to pay}} $$
$K$ tends to infinity for a perfect refrigerator since $W_in$ decreases as efficiency increases.

#### Brayton Cycle
* Ideal-Gas refrigerator that uses adiabatic compression and adiabatic expansion to quickly heat and cool system, respectively
1. Two adiabatic processes
2. Two isobaric processes
* Reverse Brayton cycle is for refrigerators and regular is for heat engines

#### No Perfect Heat Engine
* No perfect heat engine with $\eta = 1$
* A Perfect Heat Engine means $Q_c = 0$. We could use its work output as the work input to an ordinary refrigerator. Leads to spontaneous transfer from $Q_C to Q_H$.
* This combo violates the second law. Thus all heat engines MUST output some $Q_c$

### Limits of Efficiency
* Question: Is there a maximum efficiency or max COP (Coefficient of performance) for a device operating between $T_C$ and $T_{H}$ 

* Answer: Yes

### Carnot Engine
* **Carnot Engine**: Perfectly reversible engine
* **Carnot Cycle**
  1. Two Adiabatic processes ($Q= 0$)
  2. Two isothermal processes ($\Delta E_{th} = 0$)
$$ \frac{Q_C}{Q_H} = \frac{T_C}{T_H}$$
$$ \eta_{carnot} = 1 - \frac{T_C}{T_H}$$

### Maximum Efficiency
* Second Law (informal statement): No heat engine operating between energy reservoirs at $T_H$ and $T_C$ can exceed the Carnot efficiency
$$ \eta = \frac{W_{out}}{Q_H} \le \eta_{carnot} =1 - \frac{T_C}{T_H}$$
* Second Law (informal statement): No refrigerator operating between energy reservoirs at $T_H$ and $T_C$ can exceed the Carnot COP

![Equation table for different processes](/processesequations.png)


## 22: Electric Charge and Force
* Goal: Learn to calculate and use the electric field
* Questions
1. What is Coulomb's Law?
2. How to determine the electric force on a point charge?
3. What is an electric field?
4. What is the electric fields of a point charge?
5. How to calculate the electric field of discrete charge distribution?

### Electric Charges
* Proton and electron

### Electric Forces
* **Coulomb's Law**: A force occurs for point charges that are separated by a distance $r$
* For two positively/negatively charged particles, they experience a repulsive force of the magnitude.
$$ F_{\text{1 on 2}} = F_{\text{2 on 1}} = \frac{K|q_1 | |q_2|}{r^2}$$
* $K$ is the **electrostatic constant**
$$ K = 8.99 \cross 10^9 N \cdot m^2 / C^2 = \frac{1}{4\pi \epsilon_0}$$
* Permittivity constant $\epsilon_0$
* Charge of one electron or proton is $1.6 \cross 10^{-19} C$
$$ F = \frac{1}{4\pi \epsilon_0}\frac{|q_1 | | q_2|}{r^2}$$

### Forces on Point Charges
* Add up vectors
Use coulomb's Law to get magnitudes
### The Field Model

## 23: The Electric Field
* Electric field created by charge

* The  Electric Model
 * Long range of interaction a distance
 $$ \overrightarrow{E}(x, y, z) = \frac{\overrightarrow{F} \text{ at }(x, y, z)}{q}$$
 * Unit of Electric field are $\frac{N}{C}$ and the magnitude is the **electric field strength**
 * In the **Field Diagram** for protons, the field lines points a away from from source. For an electron, the source acts as a sink.
 $$ \overrightarrow{E}  = \frac{1}{4\pi \epsilon_0} \frac{q}{r^2} \hat{r}$$
 $r$ is from the source charge to the test charge

### The Dipole: An Important Charge Distribution
* **Electric dipole**: Consists of two point charges of equal magnitude but opposite signs, held a short distance apart
* Many molecules can be modeled as dipoles (e.g. water)


For a point lying on the axis of the dipole
$$ E = \frac{1}{4\pi\epsilon_0} \frac{2qd}{r^3}$$

For a point perpendicular to the dipole
$$ E = -\frac{1}{4\pi\epsilon_0} \frac{qd}{r^3}$$

Where $d$ is the distance between the dipoles  

$r$ is the distance from the center of the dipole. Above only works if $r >> d$

### Continuous Charge Distributions
Question: What if the charge is continuous (not discrete)?

For macroscopic charged objects, like rods or disks, we assume the charge has a continuous distribution.

1. Divide the objects into small point charge-like pieces $dq$. Each piece creates a small $dE$ 
2. The summation of fields of an infinite number of infinitesimally small pieces means integration.

$$ \overrightarrow{E}(P) = \int d\overrightarrow{E} = \int \frac{k\ dq}{r^2} \\hat{r}$$

### An Infinite Line of Charge
* A straight infinite line of charge coincides with the x-axis and the line carries **uniform** charge with the charge density $\lambda$ (C/m).
* The x-component of two equidistant points on the line will cancel out
* Only the y-component adds up
$$ dE_y = dE \cos \theta $$
$$ dE = k\lambda \frac{dx}{r^2}, \ \ \ \cos \theta = \frac{y}{r} $$
$$ dE_y = k\lambda \frac{dx}{r^3} $$
with $r =  \sqrt{(x^2 + y^2)}$

$$ E = E_y = \int_{-\infty}^{\infty} \frac{k\lambda y \ dx}{(x^2 + y^2)^{\frac{3}{2}}} = k\lambda y \int_{-\infty}^{\infty} \frac{dx}{(x^2 + y^2)^{\frac{3}{2}}}$$
$$ \overrightarrow{E}(P) = \frac{2k\lambda}{y} \hat{j}$$

* Notice that the electric field is proportional to $\frac{1}{distance}$ instead of $\frac{1}{distance^2}$ like for a point charge

### Ring of Charge
* A ring of radius $a$ carries a charge $Q$ distributed evenly over the ring. At any point $P$ on the x-axis, there is $dE$ and $dq$, where the x-axis passes through the center of the ring 
$$ r = \sqrt{x^2 + a^2} $$
* Only x-components add up

$$ E= \int_{ring} dE_x = \int_{ring} \frac{kx \ dq}{\sqrt{ x^2 + a^2}^3} =  \frac{kx}{\sqrt{ x^2 + a^2}^3}\int_{ring} dq $$
$$ \overrightarrow{E}\left(P \right)  = \frac{kQx}{(x^2 + a^2)^{\frac{3}{2}}} \hat{i}$$
* At the center of the ring, the net electric field is 0

### Disk of Charge
$$ \eta = \frac{Q}{A} = \text{charge density}$$
$$ E_{disk} = \frac{\eta}{2\epsilon_0} \left( 1 - \frac{z}{\sqrt{z^2 + R^{2}} } \right) $$

where the z-axis passes through the center of the disk and the point lies on the z-axis

### Infinite Plane of Charge
* An infinite plane is just a disk with radius of infinity
$$ E_{plane} = \frac{\eta}{2\epsilon_0}$$

* The electric field is the same at any point in space regardless of how "far" away a point is from the plane, since the plane is infinite

* $E$ is away from the plane if the charge is + and towards the plane if charge is -

### Sphere of Charge
$$ \overrightarrow{E}_{sphere} = \frac{Q}{4\pi \epsilon_0 r^2} \hat{r}, \ \ \   r \ge R$$

### Parallel-Plate Capacitor
* One plane is positively charged and one plane is negatively charged
* All charges are on one surface of hte plane because opposite charges attract
* $E = 0$ outside the capacitor
* For inside the capacitor
$$ E = \frac{Q}{\epsilon_0 A}$$
* A uniform electric field exists inside a parallel-plate capacitor

## 25: The Electric Potential

### Potential from the Electric Field
* Like gravity, the force exerted on a charge $q$, by the electric field is conservative
* Work can be represented by the change of **electric potential energy**
$$ \Delta U = U(B) - U(A)$$
$$ \Delta U = -W(A \rightarrow B) = - \int_{A}^B \overrightarrow{F} \cdot d\overrightarrow{r}$$
* $r$ is the positive vector along any path from point $A$ to point $B$

* **Potential Difference**: 
$$ \Delta V_{AB} = \frac{\Delta U_{AB}}{q} = - \int_A^B \overrightarrow{E} \cdot d\overrightarrow{r} $$
  * Must define a reference point (V(A) = 0)

### Potential Difference :Capacitor
A plate is equipotent
* Define reference point $A$ to be $0$
$$ V_B = -\int_{A}^{B} \overrightarrow{E} \cdot d\overrightarrow{r} $$
* Choose path as straight line
$$E = -E\hat{i}$$
$$ d\overrightarrow{r} = dx \hat{i}$$
$$ d\overrightarrow{r} = dy \hat{i}$$
* Notice that since $E$ is only in the $x$ direction, the contribution from the $y$ is $0$
$$ V_B = - \int_A^B \overrightarrow{E} \cdot d\overrightarrow{r} = \int_0^X E dx = Ex$$
Insert Diagram

* The electric potential **decreases** in the direction of the electric field
* When U increases, K decreases, and vice versa
* Positive charge: "downhill" means U goes down and K goes up

### Electric Potential of a Point Charge
Insert Diagram
* Easier to use a path parallel to $r_A$ and $r_B$

$$ \Delta V_{AB} = \frac{\Delta U_{AB}}{q} $$

$$ \overrightarrow{E} = \frac{kq}{r^2} \overrightarrow{r}$$
$$ d\overrightarrow{dr} = dr \overrightarrow{r}$$

$$ \Delta V_{ab} = -\int_{r_A}^{r_B} \frac{kq}{r^2} dr = -kq \int_{R_A}^{R_B} \frac{dr}{r^2} = kq \left( \frac{1}{r_B} - \frac{1}{r_A} \right) $$
* Notice that the second part of the path (the curve) is always perpendicular to the electric field. This means the contribution is $0$ to the electric field along that $r$.

$$ V_{\text{point charge}} = \frac{1}{4\pi \epsilon_0} \frac{q}{r}$$

### Electric Potential of a Charged Sphere
* Using Gauss's Law, we know that outside the sphere, the field is the same as a point charge
$$ V = \frac{1}{4 \pi\epsilon_0}\frac{Q}{r}, \ \ r \ge R$$

If the potential at the surface $V_0$ is known, the potential at $r$ is 
$$ V = \frac{R}{r}V_0$$

### Electric Potential for Multiple Charges
* You can add electric potentials

### Electric Potential for Ring
% $$ V(P) = \int dV = \int \frac{kdq}{r}$$

## 26: Potential and Field
### Capacitors
$$ C_{parallel} = C_1 + C_2 + C_3 \ldots$$
$$ \frac{1}{C_{serial}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} +\ldots$$

$$ Q = C\Delta V$$
* If two capacitors $C_1$ and $C_2$ are in series, then $Q_{12} = Q_1 = Q_2$
* The potential difference across two capacitors, $C_1$ and $C_2$ in parallel is the same 
$$ V_{12} = V_1 = V_2$$


### Capacitance in Terms of Distance and Area
For a parallel-plate capacitor
$$ C = \frac{\epsilon_0 A}{d} = \frac{Q}{\Delta V_C} $$

## 27: Current and Resistance
### Current
* Weakly bound valence in metals
* Normally electrons are moving randomly with no net flow of charge
* An electric field causes a slow drift at speed $v_d$
$$ i_e = n_e A v_d$$

$v_d$ is the drift speed of the electrons (net motion of electrons "flowing")
  * Very small value
  $n_e$ is the number density (electrons in a given volume)
* $A$ is cross sectional area  
* $i_e$ is the number of electrons flowing per time through a certain area


* Most metals contribute 1 valence electron to the sea of electrons per atom
* The number of electrons $n_e$ (number of electrons per cubic meter) is the same as the number of atoms per cubic meter

### Creating a Current
* $\overrightarrow{E} = 0$ inside a conductor in static equilibrium
* When charges are moving, there is a non-zero electric field causing electrons to move and current to flow

$$ i_e = \frac{n_e e \tau A}{m}E$$
* $\tau$ is the mean time between collision (property of the conductor)

$$ I = \frac{Q}{\Delta t} =  \frac{e N_e}{\Delta t} = ei_e$$
$I$ is the charge per time

Current is defined as the direction positive charges flow, so current is opposite the direction electrons flow

### Conservation of Current and the Junction Rule

### Law 1
Due to conservation of charge, the current must be the same at all cross-sections along a current-carrying wire

### Law 2 (Kirchhoff's Junction Law)
For a junction, the law of conservation of current requires that the sum of the current in the branches

$$ \sum I_{in} = \sum I_{out} $$

### Conductivity and Resistivity
$$ v_x = v_{0x} + a \Delta t = v_{0x} + \left( \frac{eE}{m} \right) \Delta t $$
* Assume $v_{0x} = 0$ and $\tau = \Delta t$ for all collisions
$$ v_d = \frac{e\tau}{m}E$$
* **Average Time between Collisions/Electron Lifetime/Scattering Time**: $\tau$ is a material dependent quantity
$$ J = \frac{dI}{dA}=  n_e e v_d = \frac{n_e e^2 \tau}{m}E$$
$J$ is the current density and $\frac{n_e e^2 \tau}{m}$ only depends on the conducting material
$$ \sigma = \text{conductivity} = \frac{n_e e^2 \tau}{m}$$
$$ J = \sigma E$$
1. Current is caused by an electric field
2. Current density depends on the strength of the electric field
3. Current density depends on the material's conductivity

When $J(p)$ varies point to points, the current through an area is the surface integral of the current density over that area
$$ dI = J \ \ dA$$
$$ I = \int_{area} \overrightarrow{J} \cdot d\overrightarrow{A} $$

$$ \rho = \text{resistivity} = \frac{1}{\sigma}$$

$$ R = \text{resistance} = \frac{\rho L}{A}$$

#### Superconductivity
* Resistance is actually zero
* Charge moves *without an electric field*

### Ohm's Law
If we assume the electric field is uniform:
$$ \Delta V = E \cdot L$$
Remember $E = \frac{F}{q} = \frac{\Delta V}{d}$

$$ E_s = -dV / ds \implies E = \frac{\Delta V}{\Delta s}$$
If we assume $J$ is uniform and perpendicular to the cross section
$$ I = JA = A\sigma E = \frac{A}{\rho}E = \frac{A}{\rho L}\Delta V$$
$$ I = \frac{\Delta V}{R}$$

## 28: Fundamentals of Circuits

### Kirchoff's Loop Law
For a loop (any path that starts and ends at the same point), the law of conservation of energy requires
$$ \Delta V_{loop} = \sum (\Delta V)_i = 0$$

Note: this can be true only if at least one $(\Delta V)_i$ is positive (there is a power supply).  

Let us define $\Delta V$ to be negative for resistors and any component that consumes electricity.

* From negative to positive for a battery: $\Delta V = +\epsilon$
* From positive to negative for a battery: $\Delta V = - \epsilon$ 
* From positive to negative for a resistor: $\Delta V = -\Delta V_R = -IR$

### Energy and Power
The rate of transfer of thermal energy through a resistor
$$ P_R = \frac{dE_{th}}{dt} = \frac{dq}{dt} \Delta V_{R} = I \Delta V_R = I^2 R =\frac{(\Delta V)^2}{R}$$

## 29: Magnetism
* Magnetic fields are similar to electric field, except that magnetic fields can only exist as dipoles

* The force on a north pole is parallel to $\overrightarrow{B}$ while the force on a south pole is opposite to $\overrightarrow{B}$.

### Magnetic Field of a Moving Charge
* **Biot-Savart Law**
$$ \vec{B}_{\text{point charge}} = \frac{\mu_0}{4\pi}\frac{q \vec{v} \cross \hat{r}}{r^2}$$
* The above is analogous to Coulomb's Law

### Superposition of Magnetic Fields
$$\vec{B}_{tota} = \vec{B_1} + \vec{B_2} + ... + \vec{B}_n $$
Add magnetic fields vectorally, the $\hat{r}$ unit vector will be different for each of the individual magnetic fields

### Magnetic Field of a Long Straight Wire
$$ \Delta Q \vec{v} = I \Delta \vec{s}$$
$$ d\vec{B} = \frac{\mu_0}{4\pi} \frac{I\Delta \vec{s} \cross \hat{r}}{r^2}$$
where $s$ is the length of the wire

#### Infinite Wire
$$ B_{wire} = \int d\vec{B} = \frac{\mu_0 I}{2\pi r} $$

#### N -Turn Current Loop
$$ B_{\text{coil center}} = \frac{\mu_0 NI}{2R} $$

### Magnetic Field of a Current Loop
On axis magnetic field (axis through center of loop):
$$ \vec{B}(P) = \frac{\mu_0 Ia^2}{2(x^2 + a^2)^{3/2}}\hat i $$

For large distances $|x| >>a$ the following is true
$$B = \frac{\mu_0 Ia^2}{2|x|^3} = \frac{\mu_0 IA}{2\pi |x|^3 }$$

### Solenoid
$$ n = N/L$$
$$ B = \mu_0 n I = \mu_0 \frac{N}{L} I$$


### Magnetic Dipole Moment
A current loop is a magnetic dipole.
$$ \vec{\mu} =  \text{Magnetic Dipole Moment} = NIA$$

Magnetic Dipole is always perpendicular to the area of the loop (from south to north pole)

$$ \vec{B}_{dipole} = \frac{\mu_0 2 \vec{\mu}}{4\pi|x^3|}$$
direction above is on the axis of the magnetic dipole

### Cyclotron
$$F= qvB = \frac{mv^2}{r}$$
$$ r = \frac{mv}{qB}$$

**Cyclotron frequency (1/T)**
$$ f = \frac{1}{T} = \frac{v}{2\pi r} = \frac{v}{2\pi (mv/qB)} = \frac{qB}{2\pi m} $$

Cyclotron frequency does not depend on the speed of the particle!!!!

When the particle has a component of $\vb{v}$ along the field $B$, it forms a helix/spiral

* Perpendicular component is responsible for circular motion
* The parallel component is responsible for 

### Spectrometer: Charged Particle in B
1. Positive ions of charge $q$ and $m$ are accelerated from rest by a potential difference $\Delta V$

$$ \frac{1}{2} mv^2 = q\Delta V$$

2. The particles follow a Clockwise (If $q>0$) circular path in uniform magnetic field (out of screen). After half an orbit, they land on detector

Find $d$ (diameter)

$$ d = 2r = \frac{2mv}{qB} = \frac{2m}{qB}\sqrt{\frac{2q\Delta V}{m}} = 2 \sqrt{\frac{2m\Delta V}{qB^2}}$$

### Magnetic Force on a Current
$$ \vec{F} = q\vec{v} \cross \vec{B}$$
Consider a segment of length $L$ in which the charges $Q$ have a drift velocity of $v_d$

$$ \vec{F_q} = q\vec{v_d} \cross\vec{B}$$
$$ Qv_d = IL \implies $$

$$\vec{F} = I\vec{L} \cross \vec{B}$$

Note: $I$ is always in direction of $\vec{L}$

### Magnetic Force Between Parallel Wires
If two parallel wires have currents that both go up, they will attract.

The wire on the left creates a magnetic field that goes into the page on the right wire. So the right wire is pulled to the left. The right wire creates a magnetic field out of the page on the left wire. Thus the left wire has a force to the right.

$$ F_{\text{parallel wires}} = \frac{\mu_0 l I_1 I_2}{2\pi d} $$

### Forces and Torques on Loops
We know a current loop is a magnetic dipole
Consider a $l\cross l$ current loop with current $I$ in uniform $B$ making angle $\theta$ with the field

$$ d = \frac{1}{2} l \sin \theta$$
$$ \tau = 2Fd = 2IlB \frac{1}{2} l \sin\theta = Il^2B \sin\theta = IAB \sin\theta = \mu B \sin \theta$$

$$ \vec{\tau} = \vec{\mu} \cross \vec{B}$$

Applicable to any loop of any shape

## 30: Electromagnetic Induction

### Induced Current
Question: If electric currents produce magnetic fields, is the reverse possible?

### Magnetic Flux
$$ \text{Number of lines through an area dA} = \vec{B} \cdot d\vec{A}$$

**Magnetic flux** of $\vec{B}$ through a loop, denoted by $\Phi$, counts the total number of lines passing through that loop

$$ \Phi_m = \int \vec{B} \cdot d\vec{A}$$

Note that the $\vec{A}$ vector is the *normal* vector through the loop

* $\theta$ is the angle between $\vec{B}$ and the *normal* vector $\vec{A}$


$$ \Phi_m = AB \cos{\theta}$$

When $\theta = 0$, the magnetic field is parallel to the normal vector of the loop. In other words, the magnetic field is perpendicular to the loop's area.

1 weber = 1 Wb = 1 $T \cdot m^2$

### Faraday's Law
$$ \varepsilon = \left|\frac{d\phi_M}{dt}\right|=\left|\frac{d}{dt} (AB\cos{\theta}) \right| =\left|A\frac{d}{dt} (B\cos{\theta}) + B\frac{d}{dt} (A\cos{\theta}) \right| $$

If we slide a conducting wire along a U-shaped conducting rail:
$$ \varepsilon = \frac{d}{dt} (xlB) = \frac{dx}{dt} l B = vlB $$

$$I = \frac{\varepsilon}{R} = \frac{vlB}{R}$$

### Lenz's Law
* Question: Which direction is the induced current
* An induced current always moves in the direction that its magnetic field opposes the original change of flux
The magnetic field $\vec{B}_{induced}$ due to the induced current points
1. in the **opposite** direction to the original $\vec{B}$ if the flux is **increasing**
2. in the **same** direction as the original $\vec{B}$ if the flux is **decreasing**
3. is zero if the flux is not changing

### Induced Electric Fields
* There must be an **induced electric field** tangent to the loop at all points
* EMF = the work per unit charge done as a charge goes around a closed loop
$$ \varepsilon = \left|\frac{d\phi}{dt}\right| = A\left|\frac{dB}{dt}\right|$$
$$ W = q \oint \vec{E} \cdot d\vec{s}$$
$$ \varepsilon = \frac{W}{q}$$
$$ \implies \oint \vec{E} \cdot d\vec{s} = \left|\frac{d\phi}{dt}\right| $$
For an induced electric field that is produced by a changing magnetic field producing "pinwheel" pattern of induced electric fields
$$ \oint \vec{E} \cdot d\vec{s} = 2\pi r E = \left|\frac{d\phi}{dt}\right| $$
where $r$ is the distance from the center  
And the area of the magnetic flux is only the area formed by the real or imaginary closed curve of integration (loop)

#### Solenoid Induced Electric Field
$$ E_{inside} = \frac{r}{2} \left|\dv{B}{t}\right|$$

#### Generalization of Faraday's Law

$$ \oint \vec{E} \cdot d\vec{s} = -\frac{d\phi}{dt}$$

* Direction of electric field follows Lenz's Law

### Mutual Inductance
Suppose there are two coils: Coil 1 has a changing current $I_1$ and generates a changing magnetic field. Coil 2 is close to coil 1 and has an induced EMF from Coil 1.   

**Inductance** is a property of Coil 2, denoted by $M_{21}$, measured in Henry ($\frac{T\cdot m^2}{A}$)
$$ M_{21} = \frac{\phi_2}{I_1} $$
$$ \varepsilon_2 = -M_{21} \frac{dI_1}{dt}$$

### Self-Inductance
A changing current in a coil wil also induce an EMF $\varepsilon_L$ in itself
$$ \varepsilon_L = -L \frac{dI}{dt}$$

$L$ is the self inductance
$$ L = \frac{\phi}{I}$$

Example: For solenoid of length $l$
$$ L = \frac{\phi}{I} = \frac{NBA}{I} = \frac{\mu_0 N^2 A}{l} = \mu_0 n^2 Al$$

### Magnetic Energy in an Inductor
* Energy can be stored in an electric field of a **capacitor**
* Similarly, energy can be stored in a magnetic field of an **inductor**
$$ U= L \int_{0}^{I} I \ \ dI = \frac{1}{2} LI^2$$

### Magnetic Energy Density
* For an ideal solenoid
$$ L = \mu_0 n^2 Al$$
$$ B = \mu_0 nI$$

$$ U = \frac{1}{2} LI^2 = \frac{1}{2} \frac{B^2}{\mu_0}Al$$

Energy per unit volume, **Magnetic Energy Density**
$$ u_B = \frac{B^2}{2\mu_0} $$

Although the energy density was derived via a solenoid, these equations are universal.

### Generators
$$ \phi_m = \vec{A}\cdot \vec{b} = AB \cos \theta = AB \cos \omega t$$
$$ \omega = 2\pi f$$
$$ \varepsilon_{coil} = -N \dv{\phi_m}{t} = - ABN \dv{}{t} (\cos \omega t) = \omega ABN \sin \omega t$$

### Transformers
$S$ = Secondary
$P$ = Primary
$$ \frac{N_S}{N_P} = \frac{V_S}{V_P} $$

## 31: Electromagnetic Fields and Waves

### Maxwell's Law
1. $\oint \vec{E} \cdot d\vec{A} = \frac{Q_in}{\epsilon_0} $
  * Charged particles create an electric field
2. $\oint \vec{B} \cdot d\vec{A} = 0$
  * There are no isolated magnetic poles
3. $\oint \vec{E} \cdot d\vec{s} = -\frac{d\phi_m}{dt}$
  * An electric field can also be created by a changing magnetic field
4. $\oint\vec{B} \cdot d\vec{s} = \mu_0 I_{through} + \epsilon_0  \mu_0 \frac{d\phi_e}{dt}$
  * Currents (or changing electric flux) create a magnetic field

### Maxwell's Correction to Ampere's Law
* Ampere's Law only works for steady currents
* An example of when ampere's law fails is with a capacitor
* A changing electric field flux can also create magnetic field as well
  * $\phi_e$ increases as the capacitor charges
* The electric field is $$E = \frac{Q}{\epsilon_0 A}$$
* The electric flux (through $S_2$) is $$ \phi_e = E * A = \frac{Q}{\epsilon_0}$$
* The rate the flux changes (through $S_2$ assuming $A$ doesn't change)
$$ \frac{d\phi_e}{dt} = \frac{1}{\epsilon_0} \frac{dQ}{dt} = \frac{I}{\epsilon_0}$$

* Maxwell added a correction term to Ampere's Law called the **displacement current**
$$ I_{disp} = \epsilon_0 \frac{d\phi_e}{dt}$$

### Ampere-Maxwell (AM) Law
* The A-M law states that either a changing electric flux or electric current through a closed loop creates a magnetic flux around the loop
* A magnetic field can be created either by an electric current or by a changing electric field
$$ \oint \vec{B} \cdot d\vec{s} = \mu_0 (I_{through} + I_{dist}) = \mu_0 \left(I_{through} + \epsilon_0 \frac{d\phi_e}{dt}\right)$$

### Maxwell's Equations in Vacuum (Special Case)
* In a vacuum (empty space) there is no electric charge ($q = 0$) and no current ($I=0$) since there is no wire

Gauss's Law ($\vec{E}$)
$$ \oint \vec{E} \cdot d\vec{A} = 0$$
Gauss's Law ($\vec{B}$)
$$ \oint \vec{E} \cdot d\vec{r}= - \frac{d\phi_B}{dt}$$
Faraday
$$ \oint \vec{B} \cdot d\vec{A} = 0$$
Ampere
$$ \oint \vec{B} \cdot d\vec{r} = \mu_0 \epsilon_0 \frac{d\phi_E}{dt}$$

* Complete symmetry between magnetic field and electric field
* The only source of either field is the change in time of the other field

### Plane Waves
* Simplest solution of Maxwell's equations is the plane wave
* A **plane wave** consists of E&M fields that vary in space ONLY in the direction of the wave propagation
* The plane is normal to the direction of propagation
* The electric field and magnetic field is the same everywhere on the plane

$$ E_y = E_0 \sin(kx - \omega t)$$
$$ B_z = B_0 \sin(kx - \omega t)$$
Let the $E$ be only along the $y$ axis and $B$ along the z-axis and let the wave move in the direction of the x-axis
$\vec{E} \cross \vec{B}$ is the direction of the propagation (x-axis)

### Properties of Plane EM Waves

* **Wave Number**: $k = \frac{2\pi}{\lambda}$ Describes variation of wave with respect to $x$
* **Angular Frequency**: $\omega = 2\pi f = \frac{2\pi}{T}$ Variation of wave with respect to $t$
* **Velocity** $v = \lambda f = \frac{\omega}{k} $

* The plane wave only satisfies Maxwell's equations in a vacuum if the wave speed is given by
$$ v = \frac{\omega}{k} = \frac{1}{\sqrt{\epsilon_0\mu_0}} = c = 3.0 \cdot 10^{8} m/s$$

Results
1. Light is an EM wave
2. Optics can be viewed as a branch of E&M

$$ E = \frac{\omega}{k} B = c B$$

### Intensity and Power
$$ \vec{S} = \frac{1}{\mu_0} \vec{E} \cross \vec{B}$$
The Poynting vector, $\vec{S}$ points in the direction the EM wave is traveling.

$$ I = \frac{P}{A} = S_{avg} = \frac{1}{2c\mu_0} E_0^2 = \frac{c\epsilon_0}{2} E_0^2$$
The above relates the intensity of an EM wave to the amplitude of the wave's electric field

$$ I = \frac{P_{source}}{4\pi r^2}$$

### Radiation Pressure
$$ F = \frac{\Delta p}{\Delta t} = \frac{P}{c}$$
where $P$ is power and $p$ momentum

$$ p_{rad} =\frac{F}{A} = \frac{P/A}{c} = \frac{I}{c} $$
where $p_{rad}$ is radiation pressure

### Polarization
Electric field vector and Poynting vector define the **plane of polarization**

#### Malus's Law
$$ I = I_0 \cos^2 \theta$$

## 33: Ray Optics

### Ray Model of Light
* Light travels in **straight lines**
* Rays can cross without disturbing each other
* Rays travel forever until they interact with matter
* Objects are sources of light rays

### Law of Reflection
* The incident ray and reflected ray are in the same plane normal to the surface
* The angle of reflection equals the angle of incidence
$$ \theta_i = \theta_f$$

### Refraction

#### Snell's Law
$$ n_1 \sin\theta_1 = n_2 \sin \theta_2$$
* If $n_2 > n_1$, then $\theta 2 < \theta_1$, then light bends **towards** the normal
* Bending occurs because the wavelength $\lambda$ decreases in more dense media since $v$ also decreases $v = f\lambda$

$$ v_{medium} = \frac{c}{n}$$

### Mirrors
* **Flat**: Virtual image only
$$ s' = s$$

* **Parabolic**: All rays parallel to mirror axis converge to single **focal** point
* **Spherical Mirror**: Approximates parabolic mirror close to the mirror
$$ f = r/2$$

* **Focal Point (F)**: Any incoming parallel rays will be reflected towards this focal point
* **Center Point (C)**: The distance from this point to the mirror is the same in any direction
* **Real Image**: Where two (or more) light rays **converge**
* **Virtual Image**: An image formed when **diverging** rays appear to meet at a point "behind" the mirror

### Concave Mirror
* **Concave** mirrors can create either **real** or **virtual** mirrors
  * If $s > 2f$, the image is *real, inverted, and reduced* in size
  * If $2f > s > f$, the image is *real, inverted, and enlarged*
  * If $s < f$, the image is *virtual, upright, and enlarged*
    * Note that for a flat mirror, this is the case. The reflection is virtual and the focal pint is infinitely away from the mirror

![3 cases for concave mirror](/physics2/concavemirror.png)

### Convex Mirror
* Incoming rays reflects on the outside of its spherical curvature, causing light to diverge
* Features
1. The focal point is **behind** the mirror ($f < 0$)
2. The image is *virtual, upright, and reduced* in size

![1 case for convex mirror](/physics2/convexmirror.png)


### Mirror and Magnification equations
* If the image, focal point, or center of curvature is on the **reflecting** side of the mirror, the corresponding distance ($s'$, $f$, $R$) is **positive** and **negative** otherwise

$$ M = \frac{h'}{h} = \frac{-s'}{s}$$
* $M$ is magnification
* $h'$ is the new height of the image and $h$ is the height of the original image
* $s'$ and $s$ correspond to the distance from the mirror for the new and old images, respectively

$$ \frac{1}{s} + \frac{1}{s'} = \frac{1}{f}$$

### Images with Lenses
1. **Converging** Lens which bring incoming parallel rays to focus
  * Center thickeness is greater than edge thickness
2. **Diverging** Lens: Bend parallel rays so they appear to diverge from a focus
  * Center thickeness is less than edge thickness

* **Thin Lens**: Thickness is small compared to the curvature of radii of its two surfaces
* **Converging Lenses**
  * Double convex
  * Planoconvex
  * Convex Meniscus
* **Diverging Lenses**
  * Double concave
  * Planoconcave
  * Concave Meniscus

* 3 types of **principal** light rays
  1. parallel to the principal axis
  2. pass through the near focal point
  3. directed at the center of the lens

### Converging Lens
* Can produce real and virtual images that are either enlarged or reduced
* 3 distinct cases
![3 distinct cases](/physics2/convergelens.png)

### Diverging Lens
* Virtual image that is upright and reduced in size
  * Virtual image is on the same size as the original object

### Thin Lens Equation
$$ \frac{1}{s} + \frac{1}{s'} = \frac{1}{f}$$

### Magnification Equation
$$ M = \frac{h'}{h} = -\frac{s'}{s}$$

### Lens Sign Conventions
1. Focal length is **positive** for converging lenses and **negative** for diverging lenses
2. The object distance $s$ is **positive** if it's on the **same** side as **incoming** light rays; negative otherwise
3. The image distance $s'$ is **positive** if the image is on the **same** side as **outgoing** light rays
4. The height of the image $h'$ is **positive** if the image is **upright** and negative if the image is inverted

## 32: Wave Optics
Light can be viewed in two ways
* As a ray (see the last chapter)
* As a wave (this chapter)

The Wave Nature of Light can be seen through
* Double Slit Experiment
* Single Slit Experiment
* Diffraction

What is Light?
  * Light is an electromagnetic **wave**
    * Shares some similarity to water waves
    * Water also experiences **diffraction** (spreading out of waves)
    * The reason why light doesn't experience diffraction in large openings is because light's wavelength is quite small but most openings are quite large

The wave model
* When light passes through openings smaller than $1$mm, light exhibits wave behavior, so it does spread out
The Ray Model
* When light passes through openings larger than $1$mm, it behaves like particles and travels in straight lines

### Double Slit Experiment
Take a pair of slits, each $0.04$mm wide and spaced around $0.25$ mm apart. The laser beam illuminates both slits. Viewing screen is far behind the slits.

Two separate light waves overlap and interfere, resulting in a pattern of light and dark waves (similar to throwing two stones in water).

#### A Brief Review of Interference
**Constructive Interference**: A full-wavelength path difference results in constructive interference.  
$$ \Delta r = m \lambda, \ \ m = 0, 1, 2, ...$$

**Destructive Interference**: Crest meets trough, means waves cancel. Half-Wavelength path difference leads to destructive interference.
$$ \Delta r = \left(m+\frac{1}{2}\right) \lambda, \ \ m = 0, 1, 2, ...$$

#### Bright Fringes (Constructive Interference)
![Double Slit Experiment](/physics2/doubleslit.png)

$$\Delta r= d\sin \theta = m \lambda$$
Note that $\Delta r$ is the difference between $r_1$ and $r_2$.  

To find the actual $y$ position of the fringe, use the following approximation when $\lambda << d << L$
$$ \sin \theta = \tan \theta = \frac{y}{L}$$

$$ \Delta r = \frac{d y}{L} = m \lambda$$

$$ y_{light} = \frac{m \lambda L}{d}$$

##### Dark Fringe
$$ y_{dark} = \frac{\left(m + \frac{1}{2}\right)\lambda L}{d} $$


Fringe spacing is 
$$ \Delta y = y_m - y_{m-1} = \frac{\lambda L}{d}$$


### Diffraction Grating
**Diffraction Grating (DG)**: A system with many closely spaced slits

* **d**: the distance between narrow slits
* **N**: The number of lines per meter printed on a DG
$$ d = \frac{1}{N}$$

Bright and narrow fringes follows the same rules:
$$ d\sin \theta_m = m\lambda \ \ \ \ \ \ \ m =  0, 1, 2, 3...$$

Consider what happens when white light passes through a diffraction grating.  
For all frequencies, the path differences, $\Delta r = 0$ $m=0$. Thus at $m=0$, the light is white. However, at other $m$ values, the path difference for each frequency is different, so each color shows up at different places.

![Diffraction Grating](/physics2/diffractiongrating.png)

### Single Slit Diffraction
* If we send a beam of monochromatic light through a single narrow slit, with viewing screen at distance $L$ and slit width $a$, $L >> a$, diffraction occurs
* Unlike with the double slit, there is one large, broad central maximum
* **Perfect Destructive Interference**-  Minima:
$$ a \sin \theta_p = p \lambda, \ \ \ \ p =1, 2, 3, ...$$
* **Width of Single-Slit Central Maximum**
$$ w = \frac{2\lambda L}{a}$$

### Circular-Aperture Diffraction
* Q: What if the rectangular slit is replaced with a hole of diameter $D$?
* A: The diffraction pattern of monochromatic light appears as a central circular max with second bright fringes ringed around
* Angle of first **min**
$$\theta_1  = \frac{1.22\lambda}{D}$$

* **Width of central maximum**
$$ w = 2y_1 = 2L \tan \theta_1 \approx \frac{2.44 \lambda L}{D}$$
