<?php

namespace Modules\Talk\Tests\TwigExtension;

use Dflydev\DotAccessConfiguration\Configuration;
use Modules\Talk\TwigExtension\TalkTwigExtension;
use PHPUnit\Framework\TestCase;
use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;

class TalkTwigExtensionTest extends TestCase
{
    private TalkTwigExtension $extension;

    public function setUp(): void
    {
        $this->extension = new TalkTwigExtension();
    }

    public function testNoPastEvents(): void
    {
        $talk = $this->createTalk(
            events: [
                ['date' => (new \DateTime('+1 days'))->getTimestamp()],
            ],
        );

        $this->assertTalkCount(expectedCount: 0, talks: [$talk]);
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

        $this->assertTalkCount(expectedCount: 1, talks: [$talkA, $talkB]);
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

        $this->assertTalkCount(expectedCount: 3, talks: [$talk]);
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

        $this->assertTalkCount(expectedCount: 3, talks: [$talk]);
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

        $this->assertTalkCount(expectedCount: 2, talks: [$talkA, $talkB]);
    }

    public function testTheCurrentDayIsNotCounted(): void
    {
        $talkA = $this->createTalk(
            events: [
                ['date' => (new \DateTime('yesterday'))->getTimestamp()],
                ['date' => (new \DateTime('today'))->getTimestamp()],
            ],
        );

        $talkB = $this->createTalk(
            events: [
                ['date' => (new \DateTime('today'))->getTimestamp()],
            ],
        );

        $talkC = $this->createTalk(
            events: [
                ['date' => (new \DateTime('yesterday'))->getTimestamp()],
            ],
        );

        $this->assertTalkCount(expectedCount: 2, talks: [$talkA, $talkB, $talkC]);
    }

    /**
     * Assert the extension uses the correct number of talks.
     */
    private function assertTalkCount(int $expectedCount, array $talks): void
    {
        self::assertSame(
            actual: $this->extension->getPastTalkCount($talks),
            expected: $expectedCount,
        );
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
