let mix = require('laravel-mix');

require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.disableNotifications()
    .sass('assets/sass/app.sass', 'source/css')
    .js([
        'node_modules/jquery/src/jquery.js',
        'assets/js/app.js',
    ], 'source/js/all.js')
    .copyDirectory('node_modules/font-awesome/fonts', 'source/fonts')
    .tailwind()
    .purgeCss({
        globs: [
            path.join(__dirname, 'assets/js/**/*.{js,vue}'),
            path.join(__dirname, 'output_*/**/*.html'),
        ],
        whitelistPatterns: [/language/, /hljs/],
        whitelistPatternsChildren: [/^markdown$/]
    });
