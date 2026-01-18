---
title: How I work around legacy code
permalink: daily/2025/02/06/legacy
tags:
  - software-development
cta: ~
snippet: |
  Here's how I work around untested legacy code.
---

A few days ago, I mentioned [a method that was over 150 lines long][0].

It had too many responsibilities, nested conditions, no dependency injection and no tests.

Changing it would be risky, so how would I go about it?

Let's assume I have this PHP method that contains the existing logic:

```php
function doSomething() {
  // 150 lines of legacy code...
}
```

I can create a new class that's clean and simple, with whatever automated tests and checks I want.

Let's say it has an `execute()` method that returns a boolean value:

```php
class NewService {

  public function execute() {
    return TRUE;
  }

}
```

Because it's been tested in isolation, we can be confident it works as needed, so I can use it in the legacy function.

I want to try and find a seam where I can use the new service and check for a result.

Ideally, this would be as soon as possible within the function:

```php
function doSomething() {
  $newResult = $this->newService->execute();

  if ($newResult) {
    return $newResult;
  }

  // 150 lines of legacy code...
}
```

If the new service returns a result, use it and return early, and don't execute the legacy code.

Otherwise, run the original code as it would have been before, falling back to the original logic and result.

Over time, more logic can be migrated into the new service until the legacy code is no longer used and can be removed.

## Here's the thing

Writing tests for legacy code can be difficult or sometimes impossible.

This approach means new code can be written using tests and test-driven development, dependency injection and whatever else you want without being limited by the existing code.

You can incrementally migrate to the new approach and refactor out the old code, making it less risky than an all or nothing approach.

Do you do the same thing or do you handle legacy code in a different way?

[0]: {{site.url}}/daily/2025/02/03/testable
