---
layout: default
title: Testimonials
testimonials:
    - name: Ed Welsby
      text: >
          <p>Oliver was great to work with, he has a solid knowledge of the various aspects of web development and never minded helping me out with Linux commands!</p>
      role: Senior Developer
      company: Proctor & Stevenson
      url: http://www.proctors.co.uk

    - name: Brian Healy
      text: >
          <p>Oliver was fantastic to work with - pro-active and highly responsive, he worked well remotely and as part of a project team. His understanding of the project requirement(s) and ability to translate it into working code was essential and he delivered.</p>
      company: Tincan
      url: http://tincan.co.uk

    - name: Brian Hartwell
      text: >
        <p>Oliver was great to work with. He has expert knowledge with Drupal and delivered exactly what we were looking for on time. He's understanding, friendly and easy to get along with. I would enjoy working with him again in the future.</p>

    - name: Daniel Easterbrook
      text: >
          <p>Oliver is seasoned Drupal and all round highly skilled and experienced web developer. I have worked with Oliver on an important project where he was reliable, prompt and ensured strict client deadline delivery and confidentiality at all times.</p>

    - name: James Chapman
      text: >
          <p>We used Oliver on a number of occasions throughout 2012 and I have to say we've been delighted with his work. His skills working with Drupal are excellent particularly with custom module development and we wouldn't hesitate to recommend him others.</p>
      company: Development Done Right
      url: http://www.developmentdoneright.co.uk

    - name: Marlon Duncanson
      text: >
          <p>Oliver is a great guy and really easy to work with. He really goes the extra mile to make sure the project is done properly. I would recommend him and will not hesitate to use him again in future.</p>
      company: Hypergroup Limited
      url: http://www.hypergroup.com
---
# Testimonials

{% for testimonial in page.testimonials %}
    <h2>{{ testimonial.name }}</h2>
    {{ testimonial.text | raw }}
{% endfor %}
