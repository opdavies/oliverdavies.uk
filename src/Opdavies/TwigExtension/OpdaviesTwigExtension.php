<?php

namespace App\Opdavies\TwigExtension;

use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class OpdaviesTwigExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('get_past_talk_count', [$this, 'getPastTalkCount']),
            new TwigFunction('get_years_of_experience', [$this, 'getYearsOfExperience']),
        ];
    }

    public function getName(): string
    {
        return 'app.opdavies_twig_extension';
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

    public function getYearsOfExperience(): int
    {
        return (new \DateTimeImmutable())->format('Y') - 2007;
    }
}
