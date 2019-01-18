<?php

namespace Tests\FormatTalksBundle\TwigExtension;

use DateTime;
use TalksBundle\TwigExtension\TalksExtension;
use Illuminate\Support\Collection;
use PHPUnit\Framework\TestCase;

class TalksExtensionTest extends TestCase
{
    /**
     * @var TalksExtension
     */
    private $extension;

    /**
     * {@inheritdoc}
     */
    public function setUp()
    {
        $this->extension = new TalksExtension();
    }

    /** @test */
    public function talks_given_multiple_times_are_only_returned_once()
    {
        $talkA = [
            'title' => 'Talk A',
            'events' => [
                ['event' => 'event_a', 'date' => (new DateTime('-1 days'))->format(TalksExtension::DATE_FORMAT)],
                ['event' => 'event_b', 'date' => (new DateTime('+1 days'))->format(TalksExtension::DATE_FORMAT)],
            ],
        ];

        $talkB = [
            'title' => 'Talk B',
            'events' => [
                ['event' => 'event_a', 'date' => (new DateTime('-3 days'))->format(TalksExtension::DATE_FORMAT)],
            ],
        ];

        $this->assertCount(2, $this->extension->getAll([$talkA, $talkB]));
    }

    /** @test */
    public function talks_are_ordered_by_the_most_recent_event_date()
    {
        $this->markTestIncomplete();
    }

    /** @test */
    public function only_past_events_can_be_retrieved()
    {
        $this->markTestIncomplete();
    }

    /** @test */
    public function only_future_events_can_be_retrieved()
    {
        $this->markTestIncomplete();
    }
}
