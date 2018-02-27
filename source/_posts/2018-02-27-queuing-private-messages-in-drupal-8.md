---
title: Queuing Private Messages in Drupal 8
tags:
    - drupal
    - drupal-8
    - drupal-modules
    - drupal-planet
draft: true
---
[Private Message][0].

## Queuing a Message

The module provices a `PrivateMessageQueuer` service (`private_message_queue.queuer`) which queues the items via the `queue()` method.

The method accepts an array of `User` objects as the messsage recipients, the message body text and another user as the message owner.

Here is an example:

```php
$recipients = $this->getRecipients(); // An array of User objects.
$message = 'Some message text';
$owner = \Drupal::currentUser();

$queuer = \Drupal::service('private_message_queue.queuer');
$queuer->queue($recipients, $message, $owner);
```

These three pieces of data are then saved as part of the queued item.

Add screenshot of queue.

## Processing the Queue

The module also provides a `PrivateMessageQueue` queue worker, which processes the queued items. For each item, it creates a new private message setting the owner and the message body.

It uses the `PrivateMessageThread` class from the Private Message module to find for an existing thread for the specified recipients, or creates a new thread if one isn't found. The new message is then added to the thread.

The queue is processed on each cron run, so I recommend adding a module like [Ultimate Cron][1] so that you can process the queued items frequently (e.g. every 15 minutes) and run the heavier tasks like checking for updates etc less frequently (e.g. once a day).

[0]: https://www.drupal.org/project/private_message
[1]: https://www.drupal.org/project/ultimate_cron
