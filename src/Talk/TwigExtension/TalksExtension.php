<?php

namespace App\Talk\TwigExtension;

use Sculpin\Contrib\ProxySourceCollection\ProxySourceCollection;
use Tightenco\Collect\Support\Collection;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class TalksExtension extends AbstractExtension
{
    /**
     * @var int The current date.
     */
    private $today;

    public function __construct()
    {
        $this->today = (new \DateTime())
            ->modify('today')
            ->setTimezone(new \DateTimeZone('Europe/London'))
            ->getTimestamp();
    }

    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return [
            new TwigFunction('get_all_talks', [$this, 'getAllTalks']),
            new TwigFunction('get_upcoming_talks', [$this, 'getUpcomingTalks']),
            new TwigFunction('get_past_talks', [$this, 'getPastTalks']),
            new TwigFunction('get_past_talk_count', [$this, 'getPastTalkCount']),
            new TwigFunction('get_events_for_talk', [$this, 'getEventsForTalk']),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'app.talks';
    }

    /**
     * Get all upcoming and previous talks.
     *
     * @param ProxySourceCollection|array $talks All talk nodes.
     *
     * @return Collection A sorted collection of talks.
     */
    public function getAllTalks($talks): Collection
    {
        return (new Collection($talks))->sortBy(function ($talk) {
            return $this->getLastDate($talk);
        });
    }

    public function getUpcomingTalks(array $talks): Collection
    {
        return $this->getAllTalks($talks)->filter(function ($talk): bool {
            return $this->getLastDate($talk) >= $this->today;
        })->values();
    }

    public function getPastTalks(array $talks): Collection
    {
        return $this->getAllTalks($talks)->filter(function ($talk): bool {
            return $this->getLastDate($talk) < $this->today;
        })->values();
    }

    public function getAllEvents($talks): Collection
    {
        return $this->eventsFromTalks($talks);
    }

    public function getPastEvents($talks): Collection
    {
        return $this->eventsFromTalks($talks)->filter(function ($event): bool {
            return $event['date'] < $this->today;
        })->sortBy('date');
    }

    public function getPastTalkCount($talks): int
    {
        return $this->getPastEvents($talks)->count();
    }

    public function getEventsForTalk(array $talk, array $eventData): Collection
    {
        return (new Collection($talk['events']))
            ->map(function (array $event) use ($eventData): Collection {
                return (new Collection($eventData[$event['event']]))->merge($event);
            })
            ->filter(function (Collection $event): bool {
                return !empty($event->get('date'));
            })
            ->sortBy('date');
    }

    private function getLastDate($talk): string
    {
        return $this->eventsFromTalks(new Collection([$talk]))
            ->pluck('date')->max();
    }

    private function eventsFromTalks($talks): Collection
    {
        return (new Collection($talks))->flatMap(function ($talk): array {
            return $talk['events'];
        })->filter(function ($event): bool {
            return !empty($event['date']);
        });
    }
}
