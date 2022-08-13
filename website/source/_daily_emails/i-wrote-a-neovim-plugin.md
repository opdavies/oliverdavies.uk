---
title: I wrote a Neovim plugin
date: 2022-08-13
tags:
    - neovim
    - open-source
---

I enjoy writing and working with open-source software, starting back to when I started working with PHP and Drupal in 2007.

Since then, I've written and maintained a number of Drupal modules and themes, PHP libraries, npm packages, Ansible roles and Docker images - all of which are available on my GitHub and Drupal.org pages.

Just over a year ago, [I switched to using Neovim full-time](/blog/going-full-vim) for my development and DevOps work, and last week, I wrote my first Neovim plugin, written in Lua.

I've used Lua to configure Neovim but this is the first time that I've written and open-sourced a standalone Neovim plugin.

It's called [toggle-checkbox.nvim](https://github.com/opdavies/toggle-checkbox.nvim) and is used toggle checkboxes in Markdown files - something that I use frequently for to-do lists.

For example, this a simple list containing both checked and unchecked checkboxes:

```markdown
-   [x] A completed task
-   [ ] An incomplete task
```

To toggle a checkbox, the `x` character needs to be either added or removed, depending on whether we're checking or unchecking it.

This is done by calling the `toggle()` function within the plugin.

In my Neovim configuration, I've added a keymap to do this:

```lua
vim.keymap.set(
  "n",
  "<leader>tt",
  "require('toggle-checkbox').toggle()"
)
```

This means that I can use the same keymap by running `<leader>tt` to check or uncheck a checkbox. I could use Vim's replace mode to do this, but I really wanted to have one keymap that I could use for both.

As it's my first Neovim plugin, I decided to keep it simple.

The main `toggle-checkbox.lua` file is currently only 41 lines of code, and whilst there is an existing Vim plugin that I could have used, I was excited to write my own plugin for Neovim, to start contributing to the Neovim ecosystem, and add a Neovim plugin to my portfolio of open-source projects.

You can view the plugin at <https://github.com/opdavies/toggle-checkbox.nvim>, as well as my Neovim configuration (which is also written in Lua) as part of [my Dotfiles repository](https://github.com/opdavies/dotfiles/tree/main/roles/neovim/files).
