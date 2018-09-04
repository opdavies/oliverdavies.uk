let mix = require('laravel-mix');

require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.disableNotifications()
    .sass('assets/sass/app.sass', 'source/dist/css')
    .combine([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/highlightjs/highlight.pack.js',
        'assets/js/app.js',
    ], 'source/dist/js/all.js')
    .copyDirectory('node_modules/font-awesome/fonts', 'source/dist/fonts')
    .tailwind()
    .purgeCss({
        globs: [
            path.join(__dirname, 'output_*/**/*.html'),
        ],
        whitelistPatterns: [/language/, /hljs/],
        whitelistPatternsChildren: [/^markdown$/]
    });
