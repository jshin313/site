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

## Unsupervised Learning
* ML finds patterns in data on its own without explicitly labeling training data with a target
### Examples
* Points on a plane, find clusters
* Cluster customers into different groups
* Astronomial data analysis: Find clusters in star/galaxy photo
