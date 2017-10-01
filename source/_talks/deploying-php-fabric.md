---
talk_id: 18
title: Deploying PHP Applications with Fabric
slides:
    url: https://speakerdeck.com/opdavies/deploying-php-applications-with-fabric
    embed: '<script async class="speakerdeck-embed" data-id="c147618ce07546ca92f92983c52d6a41" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>'
# video:
#    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kM0MDUJE8ys" frameborder="0" allowfullscreen></iframe>'
#    url: https://www.youtube.com/watch?v=kM0MDUJE8ys
tags: [meetup, conference, php, fabric]
meta:
    og:
        title: Deploying PHP Applcations with Fabric
        description: "You've built your PHP application, now learn how to deploy it with Fabric."
        type: website
        image:
            url: /assets/images/talks/deploying-php-fabric.png
            width: 2560
            height: 1440
            type: image/png
---
You’ve built your application, and now you just need to deploy it. There are various ways that this could be done – from (S)FTP, to SCP and rsync, to running commands like “git pull” and “composer install” directly on the server (not recommended).

My favourite deployment tool of late is [Fabric][1] – a Python based command line tool for running commands locally as well as on remote servers. It’s language and framework agnostic, and unopinionated so you define the steps and workflow that you need – from a basic few-step deployment to a full Capistrano style zero-downtime deployment.

This talk will cover some introduction to Fabric and how to write your own fabfiles, and then look at some examples of different use case deployments for your PHP project.

[1]: http://www.fabfile.org
