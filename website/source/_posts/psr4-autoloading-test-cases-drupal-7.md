---
title: Using PSR-4 Autoloading for your Drupal 7 Test Cases
excerpt: How to use the PSR-4 autoloading standard for Drupal 7 Simpletest test cases.
tags:
    - drupal
    - drupal-planet
    - drupal-7
    - testing
    - simpletest
    - php
    - psr
date: 2020-02-04
---

<p>{{ page.excerpt }}</p>

## The Traditional Way

The typical way of including test cases in Drupal 7 is to add one or more
classes within a `.test` file - e.g. `opdavies.test`. This would typically
include all of the different test cases for that module, and would be placed in
the root of the module’s directory alongside the `.info` and `.module` files.

In order to load the files, each file would need to be declared within the
`.info` file for the module.

There is a convention that if you have multiple tests for your project, these
can be split into different files and grouped within a `tests` directory.

```ini
; Load a test file at the root of the module
files[] = opdavies.test

; Load a test file from within a subdirectory
files[] = tests/foo.test
files[] = tests/bar.test
```

## Using the xautoload Module

Whilst splitting tests into separate files makes things more organised, each
file needs to be loaded separately. This can be made simpler by using the
[Xautoload module][], which supports wildcards when declaring files.

[xautoload module]: https://www.drupal.org/project/xautoload

```ini
files[] = tests/**/*.test
```

This would load all of the `.test` files within the tests directory.

## Using PSR-4 Autoloading

Another option is to use PSR-4 (or PSR-0) autoloading.

This should be a lot more familiar to those who have worked with Drupal 8,
Symfony etc, and means that each test case is in its own file which is cleaner,
files have the `.php` extension which is more standard, and the name of the file
matches the name of the test class for consistency.

To do this, create a `src/Tests` (PSR-4) or `lib/Drupal/{module_name}/Tests`
(PSR-0) directory within your module, and then add or move your test cases
there. Add the appropriate namespace for your module, and ensure that
`DrupalWebTestCase` or `DrupalUnitTestCase` is also namespaced.

```php
// src/Tests/Functional/OliverDaviesTest.php

namespace Drupal\opdavies\Tests\Functional;

class OliverDaviesTest extends \DrupalWebTestCase {
  // ...
}
```

This also supports subdirectories, so you can group classes within `Functional`
and `Unit` directories if you like.

If you want to see an real-world example, see the Drupal 7 branch of the
[Override Node Options module][override_node_options].

[override_node_options]:
  https://git.drupalcode.org/project/override_node_options/tree/7.x-1.x

### Digging into the simpletest_test_get_all function

This is the code within `simpletest.module` that makes this work:

```php
// simpletest_test_get_all()

// ...

$module_dir = DRUPAL_ROOT . '/' . dirname($filename);

// Search both the 'lib/Drupal/mymodule' directory (for PSR-0 classes)
// and the 'src' directory (for PSR-4 classes).
foreach (array(
  'lib/Drupal/' . $name,
  'src',
) as $subdir) {

  // Build directory in which the test files would reside.
  $tests_dir = $module_dir . '/' . $subdir . '/Tests';

  // Scan it for test files if it exists.
  if (is_dir($tests_dir)) {
    $files = file_scan_directory($tests_dir, '/.*\\.php/');
    if (!empty($files)) {
      foreach ($files as $file) {

        // Convert the file name into the namespaced class name.
        $replacements = array(
          '/' => '\\',
          $module_dir . '/' => '',
          'lib/' => '',
          'src/' => 'Drupal\\' . $name . '\\',
          '.php' => '',
        );
        $classes[] = strtr($file->uri, $replacements);
      }
    }
  }
}
```

It looks for a the tests directory (`src/Tests` or
`lib/Drupal/{module_name}/Tests`) within the module, and then finds any `.php`
files within it. It then converts the file name into the fully qualified
(namespaced) class name and loads it automatically.

### Running the Tests

You can still run the tests from within the Simpletest UI, or from the command
line using `run-tests.sh`.

If you want to run a specific test case using the `--class` option, you will now
need to include the fully qualified name.

```
php scripts/run-tests.sh --class Drupal\\opdavies\\Tests\\Functional\\OliverDaviesTest
```
