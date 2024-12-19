---
title: "Experimenting with the Nix package manager"
pubDate: 2022-09-26
permalink: "daily/2022/09/26/experimenting-with-the-nix-package-manager"
tags: ["nix"]
---

After seeing it on some recent live streams and YouTube videos, I've recently been trying out the Nix package manager and looking into how I might use it for my local environment setup - potentially replacing some of my current Ansible configuration.

Separate from the NixOS operating system, Nix is a cross-platform package manager, so instead of using `apt` on Ubuntu and `brew` on macOS, you could run Nix on both and install from the 80,000 packages listed on https://search.nixos.org/packages.

There is a community project called Home Manager which can be installed alongside Nix which, similar to Stow or what I'm doing with Ansible, can manage your dotfiles or even create them from your Home Manager configuration, and can manage plugins for other tools such as ZSH and tmux.

There's also a Nix feature called "Flakes" which allow you to separate configuration for different operating systems. I currently have a flake for Pop!\_OS which installs all of my packages and a minimal flake for my WSL2 environment as some of the packages are installed in Windows instead of Linux.

I can see Ansible still being used to set up my post-setup tasks such as cloning my initial projects, but the majority of my current Ansible setup where I'm installing and configuring packages I think could be moved to Nix.

I have a work-in-progress Nix-based version [in my dotfiles repository](https://github.com/opdavies/dotfiles/tree/7c3436c553f8b81f99031e6bcddf385d47b7e785) where you can also see [how I've configured Git with Home Manager](https://github.com/opdavies/dotfiles/blob/7c3436c553f8b81f99031e6bcddf385d47b7e785/home-manager/modules/git.nix).

I may install NixOS on an old laptop to test that out too.
