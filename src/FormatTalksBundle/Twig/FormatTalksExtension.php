<?php

namespace FormatTalksBundle\Twig;

use Illuminate\Support\Collection;
use Sculpin\Contrib\ProxySourceCollection\ProxySourceCollection;
use Twig_Extension;
use Twig_SimpleFunction;

class FormatTalksExtension extends Twig_Extension
{
    /**
     * @var string The current date.
     */
    private $today;

    public function __construct()
    {
        $this->today = (new \DateTime())->format('Y-m-d');
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

  /**
   * Get all upcoming and previous talks.
   *
   * @param ProxySourceCollection|array $talks All talk nodes.
   * @param array $eventData Shared event data.
   *
   * @return Collection A sorted collection of talks.
   */
    public function getAll($talks, array $eventData = [])
    {
        return $this->format($talks, $eventData)->sortBy('event.date');
    }

  /**
   * Get all upcoming talks.
   *
   * @param ProxySourceCollection|array $talks All talk nodes.
   * @param array $eventData Shared event data.
   *
   * @return Collection A sorted collection of talks.
   */
    public function getUpcoming($talks, array $eventData = [])
    {
        return $this->format($talks, $eventData)
            ->filter(function ($talk) {
                return $talk['event']['date'] >= $this->today;
            })
            ->sortBy('event.date');
    }

    /**
     * Get all past talks.
     *
     * @param ProxySourceCollection|array $talks All talk nodes.
     * @param array $eventData Shared event data.
     *
     * @return Collection A sorted collection of talks.
     */
    public function getPast($talks, array $eventData = [])
    {
        return $this->format($talks, $eventData)
            ->filter(function ($talk) {
                return $talk['event']['date'] < $this->today;
            })
            ->sortByDesc('event.date');
    }

  /**
   * Format the talk data into the required format.
   *
   * @param ProxySourceCollection|array $talks All talk nodes.
   * @param array $eventData Shared event data.
   *
   * @return Collection The combined event and talk data.
   */
    public function format($talks, array $eventData)
    {
        $eventData = collect($eventData);

        return collect($talks)->flatMap(function ($talk) use ($eventData) {
            // Build an associative array with the talk, as well as the
            // specified event data (e.g. date and time) as well as the shared
            // event data (e.g. event name and website).
            return collect($talk['events'])
                ->map(function ($event) use ($talk, $eventData) {
                    $event = collect($event);
                    $event = $event->merge($eventData->get($event->get('event')))->all();

                    return compact('event', 'talk');
                });
        });
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'format_talks';
    }
}
