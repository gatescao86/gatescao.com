---
title: On Infinity
pubDate: 2026-10-30
---

I first encountered the mathematical concept of infinity in my calculus class. We learned something like 

$$
\lim_{x\rightarrow \infty} \frac{1}{x} = 0
$$

This reads: the limit of one over x is zero as x approaches infinity. As a student, I accepted it without much thought. But what exactly is infinity? Is it an unimaginably large number? Or is it something fundamentally different?

For now, suppose *infinity* is just a very large number. Let's think of something big. Really big. As big as the universe. 

We know that the diameter of the observable universe is about 93 billion light-years, or $8.8 \times 10^{26}$ meters. Planck length, the smallest unit of measurement for distance, is $1.62 \times 10^{-35}$ meters. This means the observable universe is $5.4 \times 10^{61}$ in Planck length across. We also know that the universe is about 13.8 billion old. That's $4.35 \times 10^{17}$ in seconds. Planck time, the shortest unit of time, is $5.39 \times 10^{-44}$ seconds. That makes the universe $8 \times 10^{60}$ Planck times old. And the total number of atoms in the observable universe? An estimated $10^{80}$. These are enormous numbers that test the limit of human intuition.

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

Rinse and repeat until we hit $g_{64}$, which is known as *Graham’s number*. It's the upper bound for the solution to a problem in Ramsey theory, a branch of mathematics in combinatorics. 

By contrast, *googolplex* is smaller than $10 \uparrow \uparrow 4$.

TREE(3)

The definition 


There's one more large number that's worth mentioning: Rayo's number. It was created by Agustín Rayo, a philosophy professor at MIT, during a "Big Number Duel" competition in 2007. Rayo's number is defined as the smallest natural number greater than every finite number that can be defined using fewer than *googol* number of symbols in the formal language of first-order set theory. I realize that's quite a mouthful, but don't worry too much about the formalism. The key point is that it's so large that even Graham's number and TREE(3) are practically negligible by comparison. 

A few words on set theory. In mathematics, a *set* is a collection of distinct, well-defined objects known as elements or members. By *well-defined*, we mean there's an objective rule that allows us to unambiguously determine whether an object belongs to a set.

For example, $P = \{\text{Federer}, \text{Nadal}, \text{Djokovic}\}$ is a set of tennis players. Since $P$ contains three distinct elements, its size, or *cardinality* is 3: $|P| = 3$

Now consider the set of all natural numbers $\mathbb{N}$:

$$
\mathbb{N} = \{1,2,3,4,5 ...\}
$$

This set contains all the mind-bogglingly large numbers we've discussed so far. But can we obtain an even larger number than say, Rayo's number? I claim we can and it's trivial. Just add 1 to get R + 1. And add 1 to that number to get R + 2. And add 1 to that number to get R + 3. We can go on forever. Yet, N contains all of these numbers because they are natural numbers. What does that tell us about the *cardinality* of $\mathbb{N}$? It's infinite! The mathematician Georg Cantor (1845-1918) called this cardinality $\aleph_0$. At this point, one thing should be clear: infinity is not just a very large natural number. 

You may have noticed we have only talked about natural numbers so far. How about the set of all integers $\mathbb{Z}$ and the set of all rational numbers $\mathbb{Q}$ (i.e., numbers that can be written in the form of fractions)? 

It's easy to see $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q}$, but I claim that they all have the same cardinality $\aleph_0$. How's this possible? Cantor's brilliant insight is that two sets have the same cardinality if their elements can be put into a *one-to-one correspondence*. Suppose we define a set $P^{*} = \{\text{Mirka}, \text{Xisca}, \text{Jelena}\}$. We can pair off the elements in $P$ and $P^{*}$:

Federer $\rightarrow$ Mirka

Nadal $\rightarrow$ Xisca

Djokovic $\rightarrow$ Jelena 

And conclude $|P| = |P^*|$.

We can list the integers in the following sequence:

$$
\mathbb{Z} = \{0,1,-1,2,-2,3,-3 ...\}
$$

Then, pair off each element in $\mathbb{Z}$ with an element in $\mathbb{N}$ by position:

$1 \rightarrow 0$

$2 \rightarrow 1$

$3 \rightarrow -1$ 

$4 \rightarrow 2$

$5 \rightarrow -2$

...



Proof that $|\mathbb{Q}| = \aleph_0$

Suppose the real numbers between 0 and 1 can be completely listed in a sequence and put into a one-to-one correspondence with every natural number. For example:

$1 \rightarrow 0.\mathbf{2}9583...$

$2 \rightarrow 0.3\mathbf{8}652...$

$3 \rightarrow 0.83\mathbf{5}29...$

$4 \rightarrow 0.492\mathbf{3}7...$

$5 \rightarrow 0.7136\mathbf{1}...$

...

Now, let's construct a real number $x$ using the bolded digits on the main diagonal:

We add 1 to the 1st digit from the first number, and use it as $x$'s first digit.

We add 1 to the 2nd digit from the second number, and use it as $x$'s second digit. 

We add 1 to the 3rd digit from the third number, and use it as $x$'s third digit. 

...

Compare $x$ to the list:

Is $x$ the first number in the list? No, because it differs in the 1st decimal place.

Is $x$ the second number in the list? No, because it differs in the 2nd decimal place. 

Is $x$ the third number in the list? No, because it differs in the 3rd decimal place. 

...

Clearly, $x$ is not in the list. But wait a second. Didn't we assume our list is complete and contains *all* real numbers between 0 and 1? The contradiction means our assumption must be false. This is Cantor's diagonal argument. And it has an astonishing implication - *infinity* has different sizes! $|\mathbb{R}|$ is strictly larger than $|\mathbb{N}|$ and is *uncountable* because any proposed complete enumeration of the real numbers must miss at least one number.

Mention there are infinite number of infinities (do we need to go into the proof using power sets?) 

Raises the philosophical question of what math is? 

$2^{\aleph_0}$

This raises a deeper question: Does mathematics exist independently of physical reality? Or is it a human invention, a game of symbols and logic governed by rules we made up? 







