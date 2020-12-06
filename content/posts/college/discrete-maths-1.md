---
title: "Discrete Mathematics I Notes"
date: 2020-11-27T16:40:12-05:00
draft: false
toc: true
---

## Class Description

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

**Example**: `8 Republicans and 5 Democrats are nominated. How many possible winners are there.`  
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
Answer: ( 25 * 25 * 25 * 10 * 10) + (1 * 1 * 25 * 10 * 10) + (1 * 25 * 1 * 10 * 10) + (25 * 1 * 1 * 10 * 10 * 10 )

Explanation: Add the following up
<div>$$( \underbrace{25 \cdot 25 \cdot 25}_{\text{All possibilities except A}} \overbrace{\cdot 10 \cdot 10}^{\text{No restrictions on digits}}) \\ (\underbrace{1 \cdot 1}_{\text{These two have to be A}} \cdot \overbrace{25}^{\text{Can be any letter except A}} \cdot 10 \cdot 10) \\ \underbrace{(1 \cdot 25 \cdot 1 \cdot 10 \cdot 10)}_{\text{Just another instance of above}} \\ \underbrace{(25 \cdot 1 \cdot 1 \cdot 10 \cdot 10 \cdot 10 )}_{\text{See above}}$$</div>

#### Opposite/Complement
Sometimes it's easier to find the opposite case and subtract that from all possibilities since there might be overlapping cases or too many of the possibilities you're looking for.

Example: `A student ID is made up of 3 letters followed by 2 digits. How many have some repetition?` \
Answer: 26^3 * 10 * 10 - 26 * 25 * 10 * 9 \
Explanation: Find the number of cases that don't have any repetition. Just subtract the number of distinct IDs from total possible IDs. We already solved those two above.

#### Other Problems
`Determine the number of 6-digit integers (no leading zeros) in which:` 

**Example**: `No repetitions` \
Answer: `9 * 9 * 8 * 7 * 6 * 5` \
Explanation: `(10 - 1) * (10 - 1) * (10 - 1 - 1) * (10 - 1 - 1 -1) ... etc.` \
The first digit has all possible digits except zero, the second digit has all possibilities except the first digit, the third has all possibilities except first and second, etc.

**Example**: `Repetitions allowed` \
Answer: `9 * 10 * 10 * 10 * 10 * 10` \
Explanation: All six digits have all possible digits open except first digit. First digit has all digits as possibilities except zero.

