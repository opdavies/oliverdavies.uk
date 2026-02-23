---
date: 2025-07-28
title: A CHANGLOG isn't just a list of Git commits
permalink: /daily/2025/07/28/changlog-isnt-just-list-git-commits
---

Yesterday, I wrote about [keeping a CHANGELOG][0] for software projects, and about the <https://keepachangelog.com> project.

I like this slogan on their website:

> Don't let your friends dump git logs into changelogs.

A CHANGELOG shouldn't be a list of Git commits in a file.

It should be in a human-readable format that's easy for people to read and understand, whether they are technical or not.

This probably isn't the case for the output from `git log`, which may also contain commits like `Refactor` and `wip` that don't mean anything to someone who focused on the higher-level deliverables.

Git logs are great for Developers, but CHANGELOGs are for everyone.

[0]: /daily/2025/07/27/do-you-keep-changelog
