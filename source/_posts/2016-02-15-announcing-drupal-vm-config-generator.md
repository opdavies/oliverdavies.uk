---
nav: blog
title: Announcing the Drupal VM Config Generator
tags:
    - drupal
    - drupal-planet
    - drupal-vm
    - symfony
---
{% block excerpt %}
For the past few weeks I’ve been working on a personal side project, based on Drupal VM. It’s called the [Drupal VM Config Generator](https://github.com/opdavies/drupal-vm-config-generator), and over the weekend I’ve added the final features and fixed the remaining issues, and tagged the 1.0.0 release.
{% endblock %}

{% block content %}
For the past few weeks I’ve been working on a personal side project, based on Drupal VM. It’s called the [Drupal VM Config Generator](https://github.com/opdavies/drupal-vm-config-generator), and over the weekend I’ve added the final features and fixed the remaining issues, and tagged the 1.0.0 release.

![](/assets/images/blog/drupalvm-generate-repo.png)

## What is Drupal VM?

[Drupal VM](http://www.drupalvm.com) is a project created and maintained by [Jeff Geerling](http://www.jeffgeerling.com). It’s a [Vagrant](http://www.vagrantup.com) virtual machine for Drupal development that is provisioned using [Ansible](https://www.ansible.com).

What is different to a regular Vagrant VM is that uses a file called `config.yml` to configure the machine. Settings such as `vagrant_hostname`, `drupalvm_webserver` and `drupal_core_path` are stored as YAML and passed into the `Vagrantfile` and the `playbook.yml` file which is used when the Ansible provisioner runs.

In addition to some essential Ansible roles for installing and configuring packages such as Git, MySQL, PHP and Drush, there are also some roles that are conditional and only installed based on the value of other settings. These include Apache, Nginx, Solr, Varnish and Drupal Console.

## What does the Drupal VM Config Generator do?

> The Drupal VM Config Generator is a Symfony application that allows you to quickly create configuration files that are minimal and use-case specific.

Drupal VM comes with an [example.config.yml file](https://github.com/geerlingguy/drupal-vm/blob/master/example.config.yml) that shows all of the default variables and their values. When I first started using it, I’d make a copy of `example.config.yml`, rename it to `config.yml` and edit it as needed, but a lot of the examples aren’t needed for every use case. If you’re using Nginx as your webserver, then you don’t need the Apache virtual hosts. If you are not using Solr on this project, then you don’t need the Solr variables.

For a few months, I’ve kept and used boilerplace versions of `config.yml` - one for Apache and one for Nginx. These are minimal, so have most of the comments removed and only the variables that I regularly need, but these can still be quite time consuming to edit each time, and if there are additions or changes upstream, then I have two versions to maintain.

The Drupal VM Config Generator is a Symfony application that allows you to quickly create configuration files that are minimal and use-case specific. It uses the [Console component](http://symfony.com/doc/current/components/console/introduction.html) to collect input from the user, [Twig](http://twig.sensiolabs.org) to generate the file, the [Filesystem component](http://symfony.com/doc/current/components/filesystem/introduction.html) to write it.

Based on the options passed to it and/or answers that you provide, it generates a custom, minimal `config.yml` file for your project.

Here’s an example of it in action:

!['An animated gif showing the interaction process and the resulting config.yml file'](/assets/images/blog/drupalvm-generate-example-2.gif)

You can also define options when calling the command and skip any or all questions. Running the following would bypass all of the questions and create a new file with no interaction or additional steps.

```
drupalvm-generate \
  --hostname=example.com \
  --machine-name=example \
  --ip-address=192.168.88.88 \
  --cpus=1 \
  --memory=512 \
  --webserver=nginx \
  --domain=example.com \
  --path=../site \
  --destination=/var/www/site \
  --docroot=/var/www/site/drupal \
  --drupal-version=8 \
  --build-makefile=no \
  --install-site=true \
  --installed-extras=xdebug,xhprof \
  --force
```

## Where do I get it?

The project is hosted on [GitHub](https://github.com/opdavies/drupal-vm-config-generator), and there are installation instructions within the [README](https://github.com/opdavies/drupal-vm-config-generator/blob/master/README.md#installation).

The recommended method is via downloading the phar file (the same as Composer and Drupal Console). You can also clone the GitHub repository and run the command from there. I’m also wanting to upload it to Packagist so that it can be included if you manage your projects with Composer.

Please log any bugs or feature requests in the [GitHub issue tracker](https://github.com/opdavies/drupal-vm-config-generator/issues), and I’m more than happy to receive pull requests.

If you’re interested in contributing, please feel free to fork the repository and start doing so, or contact me with any questions.
{% endblock %}
