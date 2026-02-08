---
title: Making ddev reproducible
permalink: daily/2025/01/21/ddev
tags:
  - software-development
  - drupal
  - ddev
cta:
snippet: |-
  How to use Nix to make DDEV reproducible.
---

I sometimes work on projects that already has an existing environment configuration, usually using a tool like DDEV.

Similar to using Nix, DDEV makes environments more consistent by standardising versions of PHP, nodejs, etc for each project.

This is great, but how do you know everyone has the same version of DDEV?

Different people having different versions of DDEV could introduce its own issues and bugs, such as pulling different images with different default package versions.

## Enter Nix

The Nix package manager has over 100,000 packages, including DDEV.

This means I can install DDEV via Nix and because of the flake.nix file, anyone using the same configuration will get the same version of DDEV.

Here's a simple `flake.nix` file to install DDEV:

```nix
{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [ ddev ];
      };
    };
}
```

This approach also means I can have different versions of DDEV installed at once so I can use different versions for different projects as needed.

I also don't need it installed globally, so this only makes it available to the projects that need it.

It's a bit meta, but it works.
