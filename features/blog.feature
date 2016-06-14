Feature: Blog

    Scenario:
        Given I am on "/blog"
        Then the response status code should be 200
        And the ".nav li.active a" element should contain "Blog"

    Scenario:
        Given I am on "/blog/simplifying-drupal-migrations-with-xautoload"
        Then the response status code should be 200
        And the ".nav li.active a" element should contain "Blog"

    Scenario:
        Given I am on "/"
        Then I should see "Latest blog posts"
        And I should see 3 ".latest-posts .post" elements
