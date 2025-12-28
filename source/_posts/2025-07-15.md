---
date: 2025-07-15
title: PHP compatibility checking with phpcs
permalink: /daily/2025/07/15/php-compatibility-checking-phpcs
---

PHP 8.5 will be the next version of PHP, scheduled for release this November.

There are new features being added, including the `|>` pipe operator, that I'll look forward to using.

Once it's released, how can you tell if your application code is compatible?

Or, if you're stuck on an older version of PHP, how do you know if you can upgrade?

Running your automated tests is a great first step.

Another check is to use PHP CodeSniffer, aka (`phpcs`).

As well as coding standards, it can also run PHP compatibility checks.

With the [PHP Compatibility Coding Standard][0] installed, running `phpcs -p . --standard=PHPCompatibility` will perform the compatibility check and show any errors.

To specify a version of PHP to test against, add `--runtime-set testVersion 8.5` using the desired version.

If you need to make changes, I recommend [using Rector][1] and have it make the changes automatically.

[0]: https://github.com/PHPCompatibility/PHPCompatibility
[1]: /daily/2025/01/31/rector
