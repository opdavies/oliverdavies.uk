---
date: 2025-06-29
title: An example of generics in PHP
permalink: /daily/2025/06/29/example-generics-php
---

Unfortunately, unlike other languages like Go and TypeScript, generics aren't supported in PHP, but they are possible with static analysis tools like PHPStan and Psalm.

I use generics as they allow me to make code more reusable whilst still being robust.

For example, if I created a Collection class to represent the guests for a podcast episode, it could look like this:

```php
<?php

/**
 * @implements \IteratorAggregate<mixed>
 */
class Guests implements \IteratorAggregate {

  /**
   * @param Guest[] $guests
   */
  public function __construct(private array $guests) {
  }

  public function count(): int {
    return count($this->items);
  }

  public function first(): Guest {
    return array_values($this->items)[0];
  }

  public function getIterator(): \Traversable {
    return new \ArrayIterator($this->items);
  }

}
```

Note: the idea of using `IteratorAggregate` came from [from Dan Leech][1] and his talk at a local PHP meetup.

Each contains an array of `Guest` objects that I can run methods like `count()` and `first()` on.

Everything is typed so PHPStan can parse the code and provide as much assistance as possible.

But, what if I wanted to make a generic Collection that could accept any type of item?

That's where generics are useful.

First, I need to define a template:

```php
/**
 * @implements \IteratorAggregate<mixed>
 * @template T
 */
```

Now `T` is defined, I can use it in place of the original `Guest` types:

```php
/**
 * @param T[] $items
 */
public function __construct(private array $items) {
}

/**
 * @return T|null
 */
public function first(): mixed {
  return array_values($this->items)[0];
}
```

This says that the Collection accepts an array of `T` items and returns either a `T` or null.

`T` could be a `Guest`, a `NodeInterface` or anything else.

But, whatever it is, either a null value or the same type is returned.

Generics means that PHPStan can continue to give the most detailed analysis, my language server can give the best completion and diagnostics, and the code is flexible and easy to reuse.

Hopefully, generics will be a core PHP feature but, until then, the same benefits can be found from static analysis tools.

[1]: /daily/2025/03/29/collections
