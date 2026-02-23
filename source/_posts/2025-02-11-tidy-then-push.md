---
date: 2025-02-11
title: Tidy then push
permalink: daily/2025/02/11/tidy
tags:
  - software-development
cta:
snippet: |-
  If you can, tidy your commits before pushing them for review.
---

As I said [in yesterday's email][0], sometimes you change your mind whilst working on something.

Maybe you change your approach and have a commit that supersedes an earlier one, fix a typo, or find a bug and need to revert a commit.

If you're pushing your changes to a branch for review, I suggest using `git rebase` to clean up your commits.

You can squash the typo fix into the commit that introduced the typo, or remove the original implementation that you later moved away from.

Whilst there is an option to squash all the commits when merging, I don't like it and prefer people to tidy their commits before pushing.

This means the commits are easier to review and you can keep the original commit history and all the context within the messages instead of a generic `Merge commit..` message.

[0]: {{site.url}}/daily/2025/02/10/refactoring
