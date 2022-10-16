---
title: Exporting Drupal body classes to use with Tailwind CSS
excerpt: How I've exported content from Drupal's body fields so they aren't missed by Tailwind's JIT mode or PurgeCSS.
date: 2022-07-02
tags:
    - drupal
    - tailwind-css
---

I was recently [asked a question](https://www.drupal.org/project/tailwindcss/issues/3271487) in the issue queue for my [Tailwind starter kit Drupal theme](https://www.drupal.org/project/tailwindcss), about how to use classes within content with Tailwind CSS.

The 5.x version of the theme has the JIT (just in time) compiler enabled by default and whilst it can work using Twig files in your theme, it doesn't know about classes used within content that is stored within the database.

This is something that I've needed to solve in some of my own projects before too so there are a few options but I'd not recommend turning off the JIT compiler or PurgeCSS.

## Adding classes to a safelist

The first option is to use the `safelist` option within the `tailwind.config.js` file:

```js
module.exports = {
  content: [
    './templates/**/*.html.twig'
  ],
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ]
}
```

Adding any classes to the safelist will force them to be generated, or prevent them from being purged, even if they are not found within the theme's templates files.

This is refered to within the Tailwind CSS documentation for [safelisting classes](https://tailwindcss.com/docs/content-configuration#safelisting-classes):

> One example of where this can be useful is if your site displays user-generated content and you want users to be able to use a constrained set of Tailwind classes in their content that might not exist in your own site’s source files.

## Extracting the safelist to a file

In some projects, I found that I was adding a lot of classes to the safelist so I extracted the classes into a file instead.

Whilst it could be a JavaScript object that could be imported, as long as Tailwind sees the classes being used, the files just need to exist in a file that can be scanned - even just a plain text file called `safelist.txt`:

```
bg-red-500
text-3xl
lg:text-4xl
```

Rather than using the `safelist`, I can add the safelist file to `content` instead:

```js
module.exports = {
  content: [
    './safelist.txt',
    './templates/**/*.html.twig'
  ]
}
```

## Creating a safelist file automatically with Drush

What we could also do is create the safelist file automatically based on the contents of the database using a custom Drush command.

### Creating the command

This can be done by creating a new PHP class within a custom module and use the `@command` annotation to specify the command to run:

```php
<?php

declare(strict_types=1);

namespace Drupal\opdavies_blog\Command;

final class ExportBodyValuesForThemePurgingCommand {

  /**
   * Drush command to export body field values into a file.
   *
   * @command opdavies:export-body-values-for-theme-purging
   */
  public function handle(): void {
    // ...
  }

}
```

In this example, the file is `modules/custom/opdavies_blog/src/Command/ExportBodyValuesForThemePurgingCommand.php`.

### Injecting the database service

It can now add it as a service within the `opdavies_blog.services.yml` file:

```yaml
services:
  Drupal\opdavies_blog\Command\ExportBodyValuesForThemePurgingCommand:
    arguments: ['@database']
    tags:
      - { name: drush.command }
```

As we're going to need to query the database, I've added the database service as a dependency of my command and also created a constructor method and a property within the command class:

```php
private Connection $database;

public function __construct(Connection $database) {
  $this->database = $database;
}
```

### Completing the handle method

As well as the database, I've added some properties to contain the table names to query as well as the name of the file to output:

```php
private static array $tableNames = [
  'block_content__body',
  'node__body',
];

private string $filename = 'safelist.txt';
```

Within the `handle()` method, I'm using an [Illuminate Collection](/talks/using-illuminate-collections-outside-laravel) to loop over the array of tables, query the database, export the values, and write them into the file:

```php
public function handle(): void {
  $values = collect(self::$tableNames)
    ->flatMap(fn(string $tableName) =>
      $this->getValuesFromTable($tableName))
    ->implode(PHP_EOL);

  file_put_contents($this->getFilePath(), $values);
}

private function getFilePath(): string {
  return drupal_get_path('theme', 'opdavies') . DIRECTORY_SEPARATOR
    . $this->filename;
}

private function getValuesFromTable(string $tableName): array {
  return $this->database->select($tableName)
    ->fields($tableName, ['body_value'])
    ->execute()
    ->fetchCol();
}
```

Now, when Tailwind CSS is run, it will find the exported body contents within the safelist file, and ensure that the appropriate classes are generated.
