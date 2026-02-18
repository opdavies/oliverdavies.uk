---
title: How many TODO comments do you have?
permalink: daily/2025/05/08/todos
tags:
  - software-development
cta:
snippet: |-
  How many TODO comments do you have in your codebase?
---

How many TODO comments do you have in your codebase?

After posting [the grep command from the st repository][0], I decided to check a project I'm working on.

Here's the command I ran:

```plain
grep -rnE TODO web/modules/custom | wc -l
```

Different to the original, this command finds the number of TODO comments recursively in the custom modules directory and counts them using the `wc` command.

This gave me a result of 29 TODOs.

Some were added recently.

Some were added by Developers who no longer work on the project.

This is something I'll often do in the future to review the number of TODOs, fix them in-place or move them into a ticketing system.

[0]: {{site.url}}/daily/2025/05/07/st
