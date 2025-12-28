---
pubDate: 2022-08-23
title: "Git: GUI or command-line?"
permalink: "daily/2022/08/23/git-gui-command-line"
tags:
  - "git"
---

I’ve been using Git for a long time. My first full-time Developer role in 2010 was working on an in-house team and that project used Git as it’s version control system.

I remember typing commands into an Ubuntu terminal and trying to wrap my head around the process of adding and staging files, (sometimes) pulling, and then pushing to a remote. I think the remote was a simple bare repository on a server, so there was no UI like there is in GitHub and similar tools today.

In fact, GitHub only started two years earlier in 2008, and GitLab wasn’t around until 2014.

Looking back, my introduction to Git as a Junior Developer wasn't easy and I remember starting to get frustrated until it eventually "clicked" and made sense.

I don't remember if there were GUIs at that time (I remember using gitk but I can't think when), but having a tool like GitHub where I could see the code, branches and commits, would probably have been helpful with my initial learning.

Whilst working locally, I've tried some of the desktop GUI tools like Sourcetree, gitkraken and Tower, but I always come back to using Git on the command line.

While a Git GUI tool may make it easier to learn Git initially as a Junior Developer, I'd recommend trying to learn the command line too.

In my opinion, understanding what’s happening "under the hood" when is important working with a GUI - just in case you find yourself unexpectedly having to use the command line. I’ve seen an error in a Git GUI that suggests running commands in the terminal to debug or fix the issue. If you aren't familiar with the terminal commands or what they do, then I'd expect this to be intimidating and confusing.

If you're working as part of a team or contributing to an open-source project then the consistency that the command line provides will make it easier when working with colleagues or getting help from project maintainers. You're also learning Git itself rather than a tool that may add it's own terminology or change how Git itself works, also causing confusion.

There's a lot of Git functionality and concepts that I wouldn't have explored if I wasn't using the command line and relying on a GUI, such as adding and removing code in chunks using patch mode, using bisect to find when a bug was introduced, worktrees for local code organisation, and understanding merging vs rebasing, interactive and non-interactive rebases, and merge commits and fast-forward merges.

Of course, if you prefer to use a GUI and it works for you, then that's fine. Personally, I like to dig deep when learning tools, to know them inside-out and understand how to use them well, and I think that the time that I've spent learning Git and optimising my workflow paid for itself a long time ago.

How do you like to use Git? Do you prefer to use the command line or a GUI tool? Reply to this email and let me know.
