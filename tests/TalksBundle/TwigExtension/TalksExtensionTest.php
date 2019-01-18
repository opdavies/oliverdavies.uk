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
        $this->markTestIncomplete();
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
