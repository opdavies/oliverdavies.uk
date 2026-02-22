---
title: Using Sculpin with Decap CMS
tags: [sculpin]
date: 2026-02-22
---

Here's how I configured the [Ponthir Tae Kwon-Do website](https://git.oliverdavies.uk/opdavies/ponthirtaekwondo.co.uk) my son and I have been working on to use [Decap CMS](https://decapcms.org) (formerly Netlify CMS).

This is the `source/admin/config.yml` file we created:

{% verbatim %}
```yaml
local_backend:
  allowed_hosts:
    - localhost
    - ponthirtaekwondo.localhost

backend:
  name: git-gateway

editor:
  preview: false

show_preview_links: false

media_folder: source/images

collections:
  - name: site_settings
    label: Settings
    files:
      - name: config
        label: Site settings
        file: app/config/sculpin_site.yml
        fields:
          - name: name
            label: Site name
            widget: string

          - name: email
            label: Email address
            widget: string

  - name: pages
    label: Pages
    files:
      - name: home
        label: Home
        file: source/_pages/index.md
        fields:
          - name: title
            label: Title
            widget: string

          - name: body
            label: Body
            widget: markdown

      - name: classes
        label: Classes
        file: source/_pages/classes.md
        fields:
          - name: title
            label: Title
            widget: string

          - name: body
            label: Body
            widget: markdown

      - name: instructors
        label: Instructors
        file: source/_pages/instructors.md
        fields:
          - name: title
            label: Title
            widget: string

          - name: body
            label: Body
            widget: markdown

  - name: news
    label: News
    create: true
    format: frontmatter
    folder: source/_news
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - name: title
        label: Title
        widget: string

      - label: Date
        name: date
        widget: "datetime"
        default: "{{now}}"
        format: "YYYY-MM-DD HH:mm"
        picker_utc: false

      - name: body
        widget: markdown

      - name: tags
        label: Tags
        widget: select
        multiple: true
        required: false
        options:
          - competitions
          - gradings
```
{% endverbatim %}
