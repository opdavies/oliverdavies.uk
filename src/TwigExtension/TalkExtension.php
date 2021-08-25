<?php

declare(strict_types=1);

namespace App\TwigExtension;

use Illuminate\Support\Collection;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Webmozart\Assert\Assert;

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
            ->map(fn($talk): array => (array) $talk['events'])
            ->filter(function (array $event): bool {
                try {
                    Assert::keyExists($event, 'title');

                    return true;
                }
                catch (\RuntimeException $e) {
                    return false;
                }
            });
    }
}
