---
title: Speeding up Git subtree splits
date: 2026-01-27 00:00
tags:
  - git
---

If you use a monorepo to store the source code for multiple projects, you may need to split one of them out of the repository occasionally, to push to a hosting provider or a public repository to allow for contributions, which only needs the contents of a single subdirectory.

Git has the `subtree split` command that takes a directory name and creates a split of it that can be pushed elsewhere.

This can be a slow process, especially in repositories with a lot of commits, as Git goes back to the start of the repository's history when creating the split.

Soon, this can take hours or days, and it will only get worse as more commits are added.

The solution I've found is to use the `--rejoin` option when creating a split.

It will still take a long time to create the first split, but once it has, a new commit is created that stores the original commit ID and the split commit ID, and rejoins the split into the main history.

Next time, creating a split will be much faster as Git only goes back to the last split - not the start of the repository.
