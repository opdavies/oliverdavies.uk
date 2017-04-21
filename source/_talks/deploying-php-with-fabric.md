---
title: Deploying PHP Applications with Fabric
type: Lightning talk
location: Nomad PHP
slides:
    url: https://speakerdeck.com/opdavies/deploying-php-applications-with-fabric
    embed: '<script async class="speakerdeck-embed" data-id="c147618ce07546ca92f92983c52d6a41" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>'
tags: [meetup, php, fabric]
events:
    - { id: nomad_php, date: '2017-04-20', time: '19:00 (CET)' }
---
You’ve built your application, and now you just need to deploy it. There are various ways that this could be done – from (S)FTP, to SCP and rsync, to running commands like “git pull” and “composer install” directly on the server (not recommended).

My favourite deployment tool of late is [Fabric][1] – a Python based command line tool for running commands locally as well as on remote servers. It’s language and framework agnostic, and unopinionated so you define the steps and workflow that you need – from a basic few-step deployment to a full Capistrano style zero-downtime deployment.

This talk will cover some introduction to Fabric and how to write your own fabfiles, and then look at some examples of different use case deployments for your PHP project.

[1]: http://www.fabfile.org
