---
date: 2025-04-01
title: Automated tests reduce debugging time
permalink: daily/2025/04/01/debugging
tags:
  - software-development
  - automated-testing
  - test-driven-development
cta: testing_course
snippet: |-
  Having automated tests reduces your debugging time.
---

In my [talk about automated testing and test-driven development][0], I speak about a custom module I wrote for a client's Drupal project.

It was to integrate with a third-party job application system that they would log into and enter information via a form (similar to Drupal's node forms) that they wanted to appear on the Drupal website.

Once submitted, the system would send a POST request to an endpoint provided by the custom module. The module would process it and create the job node with the appropriate field values.

I wrote automated tests and did test-driven development.

Everything worked great for a few weeks or months.

Later, we had a message from the client saying the integration was broken and we needed to fix it.

I don't think I'd worked on this module for a while, but I was concerned that a Drupal core update or another change could have caused a regression.

The first thing I did was run the tests I'd written and verify they still passed, which they did.

This confirmed that as long as the data was being sent in the expected format, the node would be created and the integration would work.

Due to an upstream issue, the data was no longer in the expected format, which meant the node could not be created.

Once it was fixed, everything started working again.

My debugging time was practically zero as I was able to rely on my tests and that they were still passing.

I could confidently tell the client that the issue wasn't with our code and must've been an third-party issue.

Writing tests takes some time, but having tests saves time.

[0]: {{site.url}}/presentations/tdd-test-driven-drupal
