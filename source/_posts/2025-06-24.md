---
date: 2025-06-24
title: PHP and Nix shells
permalink: /daily/2025/06/24/php-and-nix-shells
---

What if you needed to run or test multiple versions of PHP?

Would you use options like virtual machines or containers, which install full operating systems, just to get access to different versions of the same package?

Would you need to create a different VM or container for each version of PHP?

Another approach is to use Nix or, more specifically, nixpkgs - a package manager with more than 120,000 packages that can be installed on macOS or any Linux distribution.

The [current stable release][0] (25.05) has 8.4.8, 8.3.22, 8.2.28 and 8.1.32 available, as well as other packages like PHPUnit and Phpactor.

You can add any of these versions to a Nix configuration file, or create temporary shells with the version you need by running simple commands like `nix shell nixpkgs#php83`.

In that shell, you have access to PHP 8.3.

Once you leave it, you can re-run the command with a different version of PHP.

And it works with other languages such as nodejs, by running similar commands like `nix shell nixpkgs#nodejs_22`, making it even more powerful.

[0]: https://search.nixos.org/packages?channel=25.05&query=php
