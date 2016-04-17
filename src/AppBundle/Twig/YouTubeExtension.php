<?php

namespace AppBundle\Twig;

use Twig_Extension;
use Twig_SimpleFunction;

class YouTubeExtension extends Twig_Extension
{
    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return [
            new Twig_SimpleFunction('youtube', [$this, 'embedCode'], [
                'is_safe' => ['html']
            ])
        ];
    }

    /**
     * Generates the embed code for a video.
     *
     * @param $videoId
     *   The ID of the video.
     *
     * @return string
     */
    public function embedCode($videoId)
    {
        return sprintf(
            '<div class="embed-container">
            <iframe src="https://www.youtube.com/embed/%s" frameborder="0" allowfullscreen></iframe>
            </div>',
            $videoId
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'youtube';
    }

}
