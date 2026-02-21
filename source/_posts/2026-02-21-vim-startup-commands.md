---
title: Vim startup commands
tags: [vim]
date: 2026-02-21 19:20
---

As well as files to open, you can pass startup commands to Vim (or Neovim) using these options:

```output
Usage:
  nvim [options] [file ...]

Options:
  --cmd <cmd>           Execute <cmd> before any config
  +<cmd>, -c <cmd>      Execute <cmd> after config and first file
```

For example, to open my `todo.txt` file, I run `nvim +'normal Gzz' todo.txt` to open the file, switch to normal mode, go to the bottom of the file and vertically centre the text - ready for me to work on my tasks.
