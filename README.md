# oliverdavies.uk

[My personal website][website], built with [Sculpin][] - a PHP-based static site generator.

It contains pages about my products, services, public speaking and training, as well as my daily email archive, podcast episodes and old blog posts from earlier versions of the website.

## Styling

The styling is done using [Tailwind CSS].

## BrowserSync

I have [BrowserSync][] installed and use it to watch for changes to files and [automatically refresh my browser][0] instead of using Sculpin's built-in development server.

## Hosting

The website is hosted on a 1GB DigitalOcean droplet alongside other static websites.

I'm using Apache as my web server so I can easily manage redirects using the `.htaccess` file within the `source` directory..

As it's a static website, no PHP or database are needed.

[0]: https://www.oliverdavies.uk/blog/sculpin-browsersync
[browsersync]: https://browsersync.io
[sculpin]: https://sculpin.io
[tailwind css]: https://tailwindcss.com
[website]: https://www.oliverdavies.uk
