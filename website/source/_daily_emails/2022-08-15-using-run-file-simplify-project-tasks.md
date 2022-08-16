---
title: Using a "run" file to simplify project tasks
tags: ["php"]
---

Every project has its own set of commands that need to be run regularly.

From starting a local server or the project's containers with Docker or Docker Compose, running tests or clearing a cache, or generating the CSS and JavaScript assets, these commands can get quite complicated and time-consuming and error-prone to type over and over again.

One common way to simplify these commands is using a `Makefile`.

A Makefile contains a number of named targets that you can reference, and each has one or more commands that it executes.

For example:

```yaml
# Start the project.
start:
	docker-compose up -d

# Stop the project.
stop:
	docker-compose down

# Run a Drush command.
drush:
	docker-compose exec php-fpm drush $(ARGS)
```

With this Makefile, I can run `make start` to start the project, and `make stop` to stop it.

Makefiles work well, but I don't use the full functionality that they offer, such as dependencies for targets, and passing arguments to a command - like arguments for a Drush, Symfony Console, or Artisan command, doesn't work as I originally expected.

In the example, to pass arguments to the `drush` command, I'd have to type `ARGS="cache:rebuild" make drush` for them to get added and the command to work as expected.

An agency that I worked for created and open-sourced their own Makefile-like tool, written in PHP and built on Symfony Console. I gave a talk on it called [Working with Workspace]({{site.url}}/talks/working-with-workspace) and used it on some of my own personal and client projects.

## What I'm using now

The solution that I'm using now is a `run` file, which is something that I learned from Nick Janetakis' blog and YouTube channel.

It's a simple Bash file where you define your commands (or tasks) as functions, and then execute them by typing `./run test` or `./run composer require something`.

Here's the Makefile example, but as a `run` script:

```bash
#!/usr/bin/env bash

function help() {
  # Display some default help text.
  # See examples on GitHub of how to list the available tasks.
}

function start {
  # Start the project.
  docker-compose up -d
}

function stop {
  # Stop the project.
  docker-compose down
}

function drush {
  # Run a Drush command with any additional arguments.
  # e.g. "./run drush cache:rebuild"
  docker-compose exec php-fpm drush "${@}"
}

# Execute the command, or run "help".
eval "${@:-help}"
```

As it's Bash, I can just use `$1`, `$2` etc to get specific arguments, or `$@` to get them all, so `./run drush cache:rebuild` works as expected and any additional arguments are included.

You can group tasks by having functions like `test:unit` and `test:commit`, and tasks can run other tasks. I use this for running groups of commands within a CI pipeline, and to extract helper functions for tasks like running `docker-compose exec` within the PHP container that other commands like `drush`, `console` or `composer` could re-use.

As well as running ad-hoc commands during development, I also use the run file to create functions that run Git pre-commit or pre-push hooks, deploy code with Ansible, or build, push or pull the project's latest Docker images.

I also use one within my Talks repository to generate PDF files using rst2pdf, present them using phdpc, and generate thumbnail images.

For examples of `run` files that I use in my open-source code, [you can look in my public GitHub repositories](https://github.com/search?l=Shell&q=user%3Aopdavies+filename%3Arun&type=Code), and for more information, here is [Nick's blog post where I first found the idea](https://nickjanetakis.com/blog/replacing-make-with-a-shell-script-for-running-your-projects-tasks).
