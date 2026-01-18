---
title: My dotfiles repository turns 10
permalink: /daily/2025/07/12/my-dotfiles-repository-turns-10
---

Earlier this month, my dotfiles repository turned 10 years old.

[The first commit][0] was a small one - committing my Git configuration file (`.gitconfig`).

Next, I added an initial `.vimrc`, although I wasn't [using Vim full-time][1] yet.

It was when I started to use Linux more, though.

My dotfiles repository has gone through several iterations since the first commits, from using simple bash scripts to tools like Ansible and GNU Stow to apply the configuration.

Three years ago, I started to use Nix and NixOS, and started to use Home Manager to create and manage my user configuration.

Now called my "nix-config" repository, it contains much more than my Git configuration - it manages several laptops and my home server, and includes a number of [custom packages and scripts][2].

I also use Nix to build other things, like my [presentation slides as PDF files][3].

I don't plan to move from my existing tools like NixOS, tmux and Neovim, but I do wonder what my dotfiles repository will look like in ten years from now.

[0]: https://code.oliverdavies.uk/opdavies/nix-config/commit/da6754da407b01c3966747c49ed84228c30eb701
[1]: /blog/going-full-vim
[2]: /daily/2025/07/08/writing-robust-bash-scripts-nix
[3]: /daily/2025/04/07/nix-rst2pdf
