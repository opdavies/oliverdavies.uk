---
permalink: daily/2022/08/14/why-i-write-tests
pubDate: 2022-08-14
title: "Why I write automated tests"
tags: [testing]
---

In February 2012, I saw a tweet from Tim Millwood asking if anyone wanted to maintain or co-maintain a Drupal module called [Override Node Options](https://www.drupal.org/project/override_node_options).

It had more than 9,200 active installations at that time, with versions for Drupal 5, 6 and 7.

I said yes and became the module’s maintainer.

The module now has versions for Drupal 7, 8 and 9, with (at the latest count, according to Drupal.org) 32,292 active installations - which makes it currently the 197th most installed module.

There have been two main things that come to mind with this module, related to automated testing.

Before I become the maintainer, a feature request had been created, along with a large patch file, to add some new permissions to the module. There were some large merge conflicts that stopped me from just committing the changes but I was able to fix them manually and, because the tests still passed, ensure that the original functionality still worked. There weren’t tests for the new permissions but I committed the patch and added the tests later.

Without the tests to ensure that the original functionality still worked, I probably wouldn’t have committed the patch and would have just closed the issue.

More recently, a friend and ex-colleague and I decided to refactor some of the module's code.

We wanted to split the `override_node_options.module` file so that each override was in its own file and its own class. This would make them easier to edit and maintain, and if anyone wanted to add a new one, they’d just need to create a new file for it and add it to the list of overrides.

Without the tests ensuring that the module still worked after the refactor, we probably wouldn’t have done it as it was used on over 30,000 sites that I didn't want to break.

When I was learning about testing, I was working on projects where I was writing the code during the day and the tests in the evening on my own time.

I remember once when my manual testing had been fine, but when writing the test, I found that I’d used an incorrect permission name in the code that was causing the test to fail. This was a bug that, rather than waiting for a QA Engineer or the client to discover and report, I was able to fix it locally before I'd even committed the code.

I also worked on an event booking and management website, where we had code responsible for calculating the number of available spaces for an event based on orders, determining the correct price based on the customer's status and the time until the event, creating voucher codes for new members and event leaders, and bulk messaging event attendees. All of the custom functionality was covered by automated tests.

The great thing about testing is that it gives you confidence that everything still works how you expect - not only when you wrote the code, but also in the future.

I've talked about this, and how to get started with automated testing in Drupal, in a presentation called [TDD - Test-Driven Drupal]({{site.url}}/presentations/tdd-test-driven-drupal). If you want to find out more, the slides and a video recording are embedded there.
