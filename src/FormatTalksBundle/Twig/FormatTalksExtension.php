<?php

namespace FormatTalksBundle\Twig;

class FormatTalksExtension extends \Twig_Extension
{
    /**
     * {@inheritdoc}
     */
    public function getFilters()
    {
        return [
            new \Twig_SimpleFilter('format_talks', [$this, 'formatTalks']),
        ];
    }

    public function formatTalks($data, $onlyUpcoming = false, $onlyPrevious = false)
    {
        $event_data = $data['events'];

        $talks = [];
        foreach ($data['talks'] as $talk) {
            foreach ($talk['events'] as $event) {
                $event = array_merge($event, $event_data[$event['event']]);

                $talks[] = compact('talk', 'event');
            }
        }

        $today = (new \DateTime())->format('Y-m-d');

        return collect($talks)
            ->filter(function ($talk) use ($today, $onlyPrevious, $onlyUpcoming) {
                if ($onlyUpcoming) {
                    return $talk['event']['date'] > $today;
                }

                if ($onlyPrevious) {
                    return $talk['event']['date'] < $today;
                }

                return true;
            })->sortByDesc('event.date')->all();
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'format_talks';
    }
}
