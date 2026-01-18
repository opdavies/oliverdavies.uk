---
title: Don't share user accounts
permalink: /daily/2025/07/26/dont-share-user-accounts
---

Another common Drupal issue I see is shared user accounts that are used by more than one person.

These commonly have generic names like "Administrator" or "Editor" instead of the name of an individual.

But, with Drupal's flexible user system, why would you need to do this?

If you have a shared account, you don't know who made a change when looking at a list of revisions and you can't easily block or delete an account when someone leaves the team without affecting everyone else.

With no need for any additional modules or services, you can create as many user accounts as you need, with functionality for registering new accounts, logging in and resetting passwords available by default.

Any user can have multiple roles - each with specific permissions to allow the user to perform specific tasks.

You can make the roles as fine-grained as you need - with a role only having one additional permission, if that's what is needed.

Have an individual user account for each person who needs one, and as many roles as you need to give each person exactly the permissions they need.
