<?php

use Opdavies\Sculpin\Bundle\ContentGeneratorBundle\SculpinContentGeneratorBundle;
use Opdavies\Sculpin\Bundle\GistEmbedBundle\SculpinGistEmbedBundle;
use Opdavies\Sculpin\Bundle\TwigMarkdownBundle\SculpinTwigMarkdownBundle;
use Opdavies\Sculpin\Bundle\TwigSortByFieldBundle\SculpinTwigSortByFieldBundle;
use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;
use Tsphethean\Sculpin\Bundle\RelatedPostsBundle\SculpinRelatedPostsBundle;

/**
 * Class SculpinKernel
 */
class SculpinKernel extends AbstractKernel
{
    /**
     * {@inheritdoc}
     */
    protected function getAdditionalSculpinBundles()
    {
        return [
            SculpinContentGeneratorBundle::class,
            SculpinGistEmbedBundle::class,
            SculpinRelatedPostsBundle::class,
            SculpinTwigMarkdownBundle::class,
            SculpinTwigSortByFieldBundle::class
        ];
    }
}
