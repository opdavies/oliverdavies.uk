---
title: "Using Ansible for local environment configuration"
pubDate: 2022-09-05
permalink: "daily/2022/09/05/using-ansible-for-local-configuration"
---

As well as [configuring servers]({{site.url}}/daily/2022/09/04/using-ansible-for-server-configuration), you can use Ansible to configure your own local machine and development environment.

The change that you need to make is within the `hosts.ini` file:

```
127.0.0.1 ansible_connection=local
```

Instead of the server's IP address or hostname, use the localhost IP address and set `ansible_connection` to `local` to tell Ansible to run locally instead of using an SSH connection.

Another way to do this is to set `hosts: 127.0.0.1` and `connection: true` in your playbook.

Once this is done, you can run tasks, roles, and collections to automate tasks such as installing software, adding your SSH keys, configuring your project directories, and anything else that you need to do.

For an example of this, you can see [my dotfiles repository on GitHub](https://github.com/opdavies/dotfiles).

---

Want to learn more about how I use Ansible? [Register for my upcoming free email course]({{site.url}}/ansible-course).
