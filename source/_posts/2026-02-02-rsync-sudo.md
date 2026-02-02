---
title: rsync with sudo
tags: [linux]
date: 2026-02-02
---

To run `rsync` as sudo, add `--rsync-path "sudo rsync"` to the rsync command.

Doing this means I can upload files directory to my `/mnt/media` directory on my home server, rather than uploading the files once to my Home directory and having to log in over SSH and move them again.
