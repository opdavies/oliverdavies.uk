<?php

declare(strict_types=1);

namespace App\Presentation\Collection;

use DateTimeImmutable;
use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;

final class PresentationCollection extends AbstractCollection
{
    public function getAllEvents(): EventCollection
    {
        $events = array_reduce(
            array: $this->items,
            callback: function (array $events, ProxySourceItem $presentation): array {
                $events[] = $presentation->data()->get('events');

                return $events;
            },
            initial: [],
        );

        return new EventCollection(array_merge(...$events));
    }

    public function getPastEvents(): EventCollection
    {
        $today = new DateTimeImmutable('today');

        return $this->getAllEvents()
            ->filter(fn(array $event) => $event['date'] < $today->getTimestamp());
    }
}
