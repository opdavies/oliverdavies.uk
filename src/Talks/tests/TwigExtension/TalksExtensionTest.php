<?php

namespace App\Tests\Talks\TwigExtension;

use DateTime;
use App\Talks\TwigExtension\TalksExtension;
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
                ['event' => 'event_a', 'date' => (new DateTime('-1 days'))->getTimestamp()],
                ['event' => 'event_b', 'date' => (new DateTime('+1 days'))->getTimestamp()],
            ],
        ];

        $talkB = [
            'title' => 'Talk B',
            'events' => [
                ['event' => 'event_a', 'date' => (new DateTime('-3 days'))->getTimestamp()],
            ],
        ];

        $this->assertCount(2, $this->extension->getAll([$talkA, $talkB]));
    }

    /** @test */
    public function talks_are_ordered_by_the_most_recent_event_date()
    {
        $talkA = [
            'title' => 'Talk A',
            'events' => [
                ['event' => 'event_a', 'date' => (new DateTime('-5 days'))->getTimestamp()],
            ],
        ];

        $talkB = [
            'title' => 'Talk B',
            'events' => [
                ['event' => 'event_a', 'date' => (new DateTime('-20 days'))->getTimestamp()],
            ],
        ];

        $talkC = [
            'title' => 'Talk C',
            'events' => [
                ['event' => 'event_a', 'date' => (new DateTime('-3 days'))->getTimestamp()],
                ['event' => 'event_b', 'date' => (new DateTime('-10 days'))->getTimestamp()],
            ],
        ];

        $unorderedTalks = [$talkC, $talkA, $talkB];
        $orderedTalks = $this->extension->getAll($unorderedTalks);

        $this->assertEquals([$talkC, $talkA, $talkB], $orderedTalks->toArray());
    }

    /** @test */
    public function only_past_talks_can_be_retrieved()
    {
        $pastTalk = [
            'title' => 'Past talk',
            'events' => [
                ['date' => (new DateTime('-1 day'))->getTimestamp()],
            ]
        ];

        $futureTalk = [
            'title' => 'Future talk',
            'events' => [
                ['date' => (new DateTime('+1 day'))->getTimestamp()],
            ],
        ];

        $result = $this->extension->getPast([$pastTalk, $futureTalk]);

        $this->assertCount(1, $result);
        $this->assertSame($pastTalk, $result->first());
    }

    /** @test */
    public function only_current_and_future_talks_can_be_retrieved()
    {
        $pastTalk = [
            'title' => 'Past talk',
            'events' => [
                ['date' => (new DateTime('-1 day'))->getTimestamp()],
            ]
        ];

        $todayTalk = [
            'title' => 'A talk that it happening today',
            'events' => [
                ['date' => (new DateTime('now'))->getTimestamp()],
            ],
        ];

        $futureTalk = [
            'title' => 'Future talk',
            'events' => [
                ['date' => (new DateTime('+1 day'))->getTimestamp()],
            ],
        ];

        $result = $this->extension->getUpcoming([$pastTalk, $todayTalk, $futureTalk]);

        $this->assertCount(2, $result);
        $this->assertSame([$todayTalk, $futureTalk], $result->toArray());
    }

    /** @test */
    public function if_a_talk_is_both_upcoming_and_past_then_it_is_only_shown_as_upcoming()
    {
        $talk = [
            'title' => 'An upcoming talk that has been given before',
            'events' => [
                ['date' => (new DateTime('-1 week'))->getTimestamp()],
                ['date' => (new DateTime('+1 week'))->getTimestamp()],
            ],
        ];

        $this->assertCount(1, $this->extension->getUpcoming([$talk]));
        $this->assertEmpty($this->extension->getPast([$talk]));
    }
}
