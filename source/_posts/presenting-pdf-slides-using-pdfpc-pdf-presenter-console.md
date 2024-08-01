---
title: Presenting from PDF slides using pdfpc (PDF Presenter Console)
excerpt: My notes from using pdfpc (PDF Presenter Console).
tags:
    - speaking
date: 2021-04-23
---

I recently started using PDF files for presentation slides and gave [a talk about a tool called rst2pdf](/talks/building-presenting-slide-decks-rst2pdf) that I use to write slides in reStructuredText and convert them to PDF. This blog post is about another tool that I use to present from the PDF file, which is called the [PDF Presenter Console](https://pdfpc.github.io "The pdfpc website") (or `pdfpc`).

This is the basic version that you get by running `pdfpc slides.pdf`:

<article class="contextual-region media media--type-image media--view-mode-full">
  <div data-contextual-id="media:media=36:changed=1619126785&amp;langcode=en" data-contextual-token="xh-WdEJdbzDsYJ_huRwx556sbY2XG8z3mE-mcui5PY0"></div>
      
  <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
    <div class="field__label visually-hidden">Image</div>
              <div class="field__item">  <img src="/sites/default/files/2021-04/pdfpc%20-%20presenter%20%28Upgrading%20to%20Drupal%209%29_004.png" width="1920" height="1080" alt="The basic pdfpc speaker view." />

</div>
          </div>

  </article>

It opens a speaker notes window that shows the current and next slide, the total number of slides in the presentation, the current slide number, and an increasing amount of time since you started the presentation.

Here are some tips that I usually use with `pdfpc`.

## Setting a duration

If you don't want a timer that shows the amount of time that you've been presenting so far then you can set a duration for the presentation using `pdfpc --duration 10`, and the timer will count down instead.

<article class="contextual-region media media--type-image media--view-mode-full">
  <div data-contextual-id="media:media=35:changed=1619092730&amp;langcode=en" data-contextual-token="DJ_2EpZHPEkWX0CLy0EyX3KN2sD1NI1-gLg7r1RvALo"></div>
      
  <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
    <div class="field__label visually-hidden">Image</div>
              <div class="field__item">  <img src="/sites/default/files/2021-04/pdfpc%20-%20presenter%20%28Upgrading%20to%20Drupal%209%29_002.png" width="1920" height="1080" alt="Showing the presenter notes with a duration to the end of the presentation." />

</div>
          </div>

  </article>

This is great if your presentation is has a strict end time such as during a conference schedule.

## Setting a start time

As well as a duration, you can add the start time for the presentation by running `pdfpc --start-time=13:00`. This will show you a timer that will count down until the specified start time when you need to start presenting.

<article class="contextual-region media media--type-image media--view-mode-full">
  <div data-contextual-id="media:media=34:changed=1619092730&amp;langcode=en" data-contextual-token="9g0SyW0Ij9kx1G43WLD1zb1KaJ_m7XhBo7O8FatTqH4"></div>
      
  <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
    <div class="field__label visually-hidden">Image</div>
              <div class="field__item">  <img src="/sites/default/files/2021-04/pdfpc%20-%20presenter%20%28Upgrading%20to%20Drupal%209%29_003.png" width="1920" height="1080" alt="Showing the presenter notes with countdown to the start time." />

</div>
          </div>

  </article>

Again, this is great if your presentation is has a strict start time such as during a conference.

## Swapping screens

When using both my laptop screen and external monitor for presenting (one for the slides, and the other for the speaker notes) it seems that the windows usually open on the opposite screens to the ones that I want.

I can override this though using the `--switch-screens` option and swap the presentation/presenter screens.

There are also `--presenter-screen` and `--presentation-screen` options to set the monitor to use for each but I usually find that just swapping them works for me.

## Presentation overview

When presenting, you can press the `Tab` key to see an overview of the presentation, with each slide and its number, and where you can easily navigate between slides which is very helpful if, during the Q&A section of the presentation, someone would like to ask a question about or reference a particular slide.

<article class="contextual-region media media--type-image media--view-mode-full">
  <div data-contextual-id="media:media=37:changed=1619213433&amp;langcode=en" data-contextual-token="QPikwJy8sYVMtB1PNLK2v8gUlCRK0-Cu6HAN8YdJ9VE"></div>
      
  <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
    <div class="field__label visually-hidden">Image</div>
              <div class="field__item">  <img src="/sites/default/files/2021-04/pdfpc%20-%20presenter%20%28Upgrading%20to%20Drupal%209%29_006.png" width="1920" height="1080" alt="The presentation overview screen" />

</div>
          </div>

  </article>

## And more...

There are a lot more options in `pdfpc`. To see more, run `pdfpc --help` or press `?` within the presenter view to see the help page (or `pdfpc --list-bindings`).
