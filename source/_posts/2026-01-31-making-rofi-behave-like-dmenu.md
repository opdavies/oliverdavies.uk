---
title: Making rofi behave like dmenu
tags: [linux]
date: 2026-01-31
---

A few months ago, I decided to move away from using Suckless software.

I migrated back to i3 and Alacritty, but was still using the dmenu launcher to start programs and within scripts where I wanted to parse a list of data like my active tmux sessions.

Piping a list of items to dmenu to interactively select one is something I did in several scripts.

rofi is an alternative launcher that I've used before, and it also has the `-dmenu` option to behave like dmenu and accept a list of items to filter on.

For example, this is how I'd create a list of my code directories:

```console
fd . /home/opdavies/Code \
  --max-depth 3 \
  --type directory \
  | rofi -dmenu
```

Once I select an option, I can perform the same logic in my script to create and attach to a session in the selected directory.
