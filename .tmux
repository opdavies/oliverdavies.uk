#!/usr/bin/env bash

set -euo pipefail

tmux new-window -dn server
tmux new-window -dn scratch

tmux send-keys -t :server "start" Enter

"$EDITOR" +Files
