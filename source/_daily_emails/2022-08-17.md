---
permalink: archive/2022/08/17/one-more-run-command-git-worktrees
pubDate: 2022-08-17
title: One more "run" command, for Git worktrees
tags: ["drupal", "git"]
---

Here's another `run` file example, this time relating to Git worktrees...

One project that I work on is a multilingual Drupal application that needs to work in both English and Welsh. As I'm cloning a fresh version today, I'm doing it as a bare repository so I can use worktrees.

To work on it locally, just like in production, I need to use a different URL for each language so that Drupal can identify it and load the correct content and configuration.

For fixed environments like production or staging, the URLs are set in configuration files, but for ad-hoc environments such as local worktrees, I thought that the best approach was to override them as needed per worktree using Drush (a Drupal CLI tool).

I could do this manually each time or I could automate it in a `run` command. :)

Here's the function that I came up with:

```bash
function drupal:set-urls-for-worktree {
  # Set the site URLs based on the current Git worktree name.
  local worktree_name="$(basename $PWD)"

  local cy_url="cy-projectname-${worktree_name}.docker.localhost"
  local en_url="projectname-${worktree_name}.docker.localhost"

  # Update the URLs.
  drush config:set language.negotiation url.domains.cy -y $cy_url
  drush config:set language.negotiation url.domains.en -y $en_url

  # Display the domains configuration to ensure that they were set correctly.
  drush config:get language.negotiation url.domains
}
```

It builds the worktree URL for each language based on the directory name, executes the configuration change, and finally displays the updated configuration so I can confirm that it's been set correctly.

This is a good example of why I like using `run` files and how I use them to automate and simplify parts of my workflow.
