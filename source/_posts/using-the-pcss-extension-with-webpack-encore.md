---
title: Using the pcss extension for PostCSS with Webpack Encore
excerpt: How to use the .pcss file extension for PostCSS files with Webpack Encore.
date: 2020-04-01
tags: [webpack, encore, postcss, symfony]
---

I’ve been watching Christopher Pitt ([assertchris][assertchris-twitter])’s [streams on Twitch][assertchris-twitch] over the last few months, in one of which he was doing some work with Tailwind CSS and using a `.pcss` file extension for his PostCSS files.

I couldn’t remember seeing this extension before, but this made a lot of sense to me compared to the standard `.css` extension - both to make it clear that it’s a PostCSS file and features like nesting can be used, and also for better integration and highlighting with IDEs and text editors such as PhpStorm.

It’s also shorter that the `.postcss` extension, and has been suggested by [@PostCSS on Twitter](https://twitter.com/PostCSS/status/661645290622083073) previously.

Some of my projects use [Laravel Mix][] which support this extension by default, but some of them use Symfony’s [Webpack Encore][] which didn’t seem to, so I decided to look into it. (Note that both are agnostic and not coupled to their respective frameworks, so can be used with other projects too including Drupal and Sculpin).

## Updating Webpack Encore’s configuration

I was able to review the existing configuration and confirm this by using `console.log()` to output Encore’s generated webpack configuration - specifically the module rules.

```js
console.log(Encore.getWebpackConfig().module.rules)
```

There I can see the the test for PostCSS supports the `.css` and `.postcss` file extensions, but not `.pcss`.

```plain
test: /\.(css|postcss)$/,
```

There is documentation on the Symfony website for [adding custom webpack loaders and plugins](https://symfony.com/doc/current/frontend/encore/custom-loaders-plugins.html) but this wasn’t quite what I needed, as I needed to edit the existing `css` loader rather than add a new one.

The page that I needed was [Advanced Webpack Config](https://symfony.com/doc/current/frontend/encore/advanced-config.html#having-the-full-control-on-loaders-rules) - specifically the section on 'Having the full control on Loaders Rules'.

This suggests using `.configureLoaderRule()` and using that to override `test` directly.

It does though come with a warning:

> This is a low-level method. All your modifications will be applied just before pushing the loaders rules to Webpack. It means that you can override the default configuration provided by Encore, which may break things. Be careful when using it.

My first pass was to add the full `.pcss` extension, but as this is a regular expression, I did a second pass that adds an second capturing group that would cover both PostCSS extensions.

```
// First pass
loaderRule.test = /\.(css|pcss|postcss)$/

// Second pass
loaderRule.test = /\.(css|p(ost)?css)$/
```

To see this running, go to <https://opdavi.es/webpack-encore-pcss-regex>.

## The final configuration

This is my full `webpack.config.js` file for this site, including the `.pcss` extension support:

```js
Encore
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .setOutputPath('source/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .enablePostCssLoader()
    .configureLoaderRule('css', loaderRule => {
        loaderRule.test = /\.(css|p(ost)?css)$/
    })
    .enableSourceMaps(!Encore.isProduction())

if (Encore.isProduction()) {
    Encore
        .enableVersioning()
        .addPlugin(new PurgecssPlugin(purgecssConfig))
} else {
    Encore.enableSourceMaps()
}

module.exports = Encore.getWebpackConfig()
```

Alternatively, you can view it in the [codebase on GitHub](https://github.com/opdavies/oliverdavies.uk/blob/796578d7f0f3332724cb8335982c69b36bc11e53/webpack.config.js).

## Contributing back to Encore

I’ve also submitted a pull request to Encore to add support for the `.pcss` extension by default: <https://github.com/symfony/webpack-encore/pull/718>. If accepted, then these changes in `webpack.config.js` would no longer be needed.

[assertchris-twitch]: https://www.twitch.tv/assertchris "assertchris on Twitch"
[assertchris-twitter]: https://twitter.com/assertchris "assertchris on Twitter"
[gitstore]: https://gitstore.app
[laravel mix]: https://laravel-mix.com
[webpack encore]: https://github.com/symfony/webpack-encore