**Example**: `No repetitions, even number` \
Explanation:   
There are two cases: If the last digit is zero or one of (2, 4, 6, 8). Last digit has to be even. 
For the case that last digit is non-zero even integer:  
`8 * 8 * 7 * 6 * 5 * 4`  
Last digit has to be even but not zero (leaving 4 choices (2, 4, 6, 8). First digit has all possible digits minus the last digit and zero. Second digit has all possible digits minus last digit and first digit. Third digit has all possible digits minus first digit, second digit, and last digit. Etc. 
For the case that last digit is zero:
Last digit has to be zero. First digit can be any digit except zero. Second can be any digit except first and zero. Etc.  
Add the two cases together to get the final answer.  
Answer: `8 * 8 * 7 * 6 * 5 * 4 + 9 * 8 * 7 * 6 * 5 * 1` 

**Example**: `Repetitions allowed, even number` \
Answer: `9 * 10 * 10 * 10 * 10 * 5` \
Explanation: Last digit has to one of the even digits. First digit can be any digit except zero. All other digits can be any digit.

**Example**: `No repetitions, divisible by 5` \
Explanation: The number has to end with 0 or 5 if it is divisible by 5. So we split this problem into two cases: first case is if last digit is 0 and second case is if the last digit is 5. \
This is how many possible combinations end in zero: `(10 - 1) * (10 - 2) * (10 - 3) * (10 - 4) * (10 - 5) * (1)`. The last digit has to be zero. The first digit can be any digit except zero. The second digit can be any digit except the first digit and zero. Etc.  \
This is how many possible combinations end in five: `(10 - 1 - 1) * (10 - 2) * (10 - 3) * (10 - 4) * (10 - 5) * (1)`. The last digit has to be five. The first digit can be any digit except zero and five. The second digit can be any digit except the first digit and five. Etc. \
Add these two subproblems to get the answer.  \
Answer: `9*8*7*6*5*1 +  8*8*7*6*5*1` 

**Example**: `No repetitions, divisible by 4`
Explanation: Numbers that are divisible by 4 either end in 4 or 8 or end in one of the following 2-digit combos: `04, 08, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96`. Any n-digit number (where n > 2) will end with one of these combo if they're divisible by 4. Since the first digit can't be zero, divide the 2-digit combos into two groups: one group with zeros and one without.  
Group without zeros (12, 16, 24, 28, 32, 36, 48, 52, 56, 64, 68, 72, 76, 84, 92, 96): 16 options.  
So we get `7 * 7 * 6 * 5 * 16` since the first digit can be any digit except zero and the two last digits, the second digit can be any digit except the first and last two, etc. and last two digits can be any from the "Group without zeros."
Group with zeros (04, 08, 20, 40, 60, 80): 6 options.  
So we get `8 * 7 * 6 * 5 * 6` since the first digit can be any digit except the two last digits, the second digit can be any digit except the first and last two, etc. and last two digits can be any from the "Group with zeros."
To get the final answer add the two: `7 * 7 * 6 * 5 * 16 + 8 * 7 * 6 * 5 * 6`

### Pigeonhole Principle (6.2)

### Permutations and Combinations (6.3)
Based on https://youtu.be/EHMDRUSOubM and https://youtu.be/bT8JoK1D9sM

#### Permutations
Definition: Arrangement of objects where order matters
For *n* letters there are the following **distinct** permutations:
<div>$$n(n - 1)(n - 2) (n - 3) ... 3 \cdot 2 \cdot 1 = n!$$</div>
Note: 0! = 1  
From a group of `n + 1` object labeled 1 through n, we can `k` of them. The number of groups with `k` objects is as follows:
<div>$$n(n-1)(n - 2)...(n - k + 1) = P(n, k) = \frac{n!}{(n - k)!}$$</div>
Note: $P(n, n) = n!$  

**Example**: How many ways to arrange letters `A, B, C, D, and E` in groups of 3?  
Answer: 
<div>$$ P(5, 3) = \frac{5!}{(5 - 3)!} = \frac{5!}{2!} = \frac{120}{2} = 60 $$</div>
We divide by 2 since `ABCDE` and `ABCED` are the same arrangement when choosing 3.

**Example**: From a pool of 10 candidates, how many arrangements of president, vice president, and secretary:
Answer:
$$ 10 \cdot 9 \cdot 8 = 720 = P(10, 3)$$

#### Permutation With Repetition
If you have $n$ objects and you have `$n_1$` that is not unique (repeats), `$n_2$` that's indistinguishable (not unique), etc. then the number of arrangements can be calculated as follows:
$$ \frac{n!}{n_1! n_2! ... n_k!}$$

**Example**: How many ways to arrange letters in "Oboe" (if O and o are considered the same letter)?
```
Oboe Obeo Oeob Oebo Oobe Ooeb boeO boOe boOe beoO eObo eOob ebOo
obOe obeO oeOb oebO oObe oOeb bOeo bOoe bOoe beOo eobO eoOb eboO
```
While there are 24 possible arrangements, there are only 12 UNIQUE ones since o is repeated.  

To solve we do $\frac{P(4, 4)}{2!} $ since the letter *O* repeats 2 times.

#### Permutations Problems
1. How many ways can you arrange letters in the word "banana"?  
   Answer: There are 6 letters total and $n$ repeats twice and $a$ repeats thrice. $$ \frac{P(6, 6)}{3! 2!} $$

2. a) How many arrangements for letters in "sociological"?  
      Answer: 12 letters total, 3 `o`'s, 2 `l`'s, 2 `c`'s, and 2 `i`'s $$ \frac{P(12, 12)}{3!2!2!2!} $$

2. b) In how many arrangements are A and G adjacent (think of "ag" as a letter and "ga" as a letter) in sociological?  
      Answer: If we treat "ag" and "ga" as one letter, then we have 11 
      letters."
      $$ \frac{P(11, 11)}{3!2!2!2!} \cdot 2$$
      It's the same as above except we multiply by 2 since there can be ag or ga.
