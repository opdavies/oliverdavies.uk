<?php

namespace FormatTalksBundle\Tests\Twig;

use DateTime;
use FormatTalksBundle\Twig\FormatTalksExtension;
use PHPUnit_Framework_TestCase;

class FormatTalksTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var FormatTalksExtension
     */
    private $extension;

    /**
     * {@inheritdoc}
     */
    public function setUp()
    {
        $this->extension = new FormatTalksExtension();
    }

    public function testFormat()
    {
        $data = [
            'event_data' => [
                'event-one' => [
                    'name' => 'Event One',
                    'location' => 'Somewhere',
                    'website' => 'http://event-one.com',
                ],
                'event-two' => [
                    'name' => 'Event Two',
                    'location' => 'Somewhere else',
                    'website' => 'http://event-two.com',
                ],
            ],
            'talks' => [
                [
                    'title' => 'A talk',
                    'events' => [
                        ['event' => 'event-one', 'date' => '2018-01-01', 'time' => '09:00'],
                        ['event' => 'event-two', 'date' => '2018-01-30', 'time' => '12:00'],
                    ],
                ],
            ],
        ];

        $results = $this->extension->format($data)->all();

        tap($results[0], function ($result) {
            $this->assertArrayHasKey('event', $result);
            $this->assertArrayHasKey('talk', $result);

            $this->assertEquals([
                'date' => '2018-01-01',
                'event' => 'event-one',
                'location' => 'Somewhere',
                'name' => 'Event One',
                'time' => '09:00',
                'website' => 'http://event-one.com',
            ], $result['event']);
        });

        tap($results[1], function ($result) {
            $this->assertArrayHasKey('event', $result);
            $this->assertArrayHasKey('talk', $result);

            $this->assertEquals([
                'date' => '2018-01-30',
                'event' => 'event-two',
                'location' => 'Somewhere else',
                'name' => 'Event Two',
                'time' => '12:00',
                'website' => 'http://event-two.com',
            ], $result['event']);
        });
    }

    /**
     * Test getting all events.
     */
    public function testGetAll()
    {
        $eventA = ['date' => (new DateTime('+1 week'))->format('Y-m-d')];
        $eventB = ['date' => (new DateTime('-2 weeks'))->format('Y-m-d')];
        $eventC = ['date' => (new DateTime('today'))->format('Y-m-d')];

        $data = [
            'event_data' => [],
            'talks' => [
                ['events' => [$eventA, $eventB]],
                ['events' => [$eventC]],
            ],
        ];

        $results = $this->extension->getAll($data);

        $this->assertCount(3, $results);

        $this->assertEquals(
            [$eventA['date'], $eventC['date'], $eventB['date']],
            $this->extractDates($results)
        );
    }

    /**
     * Test getting only upcoming events.
     */
    public function testUpcomingEventsFilter()
    {
        $eventA = ['date' => (new DateTime('+1 week'))->format('Y-m-d')];
        $eventB = ['date' => (new DateTime('-2 weeks'))->format('Y-m-d')];
        $eventC = ['date' => (new DateTime('today'))->format('Y-m-d')];
        $eventD = ['date' => (new DateTime('+1 day'))->format('Y-m-d')];
        $eventE = ['date' => (new DateTime('+2 weeks'))->format('Y-m-d')];

        $data = [
            'event_data' => [],
            'talks' => [
                ['events' => [$eventA, $eventC]],
                ['events' => [$eventB, $eventE]],
            ],
        ];

        $results = $this->extension->getUpcoming($data);

        $this->assertCount(3, $results);

        $this->assertEquals(
            [$eventE['date'], $eventA['date'], $eventC['date']],
            $this->extractDates($results)
        );
    }

    /**
     * Test getting only past events.
     */
    public function testPastFilter()
    {
        $eventA = ['date' => (new DateTime('+1 week'))->format('Y-m-d')];
        $eventB = ['date' => (new DateTime('-2 weeks'))->format('Y-m-d')];
        $eventC = ['date' => (new DateTime('today'))->format('Y-m-d')];
        $eventD = ['date' => (new DateTime('+1 day'))->format('Y-m-d')];
        $eventE = ['date' => (new DateTime('-2 days'))->format('Y-m-d')];
        $eventF = ['date' => (new DateTime('-2 months'))->format('Y-m-d')];

        $data = [
            'event_data' => [],
            'talks' => [
                ['events' => [$eventD]],
                ['events' => [$eventA, $eventB, $eventC]],
                ['events' => [$eventF]],
            ],
        ];

        $results = $this->extension->getPast($data);

        $this->assertCount(2, $results);

        $this->assertEquals(
            [$eventB['date'], $eventF['date']],
            $this->extractDates($results)
        );
    }

    /**
     * Extract the returned dates from the results.
     *
     * @param array $results The results returned from the filter.
     *
     * @return array An array of dates.
     */
    private function extractDates(array $results)
    {
        return collect($results)->pluck('event.date')->all();
    }
}
