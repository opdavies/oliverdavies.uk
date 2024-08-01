---
title: 'Weeknotes: June 12th'
excerpt: Developing on Windows, organising dotfiles, and helping organise DrupalCon.
date: 2021-06-12
tags:
    - personal
    - week-notes
---

## Local development with Windows and WSL 2

As a long-time Linux and macOS user, the last couple of weeks have been my first experience of using the Windows operating system for some time. After some research, I've been using the WSL 2 (Windows Subsystem for Linux) functionality built into Windows 10, with Ubuntu 20.04 installed within it. The codebase that I'm currently working on is using Lando, and that seems to be running fine within this setup after following some [instructions on the Lando documentation](https://docs.lando.dev/guides/setup-lando-on-windows-with-wsl-2.html) and a [blog post by Cal Evans](https://blog.calevans.com/2020/06/18/making-lando-work-inside-wsl2).

I spend most of the day working within the WSL 2 environment which is a lot more familiar for me for development, but also for more simple tasks like generating SSH keys and cloning and configuring [my dotfiles](https://github.com/opdavies/dotfiles).

## Re-organised dotfiles

It was easy to clone my Dotfiles repository into the WSL 2 container but they still required to be symlinked into the correct place for them to be used. I'd previously used [rcm](https://github.com/thoughtbot/rcm), a tool from Thoughtbot, to do this but I wanted to review other approaches.

I decided to try an approach of [using a local bare Git repository](https://www.atlassian.com/git/tutorials/dotfiles) and using Git's worktree functionality to clone the files into my home directory. This means no more symlinks, and no additional tool to manage the files. The structure of my dotfiles repo is now a lot simpler, though I do miss the grouping of files by 'tag' so I might look to re-implement this somehow in the future.

## DrupalCon Europe kick-off meeting

This week was the kick-off meeting for the DrupalCon Program Track Chair team, which I'm a part of this year.

I've been proud to speak at the last two DrupalCon Europe conferences (2019 in Amsterdam, and online in 2020) and this year I wanted to contribute in a different way.

I'm part of the Open Web & Community track and I'm looking forward to reviewing all of the sessions and experiencing DrupalCon in a new way again this year.

## Inviqa blog post published

My final task before leaving Inviqa a few weeks ago was to upgrade the inviqa.com and inviqa.de sites, which I co-developed, to Drupal 9.

I wrote an article for the Inviqa blog, [Drupal 9 upgrade from Drupal 8](https://inviqa.com/blog/drupal-9-upgrade-from-drupal-8), which was published this week.

I wrote my own post, [Upgrading the Dransible project to Drupal 9](/blog/upgrading-dransible-project-drupal-9) last year where I reviewed the commands and steps that I ran to upgrade one of my personal projects, whereas this post covers more about the process that we took, and the differences between this upgrade and previous Drupal upgrades that I've done.
