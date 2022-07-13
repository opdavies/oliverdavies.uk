<?php

namespace App\Tests;

use App\TwigExtension\TalkExtension;
use Carbon\Carbon;
use PHPUnit\Framework\TestCase;

final class TalkExtensionTest extends TestCase
{
    private TalkExtension $subject;

    public function setUp(): void
    {
        $this->subject = new TalkExtension();
    }

    /** @test */
    public function should_return_zero_if_there_are_no_talks(): void
    {
        $this->assertSame(0, $this->subject->getPastTalkCount());
    }

    /** @test */
    public function should_count_a_single_event_from_a_single_talk(): void
    {
        $talks = [
            [
                'title' => 'Building static sites with Sculpin',
                'events' => [
                    [
                        'date' => Carbon::today()->subDay()->format('Y-m-d'),
                    ],
                ]
            ],
        ];

        $this->assertSame(1, $this->subject->getPastTalkCount($talks));
    }

    /** @test */
    public function should_count_multiple_events_from_a_single_talk(): void
    {
        $talks = [
            [
                'title' => 'Building static sites with Sculpin',
                'events' => [
                    [
                        'date' => Carbon::today()->subDay()->format('Y-m-d'),
                    ],
                    [
                        'date' => Carbon::today()->subDay()->format('Y-m-d'),
                    ],
                ]
            ],
        ];

        $this->assertSame(2, $this->subject->getPastTalkCount($talks));
    }

    /** @test */
    public function should_count_multiple_events_from_multiple_talks(): void
    {
        $talks = [
            [
                'title' => 'Building static sites with Sculpin',
                'events' => [
                    [
                        'date' => Carbon::today()->subDay()->format('Y-m-d'),
                    ],
                ]
            ],
            [
                'title' => 'TDD - Test-Driven Drupal',
                'events' => [
                    [
                        'date' => Carbon::today()->subDay()->format('Y-m-d'),
                    ],
                ]
            ],
        ];

        $this->assertSame(2, $this->subject->getPastTalkCount($talks));
    }

    /** @test */
    public function should_not_count_future_talks(): void
    {
        $talks = [
            [
                'title' => 'Building static sites with Sculpin',
                'events' => [
                    [
                        'date' => Carbon::today()->subDay()->format('Y-m-d'),
                    ],
                ],
            ],
            [
                'title' => 'TDD - Test-Driven Drupal',
                'events' => [
                    [
                        'date' => Carbon::today()->addDay()->format('Y-m-d'),
                    ],
                ],
            ],
        ];

        $this->assertSame(1, $this->subject->getPastTalkCount($talks));
    }

    /** @test */
    public function should_get_the_last_event_date_for_a_talk(): void
    {
        $talk = [
            'events' => [
                ['date' => '2015-10-14'],
                ['date' => '2021-09-07'],
                ['date' => '2021-08-19'],
            ],
        ];

        $this->assertSame('2021-09-07', $this->subject->getLastEventDate($talk));
    }

    /** @test */
    public function should_return_null_for_the_latest_date_if_a_talk_has_no_events(): void
    {
        $talk = [
            'events' => [],
        ];

        $this->assertNull($this->subject->getLastEventDate($talk));
    }
}
