---
title: You can deploy on Fridays
permalink: daily/2025/03/11/friday
tags:
  - software-development
cta: ~
snippet: |
  Do you deploy to production on Fridays? If not, why not?
---

Does your team have a "No deploy Friday" policy?

What about not deploying after a certain time in the afternoon?

These approaches are attempts to minimise risk when deploying.

If there is an issue, will someone be available during the evening or weekend to resolve it?

To me, this indicates the deployment process is too complicated, possibly due to a lack of automation, or deployments aren't happening frequently enough.

Having a [robust and passing CI pipeline][0] that runs automated checks and tests is crucial to know the code is deployable.

[Feature flags are a great way][1] to separate deploying code from releasing changes to users, which means you don't need to avoid pushing some code until the change is complete. It can be done incrementally and released over several deployments.

Too much time between deployments is a smell.

The more time there is between a deployment and the larger the changeset, the riskier the deployment will be.

There is more to go wrong and it'll be harder to diagnose and resolve any issues.

I always advocate for many smaller releases than larger less frequent ones.

Ideally, a production release every day - even if the changes are small or everything is hidden behind feature flags.

Deploying on Friday is easy if you last deployed on Thursday.

[0]: {{site.url}}/daily/2025/01/30/gatekeeper
[1]: {{site.url}}/daily/2023/09/28/feature-flags-enable-continuous-integration
