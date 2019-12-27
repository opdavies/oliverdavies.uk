<?php

namespace App\Tests\Talk\TwigExtension;

use App\Talk\TwigExtension\TalksExtension;
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
    public function setUp(): void
    {
        $this->extension = new TalksExtension();
    }

    /** @test */
    public function get_past_events()
    {
        $talkA = [
            'title' => 'Test Driven Drupal',
            'events' => [
                [
                    'event' => 'php_south_wales',
                    'date' => (new DateTime('+1 days'))->getTimestamp(),
                ],
                [
                    'event' => 'drupalcamp_london',
                    'date' => (new DateTime('-1 days'))->getTimestamp(),
                ],
            ],
        ];

        $talkB = [
            'title' => 'Taking Flight with Tailwind CSS',
            'events' => [
                [
                    'event' => 'blue_conf_2019',
                    'date' => (new DateTime('-2 days'))->getTimestamp(),
                ],
            ],
        ];

        $talks = $this->extension->getAllTalks([$talkA, $talkB]);
        $events = $this->extension->getPastEvents($talks);

        $this->assertInstanceOf(Collection::class, $talks);
        $this->assertInstanceOf(Collection::class, $events);

        $this->assertCount(2, $events);
    }

    /** @test */
    public function events_with_no_date_are_not_returned()
    {
        $talks = [
            [
                'title' => 'Deploying PHP applications with Ansible, Ansible Vault and Ansistrano',
                'events' => [
                    [
                        'event' => 'php_south_wales',
                        'date' => (new DateTime('-1 days'))->getTimestamp(),
                    ],
                    [
                        'event' => 'drupal_edinburgh',
                        'date' => '',
                    ],
                ],
            ],
        ];

        $this->assertSame(1, $this->extension->getPastTalkCount($talks));

        $pastEvents = $this->extension->getPastEvents($talks);
        $this->assertCount(1, $pastEvents);
        $this->assertSame('php_south_wales', $pastEvents[0]['event']);
    }
}
