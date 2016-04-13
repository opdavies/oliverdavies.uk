<?php

namespace AppBundle\Twig;

use Twig_Extension;
use Twig_SimpleFunction;

class SpeakerDeckExtension extends Twig_Extension
{
    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return [
            new Twig_SimpleFunction('speakerdeck', [$this, 'embedCode'], [
                'is_safe' => ['html']
            ]),
        ];
    }

    public function embedCode($dataId, $dataRatio)
    {
        return sprintf(
            '<script async class="speakerdeck-embed" data-id="%s" data-ratio="%s" src="//speakerdeck.com/assets/embed.js"></script>',
            $dataId,
            $dataRatio
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'speakerdeck';
    }

}
