---
title: run file vs task runners
pubDate: 2022-10-19
permalink: daily/2022/10/19/run-vs-task-runners
# tags:
#     -
---

[I've written a few earlier emails]({{site.url}}/daily/2022/08/15/using-run-file-simplify-project-tasks) about `run` files - a simple bash file that I add to my projects to simplify or combine common commands that I need to run often.

Recently, I've looked at a couple of alternatives to see how they compare.

One is very YAML based where all commands are written within a YAML file, and one is very Makefile-like and it does fix some of the confusion and issues that I've made with Makefiles in the past - such as passing arguments to commands, and dealing with `.PHONY`.

Whilst I like both of these approaches and that they offer small additional features like auto-completion of task names, after using one of them in a project for a short while, I think that I'm going to stick with the `run` file.

The main reason for this is that I like the simplicity of the `run` file, and that it's just a Bash file that contains functions.

There were a couple of things that I couldn't quite get to work in one of the other tools, such as setting the TTY value in a Docker Command - which is something that I was able to do with bash within the `run` file. The fact that I can write regular bash and reuse existing knowledge is a big plus rather than having to try to learn another syntax or DSL for another tool.

The main reason though is because bash is already installed everywhere. There's no additional tool for Developers to download and install so it keeps the barrier to entry low, and there's no additional dependencies to add to my CI pipeline for it to work.

I was able to use one of these other tools in GitHub Actions as someone had already written a workflow for it, and although I could possibly install it via a package manager, just being able to run a bash file in any CI tool was probably the deciding factor to stick with `run` files.
