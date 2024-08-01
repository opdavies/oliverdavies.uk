---
title: "Using Feature Flags with Sculpin"
excerpt: |
    How I've started using feature flags within a client's Sculpin website.
tags: [sculpin]
date: 2022-01-09
---

<div class="flex justify-center">
  <img class="mb-4 h-auto w-[150px]" src="/images/sculpin-jackson.png" />
</div>

## Background

I was asked last week to add a new feature, a Facebook pixel for measuring and
building advertising campaigns, to a client's website which I built using the
[Sculpin](https://sculpin.io) static site generator.

The site uses settings within the `app/config/sculpin_site.yml` file for
storing site IDs and usernames. For this, I would add something like:

```yaml
facebook:
    pixel:
        id: "abc123"
```

It can then be retrieved with `{{ site.facebook.pixel.id }}`.

If I then needed to disable the pixel, then I'd typically remove the pixel
ID:

```yaml
facebook:
    pixel:
        id: ~
```

## Introducing feature flags

A technique that I like to use on other projects is using
[feature flags](https://www.atlassian.com/continuous-delivery/principles/feature-flags)
(aka feature toggles).

Whilst, in this instance, a feature flag wouldn't separate deploying code from
toggling a feature - a static site will need to be re-generated and deployed -
I thought that there was value in being able to easily toggle a feature without
changing its configuration or removing code within the site's templates.

## Feature flags in Sculpin

My Sculpin feature flag implementation was to add a `feature_flags` key within
`sculpin_site.yml`, with each feature's name as the key and a boolean value to
set whether it's enabled - similar to how the Drupal 7 version of the
[Feature Toggle module](https://www.drupal.org/project/feature_toggle) works.

This is how I added the Facebook pixel feature flag:

```yaml
feature_flags:
    add_facebook_pixel: true
```

## Using the Facebook pixel feature flag

The Facebook pixel code is stored within it's own partial that I can include
from my `source/_layouts/app.html.twig` layout, including the pixel ID and
whether or not the feature flag is enabled.

```twig
{% verbatim %}
{% include "facebook-pixel" with {


    is_enabled: site.feature_flags.add_facebook_pixel,
    pixel_id: site.facebook.pixel.id,
} only %}
{% endverbatim %}
```

Within the partial, I can check that both the feature flag is enabled and that
there is a Facebook pixel ID, and only add the pixel code if both conditions
return a truthy value.

```twig
{% if is_enabled and pixel_id %}
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '{{ pixel_id }}');
    fbq('track', 'PageView');
    </script>
{% endif %}
```

Now the pixel can be removed just by setting `add_facebook_pixel: false` in
`sculpin_site.yml`, and without changing any other configuration or templates.
