---
title: Minimum viable development environment
permalink: daily/2025/01/19/minimum-viable-development-environment
tags:
  - software-development
  - linux
  - nix
  - php
  - drupal
cta: ~
snippet: |
  I've been searching for the leanest and most minimal development environment, and I think I've found it.
---

What is the leanest and most minimal local environment for software development?

I think if you use Linux, the most minimal approach is to install the packages you need, such as PHP and MySQL directly in your operating system.

There's no overhead or complexity added by tools like containers so things will run as quick and efficiently as possible.

This is great if you only work on one project and you can easily keep your installation in sync with production.

But what if you work on multiple projects or with a team of Developers?

You need a way for everyone to have the same software and package versions, and to be able to configure them for each project.

These are the reasons why tools like Vagrant, Docker and Podman became popular, as they made it possible for environments to be easily repeatable and customisable.

## What about Nix?

Another tool that can be used to install software is Nix - a package manager with over 100,000 software packages.

I can use it to install the required software for each project and share the files with any team members so they have the same configuration.

This is the `flake.nix` file that I've been testing with a Drupal codebase:

```nix
{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs =
    { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          mariadb
          php82
          php82Packages.composer
        ];
      };
    };
}
```

This installs PHP 8.2, Composer and MariaDB, and nothing else.

It also generates a `flake.lock` file so everyone gets exactly the same package versions.

The downside is that, if everyone isn't using NixOS which handles services, I need to configure the database server for each project, running commands like `mysql_install_db` and `mysqld` before creating the database and user to put in the `settings.php` file.

It's not complicated but [devenv is a great option][0] if you want something more fully featured and opinionated that does more out of the box.

Once the database server is running and Drupal is installed, I can run `drush runserver` to run the website - no need for Apache, Caddy or Nginx.

If you want to see another example, see the [flake.nix file for this website][1].

[0]: {{site.url}}/daily/2024/11/11/could-nix-and-devenv-replace-docker-compose
[1]: https://code.oliverdavies.uk/opdavies/oliverdavies.uk/src/commit/4350852406e9556b63a1df448f225abbd7883651/flake.nix
