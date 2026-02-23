---
date: 2025-01-18
title: TypeScript for PHP
permalink: daily/2025/01/18/typescript-php
tags:
  - software-development
  - php
  - static-analysis
  - phpstan
cta:
snippet: |-
  Are static analysis tools the same as TypeScript for PHP?
---

During one of Nuno Maduro's live streams, he was speaking about static analysis and PHPStan when either he or someone in the chat said "PHPStan is TypeScript for PHP".

I thought this was an interesting comparison.

PHP has types and type checking - the same as TypeScript - but it's only performed when the code is executed.

TypeScript's build step will run its type checks and identify any errors when compiling the application.

Static analysis tools do the same for PHP, allowing you to execute the type checks without executing the code.

The means you can do it from the command line, in an IDE or text editor, or in a CI pipeline.

[Nuno's follow-up YouTube video][0] is a great one to watch if you want to see static analysis and PHPStan in action!

[0]: https://www.youtube.com/watch?v=sOQC_-pkMYk
