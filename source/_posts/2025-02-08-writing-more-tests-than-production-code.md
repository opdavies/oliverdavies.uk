---
title: Writing more tests than production code
permalink: daily/2025/02/08/more-tests
tags:
  - software-development
cta: ~
snippet: |
  Another good type of change is when there is more test code than production code.
---

As well as [having less code than you started with][0], another good type of change is one where there are tests accompanying the production code.

Whether the tests were written after the code or before with a test-driven development approach, the main thing is that there are tests when the code is committed.

There should also be more test code than production code.

There is only one implementation of the production code, but there should be multiple tests for it.

There should be different tests for different situations, such as different types of input and no input, testing for throwing Exceptions and other failure cases and not just the "happy path".

Looking at the diff of a commit or merge request, there should be more changes to the test then the code it's testing.

[0]: {{site.url}}/daily/2025/02/07/less
