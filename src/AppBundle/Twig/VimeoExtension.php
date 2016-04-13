<?php

namespace AppBundle\Twig;

use Twig_Extension;
use Twig_SimpleFunction;

class VimeoExtension extends Twig_Extension
{
    public function getFunctions()
    {
        return [
          new Twig_SimpleFunction('vimeo', [$this, 'embedCode'], [
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
            '<iframe src="https://player.vimeo.com/video/%s?title=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
            $videoId
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'vimeo';
    }

}
