let mix = require('laravel-mix');

require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.disableNotifications()
    .sass('assets/sass/site.sass', 'source/build/css')
    .js('assets/js/site.js', 'source/build/js')
    .copyDirectory('assets/images', 'source/build/images')
    .copyDirectory('node_modules/font-awesome/fonts', 'source/build/fonts')
    .tailwind()
    .purgeCss({
        globs: [
            path.join(__dirname, 'output_*/**/*.html'),
        ]
    })
    .options({
        processCssUrls: false,
    });
