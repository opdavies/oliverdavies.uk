#!/usr/bin/env bash

set -o errexit
set -o nounset

session_name="oliverdavies-uk"

# 1. Main window: Vim, server, shell
tmux split-pane -t "${session_name}:1" -h
tmux send-keys -t "${session_name}:1.left" "nvim +GoToFile" Enter
tmux send-keys -t "${session_name}:1.right" "./run start" Enter
tmux split-pane -t "${session_name}:1" -v
tmux send-keys -t "${session_name}:1.bottom-right" "git status --short" Enter
