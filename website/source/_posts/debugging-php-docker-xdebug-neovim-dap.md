---
title: Debugging PHP in Docker with Xdebug, Neovim and DAP
date: ~
tags:
    - docker
    - neovim
    - dap
    - xdebug
    - php
    - drupal
draft: true
---

I've been a full-time Neovim user for a year at the time of writing this post and whilst I was a semi-regular Xdebug user, it's something that I've managed to work around and have mostly resorted to `var_dump()`, `dump()`, or `dd()` instead for debugging.

This week though, whilst working on some particularly tricky PHP code, I decided to spend some time and get Xdebug working and be able to use a step debugger within Neovim.

https://gist.githubusercontent.com/opdavies/688a3c8917893bf34a3da32ff69c1837/raw/112e16634930d312cd04c525de42a198c8a32bb9/dap.lua

## Installing Xdebug

Installing Xdebug itself within Docker was straight forward. I was able to add two lines to my existing `RUN` command - `pecl install xdebug` to install the extension and `docker-php-ext-enable xdebug` to enable it.

Now when I run `php -v` inside my container, I can see that it mentions Xdebug.

## Configuring Xdebug

https://www.youtube.com/watch?v=ZIGdBSD6zvU

```
xdebug.mode=develop,debug
xdebug.client_host=host.docker.internal
xdebug.discover_client_host=0
xdebug.output_dir=/tmp/xdebug
xdebug.log=/tmp/xdebug/xdebug-example.log
xdebug.start_with_request=yes
```
## Installing DAP plugins

I use [Packer](https://github.com/wbthomason/packer.nvim) for managing my Neovim plugins so I needed to install some additional ones to add the DAP (debug adapter protocol) functionality.

```lua
use "mfussenegger/nvim-dap"
use "rcarriga/nvim-dap-ui"
use "theHamsta/nvim-dap-virtual-text"
use "nvim-telescope/telescope-dap.nvim"
```

## Installing DAP dependencies

[https://github.com/mfussenegger/nvim-dap/wiki/Debug-Adapter-installation#PHP](https://github.com/mfussenegger/nvim-dap/wiki/Debug-Adapter-installation#PHP)

There's also a prerequisite for install the `vscode-php-debug` adapter.

I configure my laptop with Ansible, so I added a new `debugger` role that is responsible for cloning this repository and installing its contents:

[https://github.com/opdavies/dotfiles/blob/7681c535269049556736f1f857c8c9fd800857a3/roles/debugger/tasks/php.yaml](https://github.com/opdavies/dotfiles/blob/7681c535269049556736f1f857c8c9fd800857a3/roles/debugger/tasks/php.yaml)

## Configuring DAP for Xdebug

```lua
dap.adapters.php = {
  type = "executable",
  command = "node",
  args = { os.getenv("HOME") .. "/build/vscode-php-debug/out/phpDebug.js" }
}

dap.configurations.php = {
  {
    type = "php",
    request = "launch",
    name = "Listen for Xdebug",
    port = 9003,
    pathMappings = {
      ["/var/www/html"] = "${workspaceFolder}"
    }
  }
}
```

I first needed to configure the adapter to use `vscode-php-debug` and then add a DAP configuration.

The default port for the step debugger is now 9003 rather than 9000 so I changed this from the default, and as I'm working with PHP inside a container, I also added a path mapping so that my code could be found.

## Testing the connection

> [Step Debug] Creating socket for 'host.docker.internal:9003', getaddrinfo: Invalid argument.

```yaml
services:
  php:
    volumes:
      - "/tmp/xdebug:/tmp/xdebug"
    extra_hosts:
      - "host.docker.internal:host-gateway"
```

---

keymaps:

https://github.com/opdavies/docker-drupal-example
