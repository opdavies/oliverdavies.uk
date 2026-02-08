---
title: An example of feature flagging
permalink: daily/2025/03/17/feature-flags
tags:
  - software-development
  - feature-flags
cta:
snippet: |-
  Here are a couple of examples of how I've recently used feature flags on my website.
---

I've written a number of emails about feature flags, or feature toggles, and am a strong advocate of using them whilst developing new features.

I've used them a couple of times recently on my website so I wanted to share them as examples.

## Experimenting with presentation layouts

Firstly, I wanted to experiment with a different layout for my presentation pages.

They currently have a list of events, embedded slides and a video recording when there is one.

Each event linked to its website, where applicable, and the slides and video were from one of the most recent versions of the presentation.

I wanted to change this so each event would have links to its own slides, example code or demo.

I didn't want to change this yet for all presentations, only [my Sculpin talk][0] as it's the most recent and, if I like it, later apply it to the others.

My website is built with Sculpin, so adding a feature flag was as simple as adding `new: true` to the YAML front matter at the top of the file for that presentation.

This is available as `page.new` in the layout file and I can use this [to load different markup][1].

## Rewriting my CSS

Secondly, I've been wanting to re-style my website with Tailwind CSS 4 and refactor some of the templating.

As this is a change I wanted to be site-wide, I added `new_css: true` to my sculpin_site.yml file.

This time, I was able to use `site.new_css` to [toggle the loaded stylesheet][2] and using Sculpin's environment files - e.g. sculpin_site_dev.yml and sculpin_site_prod.yml - I can be explicit about which stylesheets are used locally and for my live website.

## Summary

Feature flags are a great approach to splitting up large changes into manageable, deployable pieces, and they don't need to be complicated.

Essentially, they are a simple boolean value that you can use to execute different code based on whether it's false or true.

[0]: %7B%7Bsite.url%7D%7D/presentations/sculpin
[1]: https://code.oliverdavies.uk/opdavies/oliverdavies.uk/commit/8b721e63fb64f3c98b81353ca9cec7545d72a595
[2]: https://code.oliverdavies.uk/opdavies/oliverdavies.uk/commit/fa884644cf5aa233ad22fb28b83c5a0b150b037d
