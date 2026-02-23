---
date: 2025-07-08
title: Writing robust bash scripts with Nix
permalink: /daily/2025/07/08/writing-robust-bash-scripts-nix
---

I have a lot of custom Bash scripts I use - some to perform simple commands like `git log` with some additional arguments, to more complex ones that mount and unmount USB devices plugged into my laptop.

A lot of people will post their scripts online along with their dotfiles for others to read and take inspiration from.

Mine are in my [nix config][0] directory and each script is added as a custom package I can install.

Here's an example of a script written as a Nix package:

```nix
{ pkgs }:

pkgs.writeShellApplication {
  name = "get-tags";

  runtimeInputs = with pkgs; [ git ];

  text = ''
    if [[ "$#" -gt 0 ]]; then
      git tag | grep "$*"
      exit 0
    fi

    git tag
  '';
}
```

It gets a filtered list of Git tags within a repository using the `git tag` and `grep` commands.

Nix automatically adds the shebang line and sets some default shell options, so those aren't included within the script text.

It also automatically runs `shellcheck` to ensure the script is correct.

## Injecting Dependencies

This script depends on `git`. Without it, it would not run successfully.

Instead of assuming it is installed, `runtimeInputs` ensures any dependencies are present and the script can be executed, even if the dependencies aren't enabled globally.

Scripts can also rely on other scripts.

`get-tags` has a corresponding `count-tags` script that counts the returned tags:

```nix
pkgs.writeShellApplication {
  name = "count-tags";

  runtimeInputs = with pkgs; [
    coreutils
    get-tags
  ];

  text = ''
    get-tags "''${1:-}" | wc -l
  '';
}
```

`get-tags` is declared as a dependency, as well as `coreutils` to add the `wc` command that counts the lines.

## Here's the thing

Using this approach gives me more robust scripts that are checked and verified, and will always have the required dependencies.

And, because they are added as custom Nix packages in my configuration, I am able to decide which scripts to install on which computer, giving me the most flexibility.

[0]: https://code.oliverdavies.uk/opdavies/nix-config
