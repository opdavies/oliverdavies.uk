---
title: Implementing the dendritic pattern
permalink: /daily/2025/07/22/implementing-dendritic-pattern
---

I recently started migrating my NixOS configuration repository to follow [the dendritic pattern][0].

This is a pattern where each Nix file is its own separate standalone module.

This makes it easier to refactor and re-organise files, and allows modules to be broken into multiple files.

Rather than rewrite everything at once, I decided to [take an iterative approach][1].

This meant refactoring modules in-place within my existing configuration, and keeping everything in a working state.

I've migrated [a number of modules][2], and will continue working through the remaining ones as time allows.

Once I've refactored everything, I'll go through them again and see what else I can do, like splitting modules into separate smaller files.

In general, the modules I've migrated have been smaller than what I had before, partly because there's less boilerplate code needed.

And, whilst there are more files, they are smaller than before, have a single responsibility and [have less indentation][3] than before - making them easier to read and understand.

[0]: /daily/2025/07/19/exploring-dendritic-pattern
[1]: /daily/2025/07/20/i-dont-large-pull-requests
[2]: https://code.oliverdavies.uk/opdavies/nix-config/src/branch/main/modules2
[3]: /daily/2025/07/04/avoiding-indentation
