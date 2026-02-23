---
date: 2026-01-05
title: Adding is optional
tags:
  - git
---

I've used [Git] for version control since my first full-time Developer role in 2010.

I've written numerous blog posts, tips and emails, and [given presentations][presentations] about Git at meetups and conferences.

I mainly use the Git command-line rather than a GUI, and this has been my usual workflow for adding and committing changes:

1. Run `git status` to view untracked and updated files.
1. Run `git add`, usually with `-p` or `--patch`, to stage the changes.
1. Run `git commit` to commit the changes with a descriptive message.

My understanding was that files needed to be added with `git add` before they could be committed, but now know this isn't true.

I've discovered options for `git commit` I don't think I've used before - namely `--all`, `--patch` and `--interactive`.

From the `git-commit` [man page][manual]:

> The content to be committed can be specified in several ways:
>
> 1. by using git-add(1) to incrementally "add" changes to the index before using the commit command (Note: even modified files must be "added");
>
> 1. by using git-rm(1) to remove files from the working tree and the index, again before using the commit command;
>
> 1. by listing files as arguments to the commit command (without --interactive or --patch switch), in which case the commit will ignore changes staged in the index, and instead record the current content of the listed files (which must already be known to Git);
>
> 1. by using the -a switch with the commit command to automatically "add" changes from all known files (i.e. all files that are already listed in the index) and to automatically "rm" files in the index that have been removed from the working tree, and then perform the actual commit;
>
> 1. by using the --interactive or --patch switches with the commit command to decide one by one which files or hunks should be part of the commit in addition to contents in the index, before finalizing the operation. See the “Interactive Mode” section of git-add(1) to learn how to operate these modes.

Similar to `git add`, the `--all` option automatically stages any modified or deleted files, and `--patch` and `--interactive` allow interactively selecting hunks to commit.

This means I can alter my workflow and improve my productivity by typing one less command each time I want to commit changes, once I re-train the muscle memory I've built over the last 16 years.

[git]: https://git-scm.com
[manual]: https://man7.org/linux/man-pages/man1/git-commit.1.html
[presentations]: /presentations/git-flow
