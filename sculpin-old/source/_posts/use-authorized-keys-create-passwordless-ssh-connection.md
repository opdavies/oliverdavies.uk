---
title: How to use Authorized Keys to Create a Passwordless SSH Connection
date: 2012-02-01
excerpt:
  How to generate a SSH key, and how to use to log in to a server using SSH
  without entering a password.
tags:
  - linux
  - ssh
---

If you're accessing Linux servers or automating tasks between servers, rather
than having to enter your user password every time, you can also use SSH public
key authentication. This is a simple process that involves creating a local key
and storing it within the _authorized_keys_ file on the remote server.

1. Check if you already have a SSH key. `$ ssh-add -L`
1. If you don't have one, create one. `$ ssh-keygen`
1. Upload the key onto the server. Replace _myserver_ with the hostname or IP
   address of your remote server. `$ ssh-copy-id myserver`

If you're using Mac OS X and you don't have ssh-copy-id installed, download and
install [Homebrew](http://mxcl.github.com/homebrew 'Homebrew') and run the
`brew install ssh-copy-id` command.

If successful, you should now see a message like:

> Now try logging into the machine, with "ssh 'myserver'", and check in:
>
> ~/.ssh/authorized_keys
>
> to make sure we haven't added extra keys that you weren't expecting.

Now the next time that you SSH onto the server, it should log you in without
prompting you for your password.
