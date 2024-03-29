---
title: "Build Configs - configuration files as a service"
products:
    -
        price: 2500
        link: https://buy.stripe.com/14kbJs98K1fc0p29AC
        buttonText: Get started
    -
        price: 1000
        link: https://buy.stripe.com/7sIdRAbgS8HEfjWfZ1
        buttonText: Sign up
---

**Sprint zero in a box.**

All of my projects contain similar build configuration files, such as Docker and Docker Compose files, PHPUnit and PHPStan configuration, and CI/CD pipeline workflows. I used to maintain these manually which was time-intensive and there was no guarantee that the same features or options were available from project to project.

Build Configs is a tool I've written to maintain a canonical set of templates and generate them for each project based on a per-project configuration file.

This makes it quicker and easier for me to create or onboard new projects to work on and, as all of the base files are centralised, when I fix something or add a new feature, the changes can be pushed to every project that uses it.

I've been using this on personal projects such as my [Drupal](https://github.com/opdavies/docker-example-drupal), [LocalGov Drupal](https://github.com/opdavies/docker-example-drupal-localgov) and [Drupal Commerce Kickstart](https://github.com/opdavies/docker-example-drupal-commerce-kickstart) Docker examples and for various client projects.

## How does it work?

- I create a `build.yaml` file for the project that contains its configuration - what version of PHP it needs, which web server to use, which paths to run automated tests from or static analysis on, etc.
- I run the `build-configs` tool which generates the required files, such as a Dockerfile, Docker Compose file, PHPStan and PHPUnit configuration files, and a `run` script for automating project commands.
- The files are committed to version control and pushed to your code repository (GitHub, GitLab, Bitbucket, etc).
- As I add new features or make changes, I will re-run the process to re-generate the files and push any changes - ensuring you’re always up to date.

## What are some of the recent new features?

* Adding additional databases for working with migrations or multi-site projects.
* Adding additional `run` tasks.
* Adding CI pipelines with GitHub Actions to run automated quality checks.
* Creating and running Git hooks to run automated checks before changes are pushed.

## Example

In this short video, I show how Build Configs works by creating a new Drupal 10 project, generating its configuration files, and opening it in a browser.

From nothing to a ready-to-work-on Drupal website in less than a minute.

{% include 'youtube-video.html.twig' with { id: 'LkhsdmxReUc'} %}

## Options

### Initial project setup - £{{ page.products.0.price|number_format() }}

To get your project started on the right foot, I will create a new Drupal project skeleton for you using `build-configs` that is ready to work on, including all of the generated files. You can even edit them if you like as they will get no ongoing updates.

{% include 'button.html.twig' with {
  text: page.products.0.buttonText,
  url: page.products.0.link,
} %}

### Ongoing updates and support (single site) - £{{ page.products.1.price|number_format }} per month

Once you have a project with `build-configs`, if you want to receive ongoing updates to the generated files, I can automatically refresh your files once changes are available and push them to your code repository.

This also includes unlimited support via a dedicated Slack channel and you can make feature requests for me to consider adding to the roadmap.

If you like, I can add you to a beta users list and you’ll get new experimental features before anyone else.

{% include 'button.html.twig' with {
  text: page.products.1.buttonText,
  url: page.products.1.link,
} %}


If you have multiple Drupal sites, [contact me](/contact) and we can work something out.

### Retro-fitting into an existing project

`build-configs` can also be added to an existing project. It can be tricky and will be different from project to project so [contact me](/contact) and we can discuss it further.

Once I know more about your project, I’ll be happy to give you a fixed-price quote to do the work.
