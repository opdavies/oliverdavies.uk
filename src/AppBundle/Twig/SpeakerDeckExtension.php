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
            new Twig_SimpleFunction('speakerdeck', [$this, 'embedCode']),
        ];
    }

    public function embedCode($dataId, $dataRatio)
    {
//        <script async class="speakerdeck-embed" data-id="0041804e52664d12a8e31cd118264813" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
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
