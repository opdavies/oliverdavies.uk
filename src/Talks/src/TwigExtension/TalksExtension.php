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
            new TwigFunction('getAllTalks', [$this, 'getAll']),
            new TwigFunction('getUpcomingTalks', [$this, 'getUpcoming']),
            new TwigFunction('getPastTalks', [$this, 'getPast']),
        ];
    }

    public function getFilters()
    {
        return [
            new TwigFilter('events', [$this, 'getEvents']),
        ];
    }

    /**
     * Get all upcoming and previous talks.
     *
     * @param ProxySourceCollection|array $talks All talk nodes.
     *
     * @return Collection A sorted collection of talks.
     */
    public function getAll($talks): Collection
    {
        return collect($talks)->sortBy(function ($talk) {
            return $this->getLastDate($talk);
        });
    }

    /**
     * Get all upcoming talks.
     *
     * @param ProxySourceCollection|array $talks All talk nodes.
     *
     * @return Collection A sorted collection of talks.
     */
    public function getUpcoming($talks): Collection
    {
        return $this->getAll($talks);
    }

    /**
     * Get all past talks.
     *
     * @param ProxySourceCollection|array $talks All talk nodes.
     *
     * @return Collection A sorted collection of talks.
     */
    public function getPast($talks): Collection
    {
        return $this->getAll($talks);
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'talks';
    }

    private function getLastDate($talk): string
    {
        return $this->getEvents(collect([$talk]))
            ->pluck('date')->max();
    }

    public function getEvents(Collection $talks): Collection
    {
        return $talks->flatMap(function ($talk): array {
            return $talk['events'];
        });
    }
}
