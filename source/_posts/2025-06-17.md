---
date: 2025-06-17
title: Drupal Bundle Classes
permalink: /daily/2025/06/17/drupal-bundle-classes
---

As someone who writes a lot of custom Drupal modules, one of my favourite additions to Drupal has been Bundle Classes.

What do they do?

When writing Drupal modules, instead of relying on generic classes like `Node` or `Term`, you can create your own class for each entity type (e.g. each content type or taxonomy vocabulary).

This makes the code more readable and means you can add behaviour to each class by adding its own methods.

You can see how I've done this on my website:

```php
function opd_presentations_entity_bundle_info_alter(array &$bundles): void {
  if (isset($bundles['node'])) {
    $bundles['node'][Presentation::NODE_TYPE]['class'] = Presentation::class;
  }

  if (isset($bundles['paragraph'])) {
    $bundles['paragraph'][Event::PARAGRAPH_TYPE]['class'] = Event::class;
  }
}
```

Within my `opd_presentations.module` file, I override the classes Drupal uses for Presentation nodes and Event paragraph types.

My Presentation class looks like this:

```php
final class Presentation extends Node implements NodeInterface {

  public const NODE_TYPE = 'presentation';

  public function getEvents(): Events {
    return Events::fromEvents($this->get('field_events')->referencedEntities());
  }

}
```

With this, to get the events for any presentation, I can do something like `$presentation->getEvents()` and this code will be used.

I use the same approach in my podcast module. The [code for my website is public][0] if you want to see other examples of how I'm using this approach.

P.S. If you have questions about how to use this approach or other ways to improve your Drupal code, [book a one-on-one consulting call with me][1] and I'll help you get started.

[0]: https://code.oliverdavies.uk/opdavies/oliverdavies.uk/src/commit/8a480121d203ca6f51310f952b15cfa09080b034/modules
[1]: /call
