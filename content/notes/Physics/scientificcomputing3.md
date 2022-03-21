---
title: "Scientific Computing III"
publishdate: 2022-03-08
lastmod: 2022-03-08
draft: false
toc: true
tags:
  - notes
  - college
  - physics
  - machine learning
---

## Class Information
This course in computational techniques for solving physical problems is for students who have taken PHYS 3511 Scientific Computing II or had extensive previous programming experience. This course covers advanced topics in computational problem solving such as machine learning, probability density function optimization, and Baysian statistical methods, GPU programming. The instructor may add additional topics of interest.

## Introduction to Machine Learning
### Definitions of ML 

* Arthur Sammel (1957): Gives computers the ability to learn without being explicitly programmed
* Tom (1998): A computer program is said to **learn** from experience, $E$ with respect to task, $T$ with performance, $P$.
	* If performance on $T$ is measured by $P$, it is improved by experience, $E$.

### ML Algorithm Types
* **Supervised Learning**: Give an exact target for each sample during the training process
* **Unsupervised Learning**: You don't give the machine an exact target
	* Never give any label during training
	* Machine finds patterns in data on its own

* **Reinforcement Learning**:
	* It can use supervised and unsupervised algorithms
	* Good for well-defined "playground"
	* Reward good behaviour and punish bad (Learn from mistakes)
* **Recommender System**: e.g. Youtube recommendations

## Supervised Learning
Provide machine with "right answers" train the machine to predict the unknown target
* Regression: Predict continous valued outputs
* Classification: Predict discrete valued outputs

### Example 1: Housing Price Prediction
* Cost ($) as a function of Size (Sq ft.)
	* Can be done with regression (linear or nonlinear)
* Cost ($) as a function of Size and Rennovation Cost
	* Multivariable problem with vector representing state value for given input

### Example 2: Cancer Diagnosis
* Output (has_cancer): 0 or 1
* Input: Tumor Size
* Problem: Find boundary between "cancer" and "not cancer"
* This is a type of classification problem

### Regression Problem
* Regression Problem: Predict real-valued output
* Training Set: Data where you know the target value and value for the **feature** for each point
	* **Feature** = parameter = input variable
	* **Target** = output variable you want to predict the value of
* Let $x$ be the features and $y$ be the targets
* Let $m$ be the number of points in the training set
* Let $(x, y)$ denote one training sample and $(x^{(i)}, y^{(j)})$ denote the $i$th training sample
* The learning algorithm generates a hypothesis map/function, $h$, which maps $x$ values to $y$
* Univariate linear regression: Linear regression with one variable (one feature)
#### Linear Regression
* Choose slope ($\theta_0$) and intercept ($\theta_1$) so that h(x) is close to y and for our training set (x, y)
* Hypothesis function
$$ h_\theta(x^{(i)}) = \theta_0 + \theta_1 x ^{(i)}$$
* Function to minimize
$$ \frac{1}{2m} \sum_{i=1}^{m} (h_{\theta} (x^{(i)}) - y^{(i)})^2$$
* We use the difference squared since if it wasn't there could be both positive and negative differences which would lead to a minimized function that isn't that good
* Cost function
$$ J(\theta_0, \theta_1) = \frac{1}{2m} \sum_{i=1}^{m} (h_{\theta} (x^{(i)}) - y^{(i)})^2$$
* We want to minimize the cost function

* Consider the case when $\theta_0 = 0$ and when you have 3 points that lie exactly on the line $y = 1 x$
	* For $\theta_1 = 1$, $J(\theta_1) = \frac{1}{2m} \sum_{i=1}^{m} (h_{\theta} (x^{(i)}) - y^{(i)})^2 = \frac{1}{2\cdot 3} (0^2 + 0^2 + 0^2)$
	* For $\theta_1 = 0.5$, $J(\theta_1) \approx 0.58$
	* For $\theta_1 = 0$, $J(\theta_1) \approx 2.3$
	* For $\theta_1 = 1.5$, $J(\theta_1) \approx 0.58$
	* For $\theta_1 = 2$, $J(\theta_1) \approx 2.3$
	* Graphing $J(\theta_1)$ shows that $J(\theta_1)$ is a parabola with only one minimum
* Considering the multivariable function $J(\theta_1, \theta_0)$ means that the cost function $J(\theta_1, \theta_0)$ is a paraboloid, still with one minimum
![Graph of paraboloid](/scientificcomputingiii/paraboloid.png)

### Gradient Descent
* To find the minimum for $J(\theta_0, \theta_1)$, we can use the Gradient descent algorithm

$$ \text{Repeat until convergence } \left\\{ \theta_j := \theta_j - \alpha \pdv{\theta_j} J(\theta_0, \theta_1) \ \ (\text{for j = 0, 1}) \right\\} $$

* Make sure to only update $\theta_j$ after everything
* **Learning Rate**: $\alpha$, controls how big the step size is
	* If $\alpha$ is too large, then there could be divergence
	* If $\alpha$ is too small, then the program might take longer
* If there is a local min as well as a global min for $J(\theta_0, \theta_1)$, one of the problems with the Gradient Descent algorithm is that you might get "stuck" at the local min
	* One solution is to use a larger $\alpha$ value
	* A better solution is to add a "Kinetic Term". Consider a particle in a well and add kinetic term so particle can oscillate and get out of the well (local minimum)

