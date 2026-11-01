---
title: On Infinity
pubDate: 2026-10-30
---

I first encountered the mathematical concept of infinity in my calculus class. We learned something like 

$$
\lim_{x\rightarrow \infty} \frac{1}{x} = 0
$$

This reads: the limit of one over x is zero as x approaches infinity. As a student, I accepted it without much thought. But what exactly is infinity? Is it an unimaginably large number? Or is it something fundamentally different?

For now, suppose *infinity* is just a very large number. Let's think of something big. Really big. As big as the universe. We know that the diameter of the observable universe is about 93 billion light-years, or $8.8 \times 10^{26}$ meters. Planck length, the smallest unit of measurement for distance, is $1.62 \times 10^{-35}$ meters. This means the observable universe is $5.4 \times 10^{61}$ in Planck length across. We also know that the universe is about 13.8 billion old. That's $4.35 \times 10^{17}$ in seconds. Planck time, the shortest unit of time, is $5.39 \times 10^{-44}$ seconds. That makes the universe $8 \times 10^{60}$ Planck times old. And the total number of atoms in the observable universe? An estimated $10^{80}$. These are enormous numbers that test the limit of human intuition.

Buckle up. We are just getting started.

Do you know where Google got its name? From a number known as *googol*: the digit 1 followed by one hundred zeros, or $10^{100}$. Google’s headquarters, known as the Googleplex, takes its name from an even larger number known as *googolplex*. 1 followed by *googol* number of zeros, or $10^{(10^{100})}$. Googolplex is unfathomably larger than the numbers describing the dimensions of the universe we just encountered. In fact, there's not enough space to write out every digit in Googolplex using ordinary physical storage at atomic scales.

But we are not done yet. A *googolplex* is essentially a tower of exponents. Why stop at 3 levels? We can keep stacking them higher and higher. Soon, though, even writing out the exponents becomes impractical. We need a more efficient method. This is where Knuth's up-arrow notation comes in:

One arrow $\uparrow$ represents exponentiation:

$$
3 \uparrow 3 = 3^{3} = 27
$$

Two arrows $\uparrow \uparrow$ represent tetration:

$$
3 \uparrow \uparrow 3 = 3^{(3^{3})} = 3^{27}
$$

Three arrows $\uparrow \uparrow \uparrow$ represent pentation:

$$
3 \uparrow \uparrow \uparrow 3 = 3 \uparrow \uparrow (3 \uparrow \uparrow 3)
$$

Four arrows $\uparrow \uparrow \uparrow \uparrow$ represent hexation:

$$
3 \uparrow \uparrow \uparrow \uparrow 3 = 3 \uparrow \uparrow \uparrow (3 \uparrow \uparrow \uparrow 3)
$$

Feeling a little dizzy? You are not alone. But stay with me.

The last number with four arrows is defined as $g_1$. 

$$
g_2 = 3 \uparrow^{g_{1}} 3
$$

$$
g_3 = 3 \uparrow^{g_{2}} 3
$$

$$
...
$$

Rinse and repeat until we hit $g_{64}$, which is known as Graham’s number. It's the upper bound for the solution to a problem in Ramsey theory, a branch of mathematics in combinatorics. 

By contrast, *googolplex* is smaller than $10 \uparrow \uparrow 4$.

Tree(3)

Here's a list of even larger numbers that dwarf

- SSCG(3)
- Busy Beaver
- Rayo's number

Georg Cantor

A set is a collection of objects. 

Now consider the set of all natural numbers $\mathbb{N}$

$$
\mathbb{N} = \{1,2,3,4,5 ...\}
$$

This set contains all the mind-bogglingly large numbers we've discussed so far. But can we obtain an even larger number than say, Rayo's number? Of course! And it's trivial. Just add 1 to get R + 1. And add 1 to that number to get R + 2. And add 1 to that number to get R + 3. We can go on forever. Yet, N contains all of these numbers because they are finite. What does that tell us about the size, or *cardinality* of $\mathbb{N}$? It's infinite! The mathematician Georg Cantor (1845-1918) defines the cardinality as $\aleph_0$.

Diagonal argument.

This raises a deeper question: Does mathematics exist independently of physical reality? Or is it a human invention, a game of symbols and logic governed by rules we made up? 

And if it's something 






