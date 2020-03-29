---
title: Using the pcss extension with Webpack Encore
excerpt: How to use the .pcss file extension for PostCSS files with Webpack Encore
date: 2020-03-29
tags: [webpack, encore, postcss]
draft: true
---

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
```
