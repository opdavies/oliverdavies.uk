---
title: Live Blogging From SymfonyLive London 2019
tags:
    - conference
    - symfony
    - symfonylive
    - php
---
Inspired by [Matt Stauffer](https://twitter.com/stauffermatt)'s [live blogging of the keynote](https://mattstauffer.com/blog/introducing-laravel-vapor) at Laracon US, I’m going to do the same for the sessions that I’m attending at [SymfonyLive London 2019](https://london2019.live.symfony.com)...

## Keynote (Back to the basics)

**Embrace the Linux philosophy**

* How we grow the Symfony ecosystem. Built abstracts.
* HttpFoundation, HttpKernel
* Moved to infrastructure
* A few abstractions on top of PHP. Improved versions of PHP functions (`dump` and `var_dump`)
* Started a add higher level abstractions (e.g. Mailer), built on the lower ones.
* Recently worked on PHPUnit assertions. Mailer in Symony 4.4. Can test if an email is sent or queued

**Building flexible high-level abstractions on top of low-level ones**

### What's next?

* Mailer announced in London last year. New component.
* System emails? e.g. new customer, new invoice.
* Symfony Mailer = Built-in responsive, flexible, and generic system emails
    - Twig with TwigExtraBundle
    - Twig `inky-extra` package (Twig 1.12+)
    - Zurb Foundation for Emails CSS stylesheet
    - Twig `cssinliner-extra` package (Twig 1.12+)
    - Optimised Twig layouts
* `SystemEmail` class extends templated email
* Can set importance, 
* Customisable
* Always trying to keep flexible, so things can be overidden and customised

### Sending SMS messages

* new `Texter` and `SmsMessage` class for sending SMS messages
* Same abstraction as emails, but for SMS messages
* Based on HttpClient + Symfony Messenger and third-party providers (Twilio and Nexmo) `twilio://` and `nemxo://`
* Can set via transport `$sms->setTransport('nexmo')`
* Extend the `SystemEmail` and do what you want
* Failover

### Sending Messages

* Create `ChatMessage`
* Telegram and Slack
* `$message->setTransport('telegram')`, `$bus->dispatch($message)`
* Send to Slack **and** Telegram
* `SlackOptions` and `TelegramOptions` for adding emojis etc
* Common transport layer `TransportInterface`, `MessageInterface`
* Failover - e.g. if Twilio is down, send to Telegram

### New component - SymfonyNotifier

* Channels - email, SMS, chat
* Transport, slack, telegram, twilio
* Create a notification, arguments are message and transports (array)
* Receiver
* Customise notifications, `InvoiceNotification` extends `Notification`. `getChannels`
    * Override default rendering
    * `ChatNotificationInterface` - `asChatMessage()`
* Semantic configuration
    * `composer req twilio-notifier telegram-notifier`
* Channels
    - Mailer
    - Chatter
    - Texter
    - Browser
    - Pusher (iOS, Android, Desktop native notifications)
    - Database (web notification centre)
    - **A unified way to notify Users via a unified Transport layer**
* Each integration is only 40 lines of code

### What about a SystemNotification?

* Autoconfigured channels
* `new SystemNotification`, `Notifier::getSystemReceivers`
* Importance, automatically configures channels
* Different channels based on importance
* `ExceptionNotification` - get email with stack trace attached

Notifier
* send messages via a unified api
* send to one or many receivers
* Default configu or custom one


### How can we leverage this new infrastructure?

* `Monolog NotifierHandler` - triggered on `Error` level logs
* Uses notified channel configuration
* Converts Error level logs to importance levels
* Configurablelike other Notifications
* 40 lines of code
* Failed Messages Listener - 10 lines of glue code

* **Experimental component in 5.0**
* Can't in in 4.4 as it's a LTS version
* First time an experimental component is added
* Stable in 5.1

## Queues, busses and the Messenger component (Tobias Nyholm)

* Stack is top and buttom - Last-in, first-out
* Queue is back and front - last in, first out

### 2013

* Using Symfony, used 40 or 50 bundles in a project - too much information!
* Used to copy and paste, duplicate a lot of code
* Testing your controllers - controllers as services?
* Controllers are 'comfortable'
* Tried adding `CurrentUserProvider` service to core, should be passed as an argument. Cannot test.
* 'Having Symfony all over the place wasn't the best thing' - when to framework (Matthias Noback)
    - Hexagonal architecture
    - Keep your kernel away from infrastructure. Let the framework handle the infrastructure.
* Controller -> Command -> Command Bus -> `CommandHandler`

#### What did we win?

* Can leverage Middleware with a command bus
* Queues as a service (RabbitMQ)
* Work queue - one producer, multiple consumers
* Queues should be durable - messages are also stored on disk, consumers should acknowledge a message once a message is handled
* Publish/subscribe
    - Producer -> Fanout/direct with routing (multiple queues) -> multiple consumers
* Topics - wildcards

### 2016

* New intern. Understand everything, 'just PHP'. Plain PHP application, not 'scary Symfony'

### Symfony Messenger

* `composer req symfony/messager` - best MessageBus implementation
* Message -> Message bus -> Message handler
* Message is a plain PHP class
* Handler is a normal PHP class which is invokable
* `messenger:message_hander` tag in config
* Autowire with `MessageHandlerInterface`
* What if it takes 20 seconds to send a message? Use asynchronous.
* Transports as middleware (needs sender, receiver, configurable with DSN, encode/decode). `MESSENGER_DSN` added to `.env`
* Start consumer with `bin/console messager:consume-messages`. Time limit with `--time-limit 300`
* PHP Enqueue - production ready, battle-tested messaging solution for PHP

### Issues

* Transformers, takes an object and transforms into an array - `FooTransformer implements TransformerInterface`.
* Don't break other apps by changing the payload.

#### Multiple buses

* Command bus, query bus, event bus
* Separate actions from reactions

#### Envelope

* Stamps for metadata - has the item been on the queue already?

#### Failures

* Requeue, different queue or same queue after a period of time
* Failed queue 1 every minute, failed queue 2 every hour - temporary glitches or a bug?

#### Creating entities

* What if two users registered at the same tiem? Use uuids rather than IDs.
* Symfony validation - can be used on messages, not just forms.

* Cache everything
    - Option 1: HTTP request -> Thin app (gets responses from Redis) -> POST to queue. Every GET request would warm cache
    - Option 2: HTTP request -> Thin app -> return 200 response -> pass to workers

* Tip: put Command and CommandHandlers in the same directory

## HttpClient (Nicolas Grekas)

* new symfony component, released in may
* Httpclient contracts, separate package that contains interfaces
    * Symfony
    * PHP-FIG
    * Httplug
* `HttpClient::create()`. `$client->get()`
* JSON decoded with error handling
* Used on symfony.com website (#1391). Replaces Guzzle `Client` for `HttpClientInterface`
* Object is stateless, Guzzle is not. Doesn't handle cookies, cookies are state
* Remove boilerplate - use `toArray()`
* Options as third argument - array of headers, similar to Guzzle

### What can we do with the Response?
* `getStatusCode(): int`
* `getHeaders(): array`
* `getContent(): string`
* `toArray(): array`
* `cancel(): void`
* `getInfo(): array` - metadata
* Everything is lazy!
* 80% of use-cases covered

### What about PSR-18?
* Decorator/adapter to change to PSR compatible
* Same for Httplug

### What about the remaining 20%?
* Options are part of the abstraction, not the implementation

#### Some of the options

* `timeout` - control inactivity periods
* `proxy` - get through a http proxy
* `on_progress` - display a progress bar / build a scoped client
* `base_url` - resolve relative URLS / build a scoped client
* `resolve` - protect webhooks against calls to internal endpoints
* `max_redirects` - disable or limit redirects

* Robust and failsafe by default

* Streamable uploads - `$mimeParts->toIterable()`.
* donwload a file

    ```php
    foreach ($client->stream($response) as $chunk) {
        // ... 
    }
    ```

- Responses are lazy, requests are concurrent
- Asychronus requests. Reading in network order
```
foreach ($client->stream($responses) as $response => $chunk) {
    if ($chunk->isLast()) {
        // a $response completed
    } else {
        // a $response's got network activity or timeout
    }
}
```

* 379 request completed in 0.4s!
* `Stream` has second argument, max number of seconds to wait before yielding a timeout chunk
* `ResponseInterface::getInfo()` - get response headers, redirect count and URL, start time, HTTP method and code, user data and URL
    * `getInfo('debug')` - displays debug information

### The components

* `NativeHttpClient` and `CurlHttpClient`
     - both provide
         + 100% contracts
         + secure directs
         + extended (time) info
         + transparent HTTP compression and (de)chunking
         + automatic HTTP proxy configuration via env vars
#### `NativeHttpClient`
- is most portable, works for everyone
- based on HTTP stream wrapper with fixed redirect logic
- blocking until response headers arrive

#### `CurlHttpClient`
-  Requires ext-curl with fixed redirection logic
-  Multiplexing response headers and bodies
-  Leverages HTTP/2 and PUSH when available
- Keeps connections open also between synchronous requests, no DNS resolution so things are faster

#### Decorators

- ScopingHttpClient - auto-configure options based on request URL
- MockHttpClient - for testing, doesn't make actual HTTP requests
- CachingHttpClient - adds caching on a HTTP request
- Psr18Client
- HttplugClient
- TraceableHttpClient

### Combining
#### FrameworkBundle/Autowiring

```yml
framework:
    http_client:
        max_host_connections: 4
        deault_options:
            # ....
    scoped_client:
        # ...
```
#### HttpBrowser

* HttpClient + DomCrawler + CssSelector + HttpKernel + BrowserKit
* RIP Goutte!

### Coming in 4.4...

- `max_duration`
- `buffer` based on a callable
- `$chunk->isInformational()`
- `$response->toStream()`
- Async-compatible extensibility, when decoration is not enough

`composer req symfony/http-client`

## Symfony Checker is coming (Valentine Boineau)

* Static analysis tool for Symfony
    - Does a method exist?
    - Is it deprecated?
* insight.symfony.com
* @symfonyinsight
* Released soon

### Differences
* Specialise in Symfony - can see more relevant things
* Different interface to other services
