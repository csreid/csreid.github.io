---
layout: single
title: The Bitter Lesson, and What It Means
author_profile: true
---

> We want AI agents that can discover like we can, not which contain what we have discovered.

This is a quote from Professor Rich Sutton (co-author of [the only textbook I've ever read cover-to-cover](http://incompleteideas.net/book/the-book.html)) in his post [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html).

In that post, Prof. Sutton explains that, throughout history, AI researchers keep making the same mistake: they try to bake existing human knowledge into the systems they design. In other words, they try to *tell* the computer about the problem, rather than giving the computer the tools it needs to uncover that knowledge.

That is understandable! When we try to teach a human to play chess at a high level, you start with the rules and you work your way up to advanced strategies heuristics that grandmasters have learned over the centuries that chess has been played. If you want to start from scratch and build a computerized system that can distinguish between hot dogs and things that are not hot dogs, you'll get traction a lot more quickly if you use a rules-based system.

But, as Prof. Sutton argues, that is the wrong approach to building intelligent computer systems. Chess is a very complex games; images (which may or may not include hot dogs) are quite complex. Capturing all that complexity is not a realistic task for a person. Today, the best chess AI (as I understand it) is [AlphaZero](https://arxiv.org/abs/1712.01815), a reinforcement learning agent that learned the games of chess, shogi, and Go starting from scratch. After 24 hours, AlphaZero was better than human players. In the computer vision domain, I always think it's fun to look at [the wildly complex features](https://towardsdatascience.com/how-to-visualize-convolutional-features-in-40-lines-of-code-70b7d87b0030) that the state-of-the-art deep learning models generate.

# So what?

I think there are several areas where other domains within AI are currently learning the bitter lesson. At this very moment, self-driving car companies all over the world are using deep learning to do computer vision for things like lane and pedestrian detection... and then passing that information to what is essentially a complex rules engine to actually control the car, with a system that is mostly baked-in human knowledge of an extremely complicated task. In other words, we're feeding it into a system that contains what we've discovered, not a system that discovers like we can. [^1]

Rumor has it that Boston Dynamics is very proud to be doing exclusively dynamics, with no machine learning. Obviously, [they're doing really impressive work](https://www.youtube.com/watch?v=YdnJI9T-yXI) and they surely don't care what I have to say, but my guess is that they're still in the "short term gains that are personally satisfying to the researcher" phase.

This isn't to say that deep-learning approaches are ready for prime time. There is still significant work to be done on the "sim2real" problem; that is, helping an agent that learned in a simulation transfer that knowledge to the real world. Furthermore, we're talking about allowing computers to potentially pilot multi-ton, multi-hundred-horsepower vehicles through populated areas (an activity more dangerous than playing chess), and for safety's sake it's important that we are able to interpret and understand the structure of the neural networks that these systems learn.

That being said, those issues are the subject of a ton of reasearch right now, and solving those problems will allow us to make the huge breakthroughs in mobile robotics that we've seen in other areas of AI.

[^1]: There is [good work](https://arxiv.org/abs/2002.00444) happening in the end-to-end autonomous driving space, though
