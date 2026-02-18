---
title: Rebase and reorder
permalink: daily/2025/03/07/rebase-and-reorder
tags:
  - software-development
  - git
cta:
snippet: |-
  Sometimes when tidying my commits or updating a local branch with remote changes, the order of commits changes - making them out of order in the Git log. This is how I fix it.
---

Sometimes when [tidying my commits][0] or updating a local branch with remote changes, the order of commits changes - making them out of order in when running `git log`.

I want the commits in the log to be in the correct sequential order.

If not, it would be confusing if I review the commits in the future.

This is easy to fix when running `git rebase -i` to perform an interactive rebase on the commits.

The commit has a `-x` or `--exec` option that will perform a given command on each commit.

The commit date can be reset using `git reset --amend`, and combining these commands will amend the date of each commit.

Running `git rebase --interactive --exec "git commit --amend --no-edit --date now"` will amend and update each commit, keeping the commit message the same, but changing the commit date to the current time - leaving the Git log in the correct order.

[0]: {{site.url}}/daily/2025/02/11/tidy
