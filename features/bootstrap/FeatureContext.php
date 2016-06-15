<?php

use Behat\Behat\Tester\Exception\PendingException;
use Behat\Behat\Context\Context;
use Behat\Behat\Context\SnippetAcceptingContext;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;
use Behat\MinkExtension\Context\MinkContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends MinkContext implements Context, SnippetAcceptingContext
{
    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
    }

    /**
     * @Then the active menu link should be :text
     */
    public function theActiveMenuLinkShouldBe($text)
    {
        return $this->assertElementContains('.navbar .active a', $text);
    }

    /**
     * @Then the page title should be :text
     */
    public function thePageTitleShouldBe($text)
    {
        return $this->assertElementContainsText('title', $text);
    }

    /**
     * @Then the page title should not be :text
     */
    public function thePageTitleShouldNotBe($text)
    {
        return $this->assertElementNotContainsText('title', $text);
    }
}
