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
    public function it_returns_zero_if_there_are_no_talks(): void
    {
        $this->assertSame(0, $this->subject->getPastTalkCount());
    }

    /** @test */
    public function it_counts_a_single_event_from_a_single_talk(): void
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
    public function it_counts_multiple_events_from_a_single_talk(): void
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
    public function it_counts_multiple_events_from_multiple_talks(): void
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
                'title' => 'TDD - Test Driven Drupal',
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
    public function it_excludes_future_talks(): void
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
                'title' => 'TDD - Test Driven Drupal',
                'events' => [
                    [
                        'date' => Carbon::today()->addDay()->format('Y-m-d'),
                    ],
                ],
            ],
        ];

        $this->assertSame(1, $this->subject->getPastTalkCount($talks));
    }
}
