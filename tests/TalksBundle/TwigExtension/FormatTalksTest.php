<?php

namespace Tests\FormatTalksBundle\TwigExtension;

use DateTime;
use TalksBundle\TwigExtension\TalksExtension;
use Illuminate\Support\Collection;
use PHPUnit\Framework\TestCase;

class FormatTalksTest extends TestCase
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
    public function format_events()
    {
        $event_data = [
            'event-a' => [
                'name' => 'Event A',
                'location' => 'Somewhere',
                'website' => 'http://event-a.com',
            ],
            'event-b' => [
                'name' => 'Event B',
                'location' => 'Somewhere else',
                'website' => 'http://event-b.com',
            ],
        ];

        $talks = [
            [
                'title' => 'Talk A',
                'events' => [
                    ['event' => 'event-a', 'date' => strtotime('2018-01-01'), 'time' => '09:00'],
                    ['event' => 'event-b', 'date' => strtotime('2018-01-30'), 'time' => '12:00'],
                ],
            ],
            [
                'title' => 'Talk B',
                'events' => [
                    ['event' => 'event-b', 'date' => strtotime('2018-01-31'), 'time' => '17:00'],
                ],
            ],
        ];

        $results = $this->extension->format($talks, $event_data);

        $this->assertCount(3, $results);

        tap($results->first(), function ($result) {
            $this->assertArrayHasKey('event', $result);
            $this->assertArrayHasKey('talk', $result);

            $this->assertEquals([
                'date' => '1514764800',
                'event' => 'event-a',
                'location' => 'Somewhere',
                'name' => 'Event A',
                'time' => '09:00',
                'website' => 'http://event-a.com',
            ], $result['event']);

            $this->assertEquals('Talk A', $result['talk']['title']);
        });

        tap($results->get(1), function ($result) {
            $this->assertArrayHasKey('event', $result);
            $this->assertArrayHasKey('talk', $result);

            $this->assertEquals([
                'date' => 1517270400,
                'event' => 'event-b',
                'location' => 'Somewhere else',
                'name' => 'Event B',
                'time' => '12:00',
                'website' => 'http://event-b.com',
            ], $result['event']);

            $this->assertEquals('Talk A', $result['talk']['title']);
        });

        tap($results[2], function ($result) {
            $this->assertEquals('Talk B', $result['talk']['title']);
        });
    }

    /** @test */
    public function get_all_events()
    {
        $eventA = ['date' => (new DateTime('+1 week'))->getTimestamp()];
        $eventB = ['date' => (new DateTime('-2 weeks'))->getTimestamp()];
        $eventC = ['date' => (new DateTime('today'))->getTimestamp()];

        $talks = [
            ['events' => [$eventA, $eventB]],
            ['events' => [$eventC]],
        ];

        $results = $this->extension->getAll($talks);

        $this->assertCount(3, $results);

        // Earliest events should be returned first.
        $this->assertEquals(
            [$eventB['date'], $eventC['date'], $eventA['date']],
            $this->extractDates($results)
        );
    }

    /** @test */
    public function get_upcoming_events()
    {
        $eventA = ['date' => (new DateTime('+1 week'))->getTimestamp()];
        $eventB = ['date' => (new DateTime('-2 weeks'))->getTimestamp()];
        $eventC = ['date' => (new DateTime('today'))->getTimestamp()];
        $eventD = ['date' => (new DateTime('+1 day'))->getTimestamp()];
        $eventE = ['date' => (new DateTime('+2 weeks'))->getTimestamp()];

        $talks = [
            ['events' => [$eventA, $eventC]],
            ['events' => [$eventB, $eventE]],
        ];

        $results = $this->extension->getUpcoming($talks);

        $this->assertCount(3, $results);

        // Earliest events should be returned first.
        $this->assertEquals(
            [$eventC['date'], $eventA['date'], $eventE['date']],
            $this->extractDates($results)
        );
    }

    /** @test */
    public function get_past_events()
    {
        $eventA = ['date' => (new DateTime('+1 week'))->getTimestamp()];
        $eventB = ['date' => (new DateTime('-2 weeks'))->getTimestamp()];
        $eventC = ['date' => (new DateTime('today'))->getTimestamp()];
        $eventD = ['date' => (new DateTime('+1 day'))->getTimestamp()];
        $eventE = ['date' => (new DateTime('-2 days'))->getTimestamp()];
        $eventF = ['date' => (new DateTime('-2 months'))->getTimestamp()];

        $talks = [
            ['events' => [$eventD]],
            ['events' => [$eventA, $eventB, $eventC]],
            ['events' => [$eventF]],
        ];

        $results = $this->extension->getPast($talks);

        $this->assertCount(2, $results);

        // Latest events should be returned first.
        $this->assertEquals(
            [$eventB['date'], $eventF['date']],
            $this->extractDates($results)
        );
    }

    private function extractDates(Collection $results)
    {
        return $results->pluck('event.date')->all();
    }
}
