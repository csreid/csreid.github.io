---
layout: single
title: The Key to the Universe is Just Knowing How to Make Functions Bigger
author_profile: true
---

Every few days, I find myself in awe of the fact that so much progress has been made based on a very simple idea:

>Even if we can't know where a function finds a minimum or a maximum, we can usually know how to make its value get bigger or smaller.

I think this fact is simultaneously beautifully simple but also bizarre and unintuitive. After all, it feels like if we know how to make a function smaller, we should be able to make it the smallest possible... but of course, we can't (usually).

It's incredible to me that this simple fact is also what's behind so much incredible progress in the deep learning space. If you can build the right function, and you can make its value smaller, you can generate [extremely realistic pictures of people that don't exist](https://thispersondoesnotexist.com/). Or you can do the same thing with [kawaii anime girls](https://www.thiswaifudoesnotexist.net/). You can build [a text engine that takes you deep into the uncanny valley](https://openai.com/blog/openai-api/).

But what's really been sticking in my mind lately is a *reinforcement learning* use of this fact.

You can [learn a function that tells you how good an action is in a given state](https://en.wikipedia.org/wiki/Q-learning). It's also easy to consider a function that takes a state and spits out an action -- a *policy* function. However, it's not obvious how you can push that policy function towards choosing better moves.

But look what we have:

1. A function that takes the state of the environment *and* the action and produces a "value" of that action.

2. A function that takes the state of the environment and produces an action.

3. The sacred (or unholy?) knowledge of how to make the value of a function bigger or smaller.

If you combine these, it starts to come together: you push the parameters of your *policy* function in the direction that makes the *value* function get larger.[^1]

It is so deeply unintuitive to me, but it's representative of the thing I like most about computer science: if the math is right, the math is right, and the computer will bring it to life. In this case, it brings it to life with things like this simulated humanoid robot which has learned how to stand up and run towards a goal while also being pelted with what I can only assume are simulated baseballs.

<video width="100%" controls>
  <source type="video/mp4" src="/images/flagrun.mp4" muted>
</video>

[(from OpenAI's RoboSchool announcement a few years ago)](https://openai.com/blog/roboschool/)

Hilarious to watch, but also genuinely incredible that such complex behavior can come from such a simple process.

---

[^1]: For the interested, what I've described here is [DDPG](https://arxiv.org/abs/1509.02971). There are certainly other ways to solve these kinds of problems, but I'm really struck by the beautiful simplicity of this one.
