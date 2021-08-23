<?php

declare(strict_types=1);

namespace App\TwigExtension;

use Illuminate\Support\Collection;

final class TalkExtension
{
    public function getPastTalksCount(array $talks = []): int
    {
        $talkCollection = new Collection($talks);

        return $talkCollection->count();
    }
}
