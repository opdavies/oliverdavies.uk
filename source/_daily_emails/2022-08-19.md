---
permalink: archive/2022/08/19/pair-programming-or-code-reviews
pubDate: 2022-08-19
title: Pair programming or code reviews?
---

It's been almost a year and a half since I last pushed a feature branch, created a pull request, and waited for it to be reviewed and (hopefully) merged and deployed.

On the majority of teams and projects that I've worked on, this was how things were done.

Tasks would be worked on in separate branches which would need to be reviewed by one or more other Developers before being merged.

I'm an advocate for continuous integration and trunk-based development (both I plan on writing about in more depth) in which there is no formal code review step, but instead, I encourage people to pair program as much as possible.

Pair or mob (group) programming, for me, is like a real-time code review where you can discuss and make changes instantly, rather than waiting until the work is complete and someone reviewing it after the fact. If a bug is spotted as you're typing it or something could be named better, you can update it there and then.

But there are other benefits too.

Instead of one person writing some code, and others reviewing it after the fact, multiple people have written it together and the knowledge is shared amongst those people.

As you've worked together, you don't need to ask or wait for someone to set time aside to review your changes, so it's quicker for them to be merged and deployed. It's already been reviewed, so as long as any automated checks pass, the code can be merged.

I've worked in pairs where I've taught someone how to write automated tests and do test-driven development, which I suspect wouldn't have been quite the same if they'd just read the finished code afterwards.

Of course, some Developers and teams will prefer the typical code review process - it's worked well for me and projects that I've worked on in the past - but personally, I like the speed, agility, mentoring and learning, and social benefits that I can get more easily from pair programming.
