Feature: Homepage
  In order to check that the website still works
  As a website user
  I need to be able to see that the homepage is correct

  Scenario:
    Given I am on "/"
    Then the response status code should be 200
    And I should see "I’m a Web Developer and System Administrator based in Wales, UK."
    And the "title" element should contain "Web Developer, System Administrator - PHP, Drupal, Symfony, Linux | Oliver Davies"
    And the "title" element should not contain "About | Oliver Davies"
