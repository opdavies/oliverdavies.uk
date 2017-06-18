Feature: Home
    In order to check that the website still works
    As a website user
    I need to be able to see that the homepage is correct

    Scenario:
        Given I am on the homepage
        Then the response status code should be 200
        And I should see "a Web Developer and System Administrator based in Wales, UK."
        And the active menu link should be "About"
        And the page title should be "Web Developer, System Administrator - PHP, Drupal, Symfony, Linux | Oliver Davies"
        And the page title should not be "About | Oliver Davies"
