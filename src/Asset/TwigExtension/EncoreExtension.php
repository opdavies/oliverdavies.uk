<?php

declare(strict_types=1);

namespace App\Asset\TwigExtension;

use Sculpin\Contrib\ProxySourceCollection\ProxySourceCollection;
use Tightenco\Collect\Support\Collection;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class EncoreExtension extends AbstractExtension
{
    /** @var string */
    private $manifestDir;

    /**
     * {@inheritdoc}
     */
    public function __construct(string $manifestDir)
    {
        $this->manifestDir = $manifestDir;
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'app.encore';
    }

    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return [
            new TwigFunction('asset', [$this, 'generateAssetPaths']),
        ];
    }

    public function generateAssetPaths(string $assetName): string
    {
        if (!$manifest = file_get_contents($this->manifestPath($assetName))) {
            return $this->defaultPath($assetName);
        }

        return (new Collection(json_decode($manifest, true)))
            ->get($assetName, $assetName);
    }

    private function manifestPath(string $assetName): string
    {
        return preg_replace('/(?<=\/)[\w.]+$/', 'manifest.json', $this->defaultPath($assetName)) ?? $this->defaultPath($assetName);
    }

    private function defaultPath(string $assetName): string
    {
        return "{$this->manifestDir}/{$assetName}";
    }
}
