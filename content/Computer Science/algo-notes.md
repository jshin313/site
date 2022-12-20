---
title: "Algorithm Notes"
date: 2021-05-02
draft: true 
toc: true
tags:
  - notes
---

Notes on various sources: https://backtobackswe.com/, CTCI, and the Algorithm Design Manual by Skiena

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
* Finding all adjacents/neighbors takes $O(|E_u|)$, where $u$ is the vertex you're looking at and $|E_u|$ is the number of edges from u.

#### Disadvantages
* Checking a connection (if edge exists) takes $O(|E_u|)$, if you're trying to find if the edge from $u$ to $v$ exists.

## The Master Theorem
We have the following recurrence relation:
$$ T(n) = aT\left(\frac{n}{b}\right) + cn^k $$

$a$, $b$, $c$, and $k$ are all constants.  

* $T(x)$ represents the recursive calls of a function.  
* $b$ is the branching factor (how much the input is divided by on each call)
* $a$ is how many calls of $T(x)$ are called at each step.  

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

## Common Time Complexities

### Two Consecutive For Loops (Not Nested)

```c
for (int i = 0; i < n; i++) {
  do_something();
}

for (int i = 0; i < n; i++) {
  do_something();
}
```

$O(n)$ time complexity since total iterations is around 2n. $T(n) + T(n) = O(n)$

### Two Nested For Loops

```c
for (int i = 0; i < n; i++) {
  for (int j = 0; j < n; j++) {
    do_something();
  }
}
```

$O(n^2)$ since the inner loop is executes the do_something() function *n* times and the outer loop also executes *n* iterations. $T(n) \cdot T(n) = O(n^2)$

### Two Nested For Loops With Second Start Index Equal to First Index

```c
for (int i = 0; i < n; i++) {
  for (int j = i + 1; j < n; j++) {
    do_something();
  }
}
```

$O(n^2)$ still since the sequence $1, 2, 3 ... (n - 1)$ converges to $\frac{n(n - 1)}{2}$  

Also if all pairs $(i, j)$ form a matrix, the above code only iterates through half of the pairs and thus half of the matrix since it iterates through pairs were $j > i$. Thus there are around $\frac{n^2}{2}$ pairs that the loops iterate through, leading to a runtime of $O(n^2)$ again.  

Also on average, the inner loop iterates $\frac{n}{2}$ times. Since the outer loops iterates for *n* times, the combined run time is once again $O(n^2)$.

### Two Nested For Loops Different Arrays

```c
for (int i = 0, a = sizeof(array_a); i < a; i++) {
  for (int j = 0, b = sizeof(array_b); j < b; j++) {
    do_something();
  }
}
```

$O(ab)$ is the time complexity, NOT $O(n^2)$

### Sorting Array of Strings
A function sorts each string in an array and then sorts the array of sorted strings.

*a* is the length of the array or the number of strings in the array  
*s* is the length of the (longest) string

The runtime to sort all the strings is `$O(a \cdot s \, log(s))$`
Sorting the entire array takes `$a \; log(a)$` comparisons and each comparison takes $O(s)$ time, so sorting the entire array takes `$O(s\cdot a\; log(a)) + O(a \cdot s \; log(s))$` or `$O(s\cdot a\; (log(a) + log(s))$` time.

### Binary Tree
```c
void print_tree(Node *node)
{
  if (node == null)
    return;
  
  print_tree(node.left);
  printf("%d\n", node.data);
  print_tree(node.right);
}
```

Printing all the values of a binary takes $O(n)$ since the branching factor is $2$ (two recursive calls per frame) and the depth is $log_2(n)$. Thus the time complexity is $O(2^{log_2(n)})$ or just $O(n)$.

**When finding a recursive function's time complexity, draw the tree representation of the stack frames.** 

### Recursive Factorial Function
The time complexity is just $O(n)$ since the sequence is just `fact(n), fact(n - 1), fact(n - 2), ... fact(2), fact(1)`, which is just n calls of the factorial function.

### Recursive Fibonacci Function
```c
int fibonacci(n)
{
  if (n == 0) 
    return 0;
  if (n == 1) 
    return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

Use the formula from before. The branching factor is 2 and depth is n, so the time complexity is approximately $O(2^n)$. See the section on approximating time complexities for more info.

### Another Fibonacci Function
```c
int fibonacci(n)
{
  if (n == 0) 
    return 0;
  if (n == 1) 
    return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

int sum_fibonacci(k)
{
  for (int i = 0; i < k; i++)
  {
    printf("%d\n", fibonacci(i));
  }
}
```

Runtime is $O(2^k)$ still since the sequence is `$2^0, 2^2, 2^3, ... 2^k = 2^{k + 1}$`. It is NOT `$O(k\;2^k)$`

### Memoized Recursive Fibonacci Function
Using memoization only takes $O(n)$ since only one path from root to leaf is effectively run. Thus the depth of the tree is roughly linear to the runtime.

### Powers of Two
If we have the recurrence relation $T(n) = T\left(\frac{n}{2}\right)$, then the runtime is just $O(log(n))$

## Dynamic Programming (DP)
Characteristics of DP
1. Explicit overlapping subproblems 
  * merge sort is not DP since although there are subproblems, there is no overlap between the subproblems
2. Subproblems cover all cases
3. Overlaps can be cached

