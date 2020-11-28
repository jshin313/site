---
title: "Discrete Mathematics I Notes"
date: 2020-11-27T16:40:12-05:00
draft: false
---

This class is called **Mathematical Concepts in Computing I** at my college and covers propositions/predicates, sequences, number theory, set theory, functions, matrices, basic proof techniques, combinatorics, counting, relations, and trees/graphs.

Book Used: **Discrete Mathematics and Its Applications by Kenneth Rosen**  
The book had some nice examples and problems, but sometimes explanations were bad.

These are my notes, so there's probably stuff that I got wrong. Comment if you find mistakes.

Helpful websites and resources I used for the class:
* [Kimberly Brehm's Youtube Channel](https://www.youtube.com/playlist?list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz). Pretty good explanations.
* https://math.berkeley.edu/~arash/55/: Condensed version of book chapters. A bit hard to read sometimes.
* https://www.slader.com/: For solutions to book problems

## Counting and Combinatorics (Chapter 6)


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

    The above figure shows that `ad` and `bc` are both a max of n digits long since `a`, `b`, `c`, and `d` are all `n/2` digits in length. Thus an `n` digit number added to another `n` digit number takes `n` additions. But these additions are *atomic*, meaning that they're the smallest additions in the algorithm, so the additions can be denoted as $\alpha n$ additions where $\alpha$ is just an symbol representing *atomic addition*.

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

    Thus we only have to do `n` additions and since they're atomic we get $\alpha n$ additions.  

    Since `ad + bc` took $\alpha n$ additions and adding all the terms also took $\alpha n$ additions, the total additions for getting `yz` is $2 \alpha n$. This is how many additions is required whenever we use this formula, which is at recursive call).

    We use the formula $yz = (10^n)ac + (10^{\frac{n}{2}})(ad + bc) + bd$ to do multiplication, but if `ac`, `ad`, `bc`, or `bd` is not a multiplication between single digits (i.e. not *atomic*), then we have to do a recursive call and use the formula again by further splitting up the numbers in half until we get *atomic* multiplication (i.e. when we get multiplication between two one digit numbers). The base case is when we get "atomic multiplication." The $\mu$ symbol represents this atomic multiplication.  

    We have 4 multiplications done for each recursive call:

    `$yz = (10^n)\underbrace{ac}_{\text{1}} + (10^{\frac{n}{2}})(\underbrace{ad}_{\text{2}} + \underbrace{bc}_{\text{3}}) + \underbrace{bd}_{\text{4}}$`

    Let `M(n)` represent the recursive relation describing the result for multiplying numbers of length `n`.  

    `$M(n) = 4\cdot M(\frac{n}{2}) + 2\alpha n$`
    
    At each recursive call, we need to get the results of the 4 multiplications (`$4M(\frac{n}{2})$`) and then add the results of the multipliations up (`$2\alpha n$`) per the formula.

    Representing the recursive calls using a tree:

```
                                 n                                        1(2𝛼n)

      n/2              n/2              n/2              n/2              4(2𝛼(n/2))

n/4 n/4 n/4 n/4  n/4 n/4 n/4 n/4  n/4 n/4 n/4 n/4  n/4 n/4 n/4 n/4        16(2𝛼(n/4))
```
The tree continues on until the base case is reached.

We see that the number of subproblems at each level is `$4^i$` where `i` is depth of the tree. We also see that the number of digits gets halved each time we do a recursive call, so at each level, the number of additions is `$2\alpha \frac{n}{2^i}$` where i is the level/depth.
