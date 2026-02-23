---
date: 2025-04-15
title: nix is like nvm, but for everything
permalink: daily/2025/04/15/nix-nvm
tags:
  - software-development
  - nix
cta:
snippet: |-
  nix is like nvm, but for everything.
---

I was recently explaining and demonstrating Nix and direnv to a colleague and showing how, when I moved into a directory, new packages or different versions of packages became available.

If I left the directory, I was reverted back to my global packages and versions.

In this demonstration, I was showing how I can have different versions of PHP and node for a particular project - replacing a lot of what I'd previously used tools like Vagrant and Docker for.

I came up with a comparison between Nix and nvm - the node version manager - a tool that allows you to install multiple versions of nodejs and switch between them.

Using Nix and direnv is more seamless, but it works for everything.

I'm able to switch versions of PHP, MySQL, MariaDB, PostgreSQL or anything else I need with Nix.

Not just node, and without needing containers.
