---
title: "Deploying applications with Ansible"
pubDate: 2022-09-06
permalink: "daily/2022/09/06/deploying-applications-with-ansible"
---

The last few days' emails have been about using Ansible to create and configure infrastructure, but it can also be used to deploy application code.

The simplest way being that an artifact is built locally - e.g. a directory of static HTML pages from a static site generator - and uploaded onto the server, and for this you could use Ansible's `synchronize` module.

It's a wrapper around the `rsync` command and makes it as simple as specifying `src` and `dest` values for the local and remote paths. 

For more complicated deployments, I like to use a tool called Ansistrano - an Ansible port of a deployment tool called Capistrano.

It creates a new directory for each release and updates a `current` symlink to identify and serve the current release, and can share files and directories between releases.

As well as being able to configure settings such as the deployment strategy, how many old releases to keep, and even the directory and symlink names, there are a number of hooks that you can listen for an add your own steps as playbooks so you can install dependencies, generate assets, run migrations, or rebuild a cache as part of each deployment.

If you're running your applications in Docker, you could use Ansible to pull the latest images and restart your applications.

For more information and examples, I've given a talk on Ansible at various PHP events, which covers some Ansible basics before moving on to [deploying applications with Ansistrano]({{site.url}}/talks/deploying-php-ansible-ansistrano).

---

Want to learn more about how I use Ansible? [Register for my upcoming free email course]({{site.url}}/ansible-course).

