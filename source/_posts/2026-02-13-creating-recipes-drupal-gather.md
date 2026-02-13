---
title: Creating recipes for Drupal Gather
tags: [drupal]
date: 2026-02-13
---

These are the steps I took to create a new recipe for the [Drupal Gather
distribution][0].

All development work is being done [in this monorepo][1], with the different
components in their own directories.

Create the directory for the recipe:

    mkdir -p recipes/gather_events

Create `recipes/gather_events/composer.json`:

```json
{
    "name": "drupal/gather_events",
    "description": "Creates the event content type.",
    "type": "drupal-recipe",
    "license": ["GPL-2.0-or-later"]
}
```

Create `recipes/gather_events/recipe.yml`:

```yaml
name: 'Gather: Events'
description: 'Configures the event content type'
type: 'Content Type'

install:
  - field
  - node

config:
  import:
    field: '*'
    node: '*'
```

Create `receipes/gather_events/config/node.type.event.yml` to store the
configuration for the Event content type:

```yaml
langcode: en
status: true
dependencies: {  }
third_party_settings: {  }
name: Event
type: event
description: null
help: null
new_revision: true
preview_mode: 1
display_submitted: false
```

Within the `project` directory, run `composer require drupal/gather_events` to
require the recipe.

Add the new recipe name to the `gather.info.yml` file within the `profile` directory:

```yaml
recipes:
  required:
    - drupal/gather_base
    - drupal/gather_events
    - drupal/gather_speakers
    - drupal/gather_sponsors
```

Finally, run `drush recipe ../recipes/gather_events` to apply the recipe.

[0]: {{site.url}}/blog/building-drupal-gather
[1]: https://git.oliverdavies.uk/opdavies/drupal-gather
