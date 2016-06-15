Feature: Experience page

    Scenario:
        Given I am on "/experience"
        Then the response status code should be 200
        And the page title should be "Experience"
        And the active menu link should be "Experience"
