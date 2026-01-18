---
title: Giving things descriptive names
permalink: /daily/2025/06/23/giving-things-descriptive-names
---

An approach I like to use when writing code is value objects, and it was great to see a recent talk by Dan Leech (past guest on the [Beyond Blocks podcast][podcast]) about them at a recent PHP meetup.

To quote from Dan's talk - "value objects are objects that represent a value".

They are simple classes that give a meaningful name to a value.

For example, I could write this value object to represent a railway station code:

```php
  readonly final class StationCode {

  public function __construct(public string $value) {
    assert(strlen($value) === 3);
  }

}
```

Now, instead of referencing a generic `string` type, I can reference a `StationCode` object.

This makes the code more readable and easier to understand.

In this case, I can also validate the string is in the correct format so I know that anywhere a `StationCode` object is used, its values are the correct format and this is done in a single place.

I can also take this a step further and introduce a `Journey` value object that represents a journey between two stations:

```
readonly final class Journey {

  public function __construct(
    public StationCode $origin,
    public StationCode $destination,
  ) {
  }

}
```

In this case, a journey always has two stations - an origin and a destination.

Creating an object to represent this gives it a name, but also prevents data clumping - where groups of variables are passed around together.

These are two examples from my recent code, but I could find many others.

And that's one reason why I like value objects - they are so easy and quick to use.

If you haven't before, try introducing value objects into your code.

If you already do, reply and tell me about some of the use cases you've found for them.

You can see the slides from Dan's presentation at <https://www.dantleech.com/slides/2025/dpc-php-value-objects-and-you/presentation.html>.

[podcast]: /podcast/6-dan-leech-php-tui
