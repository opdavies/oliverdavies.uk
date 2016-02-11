<?php

use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;

class SculpinKernel extends AbstractKernel
{
    protected function getAdditionalSculpinBundles()
    {
        return [
            'Tsphethean\Sculpin\Bundle\RelatedPostsBundle\SculpinRelatedPostsBundle',
            'Opdavies\Sculpin\Bundle\ContentGeneratorBundle\SculpinContentGeneratorBundle'
        ];
    }
}
