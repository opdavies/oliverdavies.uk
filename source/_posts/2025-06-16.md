---
date: 2025-06-16
title: Refactoring, semantic versioning and backward compatibility
permalink: /daily/2025/06/16/refactoring-semantic-versioning-and-backward-compatibility
---

There's an approach to refactoring I've seen in a number of open source projects, including Symfony and Drupal.

In Drupal 7 and earlier, there were only minor version releases.

Drupal 7 started at 7.0 and ended at 7.103.

Code could be refactored, but it still needed to be backward compatible so existing code couldn't be removed.

Now, many projects have adopted semantic versioning that contain major, minor and patch versions, like Drupal 11.2.0.

Minor and patch versions are backward compatible, but major versions - such as Drupal 10 and 11 - can break backward compatibility.

This means old code can be removed and the codebase can be tidied.

A good example of this was the `drupal_set_message()` function that was replaced by the `Messenger` service.

The original code was moved, the function was changed to use the new service and the function was marked as deprecated.

If you used it, you were notified it would be removed in the next major version.

It still worked so was still backward compatible.

When the next major version was released, the old function was removed as backward compatibility could be broken.

I like this approach as it means code can be refactored and improved, users are given time to update their code, new features can be continuously added, and the main codebase is kept clean and avoids a lot of legacy code.
