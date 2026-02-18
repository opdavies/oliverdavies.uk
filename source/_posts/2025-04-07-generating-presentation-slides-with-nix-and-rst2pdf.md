---
title: Generating presentation slides with Nix and rst2pdf
permalink: daily/2025/04/07/nix-rst2pdf
tags:
  - software-development
  - linux
  - nix
  - rst2pdf
cta:
snippet: |-
  I've recently combined two of my favourite tools - rst2pdf for generating PDF documents, such as presentation slide decks, and Nix.
---

Since switching to Nix and NixOS, I've been looking for opportunities to use Nix more in addition to managing my laptop and server configurations and creating development shells for projects.

Nix is a build tool, so I've started to use it to build my slide decks which I create using rst2pdf.

I write the rst (reStructuredText) file and compile it to a PDF file.

I had a flake.nix file to add rst2pdf, pdfpc and other tools to my shell, but the compilation to a PDF file was done in a bash script which I've since removed.

Here's how my flake.nix file looks now:

```nix
{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };

      inherit (nixpkgs.lib) makeOverridable;
      inherit (pkgs.stdenvNoCC) mkDerivation;

      shared = mkDerivation {
        name = "talks-shared";
        src = ./src;

        installPhase = ''
          runHook preInstall

          mkdir $out
          cp -r fonts styles $out

          runHook postInstall
        '';
      };

      commonBuildInputs = with pkgs; [
        (python310.withPackages (p: with p; [ rst2pdf ]))
      ];

      mkTalk = makeOverridable ({ src }: mkDerivation {
        inherit shared src;

        name = builtins.head (builtins.attrNames talks);

        buildInputs = commonBuildInputs;

        buildPhase = ''
          runHook preBuild

          mkdir $out

          rst2pdf slides.rst \
            --break-level 1 \
            --fit-background-mode scale \
            --font-path "${toString shared}/fonts" \
            --output "$out/slides.pdf" \
            --stylesheets bw,"${toString shared}/styles/opdavies-light"

          runHook postBuild
        '';
      });

      talks = {
        build-configs = mkTalk { src = ./src/building-build-configs; };
        sculpin = mkTalk { src = ./src/building-static-websites-sculpin; };
        tailwind-css = mkTalk { src = ./src/taking-flight-with-tailwind-css; };
        test-driven-drupal = mkTalk { src = ./src/test-driven-drupal; };
      };
    in
    {
      devShells.${system}.default = with pkgs; mkShell {
        packages = with pkgs; commonBuildInputs ++ [
          ghostscript
          just
          pdfpc
          texliveMedium # includes pdfjam
        ];
      };

      packages.${system} = {
        inherit shared;
      } // talks;
    };
}
```

Each talk is its own derivation, so I can run `nix run .#test-driven-drupal` and it will generate the appropriate PDF file for me to present or share.

The source code is available at <https://code.oliverdavies.uk/opdavies/talks> if you want to see how I use rst2pdf to create my presentations and I've even [given a presentation about how I create presentations][0].

[0]: {{site.url}}/presentations/building-presenting-slide-decks-rst2pdf
