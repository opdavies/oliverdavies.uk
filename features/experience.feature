Feature: Experience page

    Scenario:
        Given I am on "/experience"
        Then the response status code should be 200
        And the ".nav li.active a" element should contain "Experience"
