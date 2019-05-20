<?php

namespace App\Talks\TwigExtension;

use Sculpin\Contrib\ProxySourceCollection\ProxySourceCollection;
use Tightenco\Collect\Support\Collection;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class TalksExtension extends AbstractExtension
{
    /**
     * @var string The current date.
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
            new TwigFunction('getTalks', [$this, 'getTalks']),
        ];
    }

    public function getFilters()
    {
        return [
            new TwigFilter('events', [$this, 'getEvents']),
            new TwigFilter('past', [$this, 'filterPast']),
            new TwigFilter('upcoming', [$this, 'filterUpcoming']),
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
    public function getTalks($talks): Collection
    {
        return collect($talks)->sortBy(function ($talk) {
            return $this->getLastDate($talk);
        });
    }


    public function getEvents(Collection $talks): Collection
    {
        return $talks->flatMap(function ($talk): array {
            return $talk['events'];
        });
    }

    public function filterUpcoming(Collection $talks)
    {
        return $talks->filter(function ($talk) {
            return $this->getLastDate($talk) >= $this->today;
        })->values();
    }

    public function filterPast(Collection $talks)
    {
        return $talks->filter(function ($talk) {
            return $this->getLastDate($talk) < $this->today;
        })->values();
    }

    private function getLastDate($talk): string
    {
        return $this->getEvents(collect([$talk]))
            ->pluck('date')->max();
    }
}
