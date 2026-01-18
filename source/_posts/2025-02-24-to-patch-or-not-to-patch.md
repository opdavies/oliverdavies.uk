---
title: To patch or not to patch
permalink: daily/2025/02/24/patch
tags:
  - software-development
cta: ~
snippet: |
  To patch or not to patch.
---

[Applying patch files][0] is a common way to customise and extend open source software, and how we used to submit changes to Drupal before issue forks and merge requests were added to Drupal.org.

Some software, such as dwm and st from suckless.org are released as minimal versions that you patch to add features to.

If you find a line of code that you want to add, edit or delete, a patch file describes the changes so you can re-apply them whenever the source file changes.

Patching offers unlimited customisation and flexibility.

Whatever changes you want to make, you can.

The downside is you need to maintain any patches you've written.

If a change is made that causes your patch to no longer apply, you'll need to update the patch.

There are some patches I commonly apply to Drupal projects, but I'll try to either contribute the changes back to the Drupal so I no longer need the patch or make the change in a custom module.

Sometimes, though, [patching is the only option][1].

[0]: {{site.url}}/daily/2025/01/13/patches
[1]: {{site.url}}/daily/2025/01/14/patching-drupal
