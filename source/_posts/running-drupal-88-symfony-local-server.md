---
title: Running Drupal 8.8 with the Symfony Local Server
excerpt: How to use Symfony's local web server to run a Drupal 8.8 website.
date: 2020-03-09
tags:
  - drupal
  - drupal-8
  - symfony
---

![A screenshot of a terminal window running a Drupal project with the Symfony local server](/images/blog/running-drupal-with-symfony-local-server/terminal.png)

<!--
## Why use the Symfony server?

- performance
- reusable knowledge
-->

## Installation

<https://symfony.com/doc/current/setup/symfony_server.html>

The Symfony server is bundled as part of the `symfony` binary that is available
to download from <https://symfony.com/download>.

To install it, run this command:

```bash
curl -sS https://get.symfony.com/cli/installer | bash
```

Even though it’s by Symfony, the local webserver works with any type of
project - including Drupal 8 (and 9) and Drupal 7.

## Getting started

Here are the basic commands to start and stop the server:

```bash
# Alias for server:start, starts the server
symfony serve

# Run the server in daemon mode (in the background)
symfony serve -d

# Display the status of the server
symfony server:status

# Stop the server
symfony server:stop
```

If your Drupal files are within a `web` or `docroot` directory, it will
automatically be used as the document root for the server, so files are served
from there if you run the serve command.

If you use a different subdirectory name - one that isn't loaded automatically -
you can use the `--document-root` option:

```bash
symfony serve --document-root www
```

## Different PHP Versions

