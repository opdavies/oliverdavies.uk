---
title: Building fonts with Nix
permalink: daily/2025/04/16/fonts
tags:
  - software-development
  - nix
  - rst2pdf
cta: ~
snippet: |
  As well as generating the PDF files for my presentations, I'm now also using Nix to download the fonts that I embed into the presentations instead of storing them in my own repository.
---

I recently started [using Nix to build my PDF presentation slides][0] that [I create with rst2pdf][1].

I removed the custom build script that was generating the PDF files and moved that code into a Nix derivation.

Now I can run `nix build .#test-driven-drupal` and it will generate the slides for that talk.

As well as the files specific to each presentation, I also have a derivation for shared assets that apply to all talks - i.e. the stylesheets and fonts that are embedded within the PDF.

The font files were stored in the repository but I wanted to remove them and use the font files available in nixpkgs.

After some small changes, [I was able to do it][2] and remove the font files from my repository.

The Inter font is available in nixpkgs, but it downloads an `InterVariable.ttf` font that rst2pdf didn't know how to change the font weight for, so I made my own derivation of the static Inter font based on the releases from GitHub.

I'm happy that I was able to achieve this, as my repository is leaner and I'm continuing to find new and interesting uses for Nix in my workflows.

[0]: {{site.url}}/daily/2025/04/07/nix-rst2pdf
[1]: {{site.url}}/presentations/building-presenting-slide-decks-rst2pdf
[2]: https://code.oliverdavies.uk/opdavies/talks/commit/e24d2df83f04e492151b1a1f4901490ce76ffd45
