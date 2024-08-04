<?php

namespace Modules\Talk\TwigExtension;

use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TalkTwigExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('get_past_talk_count', [$this, 'getPastTalkCount']),
        ];
    }

    public function getName(): string
    {
        return 'modules.talk';
    }

    public function getPastTalkCount(array $talks): int
    {
        $today = (new \DateTime('today'))->getTimestamp();

        return collect($talks)
            ->flatMap(fn (ProxySourceItem $talk) => $talk->data()->get('events'))
            ->filter(
                function (array $event) use ($today): bool {
                    assert(array_key_exists(array: $event, key: 'date'));

                    return $event['date'] < $today;
                }
            )
            ->count();
    }
}
