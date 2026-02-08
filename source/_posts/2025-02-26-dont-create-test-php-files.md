---
title: Don't create test.php files
permalink: daily/2025/02/26/test-files
tags:
  - software-development
  - automated-testing
  - test-driven-development
cta:
snippet: |-
  Stop writing test.php files. Write real tests instead.
---

Have you written a file like test.php or scratch.php whilst developing?

Do you have files like this committed to your codebase?

These are often temporary files that are written by a Developer to test the code they're writing.

They could include some test data, load a service or perform an action and then dump the result to the screen so they can verify the code they're writing works as expected.

The same could be done with a test.js file that uses a `console.log` to output to the console.

The issue is that they are only valid at the time they were written and now the code has been written and been tested, the file is likely out of date and either won't or can't be run again.

A better approach is to write tests using a framework like PHPUnit, Pest or Jest instead and to stop writing temporary test files.

Automated tests contain the same arrange, act and assert steps, but they can be run repeatedly.

They can be run by every other Developer in the team.

They can be run automatically in a CI pipeline.

They can be run for every future commit and push so you know that the functionality still works as it did when it was written.
