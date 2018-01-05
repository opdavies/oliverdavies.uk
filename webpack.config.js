var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('source/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableLessLoader()
    .addEntry('js/site', './assets/js/main.js')
    .addStyleEntry('css/site', './assets/less/main.less')
    .enablePostCssLoader(function(options) {
        options.config = {
            path: 'config/postcss.config.js'
        };
    })
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(false)
    .enableBuildNotifications()
;

module.exports = Encore.getWebpackConfig();
