---
date: 2025-07-27
title: Do you keep a changelog?
permalink: /daily/2025/07/27/do-you-keep-changelog
---

A changelog is a simple file that file that documents notable changes in your application.

Drupal has previously used [a CHANGELOG.txt file][0] and many open source projects use a CHANGELOG.md file.

If you want people to use your application, you should document any new additions, changes or removals so people can see the project is maintained and prepare for any breaking changes in upcoming versions.

This is also true for internal projects, in case any stakeholders want to know when a certain feature was released, or what was released in a given timeframe.

The format I like is from <https://keepachangelog.com>.

It's a Markdown file that shows additions, changes and removals grouped by release numbers, like 1.0.0.

It uses anchor links to make the headings clickable, and links them to tags or diffs within the Git repository for people to see the commits and code changes between each release.

As it's a Markdown file, it's easy to update for each release.

I also like that the example Changelog on the website is the changelog for the format itself.

I recently started to port one of my bash scripts [to a Go application][1], and decided to use this format in that repository - for me and for potential future users.

If you don't keep a changelog in your application, I'd suggest trying this format.

[0]: https://api.drupal.org/api/drupal/CHANGELOG.txt/7.x
[1]: https://code.oliverdavies.uk/opdavies/git-repo-updater
