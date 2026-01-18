---
title: Nix and the Dendritic pattern
permalink: /daily/2025/07/17/nix-and-dendritic-pattern
---

As I wrote yesterday, [no two Nix configurations are the same][0].

As well as having different packages and configuration options, Nix configurations can all be structured differently - similar to Drupal websites.

Some are simple and others are very complex and manage many systems.

A lot of people will publish their dotfiles/Nix/NixOS configurations online for others to read and take inspiration from.

I was reading someone's code yesterday and found a pattern they wrote about called [the Dendritic pattern][2].

Using the flake-parts module system, every file when using this pattern is a flake-parts module.

This is different to most configurations, where only some files are modules and others are imported as needed within other files.

From another perspective, [having consistency][1] and following a strict convention makes things like auto-importing modules possible.

I like it solves a problem, making configurations easier to maintain as each file is responsible for adding one feature and are self-contained so things can easily be re-organised.

If I was writing my configuration from scratch, this is the approach I'd take.

Or, I may start looking to refactor my current configuration soon to be based on this pattern.

[0]: /daily/2025/07/16/drupal-and-nix-similarities
[1]: /daily/2023/04/18/consistency-is-key
[2]: https://github.com/mightyiam/dendritic
