---
title: "Discrete Mathematics I Notes"
date: 2020-11-27T16:40:12-05:00
draft: false
---

This class is called **Mathematical Concepts in Computing I** at my college and covers propositions/predicates, sequences, number theory, set theory, functions, matrices, basic proof techniques, combinatorics, counting, relations, and trees/graphs.

Book Used: **Discrete Mathematics and Its Applications by Kenneth Rosen**  
The book had some nice examples and problems, but sometimes explanations were bad.

These are my notes and are primarily meant to be used as a reference for me only, so there's probably stuff that I got wrong. Comment if you find mistakes.

Helpful websites and resources I used for the class:
* [Kimberly Brehm's Youtube Channel](https://www.youtube.com/playlist?list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz). Pretty good explanations.
* https://math.berkeley.edu/~arash/55/ : Condensed version of book chapters. A bit hard to read sometimes.
* https://www.slader.com/: For solutions to book problems

## Counting and Combinatorics (Chapter 6)

### Counting (6.1)
Stuff based on https://youtu.be/zG9Y8hnXZOc

#### Sum Rule
**Definition**: If task A can be performed in *m* ways and task B in *n* ways, and the tasks are disjoint (the tasks don't affect one another), then A **OR** B can be performed in `m + n` ways.

**Example**: `If we roll two dice, one green and one purple, how  many ways are there to get a sum of 7 or 11?`

Ways to get 7: 
```
(1, 6), (2, 5), (3, 4)
(6, 1), (5, 2), (4, 3)
```

Ways to get 11: 
```
(5, 6)
(6, 5)
```
**OR** means `+` and using the Sum Rule.  
So add the number of ways to get 7 and the number of ways to get 11: 6 + 2 = 8

8 is number of ways to get either a 7 or 11.

**Example**: `8 Republicans and 5 Democrats are nominated. How many possible winners are there.` \
Answer: 8 + 5 = 13 possibilities.

#### Product Rule
**Definition**: Task A (m ways) and task B (n ways). Tasks A **AND** B can be performed in m $\cdot$ n ways.

**Example**: `8 Republicans and 5 Democrats nominated for president. How many possibilities for a pair of candidates (running against each other with one from each party)?` \
Answer: 8 * 5 = 40 possible pairs
Explanation: For every republican there's 5 democrats to pair with. Draw a tree diagram if you want.

**Example**: `Student ID made up of 3 letters followed by 2 digits. How many possible IDs?` \
Answer: 26 * 26 * 26 * 10 * 10

**Example**: `Student ID made up of 3 letters followed by 2 digits. How many possible IDs with no duplicate numbers/letters?` \
Answer: 26 * 25 * 24 * 10 * 9
Explanation: First letter has all possibilities open, the second letter has all possibilities minus the first letter, the third has all possibilities minus first and second, and so on.

**Example**: `Student ID made up of 3 letters followed by 2 digits. How many possible IDs with even number of A's (including zero A's)?` \
Answer: $( 25 \cdot 25 \cdot 25 \cdot 10 \cdot 10) + (1 \cdot 1 \cdot 25 \cdot 10 \cdot 10) + (1 \cdot 25 \cdot 1 \cdot 10 \cdot 10) + (25 \cdot 1 \cdot 1 \cdot 10 \cdot 10 \cdot 10 )$
Explanation: Add the following up
`$$( \underbrace{25 \cdot 25 \cdot 25}_{\text{All possibilities except A}} \overbrace{\cdot 10 \cdot 10}^{\text{No restrictions on digits}}) \\ (\underbrace{1 \cdot 1}_{\text{These two have to be A}} \cdot \overbrace{25}^{\text{Can be any letter except A}} \cdot 10 \cdot 10) \\ \underbrace{(1 \cdot 25 \cdot 1 \cdot 10 \cdot 10)}_{\text{Just another instance of above}} \\ \underbrace{(25 \cdot 1 \cdot 1 \cdot 10 \cdot 10 \cdot 10 )}_{\text{See above}}$$`

#### Opposite/Complement
Sometimes it's easier to find the opposite case and subtract that from all possibilities since there might be overlapping cases or too many of the possibilities you're looking for.

Example: `A student ID is made up of 3 letters followed by 2 digits. How many have some repetition?` \
Answer: 
Explanation: Find the number of cases that don't have any repetition. 

#### Other Problems

### Pigeonhole Principle (6.2)

### Permutations and Combinations (6.3)



## Miscallaneous

### Fast Multiplication: Karatsuba's Algorithm 
Notes based on https://youtu.be/-dfsxsiGoC8 since the video goes more in-depth than my class did.
 * The way we learned to multiply in elementary school was *not* the fastest way
 * The traditional multiplication algorithm we use takes $O(n^2)$ multiplications.
    Let `y = 9876` and `z = 1234` and make `n = 4` (number of digits).    

#### Regular Multiplication Algoritm
Multiplying y * z with the regular algorithm:

Step 1. There are 4 multiplications done in this step. `4 * 6`, `7 * 4`, `8 * 4`, and `9 * 4`.
<pre>
    <strong>9876</strong>
x   123<strong>4</strong>
--------
</pre>
Step 2. Again, there are 4 multiplications done in this step. `3 * 6`, `7 * 3`, `8 * 3`, and `9 * 3`.
<pre>
    <strong>9876</strong>
x   12<strong>3</strong>4
--------
</pre>
Step 3. Again, there are 4 multiplications done in this step. `2 * 6`, `7 * 2`, `8 * 2`, and `9 * 2`.
<pre>
    <strong>9876</strong>
x   1<strong>2</strong>34
--------
</pre>
Step 4. Again, there are 4 multiplications done in this step. `1 * 6`, `7 * 1`, `8 * 1`, and `9 * 1`.
<pre>
    <strong>9876</strong>
x   <strong>1</strong>234
--------
</pre>
Since there are four steps each with 4 multiplications done, the regular algorithm has a total of 16 multiplications done, indicating an $n^2$ number of multiplications.

#### Divide and Conquer Approach
`y = 9876`  Let `c = 98` and `d = 76`  
`z = 1234`  Let `a = 12` and `b = 34`  

Then `y = 98 * 100 + 76` and `z = 12 * 100 + 34`.

This means that $y = 10^{\frac{n}{2}} \cdot c + d$ and $z = 10^{\frac{n}{2}} \cdot a + b$  

We can generalize the multiplication of y and z as follows:

<div>$ 
y \cdot z = (10^{\frac{n}{2}} \cdot c + d)(10^{\frac{n}{2}} \cdot a + b) \\
= (10^n)ac + (10^{\frac{n}{2}})ad + (10^{\frac{n}{2}})bc + bd \\
= (10^n)ac + (10^{\frac{n}{2}})(ad + bc) + bd
$</div>

We now have 4 multiplications: `ac`, `ad`, `bc`, and `bd`.

`$yz = (10^n)ac + (10^{\frac{n}{2}})\underbrace{(\overbrace{ad}^\text{n} + \overbrace{bc}^\text{n})}_{\alpha \text{n additions}} + bd $` 

The above figure shows that `ad` and `bc` are both a max of n digits long since `a`, `b`, `c`, and `d` are all `n/2` digits in length. Thus an `n` digit number added to another `n` digit number takes `n` additions. We use $\alpha$ to symbolize the smallest possible addition. The smallest possible addition is called *atomic*. We could just use 1 instead of $\alpha$, but different hardware takes a different amount of operations/time to do addition, so we use the constant.

Multiplying by any power by 10 is just a shift to the left. Example, if `n = 4` 
and `X` represents any non-zero digit: 

`$yz = \underbrace{(10^n)ac}_{\text{XXXX0000}} + \underbrace{(10^{\frac{n}{2}}) \; (ad + bc)}_{\text{00XXXX00}} + \underbrace{bd}_{\text{0000XXXX}} $` 

When we add all the terms we get the following:

<pre>
  XX<strong>XX</strong>0000
  0000<strong>XX</strong>XX
+ 00<strong>XXXX</strong>00
----------
</pre>

<pre>
  XX<strong>XXXX</strong>XX
+ 00<strong>XXXX</strong>00
----------
</pre>
Notice that only `n` digits overlap

Thus we only have to do `n` additions and we can represent them in terms of atomic additions to get $\alpha n$ additions.  

Since `ad + bc` took $\alpha n$ additions and adding all the terms also took $\alpha n$ additions, the total additions for getting `yz` is $2 \alpha n$. This is how many additions is required whenever we use this formula, which is at recursive call).

#### Recurrence Relation

We use the formula $yz = (10^n)ac + (10^{\frac{n}{2}})(ad + bc) + bd$ to do multiplication, but if `ac`, `ad`, `bc`, or `bd` is not a multiplication between single digits (i.e. not *atomic*), then we have to do a recursive call and use the formula again by further splitting up the numbers in half until we get *atomic* multiplication (i.e. when we get multiplication between two one digit numbers). The base case is when we get "atomic multiplication." The $\mu$ symbol represents this atomic multiplication.  

We have 4 multiplications done for each recursive call:

`$yz = (10^n)\underbrace{ac}_{\text{1}} + (10^{\frac{n}{2}})(\underbrace{ad}_{\text{2}} + \underbrace{bc}_{\text{3}}) + \underbrace{bd}_{\text{4}}$`

Let `M(n)` represent the recursive relation describing the result for multiplying numbers of length `n`.  

`$M(n) = 4\cdot M(\frac{n}{2}) + 2\alpha n$`

At each recursive call, we need to get the results of the 4 multiplications (`$4M(\frac{n}{2})$`) and then add the results of the multipliations up (`$2\alpha n$`) per the formula. Note that n here is used somewhat different than the previous definition of n. n is just a parameter to the recurrence relation here.

#### Find Additions at Each Level
Representing the recursive calls using a tree (number of additions at each level shown on right hand side):

```
                                 n                                    1(2𝛼n)

      n/2              n/2              n/2              n/2          4(2𝛼(n/2))

n/4 n/4 n/4 n/4  n/4 n/4 n/4 n/4  n/4 n/4 n/4 n/4  n/4 n/4 n/4 n/4    16(2𝛼(n/4))
```
The tree continues on until the base case is reached.

We see that the number of subproblems/additions at each level is `$4^i$` where `i` is depth of the tree. We also see that the number of digits gets halved each time we do a recursive call, so at each level, the number of additions is `$2\alpha \frac{n}{2^i}$` where i is the level/depth. Thus the total number of additions at a level/depth, *i*, is represented by the following:

$4^i(2\alpha (\frac{n}{2^i}))$

#### Find Total Number of Multiplications
Since the base case is when the input to M(n) is 1 and the input to M(n) gets halved, we can find the total number of levels by taking the log base 2 of n, where n is the number of total number of digits. Since there's $4^{i}$ multiplications at a level and the number of levels is $log_2(n)$, there's $4^{log_2(n)}$ multiplications. They're atomic multiplications so we get $\mu 4^{log_2(n)}$, where $\mu$ is the constant signifying the time it takes for an atomic multiplication (since it depends on the hardware how long it actually takes to multiply).

#### Sum up Everything
The following represents the solution for our whole problem:  

\[ yz = \sum_{i=0}^{log_2(n) - 1} 4^i(2\alpha (\frac{n}{2^i})) + \mu 4^{log_2(n)} \]

Note: The summation is only applied to the first term to get the total number of additions. 

The bounds for the summation end at $log_2(n) - 1$ since the starting bound is 0, so to get to $log_2(n)$ levels we need the `-1`. Furthermore, the additions only occur when n for M(n) is not 1 (e.g. when not the base case), since at the base case, we just return a constant without doing any further non-atomic operations. We only sum the first term since we have to do additions at every recursive call  and we also already summed the multiplications up for each level in the previous subsection.

This just evaluates to the following:
$$ \mu n^2 + 2\alpha n(n - 1) $$
which means this is still $O(n^2)$, and not really better than the traditional multiplication algorithm. 

#### Karatsuba's Thing
Take the formula from before:
$$yz = (10^n)ac + (10^{\frac{n}{2}})(ad + bc) + bd$$

And rewrite part of the second term: 
`$$ ad + bc = \overbrace{\underbrace{(a + b)}_{\frac{n}{2}} \, \underbrace{(c + d)}_{ \frac{n}{2}}}^{n} - \underbrace{ac}_{n} - \underbrace{bd}_{n} $$`

Annotated above is how many digits each term will have. Adding two numbers $\frac{n}{2}$ digits long will yield a number with at max $\frac{n}{2}$ digits. Multiplying two numbers $\frac{n}{2}$ digits long will yield at max a number with $n$ digits. Thus adding/subtracting three numbers $n$ digits long takes $3\alpha n$ additions (subtraction is basically addition except using negation).  

</pre>


Now we have the following result:
$$yz = (10^n)ac + (10^{\frac{n}{2}})((a + b)(c + d) - ad - bc) + bd$$

Notice how we only have 3 multiplications now: `ac`, `(a + b)(c + d)`, and `bd`. We increased the number of additions to 4 as a tradeoff as shown below.

The stuff below shows how whole expression takes $4\alpha n$ additions. We use a similar approach as what we did before. `X` denotes a non-zero digit:   

`$yz = \underbrace{(10^n)ac}_{\text{XXXX0000}} + \underbrace{(10^{\frac{n}{2}})((a + b)(c + d) - ad - bc)}_{\text{00XXXX00}} + \underbrace{bd}_{\text{0000XXXX}} $` 


When we add all the terms we get the following:

<pre>
  XX<strong>XX</strong>0000
  0000<strong>XX</strong>XX
+ 00<strong>XXXX</strong>00
----------
</pre>

<pre>
  XX<strong>XXXX</strong>XX
+ 00<strong>XXXX</strong>00
----------
</pre>

Notice that only `n` digits overlap

Thus we only have to do `n` additions and we can represent them in terms of atomic additions to get $\alpha n$ additions.  

Since the second term (`(a + b)(c + d) - ad - cb`) took $3 \alpha n$ additions and adding all the terms also took $\alpha n$ additions, the total additions for getting `yz` is $4 \alpha n$. This is how many additions is required for this revised formula.

#### Revised Recurrence Relation:
Do the same analysis and stuff as before:

$$ M(n) = 3M(\frac{n}{2}) + 4\alpha n$$

Tree Diagram:

```
                        n                             1(4𝛼n)

      n/2              n/2              n/2           3(4𝛼(n/2))

n/4 n/4 n/4 n/4  n/4 n/4 n/4 n/4  n/4 n/4 n/4 n/4     9(4𝛼(n/4))
```

$$ 3^i (4\alpha \frac{n}{2^i}) \text{ additions per level}$$

$$ \mu 3^{log_2{n}} \text{ total multiplications}$$

Summation:
\[ yz = \sum_{i=0}^{log_2(n) - 1} 3^i(4\alpha (\frac{n}{2^i})) + \mu 3^{log_2(n)} \]

With some magic and simplication:
$$ \mu n^{log_2(3)} + 8 \alpha n (\frac{n^{log_2(3)}}{n} - 1)$$

The runtime is $O(n^{log_2(3)})$  

$ log_2(3) $ is around 1.58 so the runtime is about $O(n^{1.58})$.
  
This is Karatsuba Multiplication.
