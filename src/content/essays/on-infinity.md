---
title: On Infinity
pubDate: 2026-10-30
---

The idea of *infinity* has always been unsettling to me. 

Ancient civilizations turned to the natural world to evoke a sense of the infinite: Buddhist scriptures speak of the grains of sand in the Ganges River, while the Bible compares Abrahm's descendants to the stars in the sky and the sand on the seashore. Yet all these quantities, vast as they are, are finite[^1]. Even the observable universe itself contains "only" an estimated $10^{80}$ atoms. The physical world seems to offer little help in understanding *infinity*. 

But fret not! The ingenuity of the human mind allows us to conceive of numbers far beyond anything found in the physical universe. 

Do you know where Google got its name? From a number known as *googol*: the digit 1 followed by one hundred zeros, or $10^{100}$. Google’s headquarters, known as the Googleplex, takes its name from an even larger number known as *googolplex*: 1 followed by a *googol* number of zeros, or $10^{(10^{100})}$. Googolplex is so unfathomably large that there aren't enough atoms in the observable universe to write out every digit!

But we can keep going. As you can see, *googolplex* can be represented by a tower of exponents. Why stop at 3 levels? We can keep stacking them higher and higher. Soon, though, even writing out the exponents becomes impractical. We need a more efficient method. This is where *Knuth's up-arrow notation* comes in:

One arrow $\uparrow$:

$$
3 \uparrow 3 = 3^{3} = 27
$$

Two arrows $\uparrow \uparrow$:

$$
3 \uparrow \uparrow 3 = 3^{(3^{3})} = 3^{27}
$$

Three arrows $\uparrow \uparrow \uparrow$:

$$
3 \uparrow \uparrow \uparrow 3 = 3 \uparrow \uparrow (3 \uparrow \uparrow 3)
$$

(~7.6 trillion 3s stacking up in an exponent tower)

Four arrows $\uparrow \uparrow \uparrow \uparrow$:

$$
3 \uparrow \uparrow \uparrow \uparrow 3 = 3 \uparrow \uparrow \uparrow (3 \uparrow \uparrow \uparrow 3)
$$

I can't even begin to comprehend the size of the last number. But let's call it $g_1$ and use it to construct even larger numbers.

