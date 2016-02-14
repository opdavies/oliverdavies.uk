<?php

use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;

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
            'Tsphethean\Sculpin\Bundle\RelatedPostsBundle\SculpinRelatedPostsBundle',
            'Opdavies\Sculpin\Bundle\ContentGeneratorBundle\SculpinContentGeneratorBundle'
        ];
    }
}
