---
title: Roll back or fix forward?
permalink: daily/2025/02/19/back-or-forward
tags:
  - software-development
cta: ~
snippet: |
  How do you resolve issues after a deployment? Do you roll back to the previous version or fix the issue and deploy it and move forward?
---

You deploy a code change but it creates an issue.

Maybe it breaks a feature, adds a bug or takes down an environment completely.

How do you resolve it?

Larger releases will sometimes have a roll back plan that details how to revert to the previous release.

This can be difficult, especially for large releases and ones that change the database schema or values.

Because of the amount of change, diagnosing an issue in a large release can take time.

If it's been a while since the prior release, it can be some time since the code that introduced the issue was worked on - making it harder to fix.

I prefer to do small releases and do them often.

Some releases contain a single commit which was made only minutes since the previous release.

This makes it easier to identify the issue, fix it and deploy a new version.

No rolling back database changes or reverting to previous releases.

Small, iterative deployments are less risky than large infrequent ones, easier to fix and make changes available to end users sooner.
