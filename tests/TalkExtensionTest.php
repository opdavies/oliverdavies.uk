<?php

namespace App\Tests;

use App\TwigExtension\TalkExtension;
use PHPUnit\Framework\TestCase;

final class TalkExtensionTest extends TestCase
{
    private TalkExtension $subject;

    public function setUp(): void
    {
        $this->subject = new TalkExtension();
    }

    /** @test */
    public function it_returns_zero_if_there_are_no_talks(): void
    {
        $this->assertSame(0, $this->subject->getPastTalkCount());
    }

    /** @test */
    public function it_counts_a_single_event_from_a_single_talk(): void
    {
        $talks = [
            [
                'title' => 'Building static sites with Sculpin',
                'events' => [
                    '',
                ]
            ],
        ];

        $this->assertSame(1, $this->subject->getPastTalkCount($talks));
    }

    /** @test */
    public function it_counts_multiple_events_from_a_single_talk(): void
    {
        $this->markTestIncomplete();
    }

    /** @test */
    public function it_counts_multiple_events_from_multiple_talks(): void
    {
        $this->markTestIncomplete();
    }

    /** @test */
    public function it_excludes_future_talks(): void
    {
        $this->markTestIncomplete();
    }
}
