---
title: Nix and older versions of PHP
permalink: /daily/2025/06/25/nix-and-older-versions-php
---

Yesterday, I wrote about [using Nix to create shells for different versions of PHP][1].

The current stable version of Nix has PHP 8.4.8, 8.3.22, 8.2.28 and 8.1.32, but what if you need an older version?

If it has been in nixpkgs previously, it can still be accessed.

Nix allows you to create different channels to install different versions of the nixpkgs repository and access different sets of packages.

With flakes, different versions of nixpkgs can be used as inputs to add multiple releases, such as [stable and unstable][0], or older releases or even a specific Git commit.

For example, if I needed to use PHP 7.4 - which is not available in the current release - I could use this flake.nix file:

```nix
{
  inputs = {
    nixpkgs-php74.url = "github:nixos/nixpkgs/81b77fd3847a";
  };

  outputs = { nixpkgs-php74, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs-php74 { inherit system; };
    in {
      devShells.${system}.default = pkgs.mkShell {
        packages = [
          pkgs.php74
        ];
      };
    };
  }
```

Pinning nixpkgs to that commit hash gives me access to `php74`, which I can access using `nix develop`.

This approach works with any package in nixpkgs - not just PHP.

Or, if it wasn't available in an older version of nixpkgs, I can write a custom derivation and add it myself.

[0]: /daily/2025/05/25/why-i-prefer-rolling-linux-distribution
[1]: /daily/2025/06/24/php-and-nix-shells
