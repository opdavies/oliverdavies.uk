#!/usr/bin/env bash

PATH="${PATH}:./vendor/bin"

tmux new-window -dn scratch
tmux new-window -dn sculpin
tmux new-window -dn tailwind

tmux send-keys -t sculpin "sculpin generate --server --watch" Enter
tmux send-keys -t tailwind "cd assets && tailwindcss --input css/tailwind.css --output ../source/build/tailwind-new.css --watch" Enter

nvim .
