---
title: The downside to testing existing sites
permalink: /daily/2025/07/14/downside-testing-existing-sites
---

Whilst [experimenting with Drupal Test Traits][1], I've needed to re-think how I've written some tests.

When writing a test for a Repository class that finds published podcast episode nodes, I can't create three published and two unpublished nodes, get the result and assert exactly three were returned.

Because I'm testing an existing site, all my existing content is available in each test.

I already have published podcast episode nodes, so the count is always going to be greater than what I created in the test.

In a traditional test, everything is re-installed from scratch for every test, so this wouldn't be an issue.

## The issue testing existing sites

If I'm testing an existing site and already have a page with the path of `/available`, this test would pass:

```php
<?php

/** @test */
public function the_available_page_loads(): void {
  $this->drupalGet('/available');

  $assert = $this->assertSession();
  $assert->statusCodeEquals(Response::HTTP_OK);
  $assert->responseContains('Available for Drupal consulting');
}
```

But, there's nothing in the test to show the page was created.

The test assumes the page already exists, but how do we know that?

Can we assume the page will always exist?

Will it exist on every development environment or in a CI pipeline?

## Here's the thing

Maybe it's against the spirit of testing an existing site, but my advice is to only assert on what you've created in that test.

It makes the test more readable and easier to understand.

People don't need to go elsewhere to find how something was created.

If I'm testing published podcast nodes, I can count how many there are at the start of the test and assert the number has increased by a given amount and get the same result.

The test just needs to be written slightly differently.

Or, you can mix and match, and [use traditional test types where appropriate][0].

[0]: /daily/2025/07/13/drupal-test-traits-not-replacement-traditional-tests
[1]: /daily/2025/06/18/exploring-drupal-test-traits
