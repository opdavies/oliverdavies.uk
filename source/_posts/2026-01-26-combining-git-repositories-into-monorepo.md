---
title: Combining multiple Git repositories into one monorepo
date: 2026-01-26 20:00
tags:
  - git
---

If you have multiple Git repositories and want to combine them into one monorepo, the best way I've found is to use a tool called [tomono](https://github.com/hraban/tomono).

You define your existing repositories in a text file and running `tomono` creates a new, empty local repository, clones each of the existing repositories, merges the branches and moves the files to the defined subdirectory.

This also keeps all the commit history intact, which is what I wanted.
