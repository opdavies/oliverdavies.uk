---
title: Dealing with icky code
permalink: /daily/2025/07/05/dealing-icky-code
---

Most, if not all, software projects have some code that is difficult to work on.

Maybe it was written a long time ago or it performs some difficult or complex logic.

It may not follow modern best practices and, most likely, isn't covered by automated tests.

No-one wants to work on it.

But, what happens when it needs to change?

How can you do it and be confident the change doesn't break the existing functionality?

Before you make any changes, identify the use cases of the current code and cover them by [writing automated tests][1].

Functional, web or browser tests allow you to make HTTP requests to an endpoint and make assertions on a response, and ensure it returns the correct status code and content, rather than focussing on the implementation details.

If you need to test an existing Drupal website, [use Drupal Test Traits][0].

Once you have tests in place, you can make the required changes and ensure the original functionality still works by running them and checking they still pass.

Hopefully, you'll have written tests for the new functionality, so the test suite will start to grow.

[0]: /daily/2025/06/18/exploring-drupal-test-traits
[1]: /presentations/tdd-test-driven-drupal
