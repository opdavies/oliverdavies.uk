<?php

namespace App\FormatTalks\Twig;

use Twig_Extension;
use Twig_SimpleFilter;

class FormatTalksExtension extends Twig_Extension
{
    /**
     * {@inheritdoc}
     */
    public function getFilters()
    {
        return [
            new Twig_SimpleFilter('format_talks', [$this, 'formatTalks']),
        ];
    }

    public function formatTalks($talks)
    {
      return collect($talks)
        ->sortBy('event.date')
        ->all();
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'format_talks';
    }
}
