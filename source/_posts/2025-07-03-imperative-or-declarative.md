---
date: 2025-07-03
title: Imperative or declarative
permalink: /daily/2025/07/03/imperative-or-declarative
---

Yesterday, I wrote about [infrastructure as code][0] and mentioned some of the IaC tools that are available.

I use Terraform to manage the DNS records for my websites, and use NixOS to configure my laptops and home server.

Before NixOS, I used Ansible to provision servers and [deploy application code][1].

Ansible is imperative, which means you need to declare each step that needs to be run.

You need to say to install a package, like a web server.

You need to say to create any required users or groups.

You need to configure the service so it starts when the server boots.

You need to create the configuration files and symlink or copy them to the correct path.

You need to add as many steps as needed to perform the task, that will be executed in the given order.

## Declarative configuration

This makes sense for application deployments, but for server configuration, you can also use declarative tools like Terraform and NixOS.

Instead of writing each step, you declare what the final desired state is.

You say Nginx should be enabled by writing `services.nginx.enable = true;` or declaring what the configuration file contents should be - not how to create or symlink the file.

This also makes the underlying code easier to update or refactor.

If how you install or configure a program changes, you don't need to update your infrastructure code as the final state will be the same - regardless of how it's done.

[0]: /daily/2025/07/02/what-infrastructure-code
[1]: /presentations/deploying-php-ansible-ansistrano
