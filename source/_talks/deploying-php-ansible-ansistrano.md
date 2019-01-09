---
title: Deploying PHP applications with Ansible, Ansible Vault and Ansistrano
events:
    - event: php_south_wales
      date: '2019-01-29'
      joindin: ~
speakerdeck:
    id: ~
    ratio: ~
    url: ~
tags: [meetup, php, ansible, ansistrano]
---
You’ve built your website, and now you just need to deploy it. There are various ways that this could be done - from (S)FTP, to SCP and rsync, to running commands like `git pull` and `composer install` directly on the server which is not ideal.

As well using it to provisioning and maintain your server configuration and run remote commands, you can also use Ansible to deploy your PHP application, leveraging relevant Ansible modules such as Git and Composer, Ansible Vault for managing secrets, and features such as idempotency out of the box to build a simple deployment playbook. We can then extend that and make it more robust by adding Ansistrano, a Capistrano port for Ansible, which adds extra features such as storing multiple builds for each project and the ability to switch between them, customising your build steps using built-in hooks, multi-stage environments and more.

I've been using Ansible and Ansistrano to deploy a variety of PHP projects - including Drupal 7 & 8, Symfony, Laravel and Sculpin, as well as basic HTML websites, and found it to be very flexible and easy to install and use, and by the end of this talk we will have a fully working deployment playbook, deploying real code onto a real server.
