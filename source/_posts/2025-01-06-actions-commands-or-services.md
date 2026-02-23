---
date: 2025-01-06
title: Actions, Commands or Services?
permalink: daily/2025/01/06/actions-commands-services
tags:
  - software-development
  - drupal
  - php
cta:
snippet: |-
  To Action or not to Action? I was writing a new class today and wondered whether it should be an Action, Command or Service. Which would you pick?
---

Today I started to write a new class and was trying to decide what to name it and what pattern I wanted to follow.

Option 1:

```php
class StoreInformationDownloader {

  public function download() {
    // ...
  }
}
```

Option 2:

```php
class DownloadStoreInformation {

  public function execute() {
    // ...
  }
}
```

Option 1 is a typical Service class.

Option 2 follows the Command or Action pattern.

Which would you choose?
