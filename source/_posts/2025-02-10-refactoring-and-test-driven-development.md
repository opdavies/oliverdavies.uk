---
date: 2025-02-10
title: Refactoring and Test-Driven Development
permalink: daily/2025/02/10/refactoring
tags:
  - software-development
cta:
snippet: |-
  How does refactoring work whilst doing test-driven development?
---

To do test-driven development, you start by writing a test which, because you're testing code that doesn't exist, will fail.

The objective is to get the get the test to pass.

You want to write just enough code to get the test to pass.

It can be the simplest and naive code possible as long as it gets the tests to pass.

Once the test passes, you can refactor and change the code in any way you want.

This may be changing from a `foreach` loop to using a function like `array_map` or `array_reduce`, or splitting logic into separate classes.

You may refactor your refactor and decide that a name or approach isn't correct and change it.

You may split your code into service classes and then decide to use commands or actions.

You can make whatever changes you want as long as the tests continue to pass.

The implementation can change, but the outcome stays the same.
