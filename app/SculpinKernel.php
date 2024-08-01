<?php

use Opdavies\Sculpin\Bundle\ContentGeneratorBundle\SculpinContentGeneratorBundle;
use Opdavies\Sculpin\Bundle\GistEmbedBundle\SculpinGistEmbedBundle;
use Opdavies\Sculpin\Bundle\TwigMarkdownBundle\SculpinTwigMarkdownBundle;
use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;

class SculpinKernel extends AbstractKernel
{
    /**
     * {@inheritdoc}
     */
    protected function getAdditionalSculpinBundles(): array
    {
        return [
            SculpinContentGeneratorBundle::class,
            SculpinGistEmbedBundle::class,
            SculpinTwigMarkdownBundle::class,
        ];
    }
}
