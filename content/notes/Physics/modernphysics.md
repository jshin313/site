
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

## Special Relativity

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

### Summary
Derivation in textbook:

![Table Summary of Formulas](/modernphysics/relativitysummary.png)

