---
title: Upgrading the Dransible project to Drupal 9
excerpt: How I recently upgraded the Dransible example project from Drupal 8.8 to 9.0.
tags:
    - composer
    - dransible
    - drupal
    - drupal-9
    - drupal-planet
    - php
date: 2020-09-05
---

This week I gave [a new talk on upgrading to Drupal 9](/talks/upgrading-your-site-drupal-9) for the Drupal NYC meetup. Whilst preparing for that, I decided to upgrade my [Dransible example project](https://github.com/opdavies/dransible) that I use for my [Ansible and Ansistrano talk](/talks/deploying-php-ansible-ansistrano) to Drupal 9 and document the process.

Whilst the steps taken are in the slides for that talk, here is the full list of steps that I took including the Composer commands.

## Updating from Drupal 8.8 to 8.9 { #updating-from-drupal-88-to-89 }

To begin with, let's update to the latest version of Drupal 8 so that we can do some testing and see all of the latest deprecation notices before moving to Drupal 9.

1. Remove Drush temporarily using `composer remove drush/drush` as it will cause us being stuck on Drupal 8.9.0-beta2 rather than a newer, stable 8.9 version.
1. Update `^8.8` to `^8.9` in composer.json for `drupal/core-recommended`, `drupal/core-dev` and `drupal/core-composer-scaffold`, and run `composer update drupal/core-* --with-dependencies` to update core to 8.9.5.
1. Re-add Drush so that it's present for the deployment by running `composer require drush/drush:^9`.

## Preparing for Drupal 9 {#preparing-drupal-9}

1. Add the [Upgrade Status module](https://www.drupal.org/project/upgrade_status) by running `composer require drupal/upgrade_status`.
1. Upgrade to Drush 10 by running `composer require drush/drush:^10`.
1. Remove the [Config Installer module](https://www.drupal.org/project/config_installer) by running `composer remove drupal/config_installer`. This is no longer needed since Drupal 8.6, and there will be no Drupal 9 version.
1. Update the [Admin Toolbar module](https://www.drupal.org/project/admin_toolbar) to 2.3, a  Drupal 9 compatible version, by running `composer update drupal/admin_toolbar`.

As I'd previously updated the Simple Message custom module to be Drupal 9 compatible (adding the `core_version_requirement` key to the info.yml file, and removing usages of deprecated code), no changes needed to be made to that.

## Upgrading to Drupal 9 {#upgrading-drupal-9}

1. Update `^8.9` to `^9.0` for the core packages in composer.json, and run `composer update drupal/core-* --with-dependencies` to update to 9.0.5.
1. Re-add Drush by running `composer require drush/drush`. This will install Drush 10 by default.

## Post upgrade {#post-upgrade}

Although everything seemed to have updated OK locally, there were some errors when running a deployment to the Vagrant virtual machine that needed to be addressed, as well as some post-upgrade housekeeping steps to perform.

1. Fix the deployment error by adding the [Symfony Configuration component](https://symfony.com/components/Config) as a dependency by running `composer require symfony/config:^4`.
1. Alias `Drupal\Core\Messenger\MessengerInterface` to `messenger` in `simple_message.services.yml` to fix the autowiring error.
1. Add `settings["config_sync_directory"]` to settings file variables (this will be added automatically in the next version of the [Drupal settings Ansible role](https://github.com/opdavies/ansible-role-drupal-settings)).
1. Remove the Upgrade Status module by running `composer remove drupal/upgrade_status`, as it's no longer needed.

And that's it! The Dransible demo project is upgraded, and if you see my Ansible deployments talk in the future, the demo site will be running on Drupal 9.

If you want to see the original pull request, it's at <https://github.com/opdavies/dransible/pull/7>.
