---
layout: single
title: Teaching One Network to Do Many Things
author_profile: true
---

While it's neat to beat humans in chess or StarCraft, or to be able to determine if a picture is of a hot dog or something else, the Holy Grail of machine learning is artificial *general* intelligence. If it can only do one small thing, that doesn't cut it. After all, people can converse, play games, walk, and identify hot dogs in many ways (sight, taste... I can smell a hot dog from miles away, in fact).

I read [an interesting paper](https://openreview.net/forum?id=rkgpv2VFvr) in this direction from ICLR 2020 that talks about theoretical (and empirical) benefits of learning multiple tasks with the same network, and they propose an architecture for allowing that to happen.

The paper tested their methods on a few of the classic OpenAI gym control tasks, and shows decent results. I'm in the process of [implementing](https://github.com/csreid/atari-mtdqn) the general framework to apply to the Atari games with visual input, and I hope to get some results soon.
