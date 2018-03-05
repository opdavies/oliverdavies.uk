---
title: Deploying PHP Applications with Fabric
summary: |
    You’ve built your application, and now you just need to deploy it. There are various ways that this could be done – from (S)FTP, to SCP and rsync, to running commands like “git pull” and “composer install” directly on the server (not recommended).

    My favourite deployment tool of late is Fabric – a Python based command line tool for running commands locally as well as on remote servers. It’s language and framework agnostic, and unopinionated so you define the steps and workflow that you need – from a basic few-step deployment to a full Capistrano style zero-downtime deployment.
speakerdeck:
    id: c147618ce07546ca92f92983c52d6a41
    ratio: 1.77777777777778
image: deploying-php-fabric.png
meta:
    og:
        title: Deploying PHP Applcations with Fabric
        description: "You've built your PHP application, now learn how to deploy it with Fabric."
        type: website
        image:
            url: /build/static/images/talks/deploying-php-fabric.png
            width: 2560
            height: 1440
            type: image/png
---
This talk will cover some introduction to Fabric and how to write your own fabfiles, and then look at some examples of different use case deployments for your PHP project.

Originally presented as a [Nomad PHP](https://nomadphp.com) lightning talk, but then I presented a full version to the [PHPSW user group](https://phpsw.uk) and the [PHPNW conference](https://conference.phpnw.org.uk/phpnw17) in 2017.
