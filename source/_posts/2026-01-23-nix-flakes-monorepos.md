---
date: 2026-01-23
title: Nix, Flakes and Monorepos
tags: [nix, git]
---

Imagine you're working in this Git repository:

```
.
├── drupal
│   └── .envrc
│   └── ...
├── flake.lock
├── flake.nix
├── .git
├── php-library
│   └── ...
├── storybook
│   └── ...
└── tailwindcss-plugin
│   └── ...
```

It's a monorepo containing multiple projects - each managed from a top-level `flake.nix` file.

I recently found that running any Nix Flake-based commands results in the entire repository being copied to the Nix store, even within a project directory like `drupal`.

In that situation, I only want the directory I'm working in to be copied - especially if the monorepo is large and contains a lot of files - making the command slow.

To do this, add `path://$PWD` to commands like `nix develop` and `nix run`, or add it to an `.envrc` file if you're using direnv.

Then only the current working directory will be copied.
