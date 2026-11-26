---
title: On Infinity
description: Large Numbers, the Hierarchy of Infinity, and the Philosophy of Mathematics
pubDate: 2026-11-26
---

The idea of *infinity* has always been unsettling to me. 

Ancient civilizations turned to the natural world to evoke a sense of the infinite: Buddhist scriptures speak of the grains of sand in the Ganges River, while the Bible compares Abraham's descendants to the stars in the sky and the sand on the seashore. Yet all these quantities, vast as they are, are finite[^1]. Even the observable universe itself contains *only* an estimated $10^{80}$ atoms. The physical world seems to offer little help in understanding *infinity*. 

But fret not! The ingenuity of the human mind allows us to conceive of numbers far beyond anything found in the physical universe. 

Do you know where Google got its name? From a number known as *googol*: the digit 1 followed by one hundred zeros, or $10^{100}$. Google's headquarters, known as the Googleplex, takes its name from an even larger number known as *googolplex*: 1 followed by a *googol* of zeros, or $10^{(10^{100})}$. Googolplex is so unfathomably large that there aren't enough atoms in the observable universe to write out every digit!

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
=
\underbrace{3^{3^{3^{\cdot^{\cdot^{\cdot^{3}}}}}}}_{7{,}625{,}597{,}484{,}987 \text{ copies of } 3}
$$

Four arrows $\uparrow \uparrow \uparrow \uparrow$:

$$
3 \uparrow \uparrow \uparrow \uparrow 3 = 3 \uparrow \uparrow \uparrow (3 \uparrow \uparrow \uparrow 3)
$$

I can't even begin to comprehend the size of the last number, but let's call it $g_1$ and use it to construct even larger numbers.

