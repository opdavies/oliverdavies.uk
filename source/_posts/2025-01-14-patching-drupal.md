---
title: Patching Drupal
permalink: daily/2025/01/14/patching-drupal
tags:
  - software-development
  - drupal
cta:
snippet: |-
  Although patches aren't used to contribute to Drupal any more, you can still apply patches to Drupal code in your own projects.
---

Yesterday I wrote about [how I used a patch file to customise a project in my Nix configuration][0].

I'm familiar with patch files from my Drupal contributions, when we used to create and upload patch files and attach them to issues to contribute changes.

Although patches aren't used to contribute to Drupal any more, you can still apply patches to Drupal code in your own projects if you need to.

If there's a customisation or fix you need you need to apply, instead of altering and "hacking" the source files, you can apply changes with patch files.

Instead of Nix, I use [composer-patches][1] to automatically apply patches when running `composer install`.

For example, in my composer.json file, I can add something like this:

```json
"extra": {
    "patches": {
        "drupal/default_content": {
            "Issue #2698425: Do not reimport existing entities (https://www.drupal.org/project/default_content/issues/2698425#comment-15593214)":  "patches/default_content-2698425-do-not-reimport-196.patch",
            "Issue #3160146: Add a Normalizer and Denormalizer to support Layout Builder (https://www.drupal.org/project/default_content/issues/3160146#comment-14814050)": "patches/default_content-3160146-53.patch"
        }
    },
},
```

This will apply these two patch files to the Default Content module (which are the same as running `git diff` between two commits), which I needed to do for a recent project.

If the upstream issue is fixed and the patch is no longer needed, they can be removed and the module can be updated to the latest version.

And this works for core and contrib projects.

The same as the tmux-sessionizer example, this approach means I can apply any changes without needing to duplicate or alter the code, and it makes it easy to contribute by testing other people's patches or applying and contributing your own.

[0]: {{site.url}}/daily/2025/01/13/patches
[1]: https://github.com/cweagans/composer-patches
