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

    /**
     * Test getting all events.
     */
    public function testGetAll()
    {
        $eventA = ['date' => (new DateTime('+1 week'))->format('Y-m-d')];
        $eventB = ['date' => (new DateTime('-2 weeks'))->format('Y-m-d')];
        $eventC = ['date' => (new DateTime('today'))->format('Y-m-d')];

        $data = [
            'events' => [],
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
            'events' => [],
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
            'events' => [],
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
