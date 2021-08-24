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

    public function getPastTalkCount(array $talks = []): int
    {
        $talkCollection = new Collection($talks);

        return $talkCollection->count();
    }
}
