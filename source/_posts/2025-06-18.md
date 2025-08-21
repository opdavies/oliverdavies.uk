---
date: 2025-06-18
title: Exploring Drupal Test Traits
permalink: /daily/2025/06/18/exploring-drupal-test-traits
---

I've [given talks and workshops][3] on automated testing in Drupal.

I created [a free 10-day email course][2].

Something I haven't used until recently is [Drupal Test Traits][4].

The built-in PHPUnit tests create a new installation of Drupal for each test, setting up everything from scratch and installing the specified modules and configuration for each test.

The tests don't know about the site they're running on, which is what allows them to run in Drupal CI or on any Developer's computer.

Each test is responsible for creating its own environment.

This is part of the "arrange" step of writing an automated test - creating the situation for the test to run, such as installing configuration and creating content, before performing actions and making assertions.

But, what if you want to test an existing website?

Drupal Test Traits provides an `ExistingSiteBase` class and a number of traits that allow for testing an existing Drupal website and simplifies the setup process.

You can see this in [my PresentationTest class][0] - there's no setup like recreating content type and field configuration as it knows about the "real" site I'm working on.

Some tests like [my PresentationCounterTest][1] I've had to write differently to count for the existing content, but still work.

I'm going to continue trying out Drupal Test Traits and, if it continues to go well, include it in my future talks and workshops.

[0]: https://code.oliverdavies.uk/opdavies/oliverdavies.uk/src/commit/b8c3f6d9a761f126616f0be12d3c35dffef41bbe/modules/opd_presentations/tests/src/Functional/PresentationTest.php
[1]: https://code.oliverdavies.uk/opdavies/oliverdavies.uk/src/commit/b8c3f6d9a761f126616f0be12d3c35dffef41bbe/modules/opd_presentations/tests/src/Functional/PresentationCounterTest.php
[2]: /atdc
[3]: /presentations/tdd-test-driven-drupal
[4]: https://www.drupal.org/project/dtt
