---
title: Learning lessons
permalink: /daily/2025/05/19/learning-lessons
---

<p>Once you've <a href="/daily/2025/05/18/how-quickly-can-you-get-back-online">resolved an issue and restored service</a>, what lessons can be learned to ensure the same issue doesn't happen again?</p><p>Could the issue have been caught or identified sooner, before it got to production?</p><p>Ideally, an issue would be identified in a local environment, in a CI pipeline or a staging environment.</p><p>Anything before production, but the sooner, the better.</p><p>Can you introduce more tools or automated checks?</p><p>PHP in particular has a lot of tools for linting, analysing and testing code, such as PHPStan and PHPUnit.</p><p>These can be run locally or automatically within a CI pipeline.</p><p>If the pipeline is passing, the code should be deployable.</p><p>But, if there is an issue, what needs to be added to the pipeline that would have identified it?</p><p>How can you iterate and make your development and deployment processes better and more robust?</p>
