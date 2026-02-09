---
title: Debugging errors in Process Compose
tags: [nix, php]
date: 2026-02-09 21:08
---

Today, I had an issue with a Nix development environment that uses
[services-flake].

I ran `nix run` and the project started, only to encounter an error and close
before I could read the error message.

I found that Process Compose as an option to disable the TUI and output the
text (including the error message) to the screen.

This was my updated command:

```shell
nix run -- --tui=false
```

This was enough for me to see the error message and resolve the issue.

[services-flake]: https://github.com/juspay/services-flake
