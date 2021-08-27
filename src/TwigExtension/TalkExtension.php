<?php

declare(strict_types=1);

namespace App\TwigExtension;

use App\Collection\TalkCollection;
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

    private function getEventsFromTalks(iterable $talks): TalkCollection
    {
        $talkCollection = new TalkCollection($talks);

        return $talkCollection
            ->getEvents()
            ->onlyPastTalks();
    }
}

