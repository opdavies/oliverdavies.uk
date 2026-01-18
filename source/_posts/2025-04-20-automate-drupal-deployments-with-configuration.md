---
title: Automate Drupal deployments with configuration
permalink: daily/2025/04/20/config
tags:
  - software-development
  - drupal
cta: ~
snippet: |
  Instead of manually creating the same content types, fields, blocks and configuration, use Drupal's configuration management system to automate the changes and re-apply them the same way every time.
---

Almost all Drupal projects have multiple environments - production and one or more pre-production environments.

A lot have development and staging, some have QA or UAT, or an environment per feature or sprint.

Each Developer has their own local environment to work on.

As new things are added, such as content types, fields and views, they need to be present on all environments.

When I started using Drupal, I needed to perform the same steps to manually recreate the changes on each environment.

Later, people started to use the Features module to export configuration into modules that could be committed and deployed as code.

This was accompanied by "deploy" modules that included update hooks to revert features or perform other tasks.

Since version 8, Drupal has had the Configuration Synchronization module.

Developers make changes once and export them to files using a simple command like `drush config:export`.

Once the code has been deployed to each environment, run `drush config:import` to import the changes.

This will synchronise the configuration on the environment, making it the same as the exported configuration in an automated way - the same way every time.

Much quicker and more robust than doing it manually.
