---
title: Breaking down tasks
permalink: /daily/2025/07/10/breaking-down-tasks
---

What do you do with large development tasks?

Whatever the size, I try to break down tasks into their smallest parts - into a number of smaller sub-tasks.

This means that, instead of focussing on delivering the feature as a whole, I can focus on delivering the feature incrementally.

This makes it easier to track progress and quicker to deliver changes.

Each sub-task should be releasable, so we know when it is done, and small and frequent releases are [less risky than larger infrequent ones][0].

If needed, features can be hidden with feature toggles if we don't want them to be visible - but they are still committed and deployed, [even if they are not released][1].

Each sub-task should have its own automated tests, but smaller tasks are also easier to test manually.

And, if one sub-task becomes blocked, it may be possible to move onto another and continue to make progress rather than the whole task being blocked.

[0]: /daily/2023/11/22/frequency-reduces-difficulty
[1]: /daily/2023/06/21/deployments-or-releases
