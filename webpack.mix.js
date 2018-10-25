let mix = require('laravel-mix');

require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.disableNotifications()
    .postCss('assets/css/app.css', 'source/dist/css')
    .js([
        // 'node_modules/highlightjs/highlight.pack.js',
        'node_modules/jquery/dist/jquery.js',
        'assets/js/app.js',
    ], 'source/dist/js/all.js')
    .copyDirectory('node_modules/font-awesome/fonts', 'source/dist/fonts')
    .tailwind()
    .purgeCss({
        globs: [
            path.join(__dirname, 'assets/js/**/*.{js,vue}'),
            path.join(__dirname, 'output_*/**/*.html'),
        ],
        whitelistPatterns: [/language/, /hljs/],
        whitelistPatternsChildren: [/^markdown$/]
    })
    .options({
        postCss: [
            require('postcss-import')(),
            require('postcss-nested')(),
        ],
        processCssUrls: false,
    });