2. c) In how many arrangements are all the vowels adjacent in sociological?  
      Answer: We have 6 vowels (3 `o`'s, 2 `i`'s, and 1`a`). We have 6 consonants. 
      $$ \frac{P(6, 6)}{3! 2!} \cdot \frac{P(7, 7)}{2!2!} $$
      First term is vowels and second term is treats the block of vowels as one "letter" with the rest of the consonants. Use product rule and the technique for dealing with duplicates.

#### Combinations
Definition: If we have *n* distinct objects and want to choose *k* of these objects without caring about the order, you can use the following formula:
$$ C(n, k) = \frac{P(n, k)}{k!} = \frac{n!}{k!(n - k)!} $$

Note that $ C(n, n) = C(n, 0) = 1 $ and $C(n, 1) = C(n, n - 1) = n$

**Example**: 5 white balls are chosen from 69 white balls, and 1 red ball from 26 red balls. 

* Find the number of combinations of white balls.  
  Answer: *AND* means use product rule. $$C(69, 5)$$
* Find the number of combinations of white balls.  
  Answer: $$C(26, 1)$$
* Find the number of combinations.  
  Answer: Use product rule $$C(26, 1) \cdot C(26, 1)$$

#### Combinations with Permutations
How many arrangements of the letters "MISSISSIPPI" have no consecutive S's?  
Answer: 
$$ _1M_2I_3I_4I_5P_6P_7I_8 $$
Remove the 4 `S`'s and notice how there are now 8 spots to put the `S`'s in between the letters. So we have a combination where we can use the following
$$ C(8, 4) = \frac{8!}{4!4!}$$

We can also permute the other letters that are not S's (7 letters with 4 duplicate I's and 2 duplicate P's):
$$ \frac{7!}{4!2!} $$

The final solution:
$$ (\frac{8!}{4!4!})(\frac{7!}{4!2!}) $$

### Binomial Theorem (6.4)
Entries for Pascal's triangle
<div>$$ C(n, k) = C(n - 1, k-1) + C(n - 1, k) $$</div>

The binomial theorem:
<div>$$ (x + y)^n = \sum_{j=0}^{n} C(n, j) \; x^{n-j} y^{j} = \\
C(n, 0)\;x^n + C(n, 1) \;x^{n-1}y ... + C(n, n-1)\; xy^{n-1} + C(n, n) \; y^n$$</div>

## Relations (Chapter 9)

### Relations and Properties (9.1)
Definition: $R \subseteq A \times B$  
Relation from A to B
Notation: If $(a, b) \in R$ we can write `a R B` or `a ~ b`  

**Example**: `|A| = 10, |B| = 10`  
The number of possible relations from A to B is $2^{|A \times B|} = 2^{100} $

**Example**: Write a list of elements of R  
`A = {0, 1, 2}` and `B = {a, b}`  
$A \times B = 6 \implies 2^{|A \times B|} = 2^{6} = 64$  
There are a total of 64 possible relations from A to B

Some possible elements of R:
`R = {(0, a), (0, b), (1, a), (2, b)...}`

#### Reflexive
A relationship is reflexive if $\forall a ((a, a) \in R)$  
A relationship is irreflexive if $\forall a ((a, a) \notin R) $  

**Example**: $ A = \mathbb{N} $, R = { (a, b) | a $\leq$ b }  
$ (1, 1) \in R \iff 1 \leq 1 $  
Since $ (a, a) \in R \iff a \leq a $, it is reflexive.

**Example**: `A = Set of all people`, `S = {(a, b) | a is the parent of b`  
Irreflexive since `a is the parent of a` is always false.  

In a digraph, if a graph is reflexive, all nodes have a **loop** that points back to itself.  

In a matrix, the diagonal should all be 1's if reflexive. If it is irreflexive, then the diagonal should be all 0's.

#### Symmetric
R is symmetric if $ (a, b) \in R \iff (b, a) \in R$  
Look for "two way street" in digraph  
If $ M_R^T = M_R $ then it is symmetric  
$ M_R^T \land M_R \subseteq I $ 

