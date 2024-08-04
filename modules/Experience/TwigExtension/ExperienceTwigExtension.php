<?php

namespace Modules\Experience\TwigExtension;

use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ExperienceTwigExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('get_years_of_experience', [$this, 'getYearsOfExperience']),
        ];
    }

    public function getName(): string
    {
        return 'modules.experience';
    }

    public function getYearsOfExperience(): int
    {
        return (new \DateTimeImmutable())->format('Y') - 2007;
    }
}
