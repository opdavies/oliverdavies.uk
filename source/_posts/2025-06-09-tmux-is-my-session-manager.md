---
title: tmux is my session manager
permalink: /daily/2025/06/09/tmux-my-session-manager
---

If you're subscribed to my mailing list, listened to a podcast episode or watched any of my presentations or live streams, you'll probably know that I use a command line-based approach to software development.

I use NixOS as my operating system, Neovim and tmux for coding, and various other command-line tools as part of my daily workflow.

tmux is a terminal multiplexer - a tool to run multiple sessions, windows and panes within the same terminal.

I have one session per project or directory, each with its own windows and panes to run Neovim and other tools to work on that project.

YouTube and Twitch streamer rwxrob said that tmux was his window manager, based on how he used it to organise his desktop.

tmux is my session manager.

As well as being able to easily switch between codebases, each has it's own startup script that bootstraps the project for me.

This is the script for my website:

```bash
PATH="${PATH}:./vendor/bin"

tmux new-window -dn scratch
tmux new-window -dn server
tmux new-window -dn tailwindcss -c "themes/opdavies"

tmux send-keys -t server "drush runserver" Enter
tmux send-keys -t tailwindcss "tailwindcss --input css/tailwind.css --output build/tailwind.css --watch" Enter

nvim .
```

It creates windows for scratch commands, starts a web server with Drush, starts Tailwind CSS to generate any new styles and opens Neovim.

Some are simpler and some are more complex, but it reduces the friction between switching projects and makes it quick and simple.
