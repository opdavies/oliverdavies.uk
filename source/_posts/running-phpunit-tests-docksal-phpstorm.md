---
title: How to PHPUnit Tests within Docksal from PhpStorm
date: '2018-07-02'
tags: [drupal, drupal-8, phpstorm, phpunit, testing, docksal]
slug: running-phpunit-tests-docksal-phpstorm
---
{% block excerpt %}
 
{% endblock %}

{% block content %}
- [Allow PhpStorm to connect to the CLI container](#allow-phpstorm-to-connect-to-the-cli-container)
- [Add a new deployment server](#add-a-new-deployment-server)
- Configure PHP interpreter
- Set up PHPUnit in PhpStorm
- Running tests

## Allow PhpStorm to connect to the CLI container

The first thing to do is to allow PhpStorm to connect to Docksal’s CLI container to allow it to run the tests. We can do this by exposing the SSH port so that it’s available to the host machine and PhpStorm.

As this is going to be unique to my environment, I’m going to add this to `.docksal/docksal-local.yml` which I have in `.gitignore`, rather than committing it into the repository, enforcing the same port number for everyone else and potentially having conflicts.

In this case I’ll expose port 22 in the container to port 2225 locally.

```
version: '2.1'

services:
  cli:
    ports:
      - '2225:22'
```

Once added, run `fin start` to rebuild the project’s containers.

You can verify the change by running `fin ps` and you should see something like `0.0.0.0:2225->22/tcp` under Ports for the CLI container.

## Add a new Deployment Server

Now PhpStorm can connect to Docksal, I can configure it to do so by adding a new deployment server.

- Open PhpStorm’s preferences, and go to "Build, Execution, Deployment" and "Deployment".
- Click "Add" to configure a new deployment server.
- Enter a name like "Docksal", and select SFTP as the server type.

<div class="w-full md:w-2/3" markdown="1">
![](/assets/images/blog/phpstorm-phpunit-docksal/deployment-1.png)
</div>

### Connection settings

On the Connection tab:

- Enter your domain name - e.g. `drupal86.docksal` as the SFTP host. This will resolve to the correct IP address for you.
- Enter "docker" as both the username and password.
- You should now be able to click "Test SFTP connection" and get a successfully connected response.

![](/assets/images/blog/phpstorm-phpunit-docksal/deployment-2.png)


### Mapping settings

On the Mappings tab, add `/var/www` as the deployment path so that PhpStorm is looking in the correct place for the project code.

![](/assets/images/blog/phpstorm-phpunit-docksal/deployment-3.png)

## Interpreter

'Languages & Frameworks', 'PHP'
Add a new CLI interpreter
{% endblock %}
