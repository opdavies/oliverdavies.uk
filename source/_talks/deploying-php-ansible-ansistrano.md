---
title: Deploying PHP applications with Ansible, Ansible Vault and Ansistrano
description:
  How to use Ansible and Ansistrano to perform robust, secure deployments of
  your PHP applications.
speakerdeck:
  id: c11fe635ed8f4741b35bf3ebe53e8323
  ratio: '1.77777777777778'
  url: https://speakerdeck.com/opdavies/deploying-php-applications-with-ansible-ansible-vault-and-ansistrano
video:
  type: youtube
  id: TmS0FIVwKQg
tags: [meetup, php, ansible, ansistrano]
events:
  - event: drupal_bristol
    date: 2019-01-23
  - event: php_south_wales
    date: 2019-07-23
  - event: drupalcon_eu_19
    date: 2019-10-30
  - event: bristol_devops
    date: 2020-01-30
    url: https://www.meetup.com/Bristol-Cloud-Native-DevOps/events/266609627
  - event: drupal_edinburgh
    date: 2020-03-12
    remote: true
    url: https://www.meetup.com/Drupal-Edinburgh/events/267905594
  - event: cms_philly_20
    date: 2020-05-01
    remote: true
  - event: drupal_yorkshire
    date: 2020-05-21
    remote: true
---

Great! You’ve built your website, and now you just need to deploy it. There are
various ways that this could be done - from (S)FTP, to SCP and rsync, to running
commands like `git pull` and `composer install` directly on the server which is
not ideal.

As well provisioning and maintaining your server configuration and running
commands, you can also use [Ansible](https://www.ansible.com) to deploy your PHP
application - leveraging relevant Ansible modules such as Git and Composer,
custom Ansible roles,
[Ansible Vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html)
for managing secrets, and features such as idempotency out of the box to build a
simple deployment playbook.

We can then extend that and make it more robust by adding
[Ansistrano](https://ansistrano.com) - a port of
[Capistrano](https://capistranorb.com) - which adds extra features such as
storing multiple builds for each project and the ability to roll-back if needed,
customising your build steps using built-in hooks, multi-stage environments and
more.

I've been using Ansible and Ansistrano to deploy a variety of PHP projects -
including Drupal 7 & 8, Symfony, Laravel and Sculpin, as well as basic HTML
websites, and found it to be very flexible and easy to install and use, and by
the end of this talk we will have a fully working deployment playbook, deploying
real code onto a real server.
