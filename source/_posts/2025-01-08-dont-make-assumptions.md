---
title: Don't make assumptions
permalink: daily/2025/01/08/don-t-make-assumptions
tags:
  - software-development
cta: call
snippet: |-
  I recently caught myself making assumptions and creating new requirements in a codebase that no-one asked for.
---

I was recently writing code for a project and found myself making assumptions about what I was writing.

I was creating my own requirements.

Something no-one asked for.

I was assuming a value was always going to be a certain number of digits long.

I was writing code that verified this was true or throw an Exception.

Until I found out that that one of the values wasn't the same length as the others.

This could be an error in the data or it could correct.

No-one told me the lengths were always going to be the same.

So why was I checking it?

Why was I adding bugs to the code?

I've reverted the code that checks the length of the value and gone to find clarification.

If it's an issue, it'll be fixed in the source data.

If the lengths should all be the same, I'll potentially re-add the check.

Until I'm sure, I'll only write what's needed to deliver the feature and stop adding my own requirements and assumptions.
