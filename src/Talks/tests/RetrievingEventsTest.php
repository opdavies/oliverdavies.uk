<?php

namespace App\Tests\Talks;

use App\Talks\TwigExtension\TalksExtension;
use DateTime;
use PHPUnit\Framework\TestCase;
use Tightenco\Collect\Support\Collection;

class RetrievingEventsTest extends TestCase
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
    public function getting_all_events()
    {
        $talkA = [
            'title' => 'Talk A',
            'events' => [
                [
                    'event' => 'event_a',
                    'date' => (new DateTime('-1 days'))->getTimestamp()
                ],
                [
                    'event' => 'event_b',
                    'date' => (new DateTime('+1 days'))->getTimestamp()
                ],
            ],
        ];

        $talkB = [
            'title' => 'Talk B',
            'events' => [
                [
                    'event' => 'event_a',
                    'date' => (new DateTime('-3 days'))->getTimestamp()
                ],
            ],
        ];

        $this->assertCount(3, $this->extension->getEvents([$talkA, $talkB]));
    }
}
