<?php

namespace App\Tests\Talk\TwigExtension;

use App\Talk\TwigExtension\TalksExtension;
use DateTime;
use PHPUnit\Framework\TestCase;
use Tightenco\Collect\Support\Collection;

class RetrievingTalksTest extends TestCase
{
    /**
     * @var TalksExtension
     */
    private $extension;

    /**
     * {@inheritdoc}
     */
    public function setUp(): void
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

        $this->assertCount(2, $this->extension->getAllTalks([$talkA, $talkB]));
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
        $orderedTalks = $this->extension->getAllTalks($unorderedTalks);

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

        $talks = $this->extension->getPastTalks([$pastTalk, $futureTalk]);
        $this->assertCount(1, $talks);
        $this->assertSame($pastTalk, $talks->first());
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

        $talks = $this->extension->getUpcomingTalks([$pastTalk, $todayTalk, $futureTalk]);
        $this->assertSame(2, $talks->count());
        $this->assertSame([$todayTalk, $futureTalk], $talks->toArray());
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

        $this->assertCount(1, $this->extension->getUpcomingTalks([$talk]));
        $this->assertEmpty($this->extension->getPastTalks([$talk]));
    }

    /** @test */
    public function get_events_from_talks()
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

        $talks = new Collection([$talkA, $talkB]);
        $events = $this->extension->getAllEvents($talks);

        $this->assertCount(3, $events);
        $this->assertSame(['event_a', 'event_b', 'event_a'], $events->pluck('event')->toArray());
        $this->assertSame(3, $events->pluck('date')->unique()->count());
    }
}