### Gradient Descent for Linear Regression
* Gradient Descent for Linear Regression will always converge since $|\alpha|$ decreases and goes to zero
$$ \pdv{\theta_j} J(\theta_0, \theta_1) = \pdv{\theta_j} \left\[\frac{1}{2m} \sum_{i=1}^m \left(h_\theta (x^{(i)}) - y^{(i)}\right)^2\right\] $$
$$ = \pdv{\theta_j} \left\[\frac{1}{2m} \sum_{i=1}^m \left(\theta_0 + \theta_1 x^{(i)} - y^{(i)}\right)^2\right\] $$
* For j = 0
$$ \pdv{\theta_0} J(\theta_0, \theta_1) = \left\[\frac{1}{m} \sum_{i=1}^m \left(h_\theta (x^{(i)}) - y^{(i)}\right)\right\] $$
* For j = 1
$$ \pdv{\theta_1} J(\theta_0, \theta_1) = \left\[\frac{1}{m} \sum_{i=1}^m \left(\left(h_\theta (x^{(i)}) - y^{(i)}\right)\cdot x^{(i)}\right)\right\] $$
* Since we're not going to use a lot of data, we can use all the samples for each step of GD ("batch processing")

### Linear Regression with Multiple Features
Example: Housing Price

| Size      | # of Bedrooms | # of Floors | Age of Home | Price ($K) |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| $x_1$      | $x_2$       | $x_3$       | $x_4$       | y       |
| 404   | 5        | 1        |   45      | 460        |
| 1416   | 3        | 2        |   40      | 232        |
| 1534   | 3        | 2        |   30      | 315        |
* $n=4$ where $n$ is the number of features
* $x^{(i)}$: Input (features) of $i$-th sample
* $x^{(i)}_j$: value of feature j in the $i$-th sample

* Hypothesis: 
	* Previous: $h_\theta (x) = \theta_0 + \theta_1 x$
	* Now: $h_\theta (x) = \theta_0 + \theta_1 x + \theta_2 x + \theta_3 x + \theta_4 x + ... + \theta_n x $

* For convenience of notation, define $x_0 = 1 \implies x^{(i)}_0 = 1$

$$ h_\theta (x) = \underbrace{\theta_0 x_0}_{\text{Bias Term}} + \theta_1 x + \theta_2 x + \theta_3 x + \theta_4 x + ... + \theta_n x $$

$$ x = \begin{bmatrix} x_0 \\\\ x_1 \\\\ x_2 \\\\ x_3 \\\\ x_4 \end{bmatrix} \in \mathbb{R}^{n+1}, \ \ \ \ \theta = \begin{bmatrix} \theta_0 \\\\ \theta_1 \\\\ \theta_2 \\\\ \theta_3 \\\\ \theta_4 \end{bmatrix} \in \mathbb{R}^{n+1}$$

$$ h_\theta (x) = \theta^T x$$

Pseudocode for Multivariable Gradient Descent for Multivariable Linear Regression
$$ \text{Repeat} \left\\{ \ \ \  \theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^m (h_\theta x^{(i)} - y^{(i)}) x_j^{(i)}\ \ \ \right\\}$$

Eg: $j=0$
$$ \theta_0 := \theta_0 - \alpha \frac{1}{m} \sum_{i=1}^m (h_\theta x^{(i)} - y^{(i)}) x_0^{(i)}$$
Eg: $j=2$
$$ \theta_2 := \theta_2 - \alpha \frac{1}{m} \sum_{i=1}^m (h_\theta x^{(i)} - y^{(i)}) x_2^{(i)}$$

### Feature Scaling
* Examples
	* $x_1$ = size (0 to 2000 sq ft.)
	* $x_2$ = # of bedrooms (1 to 5)
* The problem with the above means there might be problems with gradient descent due to how different the ranges are for each feature
* If you graph $\theta_2$ vs $\theta_1$ without features scaling, you get ellipses around the minimum
* If you graph $\theta_2$ vs $\theta_1$ with features scaling, you get circles around the minimum
* Features have to be on the same scale, roughly $-1 \le x_i \le 1$

#### Mean Normalization
* Let $\mu_i$ be the mean and $s_i$ be the range
* Replace $x_i$ with $x_i - \mu_i$ to make zero mean
* $x_i = \frac{x_i - \mu_i}{s_i}$

* Using the above for the housing price example
$$x_1 = \frac{\text{size} - 1000}{2000}$$
$$x_2 = \frac{\text{# of bedrooms} - 3}{5}$$

### Logistic Regression
* Not really used for ML, but an important example of something that gives a non-linear relationship
* Linear Regression doesn't work for classification problems (Email Spam, Benign Tumor/Cancer)
	* $y \in\\{0, 1\\}$
	* Gives wrong predictions
	* Linear regression doesn't confine the values to a specific range

## Unsupervised Learning
* ML finds patterns in data on its own without explicitly labeling training data with a target
### Examples
* Points on a plane, find clusters
* Cluster customers into different groups
* Astronomial data analysis: Find clusters in star/galaxy photo


