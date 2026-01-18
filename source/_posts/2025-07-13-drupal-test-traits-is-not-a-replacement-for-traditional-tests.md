---
title: Drupal Test Traits is not a replacement for traditional tests
permalink: /daily/2025/07/13/drupal-test-traits-not-replacement-traditional-tests
---

I've recently been looking into [the Drupal Test Traits project][0].

In my previous talks and workshops, and my email course, I haven't covered Drupal Test Traits and stuck to using the existing Drupal test types - `BrowserTestBase`, `KernelTestBase`, etc.

I maybe assumed that it was a different approach to testing, like introducing a different testing tool.

I wanted to make sure I understood Drupal's core test types before looking into additional things like Drupal Test Traits.

Now I've looked into it, I know it's not a replacement for Drupal core tests - it's an extension of them.

It uses the same PHPUnit framework, but extends it with specific traits and classes for testing an existing Drupal site rather than creating a temporary website for each test.

This makes the setup much simpler, and easier for people to write their first working test.

And you can mix and match - not every test needs to implement the `ExistingSiteBase` class that Drupal Test Traits provides.

If a test is better written as a standard Functional test, you can still use the core classes as you need to.

You can even include the specific traits you need, giving you full control and flexibility.

I'll continue to teach the Drupal testing fundamentals, but in future versions, I'll include Drupal Test Traits too, and I'll be using it for any Drupal projects for clients or [my own website][1].

[0]: /daily/2025/06/18/exploring-drupal-test-traits
[1]: https://code.oliverdavies.uk/opdavies/oliverdavies.uk
