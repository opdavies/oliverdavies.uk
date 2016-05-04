---
title: Simplifying Drupal Migrations with xautoload
nav: blog
tags:
    - autoloading
    - drupal
    - drupal-planet
    - drupal-7
    - php
draft: yes
---
{% block excerpt %}
How to use the [xautoload][1] module to autoload migration classes within your Drupal 7 migration modules.
{% endblock %}

{% block content %}
## What is xautoload?

[xautoload][1] is a Drupal module that enables autoloading PHP classes, in the same way that you would do so in a [Composer][2] project such as Drupal 8 or Symfony.

It supports both the [PSR-0][3] and [PSR-4][4] standards, as well as providing a wildcard syntax for the Drupal `file[]` syntax in .info files.

To use it, download and enable it from Drupal.org as you would for any other module.

### Wildcard syntax for .info files

Here is an example .info file for a migrate module.

```ini
; foo_migrate.info

name = Foo Migration
core = 7.x
package = Foo

files[] = includes/user.inc
files[] = includes/nodes/article.inc
files[] = includes/nodes/page.inc
```

In this example, each custom migration class is stored in it’s own file within the `includes` directory, and each class needs to be loaded separately using the `files[] = filename` syntax.

One thing that the xautoload module does is allow for the use of wildcards within .info files. By using this, the module file can be simplified as follows:

```
files[] = includes/**/*.inc
```

This will load any .inc files within the `includes` directory as well as any sub-directories, like 'node' in the original example.

This means that any new migration classes that are added will be automatically loaded without needing to edit foo_migrate.info again, and without needing to re-structure your directories.

### Use the PSR-4 structure

If you want to use the [PSR-4][4] model, you can do that too.

In order to do so, you’ll need to complete the following steps:

1. Rename the `includes` directory to `src`.
2. Ensure that there is one PHP class per file, and that the file ends with `.php` rather than `.inc`.
3. Ensure that the name of the file matches the name of the class - `FooArticleNodeMigration` would be in a file called `FooArticleNodeMigration.php`.
4. Add a namespace to each PHP file. This uses the same format as Drupal 8, including the machine name of the module. For example, `Drupal\foo_migrate`.
    * If the class is within a sub-directory, then this will also need to be included within the namespace - e.g. `Drupal\foo_migrate\Node`.
    * You’ll also need to import any class names that you are referencing, including class names that are you extending, by adding `use` statements at the top of the file. You may be able to prefix it with `\` instead (e.g. `\DrupalNode6Migration`), but I prefer to use imports.

Now your class may look something like this:

```php
<?php

namespace Drupal\foo_migrate\Node;

use DrupalNode6Migration;

class FooArticleNodeMigration extends DrupalNode6Migration {
  ...
}
```
With these steps completed, any imports within your .info file can be removed as they are no longer needed and any classes will be loaded automatically.

Within `foo_migrate.migrate.inc`, I can now reference any class names using their full namespace:

```php
$node_arguments['ArticleNode'] = array(
  'class_name' => 'Drupal\foo_migrate\Node\FooArticleNodeMigration',
  'source_type' => 'story',
  'destination_type' => 'article',
);
```

## Resources

* [xautoload module][1]
* [migrate module][5]
* [migrate_d2d module][6]
* [PSR-0][3]
* [PSR-4][4]

{% endblock %}

[1]: https://www.drupal.org/project/xautoload
[2]: http://getcomposer.org
[3]: http://www.php-fig.org/psr/psr-0/
[4]: http://www.php-fig.org/psr/psr-4/
[5]: https://www.drupal.org/project/migrate
[6]: https://www.drupal.org/project/migrate_d2d
