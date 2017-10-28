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
        $events = collect($data['events']);

        $today = (new \DateTime())->format('Y-m-d');

        return collect($data['talks'])->map(function ($talk) use ($events) {
            // Build an associative array with the talk, as well as the
            // specified event data (e.g. date and time) as well as the shared
            // event data (e.g. event name and website).
            return collect($talk['events'])->map(function ($event) use ($talk, $events) {
                $event = collect($event);
                $event = $event->merge($events->get($event->get('event')));

                return compact('event', 'talk');
            });
        })->flatten(1)->filter(function ($talk) use ($today, $onlyPrevious, $onlyUpcoming) {
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
