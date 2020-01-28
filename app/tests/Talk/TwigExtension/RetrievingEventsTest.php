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

    /** @test */
    public function get_all_of_the_events_for_a_talk()
    {
        $talk = [
            'title' => 'TDD - Test Driven Drupal',
            'events' => [
                [
                    'event' => 'drupal_developer_days_2018',
                    'date' => (new DateTime('-1 day'))->getTimestamp(),
                ],
                [
                    'event' => 'drupalcamp_london_2019',
                    'date' => (new DateTime('+1 day'))->getTimestamp(),
                ],
            ],
        ];

        $eventData = [
            'drupal_developer_days_2018' => [
                'name' => 'Drupal Developer Days, Lisbon 2018',
            ],
            'drupalcamp_london_2019' => [
                'name' => 'DrupalCamp London 2019',
            ],
        ];

        $events = $this->extension->getEventsForTalk($talk, $eventData);

        $this->assertCount(2, $events);
        $this->assertSame(
            ['drupal_developer_days_2018', 'drupalcamp_london_2019'],
            $events->pluck('event')->toArray()
        );
    }

    /** @test */
    public function events_with_no_date_are_not_returned_for_an_event()
    {
        $talk = [
            'title' => 'TDD - Test Driven Drupal',
            'events' => [
                [
                    'event' => 'drupal_developer_days_2018',
                    'date' => (new DateTime('-2 days'))->getTimestamp(),
                ],
                [
                    'event' => 'drupalcamp_london_2019',
                    'date' => '',
                ],
            ],
        ];

        $eventData = [
            'drupal_developer_days_2018' => [
                'name' => 'Drupal Developer Days, Lisbon 2018',
            ],
            'drupalcamp_london_2019' => [
                'name' => 'DrupalCamp London 2019',
            ],
        ];

        $events = $this->extension->getEventsForTalk($talk, $eventData);

        $this->assertCount(1, $events);
        $this->assertSame('drupal_developer_days_2018', $events->pluck('event')->first());
    }

    /** @test */
    public function specific_event_urls_override_global_urls()
    {
        $this->markTestSkipped();
    }
}
