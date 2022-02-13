---
title: "Error Analysis"
publishdate: 2022-02-02
lastmod: 2022-02-02
draft: false
toc: true
tags:
  - notes
  - college
  - physics
  - error analysis
  - statistics
---

## Class Information
* The first few lectures of the Intro to Modern Physics Lab section were dedicated to error analysis
* Material covered is based on John Taylor's "An Introduction to Error Analysis"

## How to Report and Use Uncertainties
Measured value of $x$ = $x_{best} \pm \delta x$
* $x_{best} = $ best estimate of $x$
* $\delta x$ = uncertainty or error in the measurement
* **Fraction uncertainty** = $\frac{\delta x}{\left|x_{best}\right|}$

## Statistical Analysis of Random Uncertainties
* **Types of Errors**
  * **Random**: You can use statistical analysis (described in this section) on random uncertainties
      * Random uncertainty is decreased by taking repeated measurements
  * **Systematic**: Can't treat these statistically
    * Systematic uncertainty is not decreased by taking repeated measurements

### Mean
* **Mean** ($\overline{x}$): Gives average value of $x$
  * Gives the best estimate for the true value of $x$
$$ \overline{x} = \frac{1}{N} \sum_{i=1}^{N} x_i = \text{ mean }$$

### Standard Deviation of a Single Measurement
* **Standard Deviation of a Single Measurement** ($\sigma_x$): Measure of *variance* or *dispersion* - how spread out the data is from the mean 
  * Gives average uncertainty of measurements $x_1, x_2, ..., x_N$
  * We often estimate $\sigma_x$ since the true value is usually unknown because we often only get a small *sample* of the larger *population*
  * If we only have a *sample* dataset, we introduce more uncertainty, so we estimate standard deviation with the sample Standard Deviation (SD) by introducing $N-1$ in the denominator
  $$ \sigma_x = \sqrt{\frac{1}{N-1}\sum (x_i - \overline{x})^2}$$
  * If our dataset is the full population, our sample=population, so there is less uncertainty, and we can use $N$ in the denominator
  $$ \sigma_x = \sqrt{\frac{1}{N}\sum (x_i - \overline{x})^2}$$
  * If we make one measurement of $x$, then 
  $$\delta x = \sigma_x$$
  * We can be $68%$ sure the single measurement of $x$ lies between $x - \sigma_x$ and $x + \sigma_x$
* **Variance** $\sigma_x^2$

### Standard Deviation of the Mean
* **Standard Deviation of the Mean** ($\sigma_{\overline{x}}$):  
  * Also known as Standard Error
* The quantity $x_{best} = \overline{x}$ represents a combination of the $N$ measurements, so $\overline{x}$ should be more reliable than any single measurement taken alone. Thus, the uncertainty for the mean, $\overline{x}$, is smaller than the average uncertainty for a single measurement, $\sigma_x$.
* The uncertainty of the mean is denoted by $\sigma_\overline{x}$
$$ \sigma_\overline{x} = \sigma_x/\sqrt{N} $$
$$ \text{true value of } x = x_{best} \pm \delta x $$
* $x_{best} = \overline{x}$
* $\delta x = \sigma_\overline{x}$
* Since $\delta x = \sigma_x / \sqrt{N}$, notice how repeated measurements will lead to a decrease in the *random* uncertainty
* Note that $\sigma_{\overline{x}}$ is usually only 1 sig fig. Use normal sig fig rules when calculating the mean and $\sigma_x$. Note that the right most significant digit's place in the mean should match the right most significant digit's place in the standard error. 

## Propagation of Uncertainties

## Least-Squares Fitting