#### Antisymmetric
R is antisymmetric if $ (a, b) \in R \iff (b, a) \notin R , a \neq b$  

#### Asymmetric
Both irreflexive and asymmetric

#### Transitive
$ (a, b) \in R \land (b, c) \in R \implies (a, c) \in R) $

### Representing Relations (9.3)
You can use a digraph or matrix

### Closures of Relations (9.4)
Closure: The smallest relation with a property P that also contains the original relation R. The new relation should have the property and also have the original relation. P can be symmetry, transitivity, reflexivity, etc.

#### Reflexive Closure
$\Delta = \\{ (a, a), (b, b), (c, c), ... \\}$   
Closure: $ R \rightarrow R \cup \Delta $  
Matrix: $M_R \rightarrow M_R \lor I $

#### Symmetric Closure
Closure: $ R \rightarrow R \cup \overline{R} = R \cup R^{-1} $  
Matrix: $M_R \rightarrow M_R \lor M_R^T $

#### Transitive Closure
Closure: $ R \rightarrow R^{\*} $  
$ R^{\*} = \bigcup\limits_{n=1}^{\infty} R^{n} $  
Matrix: $ M_R \rightarrow \bigvee \limits_{n=1}^{\infty} M_R^{[n]} $  
While it says we have to multiply matrixes together forever, we can stop multiplying when no new edges are introduced.

#### Warshall's Algorithm
A more efficient way of getting the above (transitive closure).
<div>$$ W_{[i,j]}^{(k)} = W^{(k - 1)}_{(i, j)} \lor (W_{[i, k]}^{(k - 1)} \land W_{[k, j]}^{(k - 1)}) $$</div>

**Example**: 
$$ W_0 = 
\begin{bmatrix} 
0 & 0 & 0 & 1 \\\\
1 & 1 & 0 & 0 \\\\
1 & 0 & 0 & 1 \\\\
0 & 0 & 1 & 0 
\end{bmatrix} 
$$

## Graphs (Chapter 10)
### Graphs and Graph Models (10.1)
A graph G = (V, E) consists of V, a nonempty set of vertices/nodes and E, a set of edges.  

Can be represented using adjacency matrix or adjacency list.  

|E| = Number of edges  
|V| = Number of vertices    

Different types: Directed and undirected  

**Simple Graph**: No loops and no multiple edges.

## Trees (Chapter 11)
**Tree**: Acyclic undirected graph (No cycles).  
T = (V, E)  
|E| = |V| - 1  

**deg(v)** = Number of edges incident  

Total degrees = 2 $\cdot$ |E|


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

<div>$$
y \cdot z = (10^{\frac{n}{2}} \cdot c + d)(10^{\frac{n}{2}} \cdot a + b) \\
= (10^n)ac + (10^{\frac{n}{2}})ad + (10^{\frac{n}{2}})bc + bd \\
= (10^n)ac + (10^{\frac{n}{2}})(ad + bc) + bd
$$</div>

We now have 4 multiplications: `ac`, `ad`, `bc`, and `bd`.

<div>$$yz = (10^n)ac + (10^{\frac{n}{2}})\underbrace{(\overbrace{ad}^\text{n} + \overbrace{bc}^\text{n})}_{\alpha \text{n additions}} + bd $$ </div>

The above figure shows that `ad` and `bc` are both a max of n digits long since `a`, `b`, `c`, and `d` are all `n/2` digits in length. Thus an `n` digit number added to another `n` digit number takes `n` additions. We use $\alpha$ to symbolize the smallest possible addition. The smallest possible addition is called *atomic*. We could just use 1 instead of $\alpha$, but different hardware takes a different amount of operations/time to do addition, so we use the constant.

Multiplying by any power by 10 is just a shift to the left. Example, if `n = 4` 
and `X` represents any non-zero digit: 

<div>$$yz = \underbrace{(10^n)ac}_{\text{XXXX0000}} + \underbrace{(10^{\frac{n}{2}}) \; (ad + bc)}_{\text{00XXXX00}} + \underbrace{bd}_{\text{0000XXXX}} $$</div>

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

