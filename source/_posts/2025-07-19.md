---
date: 2025-07-19
title: Exploring the Dendritic pattern
permalink: /daily/2025/07/19/exploring-dendritic-pattern
---

I've been looking more into [the dendritic pattern for Nix code][0].

I understood the concept, but wasn't sure how to implement it and refactor my existing configuration.

I've recently bought a pre-owned computer that I'm going to be adding to my homelab, and this seemed like an opportunity to experiment with the pattern in a new environment.

What I have is [in this repository][1].

Each file is its own Nix module, including the NixOS configurations and packages such as Vim and tmux.

This was a great experiment, and I'm going to continue looking into how to implement this in [my existing Nix configuration][2].

[0]: https://www.oliverdavies.uk/daily/2025/07/17/nix-and-dendritic-pattern
[1]: https://code.oliverdavies.uk/opdavies/dendritic
[2]: https://code.oliverdavies.uk/opdavies/nix-config
