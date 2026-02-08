---
title: Dont commit changes with `-m`
permalink: daily/2025/04/02/commit
tags:
  - software-development
  - git
cta:
snippet: |-
  Do you commit changes with `git commit -m`? It seems to be the default option for people when learning Git, but I think it's a bad choice.
---

A common thing I see when reading posts or watch videos where people are using Git is using the `-m` option when committing changes.

`-m` allows you to specify the commit message inline or, more specifically, the first line of the commit message.

If you think of a commit message as an email, the first line is the subject line which is followed by the body of the message.

If you don't use `-m`, Git will open an editor and you can type the full commit message into a file and save it.

This includes the subject line and, more importantly, the body of the message where you can include as much additional information as you want.

The subject line summarises the change, but the body can be used to explain why it was needed.

You can describe the issue or requirements in more detail (don't just link to the issue or enter the issue number).

You can describe any other approaches you considered or tried.

You can describe any anticipated effects or consequences of this commit, any manual deployment steps or follow up tasks that will need to be created.

You can include any additional information you were aware of at the time of making the commit that could be useful to yourself or others in the future.

Think what information would you like to see when you next run `git log`.
