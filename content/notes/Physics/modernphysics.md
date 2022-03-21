---
title: "Introduction to Modern Physics"
publishdate: 2022-01-27
lastmod: 2022-01-27
draft: false
toc: true
tags:
  - notes
  - college
  - physics
  - special relativity
---

## Class Information
The course will provide an introduction to the special theory of relativity and quantum mechanics, with emphasis of their applications to atomic, molecular and solid state physics. The course is calculus based and writing intensive; it relies heavily on problem solving and technical writing.

Textbook: Modern Physics by Kenneth Krane

## 2: Special Relativity

### Galilean Transforms
* **Galilean Relativity**: Also known as classical relativity. Describes how two inertial (non accelerating) reference frames see the same event (turns out to not work in all cases).
* **Transforms**: Allows you to convert from one coordinate frame to another
* Suppose we have two coordinate frames, $O$ and $O'$ and two different observers in each of those frames. Let $O'$ be moving away from $O$ at a velocity of $u$.

$$ x' = x - ut$$
$$ y' = y$$
$$ z' = z$$
One of the postulates in Galilean Relativity, is that time is the same for all observers
$$ t' = t$$

Visual depiction of where the $x'$ equation comes from:
![Diagram of two frames](/modernphysics/galileo.png)

Taking the derivatives with respect to time yields (note ' does not denote derivative in this case):
$$ v_x' = v_x - u $$
$$ v_y' = v_y$$
$$ v_z' = v_z$$

$$ a_x' = a_x $$
$$ a_y' = a_y$$
$$ a_z' = a_z$$

* Note Newton's Laws hold in these reference frames, since acceleration are measured to be the same (as long as $u=constant$)
* Note $x, y, z$ correspond to the position of any object according to $O$, and $v_x', v_y', v_z'$ correspond to the velocities of an object from the perspective of $O'$

### Example 2.3
Suppose a swimmer always swims with velocity $c$ relative to the water and the water relative to the river bank travels at $u$. Suppose $c > u$. Observer $O$ is on the river bank, while the $O'$ observer is traveling along the water at the same speed as $u$

#### Upstream and Downstream Case
![Upstream and Downstream diagram](/modernphysics/2.3upstream.png)

Upstream
* Note that $v_x' = -c$ (according to observer $O'$, the swimmer moves to the left)
$$ v_x' = v_x - u $$
$$ v_x = u - c$$
* Since $c > u$, note that $|v_x| = c - u$
* The total time to go Upstream a length $L$, is
$$ t = \frac{L}{|v_x|} = \frac{L}{c-u} $$
* Note that we use $v_x$ instead of $v_x'$, since using $v_x'$ would means some the distance traveled is actually due to the observer moving, $O'$ and not solely due to the swimmer, so the calculated time would be less than expected, and the swimmer would not actually have moved a distance $L$ according to the observer $O$ on the river bank

Downstream
* Note that $v_x' = c$ (according to observer $O'$, the swimmer moves to the left)
$$ v_x' = v_x - u $$
$$ v_x = u + c$$
$$ t = \frac{L}{|v_x|} = \frac{L}{c+u} $$

Calculating Time to go Upstream and then Downstream 
* Just add time from upstream and downstream
$$ t = \frac{L}{c-u} + \frac{L}{c+u} = \frac{2L}{c} \frac{1}{1-u^2/c^2}$$

#### Cross-stream Case
We want the swimmer to swim directly across the river bank in a straight line, perpendicular from the river bank, according to observer $O$

![Cross Stream path diagram](/modernphysics/crossstream.png)

* Note that $v_x = 0$
$$ v_x' = v_x - u \implies v_x' = -u$$
* Note that the speed of the swimmer relative to the water is always $c$
$$c= \sqrt{v_x'^2 + v_y'^2} $$
$$ v_y' = \sqrt{c^2 - v_x'^2} = \sqrt{c^2 - u^2}$$
$$ t=2 \cdot t_{across} = \frac{2L}{c} \frac{1}{\sqrt{1-u^2/c^2}}$$

