---
layout: single
title: Modeling March Madness with Deep Learning
author_profile: true
---

It's officially March, and I've been biting my nails and having palpitations about the Purdue Boilermakers since sometime in mid-January, so I decided to try to alleviate this anxiety and see if I can do some work to guess what will happen once the tournament starts.

I've also gotten kind of into sports betting, but I always lose and I'd love to change that with the power of computers.

## What?

When experts and advanced stats people model sporting events, they look at a number of stats and work out well-defined models that predict how a team will perform. [KenPom](https://kenpom.com/index.php) is one such popular advanced-stats model of team skill.

However, I'm not an advanced stats guy. In fact, I think the advanced stats people are going to eventually going to have to learn [the bitter lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) -- whatever convenient numbers you use to boil down a team's skill are probably going to be suboptimal, and if you can capture the right raw data and assemble a good computational model that can process it, it will do a better job than you ever did.

## How?

When folks talk about how good a basketball team is, they mention a few things: the offense, the defense, maybe perimeter defending ability, post offense, etc. Why do they talk about those things? Well, eventually they show up on the score board and in the win/loss column.

These numbers are really hard to quantify. One big reason for that is that, for example, a team's offensive output in a particular game also depends *a lot* on the other team's defensive ability; conversely, a team's defensive performance on the stat sheet depends a lot on how good their opponent's offense is.

But it's even more complicated than that. Let's take this year's Purdue team as an example, since I'm very familiar with them. Purdue has notoriously struggled to beat the press. So, a team that runs a good press defense might have inflated defensive numbers against Purdue. But, Purdue also has one of the most dominant paint-players in the country, so it's also important to consider the opponents post defense. To further complicate things, there's probably some complicated interaction between running a press and defending the post. You should also take into account that opposing coaches *know* these facts about Purdue and will try to game plan with that in mind.

And remember, at the end of the day, we have to turn these facts into numbers that can go into some equation to predict the score of the game. What you end up with is a complex system with tons of variables, all of which are difficult or impossible to measure and interact in complex ways.

So, instead, we build a deep learning network that's capable of producing some numbers about teams, which are in turn useful for predicting the final score of the game. We train it on every game that was played in the 2021-22 season up until ~the end of February, and then we see who wins in March.

# Who wins?

First of all, we're assuming [this bracket](https://www.espn.com/espn/feature/story/_/page/bracketology/ncaa-bracketology-projecting-2022-march-madness-men-field) is the final one. That's not true, but it's the best option I have right now.

There are also some issues, and the model isn't perfect yet. There are some improvements, to be made, and it could probably do with some more training.

That being said, I'm putting Marquette and Arkansas on upset alert.

## Round of 64

### West Region

* **Gonzaga** 92 - 58 Alcorn State
* **Colorado St.** 73 - 67 Xavier
* **Houston** 80 - 63 South Dakota State
* **UCLA** 87 - 69 Toledo
* **LSU** 73 - 66 Michigan
* **Texas Tech** 66 - 57 New Mexico State
* Marquette 63 - 67 **San Francisco**
* **Purdue** 92 - 69 Montana State

### East Region

* **Kansas** 94 - 76 Cleveland State
* **Seton Hall** 70 - 67 Wyoming
* Arkansas 60 - 61 **North Texas**
* **Illinois** 75 - 71 Northern Iowa
* **Ohio State** 79 - 67 Wake Forest
* **Villanova** 79 - Towson 60
* **Michigan State** 76 - Miami 67
* **Auburn** 97 - Colgate 76

### South Region

* **Baylor** 84 - 60 Long Beach State
* Notre Dame 61 - 65 **Murray State**
* **Alabama** 69 - 68 San Diego State
* **UConn** 74 - 63 Vermont
* Saint Mary's 58 - 60 **Indiana**
* **Tennessee** 85 - 68 Princeton
* **Iowa** 80 - 76 Davidson
* **Duke** 90 - 64 Longwood

### Midwest Region

* **Arizona** 91 - 63 Norfolk State
* Boise State 55 - 59 **TCU**
* **Texas** 66 - 56 Iona
* **Providence** 74 - 68 Chattanooga
* **USC** 65 - 58 Creighton
* **Wisconsin** 67 - 58 Texas State
* **Iowa State** 76 - 68 North Carolina
* **Kentucky** 90 - 68 Jacksonville State

## Round of 32

### West

* **Gonzaga** 87 - 70 Colorado State
* **Houston** 63 - 59 UCLA
* **LSU** 66 - 60 Texas Tech
* San Francisco 66 - 77 **Purdue**

### East

* **Kansas** 79 - 75 Seton Hall
* **North Texas** 57 - 54 Illinois
* **Ohio State** 71 - 70 Villanova
* Michigan State 69 - 72 **Auburn**

### South

* **Baylor** 71 - 58 Murray State
* Alabama 73 - 76 **UConn**
* **Indiana** 63 - 62 Tennessee
* Iowa 70 - 80 **Duke**

### Midwest

* **Arizona** 84 - 71 TCU
* **Texas** 55 - 53 Providence
* **USC** 62 - 61 Wisconsin
* Iowa State 60 - 64 **Kentucky**

### Sweet Sixteen

* **Gonzaga** 82 - 72 Houston
* **LSU** 76 - 74 Purdue
* **Kansas** 70 - 66 North Texas
* **Ohio State** 72 - 71 Auburn
* **Baylor** 75 - 67 UConn
* Indiana 59 - 66 **Duke**
* **Arizona** 84 - 74 Texas
* USC 57 - 63 **Kentucky**

### Elite Eight:

* **Gonzaga** 81 - 65 LSU
* **Kansas** 82 - 77 Ohio State
* **Baylor** 68 - 68 Duke
* **Arizona** 78 - 75 Kentucky

### Final Four:

* **Gonzaga** 86 - 74 Kansas
* **Baylor** 76 - 72 Arizona

### National Championship:

**Gonzaga** 84 - 73 Baylor
