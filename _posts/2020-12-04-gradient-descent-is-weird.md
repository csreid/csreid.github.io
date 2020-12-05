---
layout: single
title: The Key to the Universe is Just Knowing Which Way to Push a Function
author_profile: true
---

The fundamental backbone of most modern machine learning is a simple trick that really just answers a pretty easy question: "How do I change the numbers in this function so the output gets smaller?"

For example, you're given a function $f(x, y) = 3x + 5y$, and your job is to make it so that no matter what $x$ and $y$ you put in, it is smaller than $3x + 5y$. It's easy -- you just make the 3 and 5 be different, smaller numbers.

That answer feels tricky, but it's the truth, and it's behind most of the tools that make you think your phone is listening to you (which may or may not be true). The trick is finding the right $f(x_1, x_2, ..., x_n)$ so that when you make its result as small as possible, it tells you what you want to know about whatever object those $x$s represent.

Say you wanted to build a function that takes in some information about a food (length, bread:meat ratio, acceptable condiments) and determine if that food is a hot dog. One way you might do this is to build a function that takes in those numbers and spits out a value between 0 and 1. Once you have that, you can look at some foods. If the food is a hot dog, move the numbers in your function so that the output gets closer to 1; if it's not  a hot dog, move the numbers so that it gets closer to 0. Once you've done this enough times, you'll have a function that tells you if  a food is a hot dog (because the output is close to 1) or not (when the output is close to 0).

But it gets weirder.

Imagine if, instead of deciding if something is a hot dog, you wanted to [balance a pole on a mobile cart](https://gym.openai.com/envs/CartPole-v1/). You keep it balanced by pushing it left or right. One way you could do this is to look at the current state of the pole and the cart (the angle of the pole, the speed and location of the cart, etc), and build a function that takes those values *and* a number to represent how hard to push the cart (say, -1 for "as hard as I can to the left", 0 for "not at all", and 1 for "as hard as I can to the right", and all the numbers in between mean you push less hard). This function produces a number that tells you how long the pole can stay balanced when it's in that state and you push the cart that hard in that direction. We can call this one the "critic" function, because it critiques the action we've chosen.

Let's assume you have that function. Now, you can invent another function that takes all those facts about the pole and spits out the action you should take. Maybe it says "Push it left half as hard as you can". Call this one the "action" function, because it tells us what action to take.

But now, you can take your new function and put it in place of the "how hard to push the cart?" value in the first function, and now instead of making the value smaller, we want to make it bigger (because we want to make it stay up longer)... so now, we just push the numbers in the action function to make the value function get bigger

Somehow, this works! There's a whole family of reinforcement learning algorithms based on this concept, where you simultaneously learn a function for producing an action given a state (an actor), and another function for determining how good that action is (a critic). These aptly-named "actor-critic" algorithms are behind everything from [AI learning to use tools](https://openai.com/blog/emergent-tool-use/) to [robots that can learn to manipulate their environment](https://openai.com/blog/generalizing-from-simulation/).

It seems quite unintuitive and magical to me: all we need to beat humans in chess and go, to build question-answering systems and uncanny-valley conversation bots, is to know how to make a function spit out a bigger or smaller value.
