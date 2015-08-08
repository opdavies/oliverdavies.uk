<?php

use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;

class SculpinKernel extends AbstractKernel
{
    protected function getAdditionalSculpinBundles()
    {
        return array(
           'Tsphethean\Sculpin\Bundle\RelatedPostsBundle\SculpinRelatedPostsBundle'
        );
    }
}
