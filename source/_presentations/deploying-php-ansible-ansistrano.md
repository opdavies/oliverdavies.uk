---
title: Deploying PHP applications with Ansible, Ansible Vault and Ansistrano
description: |
  How to use Ansible and Ansistrano to perform robust, secure deployments of your PHP applications.
speakerdeck:
  id: c11fe635ed8f4741b35bf3ebe53e8323
  ratio: "1.77777777777778"
  url: https://speakerdeck.com/opdavies/deploying-php-applications-with-ansible-ansible-vault-and-ansistrano
video:
  type: youtube
  id: dQL-gOnxXCM
events:
  - name: Drupal Bristol
    date: 2019-01-23
    location: Bristol, UK
    url: https://www.drupalbristol.org.uk
  - name: PHP South Wales
    date: 2019-07-23
    location: Cardiff, UK
    url: https://www.phpsouthwales.uk
  - name: DrupalCon Europe 2019
    date: 2019-10-30
    location: Amsterdam, NL
    url: https://events.drupal.org/amsterdam2019
  - name: Bristol Cloud Native & DevOps
    date: 2020-01-30
    location: Bristol, UK
    url: https://www.meetup.com/Bristol-Cloud-Native-DevOps/events/266609627
  - name: Drupal Edinburgh
    date: 2020-03-12
    location: Edinburgh, UK
    url: https://www.meetup.com/Drupal-Edinburgh/events/267905594
    online: true
  - name: CMS Philly
    date: 2020-05-01
    location: Philadelphia, USA
    url: https://cmsphilly.org
    online: true
  - name: Drupal Yorkshire
    date: 2020-05-21
    location: Leeds, UK
    url: https://www.meetup.com/DrupalYorkshire/events/zwzsfpybchbcc
    online: true
  - name: PHP London
    date: 2020-06-04
    location: London, UK
    url: https://www.meetup.com/phplondon/events/270930524
    online: true
  - name: PHP North East
    date: 2020-06-16
    location: Newcastle Upon Tyne, UK
    url: https://www.meetup.com/phpnortheast
    online: true
  - name: PHP Sussex
    date: 2020-07-01
    location: Brighton, UK
    url: https://www.meetup.com/PHP-Sussex/events/271472628
    online: true
  - name: Midwest PHP
    date: 2021-04-23
    url: https://midwestphp.org/talks/1q5XUF2tTdXXLYOoujMkpF/Deploying_PHP_applications_with_Ansible_Ansible_Vault_and_Ansistrano
    online: true
  - name: PHP Oxford
    date: 2021-04-28
    location: Oxford, UK
    url: https://www.meetup.com/PHP-Oxford/events/qmbkfsyccgblc
    online: true
  - name: Ansible London
    date: 2021-05-25
    location: London, UK
    url: https://www.meetup.com/Ansible-London/events/278093392
    online: true
  - name: DrupalNYC
    date: 2021-06-15
    location: New York, USA
    url: https://ti.to/drupalnyc/lunch-learn-2021-06-15
    online: true
---

Great! You’ve built your website, and now you just need to deploy it. There are various ways that this could be done - from (S)FTP, to SCP and rsync, to running commands like `git pull` and `composer install` directly on the server which is not ideal.

As well provisioning and maintaining your server configuration and running commands, you can also use [Ansible](https://www.ansible.com) to deploy your PHP application - leveraging relevant Ansible modules such as Git and Composer, custom Ansible roles, [Ansible Vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html) for managing secrets, and features such as idempotency out of the box to build a simple deployment playbook. We can then extend that and make it more robust by adding [Ansistrano](https://ansistrano.com) - a port of [Capistrano](https://capistranorb.com) - which adds extra features such as storing multiple builds for each project and the ability to roll-back if needed, customising your build steps using built-in hooks, multi-stage environments and more.

I've been using Ansible and Ansistrano to deploy a variety of PHP projects - including Drupal 7 & 8, Symfony, Laravel and Sculpin, as well as basic HTML websites, and found it to be very flexible and easy to install and use, and by the end of this talk we will have a fully working deployment playbook, deploying real code onto a real server.
