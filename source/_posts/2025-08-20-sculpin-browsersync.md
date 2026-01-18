---
title: Automatic Sculpin reloading with Browsersync
tags:
  - php
  - sculpin
  - nix
---

I'm a long-time user of the [Sculpin static site generator][0].

I've used it for this website for years, and have [given presentations about it][1] at meetups and conferences.

If you're not familiar, Sculpin takes Markdown, HTML and Twig files from a `source` directory and generates a fully static HTML website.

This is done by running the `sculpin generate` command.

To have Sculpin watch for changes and automatically rebuild the website when a file is updated, you can run `sculpin generate --watch` and have a local web server running by including `--server`.

## Enter BrowserSync

Whilst `sculpin generate --watch` will automatically re-generate the website, it doesn't automatically refresh your browser for you to see the changes.

This is common in other projects like Fractal (a component library) and Astro (another static site generator).

To fix this, I introduced [BrowserSync][2] into my project.

It's a node package that runs a webserver and can watch for changes to files - just like Sculpin - but it can automatically refresh the browser so I can see changes immediately.

## Using BrowserSync and Sculpin together

The simplest way I've found to do this is to run `browser-sync --watch` in the `output_dev` directory that Sculpin generates, and accessing the site via BrowserSync's server (usually <http://localhost:3000>).

Then, because Browsersync is serving the files, I don't need Sculpin to do it and I can simplify my command to `sculpin generate --watch`.

It still generates the website and watches for changes, but I'm offloading the serving of the pages to BrowserSync.

## How it's going

It's a new approach for me, but is working well.

I install Browsersync into the appropriate projects using Nix, so I don't need to add `package.json` or `node` for this to work.

For an example, see [the code repository for this website][3].

[0]: https://sculpin.io
[1]: /presentations/sculpin
[2]: https://browsersync.io
[3]: https://code.oliverdavies.uk/opdavies/oliverdavies.uk
