<?php

declare(strict_types=1);

use Opdavies\Sculpin\Bundle\GistEmbedBundle\SculpinGistEmbedBundle;
use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;

final class SculpinKernel extends AbstractKernel
{
    /**
     * {@inheritdoc}
     */
    protected function getAdditionalSculpinBundles(): array
    {
        return [
            SculpinGistEmbedBundle::class,
        ];
    }
}
