---
title: treefmt - the formatter multiplexer
tags: [nix]
date: 2026-02-08
---

If you work in a project with multiple programming languages, you'll have to
use multiple formatters - such as PHPCS Fixer, Prettier or `gofmt`.

[treefmt] is a formatter multiplexer - one tool that manages multiple
formatters.

There are currently 126 supported formatters and it's easy to add custom ones
if needed.

It also integrates nicely with Nix via [treefmt-nix].

Here is my module for this website that runs the appropriate formatters:

```nix
{ inputs, ... }:

{
  imports = [
    inputs.treefmt-nix.flakeModule
  ];

  perSystem =
    { config, ... }:
    {
      treefmt = {
        projectRootFile = "flake.nix";

        programs = {
          mdformat = {
            enable = true;

            plugins = ps: [
              ps.mdformat-frontmatter
            ];
          };

          nixfmt.enable = true;
          yamlfmt.enable = true;
        };
      };

      formatter = config.treefmt.build.wrapper;
    };
}
```

Any time I run `nix flake check`, the formatters are run to check the code.

If any code is not formatted correctly, the check will fail.

To fix any formatting issues, I just need to run `nix fmt` and it will run all
the formatters and make the required changes.

[treefmt]: https://treefmt.com
[treefmt-nix]: https://github.com/numtide/treefmt-nix
