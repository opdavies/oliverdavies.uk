---
title: Introduction to Automated Testing and Test-Driven Development with Drupal
drupal_versions: [9]
prices:
    early: 395.00
    full: 495.00
early: true
next_date: 2022-04-04
testimonials:
    -
        name: Scott Euser, Head of Web Development
        image: /images/scott-euser.jpg
        text: |
            Oliver really knows his stuff. Whether you are just starting out or looking to take your knowledge to the next level, his patient and clear way of explaining will help get you there.
---

Are you a Drupal Developer who wants to learn about automated testing and test-driven development, or do you manage a development team that you'd like to train?

I've delivered large Drupal projects using automated tests and test-driven development for custom functionality, and maintain Drupal modules with thousands of installations whilst using their tests to ensure working code and prevent regressions.

I offer an interactive full-day workshop (previously presented at DrupalCamp London, and remotely for DrupalCamp NYC) that provides an introduction to automated testing in Drupal and how to utilise test-driven development - which I've updated specifically for Drupal {{ page.drupal_versions|join(' and ') }}.

## Contents

* What is automated testing, and why write tests?
* What types of tests are available in Drupal?
* Outside-in vs. inside-out testing.
* Exercise: writing tests for existing Drupal core functionality.
* Exercise: adding tests to an existing custom module.
* What is test-driven development?
* Exercise: writing a new Drupal module from scratch with test-driven development.
* Q&A

<hr class="my-12 border-t border-gray-50"/>

## Dates and prices

The workshop is currently only available remotely, and the next available date is <span class="font-bold">{{ page.next_date|date('jS F Y') }}</span>.

Seats are available at {% if page.early %}an <span class="font-bold">early bird price of £{{ page.prices.early }}</span>{% else %}<span class="font-bold">£{{ page.prices.full }}</span>{% endif %}, with a 10% discount for bulk orders of 5 or more seats.

<div class="mt-6">
    {% embed 'link-button' with {
        href: 'mailto:' ~ site.email ~ '?subject=Drupal testing workshop',
    } only %}
        {% block text 'Contact me to book' %}
    {% endembed %}
</div>

<hr class="my-12 border-t border-gray-50"/>

## Testimonials

{% for testimonial in page.testimonials %}
    <div>
        <blockquote class="mt-4">
            {{ testimonial.text }}
        </blockquote>
        <footer class="flex items-center space-x-4 space-x-reverse">
            <span class="text-base">{{ testimonial.name }}</span>
            <span class="order-first">
                <img
                    class="w-10 h-10 rounded-full border"
                    src="{{ testimonial.image }}"
                />
            </span>
        </footer>
    </div>
{% endfor %}

<div class="mt-8">
    {% include 'about-author' with {
        avatar: site.avatar,
        work: site.work,
    } only %}
</div>
