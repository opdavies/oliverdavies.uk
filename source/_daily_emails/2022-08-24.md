---
permalink: daily/2022/08/24/2022-08-24
pubDate: 2022-08-24
title: "How I've configured Git"
tags:
  - "git"
---

After yesterday's post on why I prefer using Git on the command line rather than using a GUI tool, today I thought that I'd post about how I've configured Git.

First, I rarely ever run the `git` command - I usually run a `g` function that I've created within my zsh configuration.

Rather than being an simple alias, it's a shell function that will run `git status -sb` to show the current status of the repository if there are no additional arguments. If there are, such as when running `g add`, then this is executed as a normal Git command. (This is something that I first saw from Thoughtbot, if I remember correctly).

## Using .gitconfig

The main part of my configuration is within Git's `~/.gitconfig` file, where I can configure Git to work how I want.

For example, I like to avoid merge conflicts, so I always want to use fast-forward merges whilst pulling and also to rebase by default. I can do this by adding `ff = only` and `rebase = true` to the `[pull]` section of my `~/.gitconfig` file.

I can do this manually, or running `git config --global pull.rebase true` will set the option but also update the file automatically.

Some of the tweaks that I've made are to only allow fast-forward merges by adding `merge.ff = only`, automatically squash commits when rebasing by setting `rebase.autosquash = true`, and automatically pruning branches by adding `fetch.prune = true`.

### Simple aliases

Another way that I configure Git is using aliases, which are also within the `~/.gitconfig` file.

For example, if I ran `git config --global alias.b "branch"`, then running `git b` would just run `git branch` which shortens the command and saves some time and keystrokes.

I have similar one- or two letter "short" aliases for pushing and pulling code, and some that also set some additional arguments such as `aa` for `add --all` and `worktrees` for `worktree list`.

### More complicated aliases

Aliases can be more complex if needed by prefixing it with a `!`, meaning that it executes it as a shell command.

This means that I can have `repush = !git pull --rebase && git push` to chain two separate Git commands and combine them into one, and `ureset = !git reset --hard $(git upstream)` which executes the full command, including another alias as part of it.

I also have `issues = !gh issue list --web` and `pulls = !gh pr list --web` to open the current repository's GitHub issues or pull requests respectively, which can be done as it's not limited to just running `git` commands.

### Custom functions

Finally, if an alias is getting too long or complex, then it can extracted to it's own file.

Any executable file within your `$PATH` that starts with `git-` will automatically become a Git command.

One example that I have is [git-cm](https://github.com/opdavies/dotfiles/blob/2b20cd1e59ae3b1fa81074077e855cbdfa02f146/bin/bin/git-cm) which, similar to the `g` function`, is a bash script that checks for any arguments passed to it and runs a slightly different command. It achieves the same thing as if it were an alias, but it does make it easier to write and maintain as it's in a separate file.

These are just some examples. If you want to see my entire configuration, then check out [my dotfiles repository on GitHub](https://github.com/opdavies/dotfiles/tree/2b20cd1e59ae3b1fa81074077e855cbdfa02f146/roles/git/files).

How have you configured Git for your workflow? Reply to this email and let me know.
