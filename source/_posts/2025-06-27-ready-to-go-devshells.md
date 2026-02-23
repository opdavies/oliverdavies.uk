---
date: 2025-06-27
title: Ready to go devshells
permalink: /daily/2025/06/27/ready-go-devshells
---

When I'm quickly evaluating or contributing to an open source project, sometimes I don't need to create a complicated local environment.

Sometimes I just need PHP, nodejs or Tailwind CSS.

So, I've made some ready to go development shells that I can use.

Each devshell has extra packages installed, such as Composer and Phpactor for PHP, and the the Tailwind CSS language server and watchman for Tailwind CSS.

The code is in a [public Git repository][0], so I can run a simple one-line command to start the devshell:

```plain
nix develop git+https://code.oliverdavies.uk/opdavies/dev-shells#php82
```

If I need PHP and Tailwind CSS, I can run the same command again to create a sub-shell with both sets of packages.

I can also use direnv to achieve the same result by adding these lines to an .envrc file:

```bash
use flake git+https://code.oliverdavies.uk/opdavies/dev-shells#php74
use flake git+https://code.oliverdavies.uk/opdavies/dev-shells#tailwindcss
```

For long-term projects, I would create and commit a [specific flake.nix file][1] to the code repository so the environment is reproducible and the packages are locked, but this works when I just need something quickly.

[0]: https://code.oliverdavies.uk/opdavies/dev-shells
[1]: /daily/2025/06/26/project-specific-dependencies-nix-flakes
