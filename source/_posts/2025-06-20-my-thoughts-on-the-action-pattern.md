---
title: My thoughts on the Action pattern
permalink: /daily/2025/06/20/my-thoughts-action-pattern
---

The Action pattern is a relatively new design pattern that's become popular in the PHP community, particularly with Laravel Developers.

The pattern is a simplified version of the Command pattern, with no separate Handler class. The Action class is responsible for the handling and execution logic.

In most cases, an Action class only has a single public method called `execute()` or `handle()`, or uses PHP's `__invoke()` magic method.

This is a different approach from a Service class that has multiple methods to perform different tasks.

Here's a simplified version of the code of an Action from my website:

```php
<?php

readonly final class AddRandomCtaToDailyEmail {

  public function __construct(private EntityTypeManagerInterface $entityTypeManager) {
  }

  public function __invoke(DailyEmail $email): void {
    // Checks a call to action isn't already added.
    // If not, a random one is selected and added.
  }

}
```

Note the `DailyEmail` class is [a bundle class][0] I've created that extends the regular `Node` class.

Different to a service, the class name describes the action being performed - usually starting with a verb followed by a noun to describe the action being taken and the object it's being taken on.

It's a simple pattern that doesn't require additional packages or libraries, and it's easy to implement in different frameworks and other languages.

Whether you call this an Action, Command or something else, I like that it encourages writing more structured code that's easy to read and test.

[0]: /daily/2025/06/17/drupal-bundle-classes
