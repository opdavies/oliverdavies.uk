---
title: Creating a custom PHPUnit command for DDEV
excerpt: How to create a custom command to run PHPUnit commands in DDEV.
tags:
    - ddev
    - drupal
    - drupal-planet
    - php
date: 2020-08-28
---

To begin with, let's create an empty file for our command:

```bash
touch .ddev/commands/web/phpunit
```
Commands are located within the `.ddev/commands` directory, with a sub-directory for the container name in which the command should be executed - or `host` if it's a command that is to be run on the host machine.

As [the example repo](https://github.com/opdavies/ddev-phpunit-command-example) has a `web` sub-directory to mimic my Drupal application structure, the command should be run inside the web container so the file should be placed within the `.ddev/commands/web` directory.

As we want the command to be 'phpunit', the filename should also be `phpunit`.

This is an example of a basic command, which is a simple bash script:

```bash
#!/usr/bin/env bash

echo 'running phpunit...'
```

To begin with, let's echo some simple text to check that the command is working. It should also be listed if you run the `ddev` command.

To check the working directory that it used when the command is run, add the following line in the command file:

```bash
echo $(pwd)
```

In the example, it is `/var/www/html/web`. Note that we are already inside the `web` sub-directory.

## Running PHPUnit

To run PHPUnit, I can add the following to the command file:

```
../vendor/bin/phpunit --config .. $*
```

As we're already in the `web` directory, the command needs to go up on level before running the PHPUnit command, and uses `--config` to define the path to the `phpunit.xml.dist` file which is also in the parent directory.

Using `$*` adds any additional arguments from the CLI to the command inside the container.

The command could be made simpler by overridding the `working_directory` value in `.ddev/config`:

```json
working_dir:
  web: /var/www/html
```

This means that we start in `/var/www/html` rather than inside the `web` directory, and that we can simplify the command to be:

```
vendor/bin/phpunit $*
```

Because the `phpunit.xml.dist` file is inside the working directory, I no longer need to specify its path.

## Adding documentation

To add documentation and help text to the command, add these lines to the command file:

```bash
## Description: Run PHPUnit tests inside the web container.
## Usage: phpunit
## Example: "ddev phpunit" or with additional arguments such as "ddev phpunit --testdox"
```

These will be parsed and shown when someone runs `ddev phpunit -h`, and can be used to show various examples such as adding additional arguments for the PHPUnit command.

With this all in place, we can run commands like `ddev phpunit` or `ddev phpunit --testdox`, or even `ddev phpunit modules/custom/opdavies_talks --filter=TalkEventDateTest` for a Drupal project, and have that command and tests running inside DDEV!

For more information on DDEV and creating custom commands, see the [DDEV documentation](https://ddev.readthedocs.io/en/stable/users/extend/custom-commands).
