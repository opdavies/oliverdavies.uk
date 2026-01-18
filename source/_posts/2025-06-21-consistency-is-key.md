---
title: Consistency is key
permalink: /daily/2025/06/21/consistency-key
---

Yesterday, I wrote about some of my [thoughts about the Action pattern](/daily/2025/06/20/my-thoughts-action-pattern) that's become popular with PHP Developers.

I showed an example based on the `AddRandomCtaToDailyEmail` action class from my website.

But, how should these classes be named?

Should my example by `AddRandomCtaToDailyEmail` or `AddRandomCtaToDailyEmailAction`?

Should my `Ctas` class - a collection of "Call to Action" nodes - be `Ctas` or `CtaCollection`?

In these examples, I think the class name is descriptive enough that it doesn't need to be suffixed.

In other cases, such as Controller classes, Interfaces, and classes that follow other design patterns such as Repositories, Factories and Builders, I will prefix to make it clearer which pattern they implement.

Some projects have an existing coding standard and guidelines to follow, and some will have contribution documentation or a style guide to explain which patterns to follow and how to name things so changes are consistent with the rest of the project.

Consider doing the same for your software.

Document your rules and conventions for your current and future team members.

The [Spatie Guidelines](https://spatie.be/guidelines) are a great example to follow.

Then, make sure they are followed when the code is being reviewed, either in a pull/merge request or during a pair or mob programming session.

Having consistent approaches makes projects more robust and easier to work on.
