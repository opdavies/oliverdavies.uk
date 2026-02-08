---
title: Chaining tools for maximum benefit
permalink: daily/2025/04/08/chaining
tags:
  - software-development
  - linux
  - nix
cta:
snippet: |-
  Yesterday I showed how I'm using Nix to build my presentation slide decks with rst2pdf. Today, I'm using some other tools to make it even easier.
---

Yesterday I showed [how I'm using Nix to build my presentation slide decks][0] with rst2pdf.

This allows me to run a simple command like `nix build .#test-driven-drupal` to build the slides for the given presentation.

But I can use other tools to make this even easier.

What if I wanted to have a list of the available presentations to select from, and selecting one would build it?

Following the UNIX philosophy, I can use multiple tools together to achieve this.

Firstly, I can run `nix flake show --json` to show the output from my flake.nix file, which looks something like this:

```json
{
  "devShells": { ... },
  "formatter": { ... },
  "packages": {
    "x86_64-linux": {
      "build-configs": { ... },
      "sculpin": { ... },
      "shared": { ... }
    }
  }
}
```

The package names - a.k.a. the presentation names - are what I want to select from.

I can parse the JSON object with `jq`, remove any unwanted options with `grep -v` and use `fzf` to give me a list I can fuzzy search in.

In a Bash script, I can assign this to a variable:

```bash
selected=$(nix flake show --json | jq --raw-output '.packages["x86_64-linux"] | keys[]' | grep -v shared | fzf)
```

Once I have selected a name, I can call `nix build` on it.

```bash
nix build .#"$selected"
```

This is a simple example, but it shows how programs can be used together and output can be passed through each program to get the result you want.

[0]: %7B%7Bsite.url%7D%7D/daily/2025/04/07/nix-rst2pdf
