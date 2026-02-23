---
date: 2025-07-24
title: The permissions issue that took down a website
permalink: /daily/2025/07/24/permissions-issue-took-down-website
---

Yesterday, I wrote about [the difficulty of removing permissions][0] from users once they have them, and why users should only have access to features they need.

If a user only needs to perform a few tasks, they do not need an Administrator role that gives them access to everything.

This, unfortunately, was the case on a project I was consulting on a few years ago.

I had a message from the client saying the website was offline and if I'd done anything to cause it.

It turned out that an employee of the client was working on the website, and they had an Administrator role.

Because of this, they saw a message that an unsupported module was installed and that it needed to be updated.

They clicked it and the module updated.

This was a new version of the module with a breaking change, and updating it broke the website and took it offline.

The previous version was restored and the website was brought back online, but if the user hadn't had the Administrator role, they wouldn't have been able to update the module and take down the website.

[0]: /daily/2025/07/23/its-hard-take-things-away
