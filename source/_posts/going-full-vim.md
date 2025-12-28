---
title: Going "Full Vim" for my development work
excerpt: I've recently been using Neovim for all of my coding, as well as for my blog posts and slide decks.
tags:
    - vim
date: 2021-07-08
---

For the past few months, I've gone "full Vim" ([Neovim][], to be exact) when writing any code - including anything for work or freelance projects, this blog post, and any presentation slide decks.

I've been a long-time casual Vim user, enabling Vi or Vim mode within other editors, including Sublime Text, PhpStorm, and VS Code, and using Vim to write Git commit messages or to edit single files before closing it again. I remember searching how to add Vim features like relative line numbers in other editors, and trying things that would work within Vim but not when using in a plugin or extension.

I've seen people and companies like [Lorna Jane Mitchell][], Suz Hinton ([noopkat][]), and [Thoughtbot][] using Vim in their presentations and videos for a long time but I haven't tried to switch before myself.

Inspired by them and others including [Robin Malfait][], [TheAltF4Stream][], [Codico][], [Michael Dyrynda][], [ThePrimeagen][] with their recent live streams, videos, podcasts, and courses, I decided to give it a try.

## Plugins

You can see the [full list of plugins on GitHub](https://github.com/opdavies/dotfiles/blob/main/.config/nvim/plugins.vim), but here are some of the main ones that I've been using so far:

- [fzf](https://github.com/junegunn/fzf.vim) - a fuzzy-finder to easily locate and open files.
- [CoC](https://github.com/neoclide/coc.nvim) and [Intelephense](https://intelephense.com) - adds auto-completion and code snippet support, including refactorings such as renaming symbols.
- [NERDTree](https://github.com/preservim/nerdtree) - a tree explorer, though I usually use the fuzzy finder so this isn't used that often.
- [Git gutter](https://github.com/airblade/vim-gitgutter) - displays Git diff information in the gutter of the current file.
- [Blamer](https://github.com/APZelos/blamer.nvim) - inspired by the GitLens plugin for VS Code, displays `git blame` information for the current line.
- [Nord](https://github.com/arcticicestudio/nord-vim), [jellybeans](https://github.com/nanotech/jellybeans.vim), and [ayu](https://github.com/ayu-theme/ayu-vim) - different themes that I'm trying and switching between.

## Configuration

If you'd like to see my full Neovim configuration, see the `.config/nvim` directory and the `init.vim` file in my [Dotfiles repository on GitHub](https://github.com/opdavies/dotfiles/tree/main/.config/nvim).

## Conclusion

I'm enjoying my first few months of using Vim full-time, and so far, I haven't looked back. I''ve had no issues using it in a Windows/WSL 2 environment either, which was great.

I have a [cheat sheet on GitHub Gists](https://gist.github.com/opdavies/f944261b54f70b43f2297cab6779cf59) where I note the current things that I'm trying to learn and commit to memory.

As I use it and learn more, I'm sure that I'll be posting more Vim-related content here too.

Have any Vim/Neovim suggestions, tips, or tricks? Let me know on Twitter.

[codico]: https://www.twitch.tv/codico
[lorna jane mitchell]: https://lornajane.net
[michael dyrynda]: https://dyrynda.com.au
[neovim]: https://neovim.io
[noopkat]: https://www.twitch.tv/noopkat
[robin malfait]: https://twitter.com/malfaitrobin
[thealtf4stream]: https://www.twitch.tv/thealtf4stream
[theprimeagen]: https://twitter.com/theprimeagen
[thoughtbot]: https://thoughtbot.com
