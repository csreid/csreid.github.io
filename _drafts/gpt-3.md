---
layout: single
title: Is GPT-3 Friend or Foe?
author_profile: true
---

Recently, I heard a lot of buzz about [GPT-3](https://en.wikipedia.org/wiki/GPT-3), and it sounds like folks are concerned. Folks are *afraid*. GPT-3 *feels* like SkyNet, moments away from achieving sentience and killing us all.

Fundamentally, though, what *is* GPT-3? GPT-3 is what's called a language model. In other words, it's a (really very truly) complicated probabilistic function which, given a long string of words that it has seen, can predict what the next word is. Now, that's not a very hard problem. You probably also have a really good *language model* sitting somewhere in your brain. If I give you the following words:

> Wow, what a beautiful day! The sun is

and I ask you to pick the next word in that statement, what would you say? Would you guess that the sun is "out"? Would you think it's "shining"? Very reasonable guesses.

Now, imagine for a moment that I gave you two phrases. The first one is:

> Wow, what a beautiful day! The sun is green.

The second one is:

> Wow, what a beautiful day! The sun is dog.

Which one of these is makes less sense? My guess is that you think the first example, while very weird, is *less weird* than the second thing.

That's your language model at work. Somewhere in your brain, you know what words show up in what situations. It *makes sense* to say that it's a beautiful day and the sun is *shining*, or the sun is *out*. It makes less sense to say that it's a beautiful day and the sun is *green*, but you can probably work it out. Maybe the speaker is just someone who loves the color green? But "the sun is dog" is just incomprehensible and not even grammatically correct.

A lot of naive language models of yesteryear involve just looking at a large collection of text (say, all of Wikipedia) and building a word-guesser that looks at a single word and records how often each other word shows up after you see that word. Then, you can generate sentences by just guessing the next word every time. This is known as a *hidden Markov model*, which is a pretty fancy term describing a pretty simple pattern: you don't need to care about the past to know what happens next. This kind of language model produces text like this:

> Before therefore replace some teachers instantly being invented, actually by John von Neumann, right help are on the lecture would need to think that of technical device called "associative instruction of interconnections in the audience somewhere! I was at Xerox PARC. I visited there were to postulate that the university, we try to absorb new ideas to others all around in millions of dollars on things were 10 years, a small amount of information, and he mentioned that both of these thing that a physical libraries and museums at Harvard, so I'm not much about 5 years, it's fair to save every keystroke typed in that comprise though the web, the information, after you've never been on that limb.

Linguistically, everything seems to line up, but this is total word salad. Nothing coherent is communicated there. It vaguely *feels* like English, but it obviously has no meaning behind it. There's an obvious reason for this. Imagine I gave you the words

> These pants are incredible! I love these

and asked you to fill in the last word. The obvious next word is "pants"; that's what we're talking about, after all. But in a hidden Markov model, we only deal with one word at a time. So, for that model, it's like I only gave you the word, "these". You can't make a good prediction from just that!

So that brings us back to GPT-3. What does GPT-3 do? GPT-3 is a complicated, ***huge*** (like unfathomably huge) function which takes a series of ~1024 words and tells you what the next word will be. There's a lot of complex math involved that helps this function capture the information about context, which solves the pants problem mentioned above. Suffice it to say that GPT-3 is good enough to predict that, if you give it "These pants are incredible! I love these", it will correctly predict that the next word is "pants".

But why does this mean you shouldn't be terrified? Aren't all those examples of GPT-3 "achieving sentience" (or whatever) scary?

Still no!

Remember, all it does is predict the next word. You can get really far that way. But when I give you the words,

>What a beautiful day! The sun is

and ask you to guess what the next word is, think about what what you're doing. You aren't actually tellign me anything about *you*, or your thoughts. You're just makinguess about what you *think* comes next. It doesn't reflect you at all, it's just an artifact of your understanding of language. GPT-3 does a similar thing.

But it's important to note what GPT-3 *doesn't* do. GPT-3 doesn't stop and reason about various situations. It doesn't communicate anything regarding any kind of internal emotional or intellectual state that GPT-3 holds. GPT-3 starts and ends with being pretty good at solving, "what is the next word in this sentence?". That's it!

Here's the difference:

Imagine that you and I are good friends. I send you a message at the end of your day and ask, "Hey, how did your day go?"

When you answer that question, you will dedicate some brain cycles to that. You'll say to yourself, "Did the good that happened today outweigh the bad? What big events swung my choice?", etc.

When GPT-3 answers that question, it will ask one question over and over again: "what is the next word". GPT-3 will feed the words, "hey, how did your day go" into its unbelievably-complicated next-word-predicting function, and it will probably choose some word like "I". Then, it will take the words, "Hey, how did your day go? I" and try to predict the next word. This process continues, building up the dialogue a word at a time.

That *is not* true artificial intelligence; it's just a way to predict the next word, given a string of previous words. That's extremely important! Note that human language users obviously have strong language models, as demonstrated by the examples I've already mentioned. But an effective model is incredibly important in handling and generating real language. After all, if you start a sentence with "I'm so happy that the sun is", you're probably more likely to conclude with "shining" than "table". A language model is likely a fundamental, important component of whatever natural language processing or generation solution that might exist, but it's not everything.
