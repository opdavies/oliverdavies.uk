---
date: 2025-07-18
title: The John Carmack plan
permalink: /daily/2025/07/18/john-carmack-plan
---

Earlier this year, I wrote about [text files being the simplest project management tool][0].

Whist watching a video by Nick Janetakis about his [notes application][1], I learned about a repository of [John Carmack's plain text notes][2].

These are a collection of plain text files that he wrote to plan and track his tasks.

He uses a simple format to represent different types of tasks.

- Lines without a prefix are to be done or in progress.
- Lines prefixed with `*` were completed that day.
- Lines prefixed with `+` were completed on a later day.
- Lines prefixed with `-` were decided against on a later day.

I love the simplicity of this system, and how easy it is to add new entries.

Plain text files are also easy to search with tools like `grep`.

To find all open tasks, you can run a command like `grep '^[^*+-]'`, and run similar commands to show different types of entries.

The simpler a system is to use, the more likely you are to stick with it.

This explains why there are 394 daily plan notes in that repository.

[0]: /daily/2025/01/03/todotxt
[1]: https://github.com/nickjj/notes
[2]: https://github.com/ESWAT/john-carmack-plan-archive
