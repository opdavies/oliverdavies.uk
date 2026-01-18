---
title: Switching to NixVim
permalink: /daily/2025/06/08/switching-nixvim
---

I've been [a full-time Neovim user][0] since July 2021.

I've used Nix since September 2022, when I migrated my dotfiles from using Ansible to use Nix and Home Manager.

My Neovim configuration has gone through several iterations to what it is today.

I've used Nix for a while to install plugins for Neovim, but the configuration was all written in Lua files which were placed by Home Manager into the correct directory.

Now, I've switched to using a project called NixVim.

It enables configuring Neovim using the Nix language, which is converted to Lua code behind the scenes.

Doing this makes my configuration files [more consistent and easier to maintain][1], and reduced the amount of code I needed for my Neovim configuration.

Most of the configuration in Nix is equivalent to the options in Lua, but there are some great settings like `plugins.lsp.enable` and `plugins.cmp.enable` that make it easy to configure language servers and completion.

I've also found a [great episode about this][2] on the Full Time Nix podcast that I'd recommend to find out more.

If you're interested in Nix and/or Neovim, [give NixVim a look][3].

[0]: /blog/going-full-vim
[1]: /daily/2024/11/21/one-configuration-language-to-rule-them-all
[2]: https://fulltimenix.com/episodes/contributing-to-nixpkgs-nixvim-with-gaetan-lepage
[3]: https://github.com/nix-community/nixvim
