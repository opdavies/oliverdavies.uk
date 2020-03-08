---
title: Running Drupal 8.8 with the Symfony Local Server
date: ~
tags:
  - drupal
  - drupal-8
  - symfony
draft: true
---

https://symfony.com/doc/current/setup/symfony_server.html

![](/iimages/blog/drupal-symfony-server/terminal.png)

## Installation

The Symfony server is bundled as part of the `symfony` binary that is available
to download from <https://symfony.com/download>.

To install it, run this command:

```bash
curl -sS https://get.symfony.com/cli/installer | bash
```

It works with any project, not just Symfony.

## Different PHP Versions

One of the most useful features of the Symfony server is that it
[supports multiple versions of PHP](https://symfony.com/doc/current/setup/symfony_server.html#different-php-settings-per-project)
if you have them installed (e.g. via Homebrew on macOS), and a different version
can be selected per directory.

This is done simply by adding a `.php-version` file to the root of the project
that contains the PHP version to use - e.g. `7.3`.

Next time the server is started, this file will be read and the correct version
of PHP will be used.

[Further PHP customisations can be made per project](https://symfony.com/doc/current/setup/symfony_server.html#overriding-php-config-options-per-project)
by adding a `php.ini` file.

## Securing Sites Locally

The Symfony server allows for serving sites via HTTPS by installing its own
local certificate authority.

To install it, run this command:

```
symfony server:ca:install
```

Any HTTP traffic will be automatically redirected to HTTPS.

If you then need to run a site with just HTTP, add the `--no-tls` option to the
`server:start` command.

## Adding Databases with Docker

The Symfony server has an integration with Docker for providing extra services -
such as databases that we’ll need for Drupal.

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
line):

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

Now I can use these environment variables within my `settings.php` file to allow
Drupal to connect to the database service.

```php
// web/sites/default/settings.php

// ...

if ($_SERVER['SYMFONY_DOCKER_ENV']) {
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

## Installing Drupal

`../vendor/bin/drush site-install`:

> Error: Class 'Drush\Sql\Sql' not found in Drush\Sql\SqlBase::getInstance()

`symfony php ../vendor/bin/drush st`

This will ensure that the correct PHP version and configuration is used, and
that the appropriate environment variables are available.

## Custom Domain Names

Good for multisites.

https://symfony.com/doc/current/setup/symfony_server.html#local-domain-names

```
cp web/sites/default web/sites/umami
```

`symfony proxy:domain:attach umami`

> The proxy is now configured with the following domains for this directory:
>
> - http://umami.wip

```php
// web/sites/sites.php

$sites['umami.wip'] = 'umami';
```

labels:

```yaml
labels:
  com.symfony.server.service-prefix: 'DATABASE_UMAMI'
```

symfony-server-drupal-test_database_1
symfony-server-drupal-test_database_umami_1

```bash
symfony php ../vendor/bin/drush si demo_umami \
  -l umami \
  --no-interaction
```
