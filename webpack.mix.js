let mix = require('laravel-mix');

require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.disableNotifications()
    .sass('assets/sass/site.sass', 'source/build/css')
    .combine([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/highlightjs/highlight.pack.js',
        'assets/js/site.js',
    ], 'source/build/js/all.js')
    .copyDirectory('assets/images', 'source/build/images')
    .copyDirectory('node_modules/font-awesome/fonts', 'source/build/fonts')
    .tailwind()
    // .purgeCss({
    //     globs: [
    //         path.join(__dirname, 'output_*/**/*.html'),
    //     ],
    //     whitelistPatterns: [/language/, /hljs/],
    //     whitelistPatternsChildren: [/^markdown$/]
    // })
    .options({
        processCssUrls: false
    });
