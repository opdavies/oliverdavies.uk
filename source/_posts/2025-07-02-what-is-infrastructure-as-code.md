---
date: 2025-07-02
title: What is "Infrastructure as code"?
permalink: /daily/2025/07/02/what-infrastructure-code
---

What are the usual steps you need to follow to create and provision a server to host a website?

First, if you don't have hardware, you need to purchase a VPS through a site like DigitalOcean, Linode or Amazon AWS.

You need to select an operating system to install and provide your SSH keys so you can log in.

Once installed, you should apply any software updates and upgrades, and perform any initial configuration steps, so things are up to date and secure.

Then, you can install a web server like Apache, Nginx or Caddy, as well as any other software you need, such as a database server.

These all need to be configured, too, such as creating a virtual host for each website and declaring which services should start automatically when the server boots.

Because this is done manually, you need to document or remember everything, in case you need to repeat the same process in the future.

But, what if it didn't need to be manual?

## Introducing "Infrastructure as Code"

Infrastructure as Code (IaC) tools, such as Ansible, Terraform and NixOS, allow you to define your configuration in code and apply it to your server or other infrastructure.

The code acts as living documentation that you can apply over and over again.

It speeds up the process and makes it more robust than re-typing or copying and pasting commands.

But, you aren't limited to web servers.

I use IaC to manage the DNS for my domains rather than using UIs.

You can even use it to provision the hardware, if you need to configure a new server.

If you have an API key for a provider, you can define in code how many servers you want, what specifications they have and what roles they perform.
