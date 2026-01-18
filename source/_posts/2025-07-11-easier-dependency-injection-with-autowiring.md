---
title: Easier dependency injection with autowiring
permalink: /daily/2025/07/11/easier-dependency-injection-autowiring
---

Dependency injection is, as the name suggests, the approach of injecting dependencies into a class - usually within a `__construct` method.

This makes code less coupled and easier to test.

In a Drupal application, that usually means not using the static methods on `\Drupal` when fetching dependencies.

This is an example from my website:

```php
<?php

readonly final class PodcastNodeRepository {

  private NodeStorageInterface $nodeStorage;

  public function __construct(EntityTypeManagerInterface $entityTypeManager) {
    $this->nodeStorage = $entityTypeManager->getStorage('node');
  }

}
```

The `EntityTypeManagerInterface` dependency is injected and used to get the node storage class, which is used in another method to find the podcast episode nodes.

For this to work with the dependency injection container, I need to add the class as a service, including its arguments so they can be injected:

```yaml
# opd_podcast.services.yml

services:
  Drupal\opd_podcast\Action\GetNextPodcastEpisodeNumber:
    arguments:
      - '@entity_type.manager'
```

But, this means you need to update this file if any dependencies change.

Wouldn't it be better to do this automatically?

Usually, it can with autowiring.

Instead of `arguments`, add `autowire: true` and Drupal will try to automatically inject the dependencies for you:

```yaml
# opd_podcast.services.yml

services:
  Drupal\opd_podcast\Action\GetNextPodcastEpisodeNumber:
    autowire: true
  Drupal\opd_podcast\Repository\PodcastNodeRepository:
    autowire: true
```

Now, if dependencies change, you don't need to update the services file - making it easier and quicker.
