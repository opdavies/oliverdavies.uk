---
date: 2025-07-06
title: What type of change are you making?
permalink: /daily/2025/07/06/what-type-change-are-you-making
---

Whilst I don't use the [conventional commits][0] approach to writing commit messages any more, I still think it's important to think about the type of change when a commit is made to a code repository.

Are you adding a new feature?

Are you fixing a bug?

Are you refactoring some code?

Conventional commits has you add keywords like `feat`, `fix`, `chore` and `refactor` to the commit message to identify the type of change being committed.

I don't add it to the commit message, but I do ask myself the same question.

What type of change is this?

If it's more than one, it probably needs to be split into separate commits.

This makes the intent clearer and the change easier to review.

If you need to refactor some code before adding a feature, they should be two separate commits.

If you're fixing a bug, commit a failing test first so it can be easily seen and then commit the fix that makes the test pass.

## Here's the thing

Having one change per commit makes it easier to write good commit messages as the change is simpler to explain.

If a commit includes multiple changes, it is more difficult and causes commit messages like `Updates` or `wip` - which I try to avoid, especially on client and open source projects.

[0]: /daily/2022/09/01/conventional-commits-changelogs
