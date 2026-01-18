---
title: Don't branch, use feature toggles
permalink: daily/2025/02/20/toggles
tags:
  - software-development
  - deployments
  - git
cta: ~
snippet: |
  If feature branches cause conflicts, what is the alternative?
---

If [feature branches cause conflicts][0], what is the alternative?

Don't branch.

Keep all changes on a single branch and avoid merge conflicts between branches by not having branches.

But how can you avoid releasing changes before they are ready?

You can have a local branch with your changes that you don't push and rebase locally, but then [you're not doing continuous integration][1] and you're just as likely to get conflicts and have incompatible code.

One of the main benefits of trunk-based development, where everything is on a single branch, is that everyone's work always works together.

The better option is to use feature toggles (aka feature flags).

Wrapping code in feature toggles separates deploying the code from releasing the feature.

The code can be released, but the feature isn't active until the toggle is enabled.

This means everyone can work on the same branch and continuously deploy changes whilst being selective about the features that are visible to the end users.

If you have multiple environments, the same code can be used with different toggles enabled to allow for testing different features.

Then, once the feature is ready to be enabled, there is no deployment needed.

The code is already there - it just needs to be enabled.

For Drupal, there is a [Feature Toggle module][2] and [an extension that I wrote][3] that make it easy to use and manage feature toggles by just logging into the admin UI and selecting the active toggles you want.

And, if an issue is discovered, it can also be easily disabled [without needing to roll back to the previous version][4].

[0]: {{site.url}}/daily/2025/02/18/conflicts
[1]: {{site.url}}/daily/2025/02/17/ci-cd
[2]: https://www.drupal.org/project/feature_toggle
[3]: https://www.drupal.org/project/feature_toggle_twig
[4]: {{site.url}}/daily/2025/02/19/back-or-forward
