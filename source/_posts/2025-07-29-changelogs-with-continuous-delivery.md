---
title: Changelogs with Continuous Delivery
permalink: /daily/2025/07/29/changelogs-continuous-delivery
---

Over the past few days, I've written why I think it's a good idea to keep a Changelog for software projects.

I've linked to the [Keep a Changelog][0] project, which gives a format for a Changelog file.

In it, unreleased changes are grouped at the top, and released changes grouped by version number.

But, how would this work if you're doing continuous delivery?

If you're deploying once a day, it could make sense to use release versions.

But, what if you're releasing multiple times a day, or separately releasing each commit?

Is it beneficial to tag every commit with its own release number?

In that situation, I've altered the format to group commits by date, and removed the Unreleased section as it's no longer needed.

In this case, you still get the benefits of a human-readable Changelog with a simplified structure.

I like standardisation, but use the format that works for you and your project.

[0]: https://keepachangelog.com
