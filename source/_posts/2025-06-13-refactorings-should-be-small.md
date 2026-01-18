---
title: Refactorings should be small
permalink: /daily/2025/06/13/refactorings-should-be-small
---

When refactoring code, try and make each change as small as possible.

Just renaming a variable to something easier to understand is a valid refactor.

So is extracting a small method or moving logic to another class.

I recently make [some refactoring commits](https://code.oliverdavies.uk/opdavies/oliverdavies.uk/commits/branch/main/search?q=Refactor) to my website and, rather than squashing them, I pushed them to show how simple refactoring can be.

It's easier to see and review each refactor separately in its own commit instead of in one large squashed commit.

It's also easier to keep the code in a working state if the refactors are smaller.

If you break the code whilst refactoring, get back to a working state as soon as possible - even if it means resetting back to the last working commit.

Don't keep making changes - it will be harder to get back to a working state.
