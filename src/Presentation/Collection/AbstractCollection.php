<?php

declare(strict_types=1);

namespace App\Presentation\Collection;

use ArrayIterator;
use Countable;
use Iterator;
use IteratorAggregate;

abstract class AbstractCollection implements Countable, IteratorAggregate
{
    public function __construct(protected array $items = [])
    {
    }

    public function count(): int
    {
        return count($this->items);
    }

    public function filter(callable $callback): self
    {
        return new static(
            array_filter(
                array: $this->items,
                callback: $callback,
            )
        );
    }

    public function getIterator(): Iterator
    {
        return new ArrayIterator($this->items);
    }

    public function toArray(): array
    {
        return $this->items;
    }
}
