---
title: "Thermal Physics"
publishdate: 2022-12-07
lastmod: 2022-12-07
draft: false
toc: true
tags:
  - notes
  - college
  - physics
  - statistical mechanics
  - thermal physics
---

## Class Information
The three laws of thermodynamics; thermodynamic potentials; ideal and non-ideal gases; phase transitions; chemical equilibrium. Introduction to equilibrium statistical mechanics; statistical definition of entropy; applications to fluids, magnetic systems, the ideal quantum gas. Prior to Fall 2017, this course was named "Thermodynamics and Kinetic Theory".

Textbook: Schroeder

## Probability
$$ P(n, r) = \frac{n!}{(n-r)!}$$
**Permutation**: Choose $r$ objects from a set of $n$ total objects. Order matters. Gives the number of possible arrangements
  * Note that permutation also refers to a different but related concept where $P = n!$
    * The number of arrangements that a set can be placed in
    * Note that this is just a specific case of the above where $r=n$

$$ P(n, r) = \frac{n!}{(n-r)!r!}$$
**Permutation**: Choose $r$ objects from a set of $n$ total objects. Order does not matters. Gives the number of possible arrangements

### Product Rule
Find the probability that $n$ molecules are in the left half of a box with the $N$ total molecules

Total number of configurations of the system where $n$ molecules out of $N$ are in a specific half
$$ C(N, n) = \frac{N!}{n!(N-n)!}$$

For one single particle
$$ P_0 = \frac{1}{2}$$

For the system to have $n$ particles to be in a specific state
$$ P_n = (P_0)^n$$

The probability for a system to have $n$ particles in the left half of the box:
$$ P = P_n C(N, n) = (P_0)^n \frac{N!}{(N-n)!n!}$$

Alternatively, $C(N, n)$ gives the total number of configurations that lead to molecules in the left half the box and $2^N$ is the total number of configurations possible:
$$ P = \frac{C(N, n)}{2^N}$$

## Boltzmann Statistics

### Partition Function
* At any given time, $t$, a system of $N$ particles can be described by 6 variables: $x, y, z, p_x, p_y, p_z$
* These 6 variables form a 6-D **phase space**
* **Microcanonical Ensemble**: Each microstate with energy between $E$ and $E+ dE$ are equally probable
* **Canonical Ensemble**: Each microstate with a particular energy is not equally probable, but follows **Boltzmann-Statistics**
  * Heat can be exchanged
  * Temperature are constant since there is a heat and particle resevoir connected to the system
* **Grand Canonical Ensemble**: Each microstate with a particular energy is not equally probable
  * Chemical potential, $mu$, tells how much energy is needed to add/create a particle to the system
  * Heat and particles can be exchanged
  * Temperature and $mu$ are constant since there is a heat and particle resevoir connected to the system

* The **partition function** gives the number of available system states
  * https://physics.stackexchange.com/questions/203697/what-is-the-physical-meaning-of-the-partition-function-in-statistical-physics
    * "The partition function is a measure of the volume occupied by the system in phase space. Basically, it tells you how many microstates are accessible to your system in a given ensemble"


Canonical Partition Function:
$$ Z = \sum_i \exp(-\frac{\epsilon_i}{k_B T}) = \sum_\epsilon g(\epsilon) \exp(-\frac{\epsilon}{k_B T})$$

$$ F= -k_B T \ln(Z)$$
$$ U = -k_B T^2 \pdv{}{T} \left(\ln(Z)\right)$$
$$ U = \overline{E} N$$
$$ \mu = -k_B T \left(\pdv{\ln(Z)}{N}\right)_{V, T}$$

The probability:
  * $N(s)$ is the number of particles in state $s$
$$ P(s) = N(s)/ N$$
$$ P(s) = \frac{1}{Z} e^{E(s)/(k_B T)}$$

### Paramagnet
Average magnetic dipole moment, $\mu$
$$ \mu = \sum_s \mu(s) P(s)$$

