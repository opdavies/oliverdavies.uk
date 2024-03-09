---
title: Cleanly retrieving user profile data using an Entity Metadata Wrapper
excerpt: How to use Drupal 7's EntityMetadataWrapper to cleanly retrieve user profile field data.
tags:
    - drupal
    - drupal-7
    - drupal planet
    - php
date: 2021-02-23
---

Today I needed to load some Drupal user data via a [profile2](https://www.drupal.org/project/profile2) profile. When looking into this, most resources that I found suggest using this approach and calling the `profile2_load_by_user()` function directly and passing in the user object:


```php
$account = user_load(...);

$accountWrapper = new EntityDrupalWrapper('user', $account);
// or `$accountWrapper = entity_metadata_wrapper('user', $account);

$profile = profile2_load_by_user($account->value());
// or `$profile = profile2_load_by_user($account);`

$profileWrapper = new EntityDrupalWrapper('profile2', $profile);

$firstName = $profileWrapper->get('field_first_name')->value();
```

This though requires a few steps, and as I'm a fan of object-orientated code and Entity Metadata Wrappers, I wanted to find a cleaner solution.

This is my preferred method that uses method chaining. It returns the same value, is less code, and in my opinion, it's cleaner and easier to read.

```php
$firstName = $accountWrapper
  ->get('profile_user_basic')
  ->get('field_first_name')
  ->value();
```
