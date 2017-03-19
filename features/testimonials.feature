Feature: Testimonials page

    Scenario:
        Given I am on "/testimonials"
        Then the response status code should be 200
        And the page title should be "Testimonials"
        And the active menu link should be "Testimonials"