<div>$$yz = (10^n)\underbrace{ac}_{\text{1}} + (10^{\frac{n}{2}})(\underbrace{ad}_{\text{2}} + \underbrace{bc}_{\text{3}}) + \underbrace{bd}_{\text{4}}$$</div>

Let `M(n)` represent the recursive relation describing the result for multiplying numbers of length `n`.  

$$M(n) = 4\cdot M(\frac{n}{2}) + 2\alpha n$$

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

$$4^i(2\alpha (\frac{n}{2^i}))$$

#### Find Total Number of Multiplications
Since the base case is when the input to M(n) is 1 and the input to M(n) gets halved, we can find the total number of levels by taking the log base 2 of n, where n is the number of total number of digits. Since there's $4^{i}$ multiplications at a level and the number of levels is $log_2(n)$, there's $4^{log_2(n)}$ multiplications. They're atomic multiplications so we get $\mu 4^{log_2(n)}$, where $\mu$ is the constant signifying the time it takes for an atomic multiplication (since it depends on the hardware how long it actually takes to multiply).

#### Sum up Everything
The following represents the solution for our whole problem:  

<div>$$ yz = \sum_{i=0}^{log_2(n) - 1} 4^i(2\alpha (\frac{n}{2^i})) + \mu 4^{log_2(n)} $$</div>

Note: The summation is only applied to the first term to get the total number of additions. 

The bounds for the summation end at $log_2(n) - 1$ since the starting bound is 0, so to get to $log_2(n)$ levels we need the `-1`. Furthermore, the additions only occur when n for M(n) is not 1 (e.g. when not the base case), since at the base case, we just return a constant without doing any further non-atomic operations. We only sum the first term since we have to do additions at every recursive call  and we also already summed the multiplications up for each level in the previous subsection.

This just evaluates to the following:
$$ \mu n^2 + 2\alpha n(n - 1) $$
which means this is still $O(n^2)$, and not really better than the traditional multiplication algorithm. 

#### Karatsuba's Thing
Take the formula from before:
<div>$$yz = (10^n)ac + (10^{\frac{n}{2}})(ad + bc) + bd$$</div>

And rewrite part of the second term: 
<div>$$ ad + bc = \overbrace{\underbrace{(a + b)}_{\frac{n}{2}} \, \underbrace{(c + d)}_{ \frac{n}{2}}}^{n} - \underbrace{ac}_{n} - \underbrace{bd}_{n} $$</div>

Annotated above is how many digits each term will have. Adding two numbers $\frac{n}{2}$ digits long will yield a number with at max $\frac{n}{2}$ digits. Multiplying two numbers $\frac{n}{2}$ digits long will yield at max a number with $n$ digits. Thus adding/subtracting three numbers $n$ digits long takes $3\alpha n$ additions (subtraction is basically addition except using negation).  

</pre>


Now we have the following result:
<div>$$yz = (10^n)ac + (10^{\frac{n}{2}})((a + b)(c + d) - ad - bc) + bd$$</div>

Notice how we only have 3 multiplications now: `ac`, `(a + b)(c + d)`, and `bd`. We increased the number of additions to 4 as a tradeoff as shown below.

The stuff below shows how whole expression takes $4\alpha n$ additions. We use a similar approach as what we did before. `X` denotes a non-zero digit:   

<div>$$ yz = \underbrace{(10^n)ac}_{\text{XXXX0000}} + \underbrace{(10^{\frac{n}{2}})((a + b)(c + d) - ad - bc)}_{\text{00XXXX00}} + \underbrace{bd}_{\text{0000XXXX}} $$</div>


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
<div>$$ yz = \sum_{i=0}^{log_2(n) - 1} 3^i(4\alpha (\frac{n}{2^i})) + \mu 3^{log_2(n)} $$</div>

With some magic and simplication:
<div>$$ \mu n^{log_2(3)} + 8 \alpha n (\frac{n^{log_2(3)}}{n} - 1)$$</div>

The runtime is $O(n^{log_2(3)})$  

$ log_2(3) $ is around 1.58 so the runtime is about $O(n^{1.58})$.
  
This is Karatsuba Multiplication.