$$
g_2 = 3 \uparrow^{g_{1}} 3
$$ 
(that's $g_1$ number of **arrows**!)

$$
g_3 = 3 \uparrow^{g_{2}} 3
$$

$$
g_4 = 3 \uparrow^{g_{3}} 3
$$

$$
...
$$

Rinse and repeat until we reach $g_{64}$, which is known as *Graham’s number*. It arose as an upper bound in a problem in combinatorics. Pause for a moment 

So far, we've been constructing large numbers by repeatedly applying mathematical operations. But during a "Big Number Duel" competition in 2007, Agustín Rayo, a philosophy professor at MIT, took a radically different approach. He first fixed a formal language (a system of symbols and precise rules for combining them into valid expressions) and a limit on the number of symbols (a googol). He then considered the collection of all numbers that could be uniquely described within those constraints, and simply defined *Rayo's number* as the smallest number greater than every number in the collection. It's so ridiculously large that *Graham's number* is practically negligible in comparison.

To appreciate the scale of the constraint that Rayo imposed, imagine writing down one mathematical symbol every Planck time[^2]. Even if you had been continuously writing since the beginning of the universe, you would be nowhere close to reaching a googol symbols! And remember, a googol is merely the number of symbols allowed to describe the number, not the number itself.

But can we obtain an even larger number than Rayo's number? I claim we can and it's trivial. Just add 1 to get (R+1). And add 1 to that number to get (R+2). And add 1 to that number to get (R+3). You get the idea. Despite the herculean effort of constructing mind-bending large numbers, we can always count upward to obtain larger ones. This process never ends, an idea known as *potential infinity*. 

This concept should be familiar if you've taken a calculus class. For example:

$$
\lim_{x\rightarrow \infty} \frac{1}{x} = 0
$$

As $x$ grows without bound, $\frac{1}{x}$ approaches zero.

Frankly, this is a rather disappointing result. Sure, we know we can count forever. Sure, we know all those numbers are still finite. But we've barely advanced our understanding of *infinity* and its properties!

Alright, alright. At this point, it's clear that we need a fundamentally different idea. And that idea happens to be the foundation of modern mathematics: *set theory*.

In mathematics, a *set* is a collection of distinct objects known as elements. For example, $P = \{\text{Federer}, \text{Nadal}, \text{Djokovic}\}$ is a set of tennis players[^3]. Since $P$ contains three distinct elements, its size, or *cardinality*, is 3: $|P| = 3$.

Now, can we define a set that contains every natural number, however large? Why not! Let's call this set $\mathbb{N}$:

$$
\mathbb{N} = \{1,2,3,4,5, ...\}
$$

Notice what we've done here. Unlike the set of tennis players, $\mathbb{N}$ has no last element. Yet we are treating it as a single, completed collection. What does that tell us about the *cardinality* of $\mathbb{N}$? It's infinite! The mathematician Georg Cantor (1845-1918) called this cardinality $\aleph_0$ (aleph-null)[^4].

Similarly, we can define $\mathbb{Z}$ as the set of all *integers* and $\mathbb{Q}$ as the set of all *rational numbers* (i.e., numbers that can be written in the form of fraction). It's easy to see that $\mathbb{Z}$ includes all elements in $\mathbb{N}$, and $\mathbb{Q}$ includes all elements in both $\mathbb{N}$ and $\mathbb{Z}$. In other words, $\mathbb{Z}$ is a subset of $\mathbb{Q}$, and $\mathbb{N}$ is a subset of both $\mathbb{Z}$ and $\mathbb{Q}$. We can write out these relationships as $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$, where $\subset$ is the symbol for *is subset of*.

Here comes the question: What are the cardinalities of $\mathbb{Z}$ and $\mathbb{Q}$? 

The answer is $\aleph_0$! How's this possible? Cantor's brilliant insight is that two sets have the same cardinality if their elements can be put into a *one-to-one correspondence*. 

Suppose we define a set $P^{*} = \{\text{Mirka}, \text{Xisca}, \text{Jelena}\}$. We can pair off the elements in $P$ and $P^{*}$:

Federer $\rightarrow$ Mirka

Nadal $\rightarrow$ Xisca

Djokovic $\rightarrow$ Jelena 

And conclude $|P| = |P^*|$.

Likewise, we can arrange the integers in the following sequence:

$$
\mathbb{Z} = \{0,1,-1,2,-2,3,-3 ...\}
$$

Then, pair off each element in $\mathbb{Z}$ with an element in $\mathbb{N}$ by position:

$1 \rightarrow 0$

$2 \rightarrow 1$

$3 \rightarrow -1$ 

$4 \rightarrow 2$

$5 \rightarrow -2$

$...$

The point is, every natural number can be paired with an integer, and every integer appears somewhere in the sequence. Therefore, $|\mathbb{N}|$ = $|\mathbb{Z}|$ = $\aleph_0$.

Proof that $|\mathbb{Q}| = \aleph_0$

There are also *irrational numbers*, such as $\pi$ and $\sqrt{2}$, that cannot be expressed as ratios of two integers. Together with all rational numbers, they form the set of *real numbers*, denoted by $\mathbb{R}$. Equivalently, real numbers can be represented as points on a continuous number line. So $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.

Is the cardinality of $\mathbb{R}$ also $\aleph_0$? Let's find out.  Suppose the real numbers between 0 and 1 can be completely listed in a sequence and put into a one-to-one correspondence with every natural number. For example:

$1 \rightarrow 0.\mathbf{2}9583...$

$2 \rightarrow 0.3\mathbf{8}652...$

$3 \rightarrow 0.83\mathbf{5}29...$

$4 \rightarrow 0.492\mathbf{3}7...$

$5 \rightarrow 0.7136\mathbf{1}...$

$...$

Now, let's construct a real number $x$ using the bolded digits on the main diagonal:

We add 1 to the 1st digit from the first number, and use it as $x$'s first digit.

We add 1 to the 2nd digit from the second number, and use it as $x$'s second digit. 

We add 1 to the 3rd digit from the third number, and use it as $x$'s third digit. 

$...$

Compare $x$ to the list:

Is $x$ the first number in the list? No, because it differs in the 1st decimal place.

Is $x$ the second number in the list? No, because it differs in the 2nd decimal place. 

Is $x$ the third number in the list? No, because it differs in the 3rd decimal place. 

...

Clearly, $x$ is not in the list. But wait a second. Didn't we assume our list is complete and contains *all* real numbers between 0 and 1? The contradiction means our assumption must be false. This is Cantor's diagonal argument and it has an astonishing implication - *infinity* has different sizes! $|\mathbb{R}|$ is strictly larger than $|\mathbb{N}|$ and is *uncountable* because any proposed complete enumeration of the real numbers must miss at least one number.

$2^{\aleph_0}$

Since we are treating $|\mathbb{N}|$ as a single mathematical object,  $\omega$

Mention there are infinite number of infinities (do we need to go into the proof using power sets?) 



How can the human mind, made up of , construct that the physical universe cannot represent? 

This raises a deeper question: Does mathematics exist independently of physical reality? Or is it a human invention, a game of symbols and logic governed by rules we made up? 

Reflect on what this reveals about mathematics—that it is not just about calculating numbers, but about building consistent logical worlds that go beyond physical limits.


[^1]: There are rougly $10^{15}$ grains of sand in the Ganges River and $10^{25}$ stars in the universe. \
[^2]: Planck time ($5.39 \times 10^{-44}$ seconds) is a fundamental timescale in physics, below which our current understanding of general relativity and quantum mechanics breaks down. \
[^3]: Yes I'm a big tennis fan. \
[^4]: $\aleph$ is the first letter in the Hebrew alphabet.