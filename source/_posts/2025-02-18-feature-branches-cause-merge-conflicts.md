---
title: Feature branches cause merge conflicts
permalink: daily/2025/02/18/conflicts
tags:
  - software-development
  - git
cta:
snippet: |-
  PSA: feature branches cause merge conflicts.
---

A common approach I see on software projects is where Developers create separate Git branches for each task they work on.

This commonly matches issues or ticket on a sprint board or issue tracker.

Each ticket is worked on independently and merged into a long-lived mainline branch once complete.

This type of approach is commonly called Git Flow or GitHub Flow.

It's something [I've given presentations][0] on in the past.

A common downfall is that different branches can conflict with each other - either due to a merge conflict where the same lines are changed in different branches, or incompatible code is written that works separately but not when merged together.

I used to work this way, even when working on projects as the only Developer.

One time, I was demoing two features to a client and needed to switch branches and doing so broke what it was trying to show.

These days, I avoid conflicts between branches by not branching.

Everyone works on a single branch and pulls and pushes changes regularly.

If you're [doing continuous integration][1], that should be once a day as an absolute minimum.

I do [test-driven development][2] and usually commit after each passing test.

If you work on a single branch and pull and push changes regularly, you're much less likely to get merge conflicts and Developers can focus on pushing code instead of fixing merge conflicts.

[0]: {{site.url}}/presentations/git-flow
[1]: {{site.url}}/daily/2025/02/17/ci-cd
[2]: {{site.url}}/atdc
