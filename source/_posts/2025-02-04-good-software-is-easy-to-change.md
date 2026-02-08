---
title: Good software is easy to change
permalink: daily/2025/02/04/changeable
tags:
  - software-development
cta:
snippet: |-
  Good software is easy to change.
---

As well as being easy to test, good software is easy to change.

If requirements change or a bug is found, it should be easy to change the code.

Simple code is easier to read and fix, and code split into smaller functions and classes - particularly when using design patterns - make it easier to change the existing code or its behaviour by writing new code.

For example, if you need to change your payment gateway provider, ideally your software has been written so that each payment gateway has its own implementation and then can be swapped without needing to change the original code.

If you need to change the behaviour of a class, you could use a Decorator to wrap and extend it.

Having tests also makes the code easier to change as you can validate and verify the behaviour before and after the change.

Changing code that doesn't have tests is risky, so if there aren't any, write some before changing the code.
