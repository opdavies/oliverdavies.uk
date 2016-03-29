<?php

namespace AppBundle\Twig;

use Twig_Extension;
use Twig_SimpleFunction;

class TweetExtension extends Twig_Extension
{
    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return [
            new Twig_SimpleFunction('tweet', [$this, 'render']),
        ];
    }

    /**
     * Render a tweet.
     *
     * @param string $tweet
     *   The content of the tweet.
     *
     * @return string
     */
    public function render($tweet)
    {
        return sprintf(
            '<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">%s</blockquote>',
            $tweet
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'tweet';
    }

}
