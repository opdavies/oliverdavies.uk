<?php

namespace App\Tests;

use App\TwigExtension\TalkExtension;
use PHPUnit\Framework\TestCase;

final class TalkExtensionTest extends TestCase
{
    /** @test */
    public function it_returns_zero_if_there_are_no_talks(): void
    {
        $this->assertSame(0, (new TalkExtension())->getPastTalksCount([]));
    }
}