### Michelson-Morley Experiment
* Old physicists thought light had to travel in medium
  * This implies preferred reference frame existed (the reference frame O' that moved at the same speed as the medium)
  * This also implied another reference frame moving at a different speed relative to the  medium would have a different speed of light
* Mirror B is half silvered (some light gets reflected while some goes through), so light travels 2 separate paths, namely AB and AC
  ![Michelson Experiment Diagram](/modernphysics/michelson.png)

* There is a phase difference between the two light beams, which can be measured by looking at how many fringes appear due to interference. The phase difference is due to the following
  1. Difference in path length for AB and AC
  2. Speed of earth through ether (medium that light supposedly travels through)
* Michelson and Morely didn't care about 1. and wanted to measure 2. since they were trying to measure the ether
* This is similar to Example 2.3, with $O$ being an observer on the earth and $O'$ being an observer at rest relative to ether (i.e. the preferred reference frame)
* In order to isolate 2, they rotated the apparatus 90 degrees.
  * Phase difference due to difference between AB and AC doesn't change, since path difference doesn't change
  * But phase difference should occur due to cross-stream becoming upstream and vice versa
* Count how many fringes change from bright to dark to see how the phase difference changes
* Each time the fringes change, that represents a time difference between the paths due solely to movement relative to the ether and not due to the difference in path lengths of AB and AC
* See textbook and [Wikipedia](https://en.wikipedia.org/wiki/Michelson%E2%80%93Morley_experiment#Light_path_analysis_and_consequences) for more details

### Einstein's Postulates
1. The laws of physics are the same in all inertial reference frames
2. The speed of light in free space has the same value in all inertial reference frames

### Time Dilation and Length Contraction

* **Time Dilation**: Observer $O$ measures a longer time interval than $O'$
* **Length Contraction:** Observer $O'$ measures shorter length than observer $O$
* **Proper Length** $L_0$: Measured by observer where the measuring tape is at rest
* **Proper time $\Delta t_0$**: Measured from observer where the beginning and end of a time interval is measured at the same place
* Time dilation in one frame of reference can be seen as length contraction in another reference frame.

### Simultaneity
From an observer $O$, two events could seem simultaneous, but for a different observer $O'$, these two events could seem to occur at different times.

### Twin Paradox
Imagine Twin1 is on earth and Twin2 departs on a spaceship. From Twin1's perspective, Twin2 is moving away with velocity $v$, and thus will be younger than Twin1. But from Twin1's persepctive, Twin2 is moving away velocity $v$, so Twin1 should be yonger than Twin2. This appears to be a paradox since when Twin2 arrives back on earth, only one can be younger than the other. But in reality, Twin2 is the one accelerating/deaccelerating, and all reference frames agree Twin2 is the one doing the accelerating. Thus, Twin2 will be the one to experience the relativistic effects and be younger.

#### Example
Twin1 stays on earth and Twin2 departs on spaceship at age 0. Twin2 travels at $0.6c$ to a planet $6$ light years away.

* According to Twin1, it takes 6 ly/0.6c = 10 years to reach the planet and another 10 to return to earth
* According to Twin2, the length of 6 ly is contracted by a factor of $\sqrt{1 - (0.6)^2)}=0.8$. So the journey is 0.8 * 6 ly = 4.8 ly
* Since the length has been contracted for Twin2, Twin2 will measure 8 years to go to the planet and another 8 to return
* Imagine Twin1 sends a light pulse every year during the whole trip (20 years according to Twin1, 16 according to Twin2).
* The frequency at which Twin1 sends the light pulse is dopper shifted
On the journey to the planet, Twin2 will receive pulses at a frequency of
$$ 1/year \cdot \sqrt{\frac{1-u/c}{1+u/c}}=0.5/year$$
And on the journey back to earth, Twin2 will receive pulses at a frequency of
$$ 1/year \cdot \sqrt{\frac{1+u/c}{1-u/c}}=2.0/year$$
* $8 * 0.5 + 8 * 2 = 20\  pulses$
* So according to Twin2, during the 16 year journey, Twin2 receives 20 pulses, meaning Twin2 aged less

### Chapter 2 Summary
Derivation in textbook:

![Table Summary of Formulas](/modernphysics/relativitysummary.png)

## 3: Particle-Like Properties of Electromagnetic Radiation

### Review of Electromagnetic Waves
$$ \vec{E} = \vec{E}_0 \sin(kz - \omega t)$$
$$ \vec{B} = \vec{B}_0 \sin(kz - \omega t)$$
* **Wave Number**, $k$ 
$$ k =2\pi/\lambda$$
* **Angular Frequency** ($\omega$)
$$ B_0 =\frac{E_0}{c} $$
* **Pointing Vector**, shows direction the EM wave propagates
$$ \vec{S} =  \frac{1}{\mu_0} \vec{E} \cross \vec{B}$$

$$ P = SA = \frac{1}{\mu_0} E_0 B_0 A \sin^2 (kz-\omega t)$$
$$ P = \frac{1}{\mu_0 c} E_0^2 A \sin^2 (kz - \omega t)$$

* Note the following
 1. $P \propto E_0^2$
 2. Intensity fluctuates with time with frequency $2f = 2 (\omega/ 2 \pi)$

### Diffraction

### Crystal Diffraction of X Rays
* **Diffraction Grating**: Device with many slits that allow us to observe interference patterns
  * Superior resolution - allows separation of wavelengths close to one another
    * Reasonable values of $\theta$ requires $d$ to be on the same order of magnitude as the wavelength of light being used

* Maxima corresponding to different wavelengths appear at different angles $theta$
  * $d$ is the slit spacing
  * $n$ is the order of the maximum ($n = 1, 2, 3, ...$)
$$ d \sin \theta = n \lambda $$

**X Ray Diffraction** needs light on the order of $0.1$ nm in wavelength to have useful $\theta$
  * This means the grating spacing has to be less than $1$ nm
    * The spacing between atoms in most materials is around this value
  * Use the atoms in materials as diffraction grating!

  ![X Ray Diffraction Diagram](/modernphysics/xraydiffraction.png)

**Bragg's Law**
$$ 2d \sin \theta = n \lambda$$
* Here $\theta$ is the angle of incidence measured from the plane of the crystal

* Instead of using x-ray diffraction to separate different wavelengths, we use **X-Ray** diffraction to see the spacing between the planes inside materials

* We use more than one wavelength to get more $d_i$ and corresponding $\theta_i$

  ![Multiple planes due to multiple wavelengths](/modernphysics/xraymulti.png)

### The Photoelectric Effect
* **Photoelectric effect**: When a metal surface is illuminated with light, it emits electrons, called **photoelectrons**

$$ K_{max} = eV_s$$
* The maximum $K$ of an electron is depending on the **stopping voltage** $V_s$
* The stopping voltage is determined by incrementally turning up $V_{ext}$ until the ammeter reads $0$
* The **work function** ($\phi$) is the minimum energy required to remove an electron from a material

  ![Diagram for apparatus used for photoelectric effect](/modernphysics/photoelectricapparatus.png)

#### Classic Theory of Photoelectric Effect
Classical wave theory predicts the following

1. $K_{max} \propto I$ since increasing the brightness of a light source increases the energy delivered to the surface and thus increases the electric field $E_0 \propto I$
2. The Photoelectric effect should occur at any frequency and wavelength since according to wave theory, only the intensity of the light matters
3. The first electrons should be emitted in a time interval of the order of seconds after the radiation strikes the surface
  * The time interval $\Delta t$ necessary to absorb an energy of $\phi$
$$ \Delta t = \frac{\Delta E}{\Delta t} = \frac{\phi}{IA} $$

Experimental results of photoelectric effect
1. For a fixed wavelength, the $K_{max}$ is totally independent of the intensity
  * Doubling intensity yields no change in stopping voltage, which means the $K_{max}$ doesn't change either
2. The photoelectric effect does not occur at all if below a certain frequency
3. The first photoelectrons are emitted in the order of nanoseconds

* Above results show wave theory is not enough to account for photoelectric effect

#### Quantum Theory of the Photoelectric Effect
* Einstein proposed that the energy of EM radiation is not continuously distributed over the wavefront, but rather in discrete packets called **photons**
* Energy of a photon
$$ E = hf = \frac{hc}{\lambda}$$
* Einstein believed the entire energy of the photon is delivered instantaneously to a single **photoelectron**
  * Explains why only certain frequencies work for photoelectric effect
  * Explains why release of photoelectron is nearly instantaneous
* Photoelectron is only released when the photon energy $hf$ exceeds the work function $\phi$. The excess energy appears as $K$
$$ K_{max} = hf - \phi$$
* Intensity doesn't appear in the above
  * For a fixed frequency, doubling the intensity means twice as many photons strike the surface and twice as many photoelectrons are released, but each photon has the same $K_{max}$

* Experiments by Millikan using the photoelectric effect were able to obtain $h$, Planck's constant

* **Note**: The value $hc = 1240 \ eV \cdot nm$ may be useful

### Thermal Radiation
* Another phenomena that can't be explained by classical wave theory
* Every object radiates thermal radiation with intensity

#### Stefan's Law
$$ I = \sigma T^4$$

#### Wien's Displacement Law
$$ \lambda_{max} T = 2.8978 \cross 10^{-3} \ m \cdot K$$
$$ \lambda_{max} \propto 1/T$$
* The $\lambda_{max}$ at which the peak intensity occurs

* **Blackbody**: Perfect emitter and absorber of radiation
  * **Whitebody** Reflects all incoming radiation perfectly

#### Classical Theory of Thermal Radiation

**Rayleigh-Jeans Formula**: Intensity per unit wavelength interval $d\lambda$
$$ I(\lambda) = \frac{2\pi c}{\lambda^4} kT$$
* Works for long wavelengths, but fails miserably for shorter wavelengths, dubbed the **ultraviolet catastrophe**
* Problem for classical physics, since E&M and Thermo, which the Rayleigh-Jeans formula was derived from, have been tested and found to be accurate, but fail for this case

  ![Rayleigh Jeans Prediction Vs. Experimental Result](/modernphysics/rayleighjeans.png)

#### Quantum Theory of Thermal Radiation
* Max Planck developed a theory where each oscillator can emit and absorb energy in discrete quantities that are integer multiples of a basic quantity of energy, $\epsilon$

$$ E_n = n \epsilon$$
$$ n = 1, 2, 3, ...$$

$$ \epsilon = hf$$

This leads to a revised formula for the intensity of radiation (derivation in textbook)

$$ I(\lambda) = \frac{2 \pi h c^2}{\lambda^5}\frac{1}{e^{hc/\lambda k T} - 1}$$

* By Stefan's Law, the following relationship between the Stefan-Boltzmann Constant and Planck's constant can be derived

$$ \sigma = \frac{2 \pi^5 k^4}{15 c^2 h^3}$$
* Using the known value of the Stefan-Boltzmann Constant and intensity data in 1900, Planck was able to calculate the value of $h$
* 15 years later, Millikan arrived at a similar value of $h$ in a completely different experiment (Photoelectric effect), showing that the theory of quantization is a property of electromagnetic fields

### The Compton Effect
* Another way for radiation to interact with matter
* Radiation hits electron and leads to the incoming photon and electron being scattered
* More proof that photon exists, since the interaction implies a photon is a particle with momentum

  ![Compton Effect geometry diagram](/modernphysics/comptongeometry.png)

$$ \lambda' - \lambda = \frac{h}{m_e c}(1-\cos \theta)$$
$$ \frac{1}{E_p'} - \frac{1}{E_p} = \frac{1}{m_e c^2} (1-\cos \theta) $$
$$ K_e = E_p - E_p'$$

* **Compton wavelength of the Electron**: Not a true wavelength but a *change* of wavelength
$$h/m_e c = 0.002426 \ nm$$

### Bremsstrahlung
When an electron is accelerated by a potential difference $\Delta V$
$$ K_e = e\Delta V$$
An electron can hit a target and slow down, and in doing so, release the energy as **bremsstrahlung** (braking radiation)

In general, the energy of the photon emitted when the electron deaccelerates:
$$E_p = hf = K_e - K_e'$$

If the electron stops completely (at rest)
$$ \lambda_{min} = \frac{hc}{e\Delta V}$$

## 4: The Wavelike Properties of Particles

### De Broglie
By this point in time, scientists knew that light had wavelike properties and had the wave-particle duality. But it was unclear whether this was only for light or whether matter could exhibit wavelike phenomena.  

They knew $E = hf$ for light, but is this due to the Kinetic Energy, total energy, or relativistic energy (all the same for light)?  

De Broglie hypothesized that matter can exhibit wavelike properties.

$\lambda$ is the **de Broglie** wavelength
$$ \lambda = \frac{h}{p}$$

* Experimental evidence like diffraction of electrons and neutrons through solids, showed that matter could actually exhibit wavelike properties

### Heisenberg Uncertainty Relationships
$$\Delta x \Delta p_x \ge \frac{1}{2} \hbar $$
* $\Delta x$ is uncertainty in position
* $\Delta p$ is uncertainty in momentum
$$\hbar = \frac{h}{2\pi}$$

$$\Delta E \Delta t \ge \frac{1}{2} \hbar $$

## 6: The Rutherford-Bohr Model of the Atom

### Franck-Hertz Experiment
* Direct evidence that electrons in atoms can exist in discrete excited states

  ![Franck Hertz Apparatus Setup](/modernphysics/fhapparatus.png)

The Filament, $F$, is heated and emits electrons. There is a voltage $V$ between $C$ and $G$, that accelerates the electrons towards the grid, $G$. In the tube is a gas such as *mercury*. There is a retarding voltage $V_0$ that only allows the electrons to reach $P$ if $V > V_0$. The ammeter measures the current from electrons reaching $P$.  

1. As $V$ increases, more electrons have enough KE to get to $P$. Whenever an electron collides with a mercury atom, energy is conserved (perfectly elastic). 
2. Then at a certain $V$, ($4.9$ for mercury), all collision with mercury atoms are perfectly inelastic, and all the energy from the electron goes into raising the mercury atom's electrons to the first energy level. So less electrons have enough KE to reach the $P$, so current drops.
3. Repeat 1. and 2.

  ![Graph of Current vs. Voltage V](/modernphysics/fhgraph.png)

* Every time there is a drop in current, the voltage at the peak current is a multiple of 4.9
* Also note that the distance between the peaks is 4.9

  ![Graph of Current vs. Voltage V 2](/modernphysics/fhgraph2.png)

* $V_n$ is the $V$ at the peak

### Rutherford Scattering Experiment
Juicy derivation in textbook

### Summary
![Chapter 6 Summary Formulas](/modernphysics/chapter6summary.png)

## 5: The Schrödinger Equation
Schrödinger Equation describes the electron (or any other quantum state) as a wave. Using the wave function, we can find the average momentum, average position, and the probability of finding the particle in certain positions.

### Summary
![Chapter 5 Summary Formulas](/modernphysics/chapter5summary.png)

## 7. The Hydrogen Atom In Wave Mechanics
![Probability of electrons for different l values](/modernphysics/electronl.png)
Above shows the probability of finding an electron in $n=8$ with angular momentum $l=2$ (top) and $l=6$ (bottom) in the xz plane, with the height of the peaks corresponding to the probability.

### Deficiencies in Bohr-Rutherford Model
* Looking at spectral lines showed two streaks close to each other, not addressed by Bohr Model
	* Later found to be due to intrinsic spin of electron
* The Bohr Model has the electron in an orbit around the nucleus at a fixed radius


### One Dimensional Atom
$$ U(x) = -\frac{e^2}{4\pi \epsilon_0 x}$$
We can use the Schrödinger Equation to solve the above Coloumb potential in one dimension

$$ -\frac{\hbar}{2m} \frac{d^2 \psi}{dx^2} - \frac{e^2}{4\pi \epsilon_0 x} \psi(x) = E \psi(x) $$
A trial solution for the above differential equation: 
$$ \psi (x) = Ax e^{-bx}$$

Substituting the trial solution gives
$$ b = \frac{me^2}{4\pi \epsilon_0 \hbar^2} = \frac{1}{a_0} $$

where $a_0$ is the Bohr radius

### Angular Momentum in the Hydrogen Atom
* Bohr's model treated angular momentum as quantized, with the angular momentum of an electron as $|\vec{L} | = n\hbar, \ \ n = 1, 2, 3, ...$
* But the quantum version of angular momentum
$$ |\vec{L}| = \sqrt{l(l+1)} \hbar , \ \  \ l = 0, 1, 2, 3,... $$
* $m_l$, the magnetic quantum number, describes the angular momentum for one component
$$ L_z = m_l  \hbar, \ \ \ m_l =0, \pm 1, \pm 2, ... \pm l$$

* We can only know at most one component of $L$ and $|\vec{L}|$, that is we can only know $l$ and $m_l$. Since a vector has to be described by at least 3 number, there is some incomplete information about the angular momentum vector. Thus we will never know the other two components of the angular momentum
* If we know $L_z$, we can't know $L_y$ or $L_x$, which is equivalent to
$$ \Delta L_z \Delta \phi \ge \hbar$$

Graphical Representation of the uncertainty for angular momentum
![Uncertainty in Angular Momentum Visualized as Cone](/modernphysics/angularmomentumuncertainty.png)

### The Hydrogen Atom Wave Function
We can represent the wave function in 3D in spherical coordinates
$$ \frac{\hbar^2}{2m} \[\pdv[2]{\psi}{r} + \frac{2}{r} \pdv{\psi}{r} + \frac{1}{r^2 \sin \theta} \pdv{\theta} \left(\sin \theta \pdv{\psi}{\theta}\right) + \frac{1}{r^2 \sin^2 \theta} \pdv[2]{\psi}{\phi}\] + U(r) \psi(r, \theta, \phi = E \psi (r, \theta, \phi)$$

The potential energy only depends on $r$ since the Colomb potential only depends on $r$, so the wave function that solves the above is of the following form

$$ \psi (r, \theta, \phi) = R(r) \Theta (\theta) \Phi(\phi)$$
* **Radial Function** $R(r)$
* **Polar Function** $\Theta (\theta)$
* **Azimuthal Function** $\Phi(\phi)$
Each function is a function of a single variable

$$ \psi_{n, l, m_l} (r, \theta, \phi) = R_{n, l}(r) \Theta_{l, m_l} (\theta) \Phi_{m_l}(\phi)$$

* $n$, **principle quantum number**: corresponds to the energy level of an electron, $1, 2, 3, ...$
* $l$, **angular momentum quantum number**: $0, 1, 2, 3, ..., n-1$
* $m_l$, **magnetic quantum number**: $0, \pm 1, \pm 2, ..., \pm l$

* You can find the probability density by integrating $|\psi_{n, l, m_l}(r, \theta,\phi)|^2 dV$

### Intrinsic Spin (Stern-Gerlach Experiment)
An orbiting electron creates a magnetic dipole moment in an external magnetic field, which allow counting $l$ and observing a component of $\vec{L}$
* The Stern-Gerlach experiment had a non-uniform magnetic field cause an uneven force applied to the incoming atoms to move to one direction or another
	* The atoms went to specific spots on the target screen, showing quantization
	* Three spots, center (no deflection, up, and down)
	* However each of these three spots was actually composed of two more sub subspots, indicating the electron itself also had a spin
	* Electron's intrinsic spin arises from relativistic effects

	![Orbital and Spin Angular Momentum Table](/modernphysics/amtable.png)

### Energy Levels and Spectroscopic Notation

![l letter correspondance table](/modernphysics/spectroscopic.png)

#### Selection Rule
When an electron loses energy and goes to a lower state, the selection rule shows the most probable transitions, obtained by solving Schrödinger's equation and computing transition probabilities
$$ \Delta l = \pm 1$$

Examples:
* 3s cannot emit photon in 2s ($\Delta l = 0$) and instead goes to 2p $\Delta l = 1$)
* 3p can go to 2s or 1s, but not $2p$

### Summary
![Summary Chatper 7](/modernphysics/summary7.png)

## 8: Many-Electron Atoms
* Orbit of earth around sun
	* Simplify by only considering two body problem
	* Good approximation since other planet's gravity is miniscule compared to sun's
* Electrons and Nucleus
	* Can't approximate like in the above problem when dealing with more than one electron around the nucleus
	* Each electron exerts a force on every other electron around the nucleus
		* This force is significant, so you can't just correct for it and only consider the force from nucleus
	* Example of **Many-body problem**, with 3 or more particles mutually interacting with each other

### Pauli Exclusion Principle
* We might think that all the electrons will occupy the lowest energy level, which is the 1s state
	* But if this were true, the properties of atoms would vary smoothly
		* Most properties of different elements don't vary smoothly, with the exception of the energy of x-rays emitted by atoms
* **Pauli Exclusion Principle**: No two electrons in a single atom can have the same set of quantum numbers ($n$, $l$, $m_l$ , $m_s$).

### Electronic Structure of Many-Electron Atoms
![Energy Levels](/modernphysics/energylevels.png)
![Shells](/modernphysics/shells.png)
* Electrons in the same shell (same $n$) have the same average distance from the nucleus
* **Subshells**: Specific combinations of $n$ and $l$
	* E.g. 3s, 4p, 3d, 2s, etc.
	* Total number of electrons with in a subshell is $2(2l + 1)$
		* 2 factor comes from two spin $m_s$ values, and the $2l+1$ comes from possible values for $m_l$ for a given $l$
### Outer Electrons: Screening and Optical Transitions
* **Electron Screening**: Electrons in the outer levels experience less of the charge from the nuclues due to the repulsive forces from the electrson in inner shells. Thus the effective charged experienced by the outer electrons is less

### Inner Electrons: Absorption Edges and X-Rays
* If we repeat the [Franck Hertz Experiment](#franck-hertz-experiment) but with tens of kV instead of tens of volts, we can knock out the inner electrons instead of the outer electrons
* We get the following graph if we perform FH experiment on Hg with kV
	* 83.1 kV corresponds to 0.0149 nm, which is in the X-ray region
![Graph of current vs. accelerating voltage](/modernphysics/Khg.png)

* If we bombard a thin film of mercury with x-rays, we see the absorption drops at 0.0149 nm (photoelectric effect), in agreement with above experiment
	* **Absorption Edge**: Sudden drop in current or absorption
![Graph of absorption vs. incident photon wavelength](/modernphysics/absorptionhg.png)
* K corresponds to $n=1$, so the *K Absorption Edge* is the absorption edge for when the innermost electron

### X-Ray Transitions
* We showed previously, that one way to produce x-rays is through [Bremsstrahlung](#bremsstrahlung) by accelerating electrons and then slowing them down
	* This produces a **continous** x-ray spectrum
* One way to produce **discrete** x-ray spectrum is by allowing an inner electron to move down to a lower energy level
	* E.g. knock out 1s electron. This leaves vacancy in K shell, so another electron from another shell $L, M, N, ...$ comes to fill the K vacancy
	* If an electron from the $L$ shell comes to fill the $K$ vacancy, the X-ray created is a $K_\alpha$ X-ray
	* If an electron from the $M$ shell comes to fill the $K$ vacancy, the X-ray created is a $K_\beta$ X-ray

![X-Ray Transition Diagram](/modernphysics/X-rays-transitions.png)

### Moseley's Law
The energy for a $K_\alpha$ X-ray is related to the atomic number of the element $Z$
$$ \Delta E = (10.2 \ eV ) (Z- 1)^2 $$

### Chapter 8 Summary
![Chapter 8 summary table of formulas](/modernphysics/chap8summary.png)
