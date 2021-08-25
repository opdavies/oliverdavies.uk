<?php

declare(strict_types=1);

namespace App\TwigExtension;

use Illuminate\Support\Collection;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

final class TalkExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('get_past_talk_count', [$this, 'getPastTalkCount']),
        ];
    }

    public function getPastTalkCount(iterable $talks = []): int
    {
        return $this->getEventsFromTalks($talks)->count();
    }

    private function getEventsFromTalks(iterable $talks): Collection
    {
        $talkCollection = new Collection($talks);

        return $talkCollection
            ->flatMap(fn($talk): array => (array) $talk['events']);
    }
}
