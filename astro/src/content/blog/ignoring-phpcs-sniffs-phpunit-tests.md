---
title: Ignoring PHPCS sniffs for PHPUnit tests
excerpt: How to exclude certain PHPCS sniffs within your PHPUnit tests, so that you can write your tests methods how you'd like without getting coding standards errors.
tags:
    - drupal
    - drupal-planet
    - php
    - phpunit
date: 2021-01-04
---

**Note:** This post is written with a Drupal context, but applies to any PHP project.

This is a test that I wrote recently, which uses the camel case method name that is recommended by the Drupal and PSR-2 coding standards:

```php
public function testThatPathAliasesAreNotTransferredToTheNewLanguageWhenOneIsAdded(): void {
  // ...
}
```
It has a long method name that describes the test that is being run. However, it's quite hard to read. Generally, I prefer to write tests like this, using the `@test` annotation (so that I can remove the `test` prefix) and snake case method names:

```php
/** @test */
public function path_aliases_are_not_transferred_to_the_new_language_when_one_is_added(): void {
  // ...
}
```

This to me is a lot easier to read, particularly for long and descriptive test method names, and is commonly used within parts of the PHP community.

This approach, however, can result in some errors from PHPCS:

- The open comment tag must be the only content on the line
- Public method name "DefinedLanguageNodeTest::path_aliases_are_not_transferred_to_the_new_language_when_one_is_added" is not in lowerCamel format

We can avoid the errors by excluding the files when running PHPCS, or modifying rules within phpcs.xml (or phpcs.xml.dist) file to change the severity value for the rules. These approaches would mean either ignoring all PHPCS sniffs within the test files or ignoring some checks within all files, neither of which is an ideal approach.

## Ignoring whole or partial files

We can tell PHPCS to ignore whole or partial files by adding comments - there's [an example of this](https://git.drupalcode.org/project/drupal/-/blob/ad34608ab0bb115c53f4aaa0573c30dd8dc5b23a/sites/default/default.settings.php#L3 "Drupal's default.settings.php file with a 'coding standards ignore' comment") at the top of `default.settings.php` file:

```php
// @codingStandardsIgnoreFile
```

The `@codingStandards` syntax, however, is deprecated and will be removed in PHP_CodeSniffer version 4.0. The new syntax to do this is:

```php
// phpcs:ignoreFile
```

As well as `phpcs:ignoreFile` which ignores all of the sniffs in an entire file, there are also commands to disable and re-enable PHPCS at different points within the same file:

```php
// Stop PHPCS checking.
// phpcs:disable

// Start PHPCS checking.
// phpcs:enable
```

## Disabling specific rules in a file

As well as excluding a section of code from checks, with `phpcs:ignore` you can also specify a list of sniffs to ignore. For example:

```php
// phpcs:disable Drupal.Commenting.DocComment, Drupal.NamingConventions.ValidFunctionName
```

By adding this to the top of the test class, these specific sniffs will be ignored so no errors will be reported, and any other sniffs will continue to work as normal.

If you're unsure what the names of the sniffs are that you want to ignore, add `-s` to the PHPCS command to have it include the sniff names in its output.

For more information on ignoring files, folders, part of files, and limiting results, see the [Advanced Usage page for the PHP CodeSniffer project](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage) on GitHub.

You can also see this being used in [some of the tests for this website](https://github.com/opdavies/oliverdavies-uk/tree/production/web/modules/custom/blog/tests/src/Kernel).
