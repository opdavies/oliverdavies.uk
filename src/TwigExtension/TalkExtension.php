<?php

declare(strict_types=1);

namespace App\TwigExtension;

use App\Collection\TalkCollection;
use Illuminate\Support\Collection;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * @template TKey of array-key
 * @template TValue
 */
final class TalkExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('get_last_event_date_for_talk', [$this, 'getLastEventDate']),
            new TwigFunction('get_past_talk_count', [$this, 'getPastTalkCount']),
        ];
    }

    /**
     * @param TValue $talk
     */
    public function getLastEventDate($talk): ?string
    {
        return Collection::make($talk['events'])
            ->pluck('date')
            ->sort()
            ->last();
    }

    /**
     * @param iterable<int, TValue> $talks
     */
    public function getPastTalkCount(iterable $talks = []): int
    {
        return $this->getEventsFromTalks($talks)->count();
    }

    /**
     * @param iterable<int, TValue> $talks
     *
     * @return TalkCollection<int, TValue>
     */
    private function getEventsFromTalks(iterable $talks): TalkCollection
    {
        $talkCollection = new TalkCollection($talks);

        return $talkCollection
            ->getEvents()
            ->onlyPastTalks();
    }
}

