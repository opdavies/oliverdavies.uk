---
title: 'Weeknotes: July 24th'
excerpt: Windows utilities, continuous integration and delivery, and writing tests.
tags:
    - personal
    - week-notes
date: ~
---

## Using PowerToys and FancyZones

I've been missing some of the features from Pop!_OS whilst working on my Windows laptop, so this week, I've been experimenting with [Microsoft PowerToys](https://docs.microsoft.com/en-us/windows/powertoys) which adds additional utilities to Windows 10 - similar to Gnome Tweak Tools.

The main features that I'm trying are [FancyZones](https://docs.microsoft.com/en-us/windows/powertoys/fancyzones), which is similar to Pop!_OS's tiling window manager, and [Keyboard Manager](https://docs.microsoft.com/en-us/windows/powertoys/keyboard-manager](https://docs.microsoft.com/en-us/windows/powertoys/keyboard-manager)) so that I can remap some keys to match my personal laptop.

## Continuous integration vs. feature branching

I've been researching more about the continuous integration, or trunk-based development, approach to version control. Dave Farley's blog and [Continuous Delivery YouTube channel](https://www.youtube.com/channel/UCCfqyGl3nq_V0bo64CjZh8g) have been a great resource for this. I've also purchased his and Jez Humble's "Continuous Delivery" book, and have moved it to the top of my "To read" list.

My current team at Transport for Wales is following a CI workflow, and it's been interesting to see code being pushed more often and moving from local to staging compared to waiting for async code reviews, so I'm looking forward to learning more about this approach and how to integrate it more with pair programming and test-driven development.

I gave my first conference talk at DrupalCamp London 2014 on [Git Flow](/talks/git-flow), so I've been using the feature branch workflow for some time. As always, I'm willing to try and evaluate new approaches with an open mind.

## Growing an automated test suite

I [posted a tweet yesterday](https://twitter.com/opdavies/status/1418500778428338177) with a screenshot of the output from running some of the tests that I've added to my current work codebase. These are Drupal-based PHPUnit tests and are a combination of browser/functional and unit tests. 

I'm very keen on adding tests where possible for new functionality or when fixing bugs, which will make it much easier and less risky to refactor that code and ensure that the same bugs aren't re-added again.

## Git hooks

I've been using Git hooks for a few months to run checks locally, such as code linting and static analysis prior to pushing to a CI pipeline, to shorten the feedback loop and more quickly fix any failures.

I've added some initial pre-push hooks to the current work codebase, to run some non-intrusive tasks such as code linting, with a view to adding to it over time.

Sebastian Feldmann gave a talk in May for PHP South Wales, which included Git hooks. [The video is available on YouTube](https://www.youtube.com/watch?v=b85MoYmwUYs).

## Deploying (and reverting) with CI and feature toggles

Continuing with the CI/CD topic, I pushed a new, incomplete feature to production for one of my freelance clients' projects alongside some other changes.

It was hidden behind a feature flag and not enabled, but it was merged and pushed to production.

We decided to remove that implementation and use a different approach, so the code and the feature flag were removed, but for a time, that code was on production.
