Feature: Consulting page

  Scenario:
    Given I am on "/consulting"
    Then the response status code should be 200
    And the page title should be "Consulting"
    And the active menu link should be "Consulting"
