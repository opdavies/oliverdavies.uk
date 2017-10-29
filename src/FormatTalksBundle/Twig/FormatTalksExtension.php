<?php

namespace FormatTalksBundle\Twig;

use Illuminate\Support\Collection;
use Twig_Extension;
use Twig_SimpleFilter;

class FormatTalksExtension extends Twig_Extension
{
    /**
     * @var string The current date.
     */
    private $today;

    /**
     * {@inheritdoc}
     */
    public function getFilters()
    {
        $this->today = (new \DateTime())->format('Y-m-d');

        return [
            new Twig_SimpleFilter('all_talks', [$this, 'getAll']),
            new Twig_SimpleFilter('upcoming_talks', [$this, 'getUpcoming']),
            new Twig_SimpleFilter('past_talks', [$this, 'getPast']),
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
    public function getAll(array $data) {
        return $this->sort($this->format($data));
    }

  /**
   * Get all upcoming talks.
   *
   * Used on the main talks page.
   *
   * @param array $data The talk and event data.
   *
   * @return array
   */
    public function getUpcoming(array $data) {
        $talks = $this->format($data)->filter(function ($talk) {
            return $talk['event']['date'] >= $this->today;
        });

        return $this->sort($talks);
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
    public function getPast(array $data) {
        $talks = $this->format($data)->filter(function ($talk) {
            return $talk['event']['date'] < $this->today;
        });

        return $this->sort($talks);
    }

  /**
   * Format the talk data into the required format.
   *
   * @param array $data The talk and event data.
   *
   * @return Collection The event and talk data.
   */
    public function format(array $data)
    {
        $events = collect($data['events']);

        return collect($data['talks'])->flatMap(function ($talk) use ($events) {
            // Build an associative array with the talk, as well as the
            // specified event data (e.g. date and time) as well as the shared
            // event data (e.g. event name and website).
            return collect($talk['events'])->map(function ($event) use ($talk, $events) {
                $event = collect($event);
                $event = $event->merge($events->get($event->get('event')));

                return compact('event', 'talk');
            });
        });
    }

  /**
   * Sort and return the talks.
   *
   * @param Collection $talks The talk data.
   *
   * @return array
   */
    private function sort(Collection $talks)
    {
        return $talks->sortByDesc('event.date')->all();
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'format_talks';
    }
}
