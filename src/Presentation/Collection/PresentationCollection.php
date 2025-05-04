<?php

declare(strict_types=1);

namespace App\Presentation\Collection;

use DateTimeImmutable;
use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;

/**
 * @extends Collection<ProxySourceItem>
 */
final class PresentationCollection extends Collection
{
    /**
     * @return Collection<ProxySourceItem>
     */
    public function getAllEvents(): Collection
    {
        $events = array_reduce(
            array: $this->items,
            callback: function (array $events, ProxySourceItem $presentation): array {
                $events[] = $presentation->data()->get('events');

                return $events;
            },
            initial: [],
        );

        return new Collection(array_merge(...$events));
    }

    /**
     * @return Collection<ProxySourceItem>
     */
    public function getPastEvents(): Collection
    {
        $today = new DateTimeImmutable('today');

        return $this->getAllEvents()
            ->filter(fn(array $event) => $event['date'] < $today->getTimestamp());
    }
}
