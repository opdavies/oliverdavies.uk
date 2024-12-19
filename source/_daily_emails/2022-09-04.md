---
title: "Using Ansible for server configuration"
pubDate: 2022-09-04
permalink: "daily/2022/09/04/using-ansible-for-server-configuration"
---

[In yesterday's email]({{site.url}}/archives/2022/09/03/creating-infrastructure-with-ansible), I described how to set up a blank server with Ansible.

Now that we've done that, it needs to be configured.

Once the server’s IP address or hostname has been added to a `hosts.ini` file, you can run ad-hoc commands against it - such as `ansible all -i hosts.ini -m ping` to run Ansible's `ping` module on all of the hosts in your inventory and check that you can connect to them.

Another useful one that you can use is the `shell` module, that runs ad-hoc run commands on each host. If you need to check the uptime of each of your servers, run `ansible all -i hosts.ini -m shell -a uptime`. You can replace the last argument with any other shell command that you need to run, like `df` or `free`.

Running commands in this way is great for getting started, for routine maintenance, or an emergency free disk space check, but for more complex tasks like configuration management, using playbooks is the better option. They are YAML files that contain lists of tasks that Ansible will run through and execute in order.

If you have a group of related tasks, such as for installing a piece of software, then you can combine them into roles. In fact, Ansible Galaxy has thousands of pre-built collections and roles that you can download, include in your playbooks, configure, and run.

Very quickly, you can get a full stack installed and configured - ready to serve your application.

---

Want to learn more about how I use Ansible? [Register for my upcoming free email course]({{site.url}}/ansible-course).