$$
g_2 = 3 \uparrow^{g_{1}} 3
$$ 
(that's $g_1$ **arrows**!)

$$
g_3 = 3 \uparrow^{g_{2}} 3
$$

$$
g_4 = 3 \uparrow^{g_{3}} 3
$$

$$
\vdots
$$

$$
g_{64} = 3 \uparrow^{g_{63}} 3
$$

$g_{64}$ is known as *Graham’s number*, which arose as an upper bound in a problem in combinatorics. Pause and try to picture this number in your head. I bet you can't.

Whew, I realize I've just put you through quite an ordeal with all that crazy notation. May I suggest we take a break and play a game together? The goal of the game is to build the longest possible sequence of "trees". But these are not the everyday trees in your local park; they are mathematical objects made up of dots connected by lines, and look like family trees:

<figure class="tree-diagram">
<svg viewBox="0 0 200 140" width="200" height="140" role="img" aria-label="A rooted tree with a red parent, a blue child on the left, and a green child on the right that itself has a red child and a blue child.">
	<g fill="none" stroke="currentColor" stroke-width="1.4">
		<line x1="100" y1="18" x2="46" y2="70" />
		<line x1="100" y1="18" x2="148" y2="70" />
		<line x1="148" y1="70" x2="122" y2="122" />
		<line x1="148" y1="70" x2="174" y2="122" />
	</g>
	<circle cx="100" cy="18" r="7" fill="#c0392b" />
	<circle cx="46" cy="70" r="7" fill="#2b6cb0" />
	<circle cx="148" cy="70" r="7" fill="#2d6a4f" />
	<circle cx="122" cy="122" r="7" fill="#c0392b" />
	<circle cx="174" cy="122" r="7" fill="#2b6cb0" />
</svg>
</figure>

Here are the rules:

1. Each dot can have one of three colors (pick your favorite colors!).
2. Draw one tree at a time. The first can have at most one dot, the second at most two, the third at most three, and so on.
3. Once you draw a tree that contains an earlier tree, the game ends immediately. 

The last rule requires some explanation. By containment, we mean that we can find the smaller tree's pattern within the larger tree, preserving the colors and branching relationships. For example, the smaller tree below is contained in the larger tree shown above. Why? Because the red dot is the nearest common ancestor of the two blue dots in both trees, even though the dots aren't directly connected in the larger tree.

<figure class="tree-diagram tree-diagram--pair">
<svg viewBox="0 0 100 140" width="100" height="140" role="img" aria-label="A smaller tree: a red parent with two blue children.">
	<g fill="none" stroke="currentColor" stroke-width="1.4">
		<line x1="50" y1="16" x2="16" y2="64" />
		<line x1="50" y1="16" x2="84" y2="64" />
	</g>
	<circle cx="50" cy="16" r="7" fill="#c0392b" />
	<circle cx="16" cy="64" r="7" fill="#2b6cb0" />
	<circle cx="84" cy="64" r="7" fill="#2b6cb0" />
</svg>
<svg viewBox="0 0 200 140" width="200" height="140" role="img" aria-label="The same pattern inside the larger tree: the top red, the left blue, and the lower-right blue, skipping the green in between.">
	<g fill="none" stroke="currentColor" stroke-width="1.4">
		<line x1="100" y1="18" x2="46" y2="70" />
		<line x1="100" y1="18" x2="148" y2="70" />
		<line x1="148" y1="70" x2="174" y2="122" />
		<line x1="148" y1="70" x2="122" y2="122" opacity="0.22" />
	</g>
	<circle cx="100" cy="18" r="7" fill="#c0392b" />
	<circle cx="46" cy="70" r="7" fill="#2b6cb0" />
	<circle cx="148" cy="70" r="7" fill="#2d6a4f" opacity="0.35" />
	<circle cx="122" cy="122" r="7" fill="#c0392b" opacity="0.22" />
	<circle cx="174" cy="122" r="7" fill="#2b6cb0" />
</svg>
</figure>

Let's define a function TREE(n) to measure the maximum number of trees you can draw with $n$ colors before the game must end. What do you think TREE(3) is? A billion? A *googol*? A *googolplex*?? Think bigger. TREE(3) is so ridiculously large that even *Graham's number* is practically negligible in comparison! In fact, proving the tree game must end at some point using standard finite arithmetic requires at least $2 \uparrow \uparrow 1000 =
\underbrace{2^{2^{2^{\cdot^{\cdot^{\cdot^{2}}}}}}}_{1{,}000 \text{ copies of } 2}$ symbols. Imagine writing down one symbol every Planck time[^2]. Even if you had been continuously writing since the beginning of the universe, you would be nowhere close. Let that sink in. 

But can we obtain an even larger number than TREE(3)? I claim we can, and it's trivial. Just add 1 to get (TREE(3)+1). And add 1 to that number to get (TREE(3)+2). And add 1 to that number to get (TREE(3)+3). You get the idea. Despite the herculean effort of constructing mind-bendingly large numbers, we can always count upward to obtain larger ones. This process never ends, an idea known as *potential infinity*.

This concept should be familiar if you've taken a calculus class. For example:

$$
\lim_{x\rightarrow \infty} \frac{1}{x} = 0
$$

$x\rightarrow \infty$ illustrates the idea that $x$ can grow arbitrarily large without an upper bound, but never attain *infinity*. 

Frankly, this is a rather disappointing result. Sure, we know we can count forever. Sure, we know all those numbers are still finite. But we've barely advanced our understanding of *infinity* and its properties! Alright, alright. At this point, it's clear that we need a fundamentally different idea. And that idea happens to be the foundation of modern mathematics: *set theory*.

In math, a *set* is defined as a collection of distinct objects known as elements. For example, $P = \{\text{Federer}, \text{Nadal}, \text{Djokovic}\}$ is a set of tennis players[^3]. Since $P$ contains three distinct elements, its size, or *cardinality*, is $|P|$ = 3. With this definition, it's easy to see that each natural number is also a *cardinal number*.

Now, let's define a set that contains every natural number, however large, and call this set $\mathbb{N}$:

$$
\mathbb{N} = \{0,1,2,3,4, \dots\}
$$

Notice what we've done here. Unlike the set of tennis players, $\mathbb{N}$ has no last element. Yet we are treating it as a single, completed collection. *(But why can we do this if counting is an endless process?! Hold on to this question for now. We will come back to it later.)* What does that tell us about the cardinality of $\mathbb{N}$? It's *infinite*! The mathematician Georg Cantor (1845-1918) called this cardinality $\aleph_0$ (*aleph-null*)[^4], also known as the *smallest infinite cardinal number*. Buckle up — we have now entered the realm of *actual infinity*.

Similarly, we can define $\mathbb{Z}$ as the set of all *integers* and $\mathbb{Q}$ as the set of all *rational numbers*. It's easy to see that $\mathbb{Z}$ includes all elements in $\mathbb{N}$, and $\mathbb{Q}$ includes all elements in both $\mathbb{N}$ and $\mathbb{Z}$. In other words, $\mathbb{Z}$ is a subset of $\mathbb{Q}$, and $\mathbb{N}$ is a subset of both $\mathbb{Z}$ and $\mathbb{Q}$. We can write out these relationships as $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$, where $\subset$ is the symbol for *is a subset of*.

What are the cardinalities of $\mathbb{Z}$ and $\mathbb{Q}$? The answer is $\aleph_0$! But how's this possible if $\mathbb{N}$ is only a subset of $\mathbb{Z}$ and $\mathbb{Q}$? Cantor's brilliant insight is that two sets have the same cardinality if their elements can be put into a *one-to-one correspondence*. 

Let's return to the example of tennis players and define a new set $P^{*} = \{\text{Mirka}, \text{Xisca}, \text{Jelena}\}$ (spouses of the players). We can pair off the elements in $P$ and $P^{*}$:

Federer $\rightarrow$ Mirka

Nadal $\rightarrow$ Xisca

Djokovic $\rightarrow$ Jelena 

and conclude $|P| = |P^*|$.

Likewise, we can arrange the integers in the following sequence:

$$
\mathbb{Z} = \{0,1,-1,2,-2,3,-3, ...\}
$$

Then, we can pair off each element in $\mathbb{Z}$ with an element in $\mathbb{N}$ by position:

$0 \rightarrow 0$

$1 \rightarrow 1$

$2 \rightarrow -1$ 

$3 \rightarrow 2$

$4 \rightarrow -2$

$\vdots$

The point is, every natural number can be paired with an integer, and every integer appears somewhere in the sequence. Therefore, $|\mathbb{N}|$ = $|\mathbb{Z}|$ = $\aleph_0$, which can also be expressed by saying $|\mathbb{Z}|$ is *countably infinite*.

What's the proof that $|\mathbb{Q}| = \aleph_0$? Recall that a number is rational if it can be written as a fraction $\frac{p}{q}$, where $p$ and $q$ are integers. We can build a sequence that starts with 0, followed by all rational numbers for which $|p|+q = 2$, followed by all rational numbers for which $|p|+q = 3$, and so on. Evidently, all rational numbers will eventually appear in this sequence, and each can be paired with a natural number. Hence $|\mathbb{Q}|$ is countably infinite.

There are also *irrational numbers*, such as $\pi$ and $\sqrt{2}$, which cannot be expressed as a fraction of two integers, and whose decimal expansions are non-terminating and non-repeating. Together with all rational numbers, they form the set of *real numbers*, denoted by $\mathbb{R}$, so $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. Does $|\mathbb{R}| = \aleph_0$? Let's find out. 

Suppose the real numbers between 0 and 1 can be completely listed in a sequence and put into a one-to-one correspondence with every natural number[^5]. For example:

$0 \rightarrow 0.\mathbf{2}9583...$

$1 \rightarrow 0.3\mathbf{8}652...$

$2 \rightarrow 0.83\mathbf{5}29...$

$3 \rightarrow 0.492\mathbf{3}7...$

$4 \rightarrow 0.7136\mathbf{1}...$

$\vdots$

Now, let's construct a real number $x$ using the bolded digits on the main diagonal:

We add 1 to the 1st digit of the first number and use it as $x$'s first digit.

We add 1 to the 2nd digit of the second number and use it as $x$'s second digit. 

We add 1 to the 3rd digit of the third number and use it as $x$'s third digit. 

$\vdots$

Compare $x$ to the list:

Is $x$ the first number in the list? No, because it differs in the 1st decimal place.

Is $x$ the second number in the list? No, because it differs in the 2nd decimal place. 

Is $x$ the third number in the list? No, because it differs in the 3rd decimal place. 

$\vdots$

Clearly, $x$ is not in the list. But wait a second. Didn't we assume our list was complete and contained *all* real numbers between 0 and 1? The contradiction means our assumption must be false. This is Cantor's *diagonal argument*, and it has an astonishing implication — *infinity has different sizes*! $|\mathbb{R}|$ is strictly larger than $|\mathbb{N}|$ and is *uncountably infinite* because any proposed complete enumeration of the real numbers must miss at least one number.

What's the cardinality of $\mathbb{R}$ then? I claim it's $2^{\aleph_0}$. Why? To answer this question, we need to discuss the concept of *power set*. In set theory, a power set is the set of all possible subsets of a given set. That's quite a mouthful. Perhaps it's best illustrated with an example. Consider $P$, the set of tennis players. Its power set is shown below, where $\varnothing$ indicates an *empty set*:

$$
\begin{aligned}
\mathcal P(P)=\{&
\varnothing,\\
&\{\text{Federer}\},\\
&\{\text{Nadal}\},\\
&\{\text{Djokovic}\},\\
&\{\text{Federer},\text{Nadal}\},\\
&\{\text{Federer},\text{Djokovic}\},\\
&\{\text{Nadal},\text{Djokovic}\},\\
&\{\text{Federer},\text{Nadal},\text{Djokovic}\}
\}
\end{aligned}
$$

You may have noticed that $|\mathcal P(P)| = 8 = 2^{3} = 2^{|P|}$. Is this a coincidence? No! The reason is that for each element, we can choose to either include it in a subset or exclude it. With $n$ elements, there are $2^{n}$ combinations.

Here's a clever mathematical trick: every real number between 0 and 1 can be represented by an infinite sequence of 0s and 1s[^6]. Every subset of $\mathbb{N}$ can be represented by an infinite sequence of 0s and 1s where the *n*th digit is 1 if $n$ belongs to the subset, and 0 otherwise. Therefore, we can establish a one-to-one correspondence between real numbers and subsets of $\mathbb{N}$ so that

$$
|\mathbb{R}| = |\mathcal P(\mathbb{N})| = 2^{\aleph_0}
$$

Does $\mathbb{R}$ also have a power set? Yes, sir! And $|\mathcal P(\mathbb{R})| = 2 ^ {2^{\aleph_0}}$. In fact, we can construct the power set of any set.

$$
\mathbb{R} \rightarrow \mathcal P(\mathbb{R}) \rightarrow \mathcal P (\mathcal P(\mathbb{R})) \rightarrow ...
$$

Cantor's theorem guarantees that the power set of any set has a strictly larger cardinality than the original set. What does this imply? There are *infinitely many sizes of infinity*! I certainly did not see that coming.

$$
---------
$$

I promised to return to the question we posed when we introduced $\mathbb{N}$: *What right do we have to treat an endless sequence of numbers as a single, completed set?* Well, actually, we have every right. Why? Because unlike natural sciences such as physics, chemistry, or biology, which rely on empirical evidence, mathematics needs to establish results through logical reasoning. But logical reasoning cannot start from nothing! We need a starting point — certain statements that we accept as true without proof, and from which we deduce consequences. These statements are known as *postulates* or *axioms*.

In the early twentieth century, mathematicians Ernst Zermelo and Abraham Fraenkel developed an axiom system now known as *Zermelo-Fraenkel set theory*, widely accepted as the foundation of modern mathematics. Its axioms are expressed in the formal language of *first-order logic* — a fancy way of saying we can use a bunch of symbols to construct statements, and rules of inference to deduce their consequences. One of these axioms, you guessed it, is the *Axiom of Infinity*. And it guarantees the existence of an infinite set, namely $\mathbb{N}$. From there, we were able to derive the properties of infinity through abstract reasoning.

But if we have the right to claim that an infinite set exists, do we also have the right to claim that it *doesn't*? Absolutely! After all, we are just making sh\*t up, aren't we? OK, there's one caveat: the axioms we come up with must be *logically consistent*, meaning we cannot deduce a statement *and* its negation. Anyway, by replacing the *Axiom of Infinity* in ZF with its negation, we get *finite set theory*, which yields very different results from ZF.

This raises a deeper question: if doing math involves choosing a logically consistent set of axioms and deducing their consequences by following predefined rules of inference, are we discovering objective truths or simply solving puzzles of our own invention? In other words, *do mathematical objects and truths exist independently of human minds and physical space-time?* There's no consensus, as is the case for philosophical questions (annoying, I know). *Platonism* would answer yes. However, several schools of mathematical philosophy have sought to challenge this idea. *Formalism* views mathematical statements as merely the consequences of manipulating symbols according to established rules; *Conceptualism* holds that mathematical objects are mind-dependent concepts rather than abstract entities in the Platonic realm; *Intuitionism* treats mathematics as a constructive mental activity and requires mathematical statements to be justified through constructions.[^7] 

I lean toward the camp of *Platonism* since I've always been astonished by the accuracy of abstract mathematical concepts in describing physical reality. One of the most striking examples is the appearance of the imaginary unit $i = \sqrt{-1}$ in equations that govern the laws of quantum mechanics. Why would a mathematical object formulated in the sixteenth century for solving cubic equations become central to one of the most successful theories in physics a few hundred years later? The coincidence feels uncanny. Perhaps no one captured this eerie feeling better than Eugene Wigner. In his 1960 essay titled *The Unreasonable Effectiveness of Mathematics in the Natural Sciences*[^8], the Nobel laureate was in awe of *"the miracle of the appropriateness of the language of mathematics for the formulation of the laws of physics"* and considered it *"a wonderful gift which we neither understand nor deserve"*. 

And with recent advances in AI, I expect the philosophical debate to intensify. As I was writing this essay, mathematician Levent Alpöge at Anthropic announced an AI-led proof of the Riemann Hypothesis, one of the most difficult problems in mathematics that has remained unsolved since 1859. If the proof is fully validated, future historians will probably view it as one of the most significant events of the AI era. Why can a stochastic machine performing arithmetic operations solve a problem that some of the best human minds couldn't solve in 167 years? What does that tell us about the nature of math, of intelligence, and of consciousness? Interesting times ahead!


[^1]: There are roughly $10^{15}$ grains of sand in the Ganges River and $10^{25}$ stars in the universe. \
[^2]: Planck time ($5.39 \times 10^{-44}$ seconds) is a fundamental timescale in physics, below which our current understanding of general relativity and quantum mechanics breaks down. The universe is about 13.8 billion years old, or $4.35 \times 10^{17}$ seconds. That makes the universe $8 \times 10^{60}$ Planck times old.  \
[^3]: Yes, I'm a big tennis fan. \
[^4]: $\aleph$ is the first letter of the Hebrew alphabet. \
[^5]: The set of real numbers between 0 and 1 has the same cardinality as $\mathbb{R}$. We can establish a one-to-one correspondence by stretching the interval [0,1] infinitely in both directions, without losing or duplicating any points. \
[^6]: Although some real numbers have two binary representations, there're only countably many such numbers. We can choose a unique representation for each of them without changing the cardinality.  \
[^7]: The Stanford Encyclopedia of Philosophy has a fantastic entry on this: https://plato.stanford.edu/entries/philosophy-mathematics/#Int \
[^8]: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/wigner.pdf