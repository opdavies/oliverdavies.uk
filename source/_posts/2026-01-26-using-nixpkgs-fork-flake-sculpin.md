---
title: Using a forked version of nixpkgs to test Sculpin
date: 2026-01-26 07:00
tags:
  - sculpin
  - php
  - nix
---

I recently submitted [a pull request][0] to add Sculpin to the nixpkgs repository.

At the time of writing, it is awaiting review, but the CI pipeline checks pass.

I use Sculpin for a few personal websites, including the in-progress [PHP South Wales website reboot][1], and wanted to test my new package and ensure it worked.

I was previously adding PHP and Composer to my shell via this `flake.nix` file:

```nix
{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs =
    inputs:
    let
      system = "x86_64-linux";
      pkgs = import inputs.nixpkgs { inherit system; };

      inherit (pkgs) fetchFromGitHub lib;
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          php
          phpPackages.composer

          (import ./sculpin.nix {
            inherit fetchFromGitHub lib php;
          })
        ];
      };
    };
}
```

I had a copy of my Sculpin derivation in `sculpin.nix` and was importing it as an additional package.

But with this `flake.nix` file, I can use my fork of nixpkgs that the branch that contains my Sculpin package and install it directly:

```nix
{
  inputs.nixpkgs.url = "github:opdavies/nixpkgs/add-sculpin";

  outputs =
    inputs:
    let
      system = "x86_64-linux";
      pkgs = import inputs.nixpkgs { inherit system; };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [ sculpin ];
      };
    };
}
```

Changing `inputs.nixpkgs.url` to my fork uses it as the nixpkgs repository instead of the official one, and now I can add `sculpin` as if it were already committed.

[0]: https://github.com/NixOS/nixpkgs/pull/476433
[1]: {{site.url}}/blog/rebooting-php-south-wales-website
