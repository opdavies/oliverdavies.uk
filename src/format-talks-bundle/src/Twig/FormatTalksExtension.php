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

    public function formatTalks($data)
    {
        $event_data = $data['events'];

        $talks = [];
        foreach ($data['talks'] as $talk) {
          foreach ($talk['events'] as $event) {
            $event = array_merge($event, $event_data[$event['event']]);

            $talks[] = compact('talk', 'event');
          }
        }

        return collect($talks)
            ->sortByDesc('event.date')
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
