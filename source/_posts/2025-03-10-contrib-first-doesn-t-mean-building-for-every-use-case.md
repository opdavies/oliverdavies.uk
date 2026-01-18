---
title: Contrib-first doesn't mean building for every use case
permalink: daily/2025/03/10/contrib-first
tags:
  - software-development
  - drupal
  - open-source
cta: ~
snippet: |
  Contrib-first development doesn't mean building for every use case upfront.
---

Most Drupal projects include writing custom code to add functionality required for that project or that doesn't yet exist.

Some of this may be identified as code that could be contributed back to the Drupal community and uploaded to Drupal.org as reusable code for others to use.

Usually, this involves "cleaning up" the code to make it ready to be open sourced - ensuring it complies with coding standards, follows best practices and doesn't contain any sensitive or project-specific data.

Unfortunately, this doesn't always happen as the next project or task is waiting to be started, and the code is never contributed.

I like to do contrib-first or contrib-driven development, where the code is open sourced upfront, developed in the open and used on the project as I'm developing it.

A common argument to this approach is that it takes too much time.

I assume that's because people think I need to cover every use case and situation in the module because I'm open sourcing it.

That's not true.

When I wrote modules like [System User][0], [Null User][1] and [Private Message Queue][2], I wrote the same code I'd have written if I was going to contribute it later - but I didn't need to clean it up afterwards.

I didn't need to ensure it didn't contain anything I'd need to remove.

It wasn't a big task to open source them as they were already open sourced.

If other people want to use the module and need additional features, they could open an issue, submit a patch or create their own patches.

Just because code has been open sourced doesn't mean it needs to do everything for everyone.

[0]: https://www.drupal.org/project/system_user
[1]: https://www.drupal.org/project/null_user
[2]: https://www.drupal.org/project/private_message_queue
