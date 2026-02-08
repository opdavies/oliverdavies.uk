---
title: What are CI and CD?
permalink: daily/2025/02/17/ci-cd
tags:
  - software-development
cta:
snippet: |-
  Are you doing continuous integration or continuous delivery?
---

Whilst discussing [de-jargoning Drupal and Drupalisms][0] with Emma Horrell and Luke McCormick, I started thinking about pieces of jargon I come across regularly.

Common ones are CI and CD.

CI (or continuous integration) is not about whether you have a CI pipeline and use a tool like Jenkins, GitHub Actions or GitLab CI (despite how some of these tools are named).

Continuous integration is how often code is integrated together.

If it's been more than a day since you last merged your code into your mainline branch, you're not doing continuous integration.

The less often you merge code, the more likely it is there will be conflicts or incompatibilities with other code that's been worked on - whether it's someone else's code, or code that you're writing in a different branch for a different task.

CD stands for is continuous deployment or continuous delivery.

When is the last time you deployed changes to production?

If it's been more than a day, you're not doing continuous deployment.

I've worked on teams and projects when it's been months between production releases.

I much prefer releasing small, iterative and continuous improvements to production instead of doing large and risky deployments.

Developers get their changes released sooner, end users get fixes and new features sooner, and it's easier to identify and resolve issues when releases are smaller and more frequent.

How about you?

Are you doing CI or CD?

What other Drupal or techy jargon terms do you see regularly?

[0]: %7B%7Bsite.url%7D%7D/daily/2025/02/14/drupalisms
