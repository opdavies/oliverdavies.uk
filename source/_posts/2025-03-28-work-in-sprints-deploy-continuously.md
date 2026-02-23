---
date: 2025-03-28
title: Work in sprints, deploy continuously
permalink: daily/2025/03/28/continuous
tags:
  - software-development
  - agile
  - releases
  - deployments
cta:
snippet: |-
  How often to you release changes to production?
---

Agile and Scrum have become standard approaches in software development.

Work is planned and organised into iterations/cycles/sprints, usually lasting two weeks.

As one sprint is being worked on, the next is usually already planned and the following one is being discussed.

It's common for code deployments and releases to follow the same pattern.

When a sprint is finished, the changes are released.

But that means if a task is worked on at the start of the sprint, it won't be available for at least two weeks.

It may be longer if the sprint is longer or if there are steps like manual testing that also happen.

What if a change is needed or a bug is found?

Is that going to be at least another two weeks before it can be addressed?

Do you need to start using hotfixes and dealing with multiple branches and [merge conflicts][2]?

I suggest separating your planning and work schedules from your deployments.

Deploy as often as possible, even during a sprint.

You want your feedback loop to be as small and quick as possible.

But, importantly, [deploying code is different to releasing features][0].

If you need to do manual testing, use feature flags to [separate deploying the code from releasing the feature][1].

Then, when it's ready to go live, you only need to enable the feature flag - no code deployment needed.

[0]: {{site.url}}/daily/2023/06/21/deployments-or-releases
[1]: {{site.url}}/daily/2022/12/07/separating-releases-from-deployments-with-feature-flags
[2]: {{site.url}}/daily/2025/02/18/conflicts
