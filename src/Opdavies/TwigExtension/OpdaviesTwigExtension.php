<?php

namespace App\Opdavies\TwigExtension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class OpdaviesTwigExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('get_years_of_experience', [$this, 'getYearsOfExperience']),
        ];
    }

    public function getName(): string
    {
        return 'app.opdavies_twig_extension';
    }

    public function getYearsOfExperience(): int
    {
        return (new \DateTimeImmutable())->format('Y') - 2007;
    }
}
