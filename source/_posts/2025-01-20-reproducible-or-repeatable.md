---
title: Reproducible or repeatable
permalink: daily/2025/01/20/reproducible
tags:
  - software-development
  - nix
  - linux
  - php
cta: ~
snippet: |
  Is your software environment reproducible or just repeatable?
---

[In yesterday's email][0], I showed how I've been using Nix and flake files to build reproducible and shareable development environments for Drupal applications.

The reason it's reproducible is the `flake.lock` file.

Similar to `composer.lock` or `package-lock.json`, it captures the exact versions of the packages installed from the nixpkgs repository.

This file, along with `flake.nix`, can be committed alongside the application code and anyone with Nix installed can run `nix develop` to get a shell with the same packages and dependencies.

This isn't the same as other solutions, where you add something like `FROM php:8.2` but, because there's no lockfile, there's no guarantee the same package versions will be installed so there could be mismatches that cause errors.

With `flake.lock`, the environment isn't just repeatable - it's completely reproducible.

Locally, in a CI pipeline or in production.

[0]: {{site.url}}/daily/2025/01/19/minimum-viable-development-environment
