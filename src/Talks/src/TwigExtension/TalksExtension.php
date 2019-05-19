<?php

namespace App\Talks\TwigExtension;

use Illuminate\Support\Collection;
use Sculpin\Contrib\ProxySourceCollection\ProxySourceCollection;
use Twig_Extension;
use Tightenco\Collect\Support\Collection;
use Twig\TwigFilter;
use Twig_SimpleFunction;

class TalksExtension extends Twig_Extension
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
            new Twig_SimpleFunction('getAllTalks', [$this, 'getAll']),
            new Twig_SimpleFunction('getUpcomingTalks', [$this, 'getUpcoming']),
            new Twig_SimpleFunction('getPastTalks', [$this, 'getPast']),
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
        return $this->getAll($talks)->filter(function ($talk) {
            return $this->getLastDate($talk) >= $this->today;
        })->values();
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
        return $this->getAll($talks)->filter(function ($talk) {
            return $this->getLastDate($talk) < $this->today;
        })->values();
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
        return (string) collect($talk['events'])->pluck('date')->sort()->last();
    }

    public function getEvents(Collection $talks): Collection
    {
        return $talks->flatMap(function ($talk): array {
            return $talk['events'];
        });
    }
}
