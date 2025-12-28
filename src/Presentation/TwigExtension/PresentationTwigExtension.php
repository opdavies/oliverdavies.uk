<?php

namespace App\Presentation\TwigExtension;

use App\Presentation\Collection\PresentationCollection;
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


    /**
     * @param ProxySourceItem[] $presentations
     */
    public function getPresentationCount(array $presentations): int
    {
        $presentationCollection = new PresentationCollection($presentations);

        return $presentationCollection->getPastEvents()->count();
    }
}
