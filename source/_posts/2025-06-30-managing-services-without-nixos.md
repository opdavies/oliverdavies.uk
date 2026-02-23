---
date: 2025-06-30
title: Managing services without NixOS
permalink: /daily/2025/06/30/managing-services-without-nixos
---

If you're working on a simple PHP application, [a simple development shell][0] with PHP and Composer may be enough.

But what if you're building a more complex application, like a Drupal website?

As well as PHP, it needs services like a database server.

Installing `mysql` or `mariadb` isn't enough - it needs to be running so your application can connect to it.

If you use NixOS - the operating system based on the Nix package manager - configuring a database server is as simple as `services.mysql.enable = true;`.

It will start automatically when the computer starts and you can add more Nix code to create databases and manage permissions.

But what if you're not using NixOS?

The Nix package manager can't manage services.

But, there is a solution - [services-flake][1].

It can be added to a flake.nix file and adds a tool called Process Compose to manage processes and services.

Then, I can add code like this to start a database server and create the database with `nix run`:

```nix
services.mysql."mysql1" = {
  enable = true;

  initialDatabases = [
    { name = "drupal_nix_flake_example"; }
  ];
};
```

If you have other processes, such as running Tailwind CSS to build your CSS files, it can do that too.

To see a full Drupal example using services-flake, see [my drupal-nix-flake-example][2] repository.

[0]: /daily/2025/06/27/ready-go-devshells
[1]: https://github.com/juspay/services-flake
[2]: https://code.oliverdavies.uk/opdavies/drupal-nix-flake-example
