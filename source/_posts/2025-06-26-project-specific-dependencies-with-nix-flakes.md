---
date: 2025-06-26
title: Project-specific dependencies with Nix Flakes
permalink: /daily/2025/06/26/project-specific-dependencies-nix-flakes
---

Earlier this week, I wrote about [using Nix to manage different versions of PHP][1].

PHP 8.4, 8.3, 8.2 and 8.1 are all available in the current stable version of nixpkgs.

You can only have one version installed globally, but you can have specific versions enabled for different projects.

You can create a `shell.nix` file or a Nix Flake like [yesterday's example][0] in each project directory and add or override the version of PHP or any other packages as needed.

Each directory can have its own set of installed packages and configuration, and this works for everything in nixpkgs.

Because flakes can have multiple inputs, including multiple versions of nixpkgs, you can mix and match between stable, unstable or pinned versions in the same flake.nix and decide which to use for each project.

This provides a lot of flexibility and offers a lot of customisation so you can configure each project exactly how you need.

For some examples of flake.nix files I've used, see [my public repositories][2] on my Forgejo instance.

[0]: /daily/2025/06/25/nix-and-older-versions-php
[1]: /daily/2025/06/24/php-and-nix-shells
[2]: https://code.oliverdavies.uk/opdavies
