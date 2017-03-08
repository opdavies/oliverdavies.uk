Feature: Blog

    Scenario:
        Given I am on "/blog"
        Then the response status code should be 200
        And the page title should be "Blog"
        And the active menu link should be "Blog"

    Scenario:
        Given I am on "/blog/2016/05/03/simplifying-drupal-migrations-with-xautoload"
        Then the response status code should be 200
        And the page title should be "Simplifying Drupal Migrations with xautoload"
        And the active menu link should be "Blog"

    Scenario:
        Given I am on "/"
        Then I should see "Latest blog posts"
        And I should see 3 ".latest-posts .post" elements
