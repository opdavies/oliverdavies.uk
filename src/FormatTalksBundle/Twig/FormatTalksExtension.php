<?php

namespace FormatTalksBundle\Twig;

use Illuminate\Support\Collection;
use Twig\TwigFunction;
use Twig_Extension;

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
            new TwigFunction('getAllTalks', [$this, 'getAll']),
            new TwigFunction('getUpcomingTalks', [$this, 'getUpcoming']),
            new TwigFunction('getPastTalks', [$this, 'getPast']),
        ];
    }

  /**
   * Get all upcoming and previous talks.
   *
   * Used to display the talk table on a specific talk page.
   *
   * @param array $data An associative array of talk and event data.
   *
   * @return array
   */
    public function getAll($talks, array $eventData = [])
    {
        return $this->format($talks, $eventData)->sortBy('event.date');
    }

  /**
   * Get all upcoming talks.
   *
   * Used on the main talks page.
   *
   * @return array
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
     * Used on the main talks page and the talks archive.
     *
     * @param array $data The talk and event data.
     *
     * @return array
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
   * @param array $data The talk and event data.
   *
   * @return Collection The event and talk data.
   */
    public function format($talks, array $event_data)
    {
        $event_data = collect($event_data);

        return collect($talks)->flatMap(function ($talk) use ($event_data) {
            // Build an associative array with the talk, as well as the
            // specified event data (e.g. date and time) as well as the shared
            // event data (e.g. event name and website).
            return collect($talk['events'])
                ->map(function ($event) use ($talk, $event_data) {
                    $event = collect($event);
                    $event = $event->merge($event_data->get($event->get('event')))->all();

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
