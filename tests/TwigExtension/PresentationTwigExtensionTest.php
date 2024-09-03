<?php

namespace Tests\Presentations\Tests\TwigExtension;

use App\Presentations\TwigExtension\PresentationTwigExtension;
use Dflydev\DotAccessConfiguration\Configuration;
use PHPUnit\Framework\TestCase;
use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;

class PresentationTwigExtensionTest extends TestCase
{
    private PresentationTwigExtension $extension;

    public function setUp(): void
    {
        $this->extension = new PresentationTwigExtension();
    }

    public function testNoPastEvents(): void
    {
        $presentation = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('+1 days'))->getTimestamp()],
            ],
        );

        $this->assertPresentationCount(expectedCount: 0, presentations: [$presentation]);
    }

    public function testSinglePastEvent(): void
    {
        $presentationA = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('+1 days'))->getTimestamp()],
            ],
        );

        $presentationB = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('-3 days'))->getTimestamp()],
            ],
        );

        $this->assertPresentationCount(expectedCount: 1, presentations: [$presentationA, $presentationB]);
    }

    public function testSinglePresentationWithMultiplePastEvents(): void
    {
        $presentation = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('-1 days'))->getTimestamp()],
                ['date' => (new \DateTime('-1 week'))->getTimestamp()],
                ['date' => (new \DateTime('-1 year'))->getTimestamp()],
            ],
        );

        $this->assertPresentationCount(expectedCount: 3, presentations: [$presentation]);
    }

    public function testSinglePresentationWithMultiplePastAndFutureEvents(): void
    {
        $presentation = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('+1 day'))->getTimestamp()],
                ['date' => (new \DateTime('-1 day'))->getTimestamp()],
                ['date' => (new \DateTime('-1 week'))->getTimestamp()],
                ['date' => (new \DateTime('+1 year'))->getTimestamp()],
                ['date' => (new \DateTime('-1 year'))->getTimestamp()],
            ],
        );

        $this->assertPresentationCount(expectedCount: 3, presentations: [$presentation]);
    }

    public function testMultiplePastEvents(): void
    {
        $presentationA = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('-1 days'))->getTimestamp()],
                ['date' => (new \DateTime('+1 days'))->getTimestamp()],
            ],
        );

        $presentationB = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('-3 days'))->getTimestamp()],
            ],
        );

        $this->assertPresentationCount(expectedCount: 2, presentations: [$presentationA, $presentationB]);
    }

    public function testTheCurrentDayIsNotCounted(): void
    {
        $presentationA = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('yesterday'))->getTimestamp()],
                ['date' => (new \DateTime('today'))->getTimestamp()],
            ],
        );

        $presentationB = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('today'))->getTimestamp()],
            ],
        );

        $presentationC = $this->createPresentation(
            events: [
                ['date' => (new \DateTime('yesterday'))->getTimestamp()],
            ],
        );

        $this->assertPresentationCount(expectedCount: 2, presentations: [$presentationA, $presentationB, $presentationC]);
    }

    /**
     * Assert the extension uses the correct number of presentations.
     */
    private function assertPresentationCount(int $expectedCount, array $presentations): void
    {
        self::assertSame(
            actual: $this->extension->getPresentationCount($presentations),
            expected: $expectedCount,
        );
    }

    /**
     * Create a mock presentation with a list of events.
     */
    private function createPresentation(array $events): ProxySourceItem
    {
        $configuration = $this->createMock(Configuration::class);
        $configuration->method('get')->with($this->identicalTo('events'))->willReturn($events);

        $presentation = $this->createMock(ProxySourceItem::class);
        $presentation->method('data')->willReturn($configuration);

        return $presentation;
    }
}
