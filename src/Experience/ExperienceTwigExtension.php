<?php

namespace App\Experience;

use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ExperienceTwigExtension extends AbstractExtension
{
    private static $startYear = 2007;

    public function getFunctions(): array
    {
        return [
            new TwigFunction('get_years_of_experience', [$this, 'getYearsOfExperience']),
        ];
    }

    public function getName(): string
    {
        return 'experience';
    }

    public function getYearsOfExperience(): int
    {
        return (new \DateTimeImmutable())->format('Y') - self::$startYear;
    }
}
