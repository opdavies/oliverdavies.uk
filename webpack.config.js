const Encore = require('@symfony/webpack-encore')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')

Encore
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .setOutputPath('source/build/')
  .setPublicPath('/build')
  .addEntry('app', './assets/js/app.js')
  .enablePostCssLoader()
  .enableVueLoader()
  .enableSourceMaps(!Encore.isProduction())

if (Encore.isProduction()) {
  Encore.addPlugin(new PurgecssPlugin({
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    paths: () => glob.sync([
      'assets/**/*.vue',
      'source/**/*.{md,twig}'
    ])
  }))
}

module.exports = Encore.getWebpackConfig()
