---
title: Deploying PHP Applications with Fabric
description: How to use Fabric, a Python command line based library, to deploy your PHP applications.
speakerdeck:
  id: c147618ce07546ca92f92983c52d6a41
  ratio: "1.77777777777778"
  url: https://speakerdeck.com/opdavies/deploying-php-applications-with-fabric
tags: [meetup, conference, php, fabric]
meta:
  og:
    title: Deploying PHP Applcations with Fabric
    description: "You've built your PHP application, now learn how to deploy it with Fabric."
    type: website
    image:
      url: '%site.assets_url%/assets/images/talks/deploying-php-fabric.png'
      width: 2560
      height: 1440
      type: image/png
events:
  -
    name: PHP North West 2017
    location: Manchester, UK
    date: 2017-10-01
    time: "09:00 - 09:45"
    url: http://conference.phpnw.org.uk/phpnw17
    joindin: https://joind.in/talk/4e35d
  -
    name: PHP South West
    location: Bristol, UK
    url: https://phpsw.uk
    date: 2017-09-13
    joindin: https://joind.in/talk/a5ff3
  -
    name: Nomad PHP
    date: 2017-04-20
    time: "19:00 (CET)"
    url: https://nomadphp.com
    online: true
---

You’ve built your application, and now you just need to deploy it. There are various ways that this could be done – from (S)FTP, to SCP and rsync, to running commands like “git pull” and “composer install” directly on the server (not recommended).

My favourite deployment tool of late is [Fabric][1] – a Python based command line tool for running commands locally as well as on remote servers. It’s language and framework agnostic, and unopinionated so you define the steps and workflow that you need – from a basic few-step deployment to a full Capistrano style zero-downtime deployment.

This talk will cover some introduction to Fabric and how to write your own fabfiles, and then look at some examples of different use case deployments for your PHP project.

[1]: http://www.fabfile.org
