---
title: Published my first Docker images on Docker Hub (ADR Tools, Sculpin, rst2pdf)
excerpt: I recently released my first images to the Docker Hub, for ADR Tools, the Sculpin site generator, and rst2pdf.
date: 2021-04-20
tags:
    - docker
    - rst2pdf
    - sculpin
---

I've used Docker for some time for local development, making use of container images from Docker Hub and creating my own project-specific images, but I hadn't pushed any to [my Docker Hub profile](https://hub.docker.com/u/opdavies) for anyone else to use - until now.

I've pushed several images to Docker Hub recently:

- One for using [ADR Tools](https://github.com/npryce/adr-tools) to work with architectural decision records.
- Two for generating and serving sites built with the [Sculpin static site generator](https://sculpin.io).
- One for working with [rst2pdf](https://rst2pdf.org) that I use for presentation slides, with another image coming for watching and automatically re-compiling the PDF.

<article class="contextual-region media media--type-image media--view-mode-full">
  <div data-contextual-id="media:media=33:changed=1618442055&amp;langcode=en" data-contextual-token="C-PHggch0hrNv19fZsR9MuBKN4Uce-ILhiKAQ4_bNio"></div>
      
  <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
    <div class="field__label visually-hidden">Image</div>
              <div class="field__item">  <img src="/sites/default/files/2021-04/Selection_055.png" width="1286" height="656" alt="My Docker images on Docker Hub" />

</div>
          </div>

  </article>

## ADR Tools

- GitHub: https://github.com/opdavies/docker-image-adr-tools
- Docker Hub: https://hub.docker.com/r/opdavies/adr-tools

The ADR Tools image a simple one that allows me to initialise and configure ADR Tools itself as well as creating new ADR documents without needing to install `adr-tools` locally.

For example:

```
# Initialise the ADR directory
docker run --rm -v $(pwd):/adr opdavies/adr-tools init

# List the current ADRs.
docker run --rm -v $(pwd):/adr opdavies/adr-tools list

# Create a new ADR.
docker run --rm -v $(pwd):/adr opdavies/adr-tools new 'A new ADR'
```

## Sculpin

- GitHub: https://github.com/opdavies/docker-image-sculpin-serve
- Docker Hub: https://hub.docker.com/r/opdavies/sculpin, https://hub.docker.com/r/opdavies/sculpin-serve

The Sculpin image repository contains two images - one for running Sculpin commands such as `sculpin content:create page` to create a new page, and one for generating and serving the Sculpin site that uses the `sculpin generate` command to generate and serve the site as well as watching for changes.

```
# Run a "sculpin" CLI command and "composer install" if needed.
docker run --rm -v $(pwd):/app opdavies/sculpin

# Generate and serve the Sculpin site.
docker run --rm -p 8000:8000 -v $(pwd):/app opdavies/sculpin-serve
```

I've tested this with some of my own personal and client Sculpin projects, as well as the official [Sculpin Blog skeleton](https://github.com/sculpin/sculpin-blog-skeleton).

<article class="contextual-region media media--type-image media--view-mode-full">
  <div data-contextual-id="media:media=32:changed=1618439494&amp;langcode=en" data-contextual-token="1837Bvj_qHQyj5LyqWvlZ7jL63PcDvJ24mhS7Umk8yI"></div>
      
  <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
    <div class="field__label visually-hidden">Image</div>
              <div class="field__item">  <img src="/sites/default/files/2021-04/Home%20%E2%80%94%20Sculpin%20Blog%20Skeleton%20%E2%80%94%20To%20Get%20You%20Started%20%E2%80%94%20Mozilla%20Firefox_002.png" width="1920" height="1053" alt="The Sculpin Blog Skeleton running with the sculpin-serve image" />

</div>
          </div>

  </article>

## rst2pdf

- GitHub: https://github.com/opdavies/docker-image-rst2pdf
- Docker Hub: https://hub.docker.com/r/opdavies/rst2pdf

rst2pdf is a tool that I use primarily for presentation slide decks (I [gave a talk about this](/talks/building-presenting-slide-decks-rst2pdf) at one of the PHP South Wales meetups).

The rst2pdf image installs Python and rst2pdf so that I can easily generate the PDF files from reStructuredText input files, including any extra arguments that are required.

```
# A simple example.
docker run --rm -it -v $(pwd):/rst2pdf rst2pdf input.rst

# An example including some additional arguments.
docker run --rm -it -v $(pwd):/rst2pdf rst2pdf slides.rst -b2 -s main -e preprocess
```

I'm currently adding an `rst2pdf-watch` image too, similar to `sculpin-watch` that will watch the files using `nodemon` and automatically regenerate the PDF files when files change. I'm not entirely sure of the syntax for this yet but I'll push it to Docker Hub too once I've figured it out and have it working.
