let mix = require('laravel-mix');

require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.disableNotifications()
    .sass('assets/sass/app.sass', 'source/dist/css')
    .js([
        'node_modules/jquery/src/jquery.js',
        'assets/js/app.js',
    ], 'source/dist/js/all.js')
    .copyDirectory('node_modules/font-awesome/fonts', 'source/dist/fonts')
    .tailwind('tailwind.config.js')
    .purgeCss({
        globs: [
            path.join(__dirname, 'assets/js/**/*.{js,vue}'),
            path.join(__dirname, 'output_*/**/*.html'),
        ],
        whitelistPatterns: [/language/, /hljs/],
        whitelistPatternsChildren: [/^markdown$/]
    });
