---
permalink: daily/2022/08/16/what-are-git-hooks-why-are-they-useful
pubDate: 2022-08-16
title: "What are Git hooks and why are they useful?"
tags: ["git"]
---

In yesterday's email, I mentioned Git hooks but didn't go into any detail. So, what are they?

Git hooks are Bash scripts that you add to your repository that are executed when certain events happen, such as before a commit is made or before a push to a remote.

By default, the script files need to be within the `.git/hooks` directory, have executable permissions, and be named to exactly match the name of the hook - e.g. `pre-push` - with no file extension.

If it returns an error exit code then the process is stopped and the action doesn't complete.

This is useful if, for example, you or your team use a specified format for commit messages and you want to prevent the commit if the message doesn't match the requirements.

But, the main benefit that I get from Git hooks if from the `pre-push` hook.

I use it to run a subset of the checks that are run within project's CI pipeline to limit failures in the CI tool and fix simple errors before I push the code.

Typically, these are the quicker tasks such as ensuring the Docker image builds, running linting and static analysis, validating lock files, and some of the automated tests if they don't take too long to run.

If a build is going to fail because of something simply like a linting error, then I'd rather find that out and fix it locally rather than waiting for a CI tool to fail.

Also, if you're utilising trunk-based development and continuous integration where team members are pushing changes regularly, then you want to keep the pipeline in a passing, deployable state as much as possible and prevent disruption.

But what have Git hooks got to do with the "run" file?

Firstly, I like to keep the scripts as minimal as possible and move the majority of the code into functions within the `run` file. This means that the scripts are only responsible for running functions like `./run test:commit` and returning the appropriate exit code, but also means that it's easy to iterate and test them locally without making fake commits or trying to push them to your actual remote repository (and hoping that they don't get pushed).

Secondly, I like to simplify the setup of Git hooks with their own functions.

For security reasons, the `.git/hooks` directory cannot be committed and pushed to your remote so they need to be enabled per user within their own clone of the repository.

A common workaround is to put the scripts in a directory like `.githooks` and either symlink them to where Git expects them to be, or to use the `core.hooksPath` configuration option and change where Git is going to look.

I like to lower the barrier for any team members by creating `git-hooks:on` and `git-hooks:off` functions which either set or unset the `core.hooksPath`. If someone wants to enable the Git hooks then they only need to run one of those commands rather than having to remember the name of the configuration option or manually creating or removing symlinks.

There are other Git hooks that can be used but just using `pre-commit` and `pre-push` has saved me and teams that I've worked on both Developer time and build minutes, provides quicker feedback and fewer disruptions in our build pipelines, and I like how simple it can be by creating custom functions in a `run` file.

Lastly, I've created <https://github.com/opdavies/git-hooks-scratch> as an example with a minimal `run` file and some example hooks.
