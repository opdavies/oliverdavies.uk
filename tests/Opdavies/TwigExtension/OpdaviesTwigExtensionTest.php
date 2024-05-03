<?php

namespace App\Tests\Opdavies\TwigExtension;

use App\Opdavies\TwigExtension\OpdaviesTwigExtension;
use Dflydev\DotAccessConfiguration\Configuration;
use PHPUnit\Framework\TestCase;
use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;

class OpdaviesTwigExtensionTest extends TestCase
{
    private OpdaviesTwigExtension $extension;

    public function setUp(): void
    {
        $this->extension = new OpdaviesTwigExtension();
    }

    public function testNoPastEvents(): void
    {
        $talk = $this->createTalk(
            events: [
                ['date' => (new \DateTime('+1 days'))->getTimestamp()],
            ],
        );

        self::assertSame(0, $this->extension->getPastTalkCount([$talk]));
    }

    public function testSinglePastEvent(): void
    {
        $talkA = $this->createTalk(
            events: [
                ['date' => (new \DateTime('+1 days'))->getTimestamp()],
            ],
        );

        $talkB = $this->createTalk(
            events: [
                ['date' => (new \DateTime('-3 days'))->getTimestamp()],
            ],
        );

        self::assertSame(1, $this->extension->getPastTalkCount([$talkA, $talkB]));
    }

    public function testSingleTalkWithMultiplePastEvents(): void
    {
        $talk = $this->createTalk(
            events: [
                ['date' => (new \DateTime('-1 days'))->getTimestamp()],
                ['date' => (new \DateTime('-1 week'))->getTimestamp()],
                ['date' => (new \DateTime('-1 year'))->getTimestamp()],
            ],
        );

        self::assertSame(3, $this->extension->getPastTalkCount([$talk]));
    }

    public function testSingleTalkWithMultiplePastAndFutureEvents(): void
    {
        $talk = $this->createTalk(
            events: [
                ['date' => (new \DateTime('+1 day'))->getTimestamp()],
                ['date' => (new \DateTime('-1 day'))->getTimestamp()],
                ['date' => (new \DateTime('-1 week'))->getTimestamp()],
                ['date' => (new \DateTime('+1 year'))->getTimestamp()],
                ['date' => (new \DateTime('-1 year'))->getTimestamp()],
            ],
        );

        self::assertSame(3, $this->extension->getPastTalkCount([$talk]));
    }

    public function testMultiplePastEvents(): void
    {
        $talkA = $this->createTalk(
            events: [
                ['date' => (new \DateTime('-1 days'))->getTimestamp()],
                ['date' => (new \DateTime('+1 days'))->getTimestamp()],
            ],
        );

        $talkB = $this->createTalk(
            events: [
                ['date' => (new \DateTime('-3 days'))->getTimestamp()],
            ],
        );

        self::assertSame(2, $this->extension->getPastTalkCount([$talkA, $talkB]));
    }

    /**
     * Create a mock talk with a list of events.
     */
    private function createTalk(array $events): ProxySourceItem
    {
        $configuration = $this->createMock(Configuration::class);
        $configuration->method('get')->with($this->identicalTo('events'))->willReturn($events);

        $talk = $this->createMock(ProxySourceItem::class);
        $talk->method('data')->willReturn($configuration);

        return $talk;
    }
}
