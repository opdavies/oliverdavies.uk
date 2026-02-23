---
date: 2025-03-05
title: Feature branching slows delivery
permalink: daily/2025/03/05/slow
tags:
  - software-development
  - git
cta:
snippet: |-
  As well as causing merge conflicts, feature branches slow the delivery of new features.
---

As well as [causing merge conflicts][0], feature branches slow the delivery of new features.

Someone needs to be responsible for merging the branches once they've been reviewed and approved, and any further merges into release branches.

This is typically the Lead Developer on the project, but this person then becomes a bottleneck.

They need to oversee all the branches and merges, and know what needs to be merged and where it needs to be deployed.

This slows down the speed of delivery.

In a trunk-based environment, there's only one branch and everyone can commit and push to it.

And, if you're [doing continuous delivery][1], any changes will be automatically deployed.

No more bottleneck.

[0]: {{site.url}}/daily/2025/02/18/conflicts
[1]: {{site.url}}/daily/2025/02/17/ci-cd
