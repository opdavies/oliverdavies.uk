---
date: 2025-01-24
title: What and why
permalink: daily/2025/01/24/what-why
tags:
  - software-development
  - git
cta:
snippet: |-
  A good Git commit message doesn't describe what was changed. It explains why it was changed.
---

There are two parts to a good commit message.

The first line summarises the change, but this can be seen by running `git diff` or `git show`.

The subsequent lines should describe why the change was needed, including any additional context, alternative approaches that were considered or tried, follow up steps, issues encountered or anything else that it would be useful to read if someone runs `git log` or `git blame` to look at the commit history.

If there was an issue with this code in the future, what information would be useful to know?

Why did you take this approach over a different one?

What error does this commit fix? Include the error message.

Who requested the change and why? What information can you include that you wouldn't want to lose if you changed your project management or issue tracking software? Don't just link to the issue or add the ticket number.

What other information and context did you know when you made the commit?

If anything changes in the future, you can make another commit and repeat the process.
