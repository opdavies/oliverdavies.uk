---
title: "Releasing a Drupal module template"
pubDate: 2022-09-22
permalink: "daily/2022/09/22/releasing-drupal-module-template"
tags: ["drupal"]
---

Today, I an the idea to create a reusable template for new Drupal modules, based on how I like to build modules and how I've shown others to do so in my Drupal testing workshop.

So I did, and released it for free [on my GitHub account](https://github.com/opdavies/drupal-module-template).

Like my Tailwind CSS starter theme on Drupal.org, it's not intended to be added as a module directly, but something that can be cloned and used as a base for people's own modules.

It includes an example route and Controller that load a basic page, and has a test to ensure that the page exists and loads correctly.

The Controller is defined as a service and uses autowiring to automatically inject the its dependencies, the same as in my workshop example code.

It's the initial release so it's rough around the edges still. I'll use it tomorrow to create a new module and document the steps to add to the README as well as other pieces of documentation.

If you're creating a new Drupal module and try it out, start a discussion on the GitHub repository or [let me know on Twitter](https://twitter.com/opdavies). If you have questions, create a discussion or just reply to this email and I'll get back to you.
