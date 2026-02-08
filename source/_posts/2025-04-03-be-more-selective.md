---
title: Be more selective
permalink: daily/2025/04/03/selective
tags:
  - software-development
  - git
cta:
snippet: |-
  Be more selective about what you're staging and committing in Git.
---

Another common Git issue I see is people using `git add .` to commit every change in every file they have locally.

Similar to [committing with `-m`][0], this seems to be a common in Git tutorials, but can have consequences due to unexpected changes being staged and committed.

Maybe there are unrelated changes in the same file or other files have been changed that you don't want to commit yet.

What if something was committed and pushed that caused the CI pipeline to fail or break production?

At the least, it's going to add time and delay getting the intended changes live as someone will need to revert and fix the commits or address the changes in a code review.

I'm very selective about what I include in each commit to keep my code stable and the commits easy to review and, if needed, revert.

I always use `git add -p` to interactively stage changes from the command line or use keybindings in my Neovim configuration to add particular lines.

I'll also review my staged changes before committing and the commit once it's been made using `git log --stat` to see what's included.

Only once I'm sure my commits include only what I intended will I push them or submit them for review.

[0]: %7B%7Bsite.url%7D%7D/daily/2025/04/02/commit
