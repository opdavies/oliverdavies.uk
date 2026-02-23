---
date: 2026-01-30
title: Writing my own Nix Flake templates
tags: [nix, php, sculpin]
---

`nix flake init` has a `-t` option that allows you to specify a template to use when creating the Flake file.

This is what [flake.parts suggests](https://flake.parts/getting-started.html#new-flake):

```console
nix flake init -t github:hercules-ci/flake-parts
```

It's also possible to create your own templates, which [I've started to do](https://git.oliverdavies.uk/opdavies/nix-flake-templates) for PHP and Sculpin projects.

For example, this will use the `sculpin` template to scaffold a new project:

```console
nix flake init -t git+https://git.oliverdavies.uk/opdavies/nix-flake-templates#sculpin
```

Instead of a pre-built dev shell, this creates a new flake.nix and flake.lock file as well as any other files or directories within the template.

It's like a mini version of [Build Configs][0].

[0]: {{site.url}}/presentations/building-build-configs
