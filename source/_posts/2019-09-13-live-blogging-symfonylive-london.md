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
* Controller -> Command -> Command Bus -> Command Handler

### 2016

* New intern. Understand everything, 'just PHP'. Plain PHP application, not 'scary Symfony'
