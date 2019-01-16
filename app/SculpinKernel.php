<?php

use FormatTalksBundle\SculpinFormatTalksBundle;
use Opdavies\Sculpin\Bundle\ContentGeneratorBundle\SculpinContentGeneratorBundle;
use Opdavies\Sculpin\Bundle\GistEmbedBundle\SculpinGistEmbedBundle;
use Opdavies\Sculpin\Bundle\TwigMarkdownBundle\SculpinTwigMarkdownBundle;
use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;
use TalksBundle\SculpinTalksBundle;
use WebsiteBundle\SculpinWebsiteBundle;

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
            SculpinTwigMarkdownBundle::class,

            SculpinTalksBundle::class,
        ];
    }
}
