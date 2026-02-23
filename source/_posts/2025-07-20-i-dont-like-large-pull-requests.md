---
date: 2025-07-20
title: I don't like large pull requests
permalink: /daily/2025/07/20/i-dont-large-pull-requests
---

I don't like large pull or merge requests, or large changes.

Since exploring [the dendritic pattern for Nix code][0], I created [an example configuration][1] and wanted to start moving my main configuration to use that approach.

I could have rewritten everything from scratch, but that would take time and a loss of productivity.

As soon as I was comfortable and I felt I understood the approach and how to implement it, I went back to my main configuration and looked for the easiest step to start implementing the pattern.

I was tempted to start with something big, like my Neovim or tmux configuration, but I started with my bluetooth configuration.

It's a small module, but it gets the ball rolling.

I've taken the first steps to implementing the dendritic pattern in my Nix configuration, haven't lost any of my existing settings and can continue to iterate and refactor as time allows.

[0]: /daily/2025/07/17/nix-and-dendritic-pattern
[1]: /daily/2025/07/19/exploring-dendritic-pattern
