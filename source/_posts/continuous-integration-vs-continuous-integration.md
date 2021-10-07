---
title: Continuous Integration vs Continuous Integration
excerpt: My views on the definitions of "continuous integration".
tags:
    - git
date: 2021-10-07
---

![A meme with Spider-Man pointing at Spider-Man, both labelled with 'Continuous Integration'](/images/blog/continuous-integration-spiderman.jpg)

There seem to be two different definitions for the term "continuous integration" (or "CI") that I've come across whilst reading blogs, listening to podcasts, and watching video tutorials.

## Tooling

The first is around remote tools such as GitHub Actions, GitLab CI, Bitbucket Pipelines, Circle CI, and Jenkins, which automatically run tasks whenever you push or merge (or "integrate") code - such as code linting, performing static analysis checks, running automated tests, or building a deployment artifact.

These focus on code quality and replicate steps that you can run locally, ensuring that the build is successful and that if the CI checks pass then the code can be deployed.

My issue with this definition is that it may not be continuous. You could push code once a day or once a year, and it would perform the same checks and have the same outcomes and benefits.

## Workflow

The second definition isn't about tools - it's about how often you update, merge and push code (which commonly leads to feature branch vs trunk-based development, and Git Flow vs GitHub Flow discussions). How often are you pulling in the latest code, testing it with your local changes, and pushing your code for everyone else to see?

If you're using feature branches, how long do they last, and how quickly are they merged into the main branch?

Weekly? Daily? Hourly?

The workflow definition doesn't need GitHub, GitLab, or Bitbucket to run checks - it's about keeping your local code continuously (or as often as possible) updated and integrated with the remote code.

This ensures that you're developing from the latest stable version and not one that is days or weeks out of date.

This means that merge conflicts and much less common as you're always pulling in the latest code and ensuring that it can be integrated.

## Conclusion

One definition isn't dependent on the other.

You don't need the tooling and automation to use a continuous integration workflow, but I'd recommend it. It's useful to know and have confidence that the build passes, especially if you're pulling and pushing code several times a day, but it isn't a prerequisite.

If you're working on a new feature or fixing a bug, pull down the latest code,
test your changes, and push it back as often as possible.

If you watch a video, read a blog post, or listen to a podcast about continuous integration or "How to set up CI", remember that it's not just about the tooling.

There's a different workflow and mindset to consider that introduces other complementary concepts such as automated testing and test-driven development, pair and mob programming, feature flags, and continuous delivery.
