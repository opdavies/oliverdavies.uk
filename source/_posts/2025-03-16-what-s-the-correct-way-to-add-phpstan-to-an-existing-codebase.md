---
title: What's the correct way to add PHPStan to an existing codebase?
permalink: daily/2025/03/16/what-s-the-correct-way-to-add-phpstan-to-an-existing-codebase
tags:
  - software-development
  - php
  - phpstan
  - static-analysis
cta:
snippet: |-
  What's the correct way to add PHPStan to an existing codebase?
---

PHPStan is a static analysis tool for PHP.

It finds potential issues in PHP code without needing to run it, so Developers can find and resolve potential issues sooner.

I use it on all my projects including existing ones I've inherited.

But how can you add a static analysis tool to a codebase without getting a lot of errors from the existing code?

PHPStan has different levels of strictness.

Level 0 is the least strict and each level adds more rules and strictness, resulting in more errors.

Most of the time, people will start by running PHPStan on level 0, fixing any errors and committing the changes.

Then repeat the process as many times as needed until you reach the level you want to achieve.

I don't think this is the right approach.

This could mean that you need to edit the same files multiple times as you work through the levels.

There's also a period of time where Developers can still write suboptimal code whilst you work your way up to your desired level.

Another approach is to use a feature of PHPStan called the baseline.

The baseline is a way of capturing and saving all the existing errors up to the selected level so they are no longer reported.

If you did this for an existing project, it would return no errors as everything would be included in the baseline.

Once you decide what level you want your project to run, you can start as soon as the baseline is generated and without needing to change files multiple times.

Instead of spending time working through the levels one at a time, commit some time to pruning the baseline and reducing the errors in it.

This I think is a better approach and how I add PHPStan to existing codebases.

To learn more about static analysis and PHPStan, listen to [episode 22 of the Beyond Blocks podcast][0] with Dave Liddament.

[0]: {{site.url}}/podcast/22-dave-liddament
