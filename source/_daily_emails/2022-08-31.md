---
title: "To monorepo, or not to monorepo?"
permalink: "daily/2022/08/31/monorepo-or-not"
pubDate: 2022-08-31
tags: ["git"]
---

I listened to a podcast episode recently which talked about monorepos - i.e. code repositories that contain multiple project codebases rather than a single repository for each codebase - and this got me thinking about whether I should be using these more.

It's something that I've been trialling recently in my [Docker examples](https://github.com/opdavies/docker-examples) and [Docker images](https://github.com/OliverDaviesLtd/docker-images) repositories, where one repository contains and builds multiple Docker images.

I'm not suggesting that I put all of my client projects into one repository, but at least combining the different parts of the same project into the same repository.

For example, I'm working for one client on their current Drupal 7 websites whilst developing the new Drupal 9 versions, which are currently in two separate repositories. I'm also developing an embeddable Vue.js application as part of the Drupal 9 website, and using Fractal as a component library. These are also in their own repositories.

Using a monorepo approach, all of these projects would be in the same repository.

I can see advantages to being able to see cross-project changes in the same place - such as an API change in Drupal that needs a update to be made in Vue.js, or vice-versa - rather than needing to look at separate repositories. This could also make versioning easier as everything will be stored and tagged inside the same repository.

Each project has it's own CI pipeline, so it would require some changes where I set a specific pipeline to run only when a directory is changed.

I see how deployments may be tricker if I need to push an update within a directory to another Git repository, which makes me wonder if I'll need to look into using subtree splits to create separate deployment repositories - similar to how the Symfony project has one main repository and then each component split into its own repository.

I'll keep trialling it in my open-source projects and maybe test it with some client projects, but if you have experience with monorepos that you'd like to share, then please reply to this email - I'd love to hear about it.
