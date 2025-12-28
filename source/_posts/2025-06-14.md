---
date: 2025-06-14
title: Do code reviews prevent refactoring?
permalink: /daily/2025/06/14/do-code-reviews-prevent-refactoring
---

Does having a strict code review process prevent or discourage refactoring?

If I want to make a very small refactor, like renaming a variable, am I likely to do that if I need to make a feature branch, create a merge request, and wait for multiple reviews from team members?

What if it takes a day or more for someone to review it?

Is it worth a reviewer's time to review a refactoring that could only be a single line of changed code?

Alternatively, what if you were doing trunk-based development and/or continuous integration?

What if you could make the small change, push it and have a CI pipeline automatically review it?

The whole process could be completed in minutes.

No long wait for manual code review and once you finish that refactoring, [you may find another](/daily/2025/06/13/refactorings-should-be-small).
