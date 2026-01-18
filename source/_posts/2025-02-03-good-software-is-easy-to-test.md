---
title: Good software is easy to test
permalink: daily/2025/02/03/testable
tags:
  - software-development
  - testing
cta: testing_course
snippet: |
  Good software is easy to write automated tests for.
---

One piece of criteria for whether some software is good is whether it's easy to write automated tests for.

I recently worked on a method that was more than 150 lines.

It was difficult to understand, had too many responsibilities and didn't use dependency injection.

This made it difficult to test.

If it was split into several smaller methods or classes, each could be responsible for different aspects and have clear responsibilities.

Each new method or class could have its own tests to verify its own functionality works.

It would be easy to understand and identify and fix any issues.

If dependency injection was used, things can be mocked or changed as needed to make the logic testable.

If everything is in one large function, the code isn't testable.

Even if it works now, it will be difficult to change in the future.
