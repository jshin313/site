---
title: "Principles of Electric Circuits"
publishdate: 2022-10-18
lastmod: 2022-10-18
draft: false
toc: true
tags:
  - notes
  - college
  - electronics
  - circuits
---

## OpAmps

## Norton Equivalence
* Short load resistor (set resistance to 0)
* Norton Current, $I_n$ is the current through the shorted load resistor

## Thevenin Equivalence
* To find Thevenin resistance $R_{thev}$
  * Short voltage sources, open current sources
* To find Thevenin voltage
  * Open circuit voltage

Max Power
$$ P_{max} = \frac{1}{2} \frac{V_{thev}^2}{4 * R_{thev}}$$

## AC Phasors
$j=\sqrt{-1}$ is used instead of $i$ since $i$ is used for current in electrical engineering
$$ Z_R = R $$ 
$$ Z_C = -\frac{j}{ (\omega C)} = \frac{1}{j \omega C}$$
$$ Z_L = j \omega L$$

