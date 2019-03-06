---
title: Easier Git Repository Cloning with inteadof
date: 2019-02-06
tags: []
draft: true
---
## What is insteadOf?

From the [Git documentation](https://git-scm.com/docs/git-config#git-config-urlltbasegtinsteadOf):

{% raw %}<blockquote v-pre>
Any URL that starts with this value will be rewritten to start, instead, with <base>. In cases where some site serves a large number of repositories, and serves them with multiple access methods, and some users need to use different access methods, this feature allows people to specify any of the equivalent URLs and have Git automatically rewrite the URL to the best alternative for the particular user, even for a never-before-seen repository on the site. When more than one insteadOf strings match a given URL, the longest match is used.
</blockquote>{% endraw %}

## Example

For example to clone a Drupal module from Drupal.org, I can add this snippet to my `~/.gitconfig` file:

```
[url "https://git.drupal.org/project/"]
    insteadOf = do:
    insteadOf = drupal:
```

This means that I can now do `git clone drupal:<name>` or `git clone do:<name>` to clone the repository, specifying the project’s machine name.

For example, to clone the Override Node Options module, I can now do this using `git clone drupal:override_node_options`.

You can view my entire `~/.gitconfig` file and my other dotfiles in [my dotfiles repository on GitHub](https://github.com/opdavies/dotfiles/blob/master/.gitconfig).
