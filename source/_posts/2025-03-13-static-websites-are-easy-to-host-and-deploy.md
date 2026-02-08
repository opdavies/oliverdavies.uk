---
title: Static websites are easy to host and deploy
permalink: daily/2025/03/13/deploy
tags:
  - software-development
  - static-websites
  - static-site-generators
  - sculpin
cta:
snippet: |-
  Static websites are easy to host and deploy changes.
---

Another reason I like static websites is that they're easy and quick to deploy.

Whether you use write each HTML file by hand or [use a static site generator][0], a simple Web server like Caddy, Nginx or Apache can load and serve your website for everyone to see.

My Sculpin website generates an output_prod directory after I run `sculpin generate` with my deployable files.

I manage my own server with NixOS that hosts a number of static websites, such as examples from talks and blog posts.

To upload my files onto the server, I just use rsync - a small command line tool to synchronise files between computers.

It's a single command to upload the contents of my output_prod directory to the directory on my server.

No complex CI pipelines or database migrations.

It's fast, simple and minimal.

If you prefer to use a service like Netlify or Vercel, they work great for static websites too.

[0]: %7B%7Bsite.url%7D%7D/daily/2025/03/12/easy
