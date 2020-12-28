---
title: "Algorithm Notes"
date: 2020-12-27
draft: false 
toc: true
tags:
  - notes
---

Lots of the notes are on the videos from https://backtobackswe.com/

## Graph Representation
Vertical bars | | mean cardinality (size)

### Adjacency Matrix

#### Advantages

* Checking a connection or if an edge exists takes $O(1)$ time

#### Disadvantages
* Finding neighbors/adjacents takes $O(|V|)$ time
* Adjacency matrix always takes up $O(|V|^2)$ space

### Adjacency List

#### Advantages
* Less space wasted $O(|E| + |V|)$ space complexity
* Finding all adjacents/neighbors takes $O(|E|)$

#### Disadvantages
* Checking a connection (if edge exists) takes $O(|E|)$

## The Master Theorem
We have the following recurrence relation:
$$ T(n) = aT\left(\frac{n}{b}\right) + cn^k $$

a, b, c, and k are all constants.  

T(x) is represents the recursive calls of a function.  
b is the branching factor  
a is how many calls of T(x) are called at each step.  

<div>
$$  T(n) \in \Theta(n^k) \text{ if } a < b^k $$
$$  T(n) \in \Theta(n^k \cdot log(n)) \text{ if } a = b^k $$
$$  T(n) \in \Theta(n^{log_b (a)}) \text{ if } a > b^k $$
</div>

### Example 1: Merge Sort
Merge sort can be represented as the following recurrence relation:
$$ T(n) = 2 \cdot T\left(\frac{n}{2}\right) + (n - 1) $$
Since a=2, b=2, c=1, and k = 1, the time complexity of merge sort is the following:
$$ \Theta(n \cdot log (n)) $$

### Example 2 
$$ T(n) = 7\cdot T\left(\frac{3n}{7}\right) + (n^2 - n + 2) $$

a= 7, b = 7/3, c = 1, k = 2  

Since $a > b^k$, the time complexity is as follows:
$$ \Theta(n^{log_{\frac{7}{3}} (7)}) = \Theta(n^{2.297}) $$

## Some Common Recurrence Relations
Shortcuts for specific cases derived from the theorem above:
* Two recursive calls and linear work done on every call to merge the results.  
$T(n) = 2\cdot T\left(\frac{n}{2}\right) + O(n)$ is $O(n\cdot log(n))$
* $T(n) = q\cdot T\left(\frac{n}{2}\right) + O(n)$ means $O(n^{log_2(q)})$ when $q > 2$
* $T(n) = T\left(\frac{n}{2}\right) + O(n) $ becomes $O(n)$ since $q = 1$

## Approximate Time Complexities for Recursive Functions
If only $O(1)$ work is being done at each stack frame/level of each recursive call (unlike in the above two sections where $O(n)$ is being done), there is an approximate time complexity of $O(a^n)$ for the whole recursive function, where *n* is the **depth** and *a* is **branching factor**, or how many times the recursive function is called at each level.

### Example: Fibonacci Sequence
The fibonacci numbers can represented by the following recurrence relation:
$$ f(n) = f(n - 1) + f(n - 2)$$
The time complexity can be represented as follows:
$$ T(n) = T(n - 1) + T(n - 2) + O(1)$$
If we assume $T(n - 1)$ and $T(n - 2)$ are roughly equal, then the branching factor is 2. The depth is roughly n, since n is decremented by a constant amount until it reaches 0 or 1. Thus the time complexity of the fibonacci is roughly $O(2^n)$. This is still a very loose bound since the time complexity is actually somewhere around $O(1.68^n)$.