One of the most useful features of the Symfony server is that it
[supports multiple versions of PHP](https://symfony.com/doc/current/setup/symfony_server.html#different-php-settings-per-project)
if you have them installed, and a different version can be selected per
directory.

This is done by adding a `.php-version` file to the root of the project that
contains the PHP version to use. For example:

```bash
echo "7.3" > .php-version
```

Next time the server is started, this file will be read and the correct version
of PHP will be used.

If you’re using macOS and want to install another version of PHP, you can do it
using Homebrew:

```bash
# Install PHP 7.3
brew install php@7.3
```

[Further PHP customisations can be made per project](https://symfony.com/doc/current/setup/symfony_server.html#overriding-php-config-options-per-project)
by adding a `php.ini` file.

## Securing Sites Locally

The Symfony server allows for serving sites via HTTPS locally by installing its
own local certificate authority.

If it’s not installed automatically, run this command to install it:

```
symfony server:ca:install
```

Now any site will be served via HTTPS by default, and any HTTP requests will be
automatically redirected.

If you need to run a site with just HTTP, add the `--no-tls` option to the
`serve` command.

## Adding Databases (and other services) with Docker

The Symfony server has an integration with Docker for providing extra services -
such as databases that we’ll need to install Drupal.

This is my `docker-compose.yaml` file which defines a `database` service for
MySQL:

```yaml
version: '2.1'

services:
  database:
    image: mysql:5.7
    ports: [3306]
    environment:
      MYSQL_ROOT_PASSWORD: secret
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:
```

Because port 3306 is exposed, the server recognises it as a database service and
automatically creates environment variables prefixed with `DATABASE_`.

A list of all the environment variables can be seen by running
`symfony var:export` (add `| tr " " "\n"` if you want to view each one on a new
line, and `| sort` if you want to list them alphabetically):

```dotenv
DATABASE_DATABASE=main
DATABASE_DRIVER=mysql
DATABASE_HOST=127.0.0.1
DATABASE_NAME=main
DATABASE_PASSWORD=secret
DATABASE_PORT=32776
DATABASE_SERVER=mysql://127.0.0.1:32776
DATABASE_URL=mysql://root:secret@127.0.0.1:32776/main?sslmode=disable&charset=utf8mb4
DATABASE_USER=root
DATABASE_USERNAME=root
SYMFONY_DOCKER_ENV=1
SYMFONY_TUNNEL=
SYMFONY_TUNNEL_ENV=
```

Now these environment variables can be used within `settings.php` file to allow
configure Drupal’s database connection settings:

```php
// web/sites/default/settings.php

if ($_SERVER['SYMFONY_DEFAULT_ROUTE_URL']) {
  $databases['default']['default'] = [
    'driver' => $_SERVER['DATABASE_DRIVER'],
    'host' => $_SERVER['DATABASE_HOST'],
    'database' => $_SERVER['DATABASE_NAME'],
    'username' => $_SERVER['DATABASE_USER'],
    'password' => $_SERVER['DATABASE_PASSWORD'],
    'port' => $_SERVER['DATABASE_PORT'],
    'prefix' => '',
    'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
    'collation' => 'utf8mb4_general_ci',
  ];
}
```

To keep things organised, I usually like to split these settings into their own
file and include it:

```php
if ($_SERVER['SYMFONY_DEFAULT_ROUTE_URL'] && file_exists(__DIR__ . '/settings.symfony.php')) {
  require_once __DIR__ . '/settings.symfony.php';
}
```

## Installing Drupal

Now that Drupal can connect to the (empty) database, we can install the site. I
usually do this using Drush, which is added as a dependency via Composer.

The command that I’d usually run is:

```bash
cd web

../vendor/bin/drush site-install
```

However, this will cause an error like this because Drupal cannot connect to the
database when Drush is run in this way.

> Error: Class 'Drush\Sql\Sql' not found in Drush\Sql\SqlBase::getInstance()

To fix this, ensure that the command is prefixed with `symfony php`. This will
ensure that the correct PHP version and configuration is used, and that the
appropriate environment variables are available.

```bash
symfony php ../vendor/bin/drush site-install
```

This also applies to all other Drush commands.

## Custom Domain Names

Currently we can only access the site via the localhost URL with a specific
port. The port is determined automatically when the server is started so it can
change if you have multiple projects running.

Symfony server also allows for
[adding local domain names through a proxy](https://symfony.com/doc/current/setup/symfony_server.html#local-domain-names).
This is useful if you always want to access the site from the same URL, or if
the site relies on using a specific URL such as a multisite setup (multiple
domains served from the same codebase).

{% include 'figure' with {
  image: {
    src: '/images/blog/running-drupal-with-symfony-local-server/proxy.png',
    alt: 'A screenshot of the proxy overview screen, showing three local projects with their local domains, ports and directories.',
  },
  caption: 'The proxy overview screen'
} only %}

### Setting up a multisite

Here’s an example of how I would use local domains to configure a multisite
Drupal installation (taken from
<https://github.com/opdavies/symfony-server-drupal-test>).

The first thing is to add the subdomain to the proxy. In this example, I’m going
to set up a version of the Umami demo installation profile at
`https://umami.wip`.

```bash
# Add umami.wip to the proxy and attach it to this directory
symfony proxy:domain:attach umami
```

Now we can add it to Drupal’s `sites.php` file to route requests to the correct
site directory:

```php
// web/sites/sites.php

// This maps https://umami.wip to the sites/umami directory
$sites['umami.wip'] = 'umami';
```

To create the directory, we can duplicate the `default` site directory and its
contents.

```
cp -R web/sites/default web/sites/umami
```

To create a separate database, we add a new service to the `docker-compose.yaml`
file and a new MySQL volume to store the data. We can use labels to generate
site specific environment variables.

```diff
 version: '2.1'

 services:
   database:
     image: mysql:5.7
     ports: [3306]
     environment:
       MYSQL_ROOT_PASSWORD: secret
     volumes:
       - mysql-data:/var/lib/mysql

+  database_umami:
+    image: mysql:5.7
+    ports: [3306]
+    environment:
+      MYSQL_ROOT_PASSWORD: secret
+    volumes:
+      - mysql-data-umami:/var/lib/mysql
+    labels:
+      com.symfony.server.service-prefix: 'UMAMI_DATABASE'

 volumes:
   mysql-data:
+  mysql-data-umami:
```

These can then be added to `sites/umami/settings.php`:

```php
$databases['default']['default'] = [
  'driver' => $_SERVER['UMAMI_DATABASE_DRIVER'],
  'host' => $_SERVER['UMAMI_DATABASE_HOST'],
  'database' => $_SERVER['UMAMI_DATABASE_NAME'],
  'username' => $_SERVER['UMAMI_DATABASE_USER'],
  'password' => $_SERVER['UMAMI_DATABASE_PASSWORD'],
  'port' => $_SERVER['UMAMI_DATABASE_PORT'],
  'prefix' => '',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'collation' => 'utf8mb4_general_ci',
];
```

Now that the Umami site is able to connect to its own database, we can install
Drupal - specifying the installation profile to use and also the site directory
to target.

```bash
symfony php ../vendor/bin/drush site-install \
  demo_umami \
  -l umami \
  --no-interaction
```
