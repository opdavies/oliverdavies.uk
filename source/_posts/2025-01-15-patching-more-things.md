---
title: Patching more things
permalink: daily/2025/01/15/more-patches
tags:
  - software-development
cta: ~
snippet: |
  Since patching ThePrimeagen's tmux-sessionizer script, I've started to think of more situations where patching would be useful.
---

Since [patching ThePrimeagen's tmux-sessionizer script][0], I've started to think of more situations where patching would be useful.

I've been using Nick Janetakis' notes script for creating and managing notes files and wanted it to generate daily files instead of monthly, which it did in a previous version.

Rather than locking myself to using an older version, [I patched the script][1] to include my changes and create the files with the names I want.

If Nick releases a new version, I'll get the updates and I'll keep my changes as the patch is applied automatically by Nix.

As I mentioned before, the suckless.org projects follow this approach and expect users to create and apply patches to their software to configure and customise them.

As someone who creates and maintains open source software, and develops applications with open source projects like Drupal, knowing how to use patches to fix and extend them can be very useful in some situations.

P.S. If you want to hear a conversation between Nick and myself about Docker, course creation and more, listen to the [episode with Nick on the Beyond Blocks podcast][2].

[0]: {{site.url}}/daily/2025/01/13/patches
[1]: https://code.oliverdavies.uk/opdavies/dotfiles/commit/3e9a27874a8110f5e6af2afff3de6efbc5b71e8f
[2]: {{site.url}}/podcast/12-nick-janetakis-docker
