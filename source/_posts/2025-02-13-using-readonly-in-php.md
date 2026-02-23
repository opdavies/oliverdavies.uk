---
date: 2025-02-13
title: Using readonly in PHP
permalink: daily/2025/02/13/readonly
tags:
  - software-development
  - php
cta:
snippet: |-
  Did you know you can make classes and properties read-only since PHP 8.1?
---

Since PHP 8.1, properties on PHP classes have been able to be marked as `readonly`.

Once they've been set, they can't be changed or overwritten.

This is great for data transfer objects (DTOs) that you want to be immutable and know the values are the same as when they were set.

Here's an example:

```php
class MyDto {

  public function __construct(
    public readonly string $name,
    public readonly int $age,
  ) {
  }

}
```

I don't need to make the properties private or protected and write getter methods for them.

I can make them public, knowing the values can't be changed.

## readonly classes

Since PHP 8.2, the entire class can be `readonly`, making the code cleaner and easier to read.

This class does the same as the previous example:

```php
readonly class MyDto {

  public function __construct(
    public string $name,
    public int $age,
  ) {
  }

}
```

## Here's the thing

This is a great example of how the PHP language continues to evolve and improve, and it's been a great way to make it easier to keep my code clean and with fewer bugs.

If you want a way to easily add `readonly` to properties or classes, [take a look at Rector][0] which can automate it for you.

[0]: {{site.url}}/daily/2025/01/31/rector
