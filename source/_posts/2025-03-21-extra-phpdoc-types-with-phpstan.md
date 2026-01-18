---
title: Extra PHPDoc types with PHPStan
permalink: daily/2025/03/21/phpdoc
tags:
  - software-development
  - php
  - phpstan
  - static-analysis
cta: ~
snippet: |
  Using new PHPDoc types and better static analysis with PHPStan.
---

Here are some examples of PHP code from Drupal core:

```php
/**
 * The weight of this role in administrative listings.
 *
 * @var int
 */
protected $weight;
```

```php
/**
 * Path of the image file.
 *
 * @var string
 */
protected $source = '';
```

```php
/**
 * Alter the list of mail backend plugin definitions.
 *
 * @param array $info
 *   The mail backend plugin definitions to be altered.
 */
```

These use some of the standard PHPDoc types of `int`, `string` and `array`.

Although they are comments, docblocks are checked by static analysis tools like PHPStan to parse the code and report any potential errors.

If you want to go deeper, PHPStan has [its own PHPDoc types][0] that you can use to add more information and context.

Instead of specifying an argument must be a `string`, you can specify it's a `non-empty-string` or a `class-string`.

You can specify whether an integer is a `positive-int` or `negative-int`, or within a certain range.

You can define the shape of an array or object, whether an array is empty, or the types of keys and values in an array.

All of this is used by PHPStan when analysing the code and will give better results and find more potential bugs before anyone else does.

[0]: https://phpstan.org/writing-php-code/phpdoc-types
