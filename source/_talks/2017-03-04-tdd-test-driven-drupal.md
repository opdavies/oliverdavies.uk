---
title: TDD - Test Driven Drupal
summary: Testing is important. Why? It allows developers to add new features and edit and refactor existing code without the worry of adding regressions, reduces the reliance on manual testing to discover bugs, and by taking a test driven approach, your implementation code is leaner as you only write what is needed for your tests to pass.
speakerdeck:
    id: 088cb18033064f5cb18d1079795294a1
    ratio: 1.77777777777778
youtube:
    id: fdbxXOi2HP4
image: test-driven-drupal-development.png
meta:
    og:
        title: TDD - Test Driven Drupal
        description: "How to write tests and follow TDD for Drupal applications."
        type: website
        image:
            url: /build/static/images/talks/test-driven-drupal-development.png
            width: 2560
            height: 1440
            type: image/png
---
Drupal 7 includes the SimpleTest module for unit and functional testing, whilst Drupal 8 also includes and supports PHPUnit - the defacto PHP testing framework, used by other PHP projects including Symfony and Laravel - making it easier for people to test their code. And with testing being one of the Drupal core gates with tests needing to be included with every new feature or bug fix, and core’s 100% pass rate policy, testing has become an essential skill when contributing to core, or when working on your own projects.

In this talk, we’ll cover the methodology and terminology involved with automated testing, and then take a test driven approach to creating a new Drupal module.

Presented at [DrupalCamp London][1], [DrupalCamp Dublin][2] and the [Drupal Bristol][3] user group in 2017.

The example code is available on [GitHub][0]. The 8.x-1.x branch contains the original code from the presentation which uses functional tests. The 8.x-2.x branch contains the refactored code that instead uses kernel tests.

[0]: https://github.com/opdavies/drupal-module-tdd-dublin
[1]: https://drupalcamp.london
[2]: http://2017.drupal.ie
[3]: https://www.drupalbristol.org.uk
