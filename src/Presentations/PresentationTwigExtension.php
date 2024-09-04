<?php

namespace App\Presentations;

use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class PresentationTwigExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('get_presentation_count', [$this, 'getPresentationCount']),
        ];
    }

    public function getName(): string
    {
        return 'presentations';
    }

    public function getPresentationCount(array $presentations): int
    {
        $today = (new \DateTime('today'))->getTimestamp();

        return collect($presentations)
            ->flatMap(fn (ProxySourceItem $presentation) => $presentation->data()->get('events'))
            ->filter(
                function (array $event) use ($today): bool {
                    assert(array_key_exists(array: $event, key: 'date'));

                    return $event['date'] < $today;
                }
            )
            ->count();
    }
}
