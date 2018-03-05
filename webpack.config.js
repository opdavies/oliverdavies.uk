var Encore = require('@symfony/webpack-encore');
var glob = require('glob-all');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var PurgecssPlugin = require('purgecss-webpack-plugin');

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g);
    }
}

Encore.cleanupOutputBeforeBuild()
    .setOutputPath('source/build/')
    .setPublicPath('/build')
    .enableLessLoader()
    .addEntry('js/site', './assets/js/main.js')
    .addStyleEntry('css/site', './assets/less/main.less')
    .enablePostCssLoader(function(options) {
        options.config = {
            path: 'postcss.config.js'
        };
    })
    .enableSourceMaps(!Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/static', to: 'static' }
    ]));

if (Encore.isProduction()) {
    Encore.addPlugin(
        new PurgecssPlugin({
            paths: glob.sync([
                path.join(__dirname, "output_*/**/*.html"),
            ]),
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ['twig', 'html', 'md']
                }
            ]
        })
    );
}

module.exports = Encore.getWebpackConfig();
