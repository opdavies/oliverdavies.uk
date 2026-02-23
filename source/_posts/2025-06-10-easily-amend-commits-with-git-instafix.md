---
date: 2025-06-10
title: Easily amend commits with git-instafix
permalink: /daily/2025/06/10/easily-amend-commits-git-instafix
---

How often do you make commits to a Git branch to later realise that you need to amend one of your unpushed commits?

A simple `git commit --amend` will only work on the most recent commit, so that won't work if you've added more commits after the one you want to amend.

You can make a temporary commit, rebase your branch and squash the temporary commit into the original one.

Or you can use [git-instafix][0] - a tool for easily fixing and amending old commits.

Instead of making a temporary commit, running `git-instafix` will show your unpushed commits - allowing you to select one and it will amend it for you in a single step, making it easier to keep your Git commit history cleaner and easier to read and review.

[0]: https://github.com/quodlibetor/git-instafix
