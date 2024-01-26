#!/usr/bin/env bash

set -o errexit
set -o nounset

session_name="${1:-oliverdavies-uk}"
session_path="${2:-$(pwd)}"

if tmux has-session -t="${session_name}" 2> /dev/null; then
  tmux attach -t "${session_name}"
  exit
fi

tmux new-session -d -s "${session_name}" -n vim -c "${session_path}"

# 1. Main window: Vim
tmux send-keys -t "${session_name}:vim" "nvim" Enter
tmux split-pane -t "${session_name}:vim" -h -c "${session_path}" -p 40
tmux send-keys -t "${session_name}:vim.right" "./run start" Enter

# 2. General shell use.
tmux new-window -t "${session_name}" -c "${session_path}"

tmux switch-client -t "${session_name}:vim.left" ||
  tmux attach -t "${session_name}:vim.left"