Total Magnetization
$$ M = N\overline{\mu}$$

### Maxwell Speed Distribution
The partition function can be rewritten as an integral over the phase space as follows:

$$ Z = \frac{1}{(2\pi\hbar)^3}\int d^3 r \int d^3 p e^{-(E(p)/(k_B T)}  $$
where the $(2\pi\hbar)^3$ is a quantum volume factor, $d^3 r$ is a 3D positional integral, and $E(p)$ means energy is expressed in terms of momentum

Then the probability as a function of momentum, $P(p)$:
$$P(p) = \frac{1}{Z} e^{-E(p)/(k_B T)}$$

The distribution of momentum, $D(p)$ is:
$$ D(p) = P(p)\ g(p)$$

where $g(p)$ is the density of states:
$$D(p) \ dp = P(p) \ g(p) \ dp = P(p) \ \frac{V \ d^3 p}{(2\pi\hbar)^3} = P(p) \ dp  \frac{4\pi p^2 V}{(2\pi\hbar)^3} $$
$$ \implies D(p) = P(p) \ \frac{4\pi p^2 V}{(2\pi\hbar)^3}  $$

$$D(p) =  \frac{4\pi p^2 V}{(2\pi\hbar)^3} \frac{1}{Z} e^{-E(p)/(k_B T)}$$

### Partition Function for Composite Systems
For $N$ **distinguisable**, non-interacting particles:
$$ Z_{total} = Z_1Z_2 Z_3...Z_N$$
where $Z_{tota}$ is the partition function for the entire system, and $Z_i$ is the individual single particle partition function

* Proof: https://web.archive.org/web/20171209201618/https://theory.physics.manchester.ac.uk/~judith/stat_therm/partition-factorise.pdf

For $N$ **indistinguisable**, non-interacting particles:
$$ Z_{total} = \frac{Z_1^N}{N!}$$
* where $Z_1$ is the single particle partition function
* Only applies when $Z_1$ >> N
  * When the number of available single-particle states is much greater than the number of particles
  * Equivalently this formula only applies when
  $$ \frac{V}{N} >> V_{Q}$$

$$ V_Q = l_Q^3 = \left(\frac{h}{\sqrt{2\pi mk_BT}}\right)^3$$

## Quantum Statistics
### Grand Canonical Partition Function
* $\mu VT $ Ensemble
* Thermal resevoir and particle resevoir
  * Heat and particles can be exchanged
  * $T$ is constant
$$ \tilde{Z} = \sum_N \sum_i \exp(\frac{\mu N - \epsilon_i N}{k_B T}) $$
alternatively
$$ \tilde{Z} = \exp(\frac{PV}{k_B T}) $$

Probability
$$ P(n) = \frac{1}{\tilde{Z}} e^{-n(\epsilon-\mu)/(k_B T)} $$

### Average Number of Particles in a State (Distribution Functions)
Let $\overline{n}$ denote the average number of particles in a state

For quantum particles
$$ \bar{n} = \sum_n n P(n)$$
where $n$ is an integer

Let $x = (\epsilon - \mu)/(k_B T)$
$$ \bar{n} = \sum_n n \frac{e^{-nx}}{\tilde{Z}} = -\frac{1}{\tilde{Z}} \sum_n \pdv{}{x} e^{-n x} = -\frac{1}{\tilde{Z}} \pdv{\tilde{Z}}{x}$$

or alternatively:
$$ \bar{n} = k_B T\frac{1}{\tilde{Z}} \pdv{\tilde{Z}}{\mu}$$

* you can use these formulas to find the distribution function for Fermions or Bosons
  * **Fermions**: Particles cannot occupy the same state
    * For some fermions, like electrons, two particles can have the energy, but they still have different states (spin up and spin down)
  * **Bosons**: Any number of particles can occupy the same state/energy

Compare with Boltzmann:
Probablity for single particle
$$ P_{boltz}(n) = \frac{1}{Z_1} e^{-\epsilon/(k_B T)}$$

If we have $N$ independent, distinguishable particles:
$$ \overline{n_{boltz}} = NP(s) = \frac{N}{Z_1}e^{-\epsilon/(k_B T)}$$

### Fermi-Dirac Statistics
$$ N = \int_0^\infty g(\epsilon) \overline{n_{FD}}(\epsilon) \ d\epsilon $$
$$ U = \int_0^\infty g(\epsilon) \ \epsilon \ \overline{n_{FD}}(\epsilon) \ d\epsilon$$
$$ g(\epsilon) = \frac{\pi (8m)^{3/2}}{2(2\pi\hbar)^3} V \sqrt{\epsilon}$$


* **Degenerate Gas**: All states below $\epsilon_F$ are occupied and all states above are unoccupied
  * Occurs when $T = 0$
$$ \epsilon_F = \mu $$
  * Note that degeneracy here is completely different than the same word used to describe the number of states with the same energy (similar to Density of State)

### Density of States, Derivation for Fermi Energy, and Derivation for Number of Particles
Number of particles at a given energy, $\epsilon$
$$ N = \sum_i n p_i  = \sum_i 2 \overline{n}$$
where $n$ is an integer

The $2$ is from the two spins that an electron has
$$ \overline{n_{FD}} = \frac{1}{e^{(\epsilon - \mu)/(k_B T)} + 1}$$

$$ N = \sum_i \frac{2}{e^{(\epsilon - \mu)/(k_B T)} + 1} $$
Convert to an integral by integrating over all possible states (over the 6D phase space variables):
$$ N = \frac{2}{(2\pi\hbar)^3} \int dV \int d^3p \frac{1}{e^{(\epsilon - \mu)/(k_B T)} + 1} $$
We divide by $(2\pi\hbar)^3$, the quantum unit of volume

$$ N = \frac{2}{(2\pi\hbar)^3} V \int d^3p \frac{1}{e^{(\epsilon - \mu)/(k_B T)} + 1} $$
$$ \int d^3 p = \int d\Omega \int_0^\infty dp \ p^2  = 4\pi \int_0^\infty dp \ p^2$$
$$ \implies N = \frac{4\pi 2}{(2\pi\hbar)^3} V \int_0^\infty dp \ p^2 \frac{1}{e^{(\epsilon - \mu)/(k_B T)} + 1} $$

Convert from momentum $p$ to energy, $\epsilon$
$$ \epsilon = \frac{p^2}{2m} \implies p^2 = 2m \epsilon \implies p = \sqrt{2\pi\epsilon} \implies dp = \frac{\sqrt{2m}}{2\epsilon} \ d\epsilon$$

$$ N = \frac{8\pi}{(2\pi\hbar)^3} \int_0^\infty \frac{\sqrt{2m}}{2\sqrt{\epsilon}} \ d\epsilon \ (2m\epsilon) \frac{1}{e^{(\epsilon-\mu)/(k_B T)} + 1}$$
$$ N = \frac{8\pi}{(2\pi\hbar)^3} \int_0^\infty \frac{(2m)^{3/2} \sqrt{\epsilon}}{2} \frac{1}{e^{(\epsilon-\mu)/(k_B T)} + 1}$$

* We also have $N$ in terms of the density of states: $g(\epsilon)$
  * The **density of states** gives the number of single-particle states per energy

$$ N = \int_0^\infty \ \bar{n}(\epsilon) g(\epsilon) \ d\epsilon$$

This implies
$$ g(\epsilon) = \frac{8\pi}{(2\pi\hbar)^3}\frac{(2m)^{3/2}\sqrt{\epsilon}}{2} =\frac{\pi}{(2\pi\hbar)^3}\frac{(8m)^{3/2}\sqrt{\epsilon}}{2} $$

We arrive at the same density of states (DOS) from before in the [Fermi Dirac Statistics Section](#fermi-dirac-statistics)

