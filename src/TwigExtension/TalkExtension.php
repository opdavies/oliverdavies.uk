<?php

declare(strict_types=1);

namespace App\TwigExtension;

use App\Collection\TalkCollection;
use Illuminate\Support\Collection;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

final class TalkExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('get_last_event_date_for_talk', [$this, 'getLastEventDate']),
            new TwigFunction('get_past_talk_count', [$this, 'getPastTalkCount']),
        ];
    }

    public function getLastEventDate($talk): ?string
    {
        $events = new Collection($talk['events']);

        return $events->pluck('date')->sort()->last();
    }

    public function getPastTalkCount(iterable $talks = []): int
    {
        return $this->getEventsFromTalks($talks)->count();
    }

    private function getEventsFromTalks(iterable $talks): TalkCollection
    {
        $talkCollection = new TalkCollection($talks);

        return $talkCollection
            ->getEvents()
            ->onlyPastTalks();
    }
}

