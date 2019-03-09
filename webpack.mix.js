let mix = require('laravel-mix');

require('laravel-mix-purgecss');

mix.disableNotifications()
  .postCss('assets/css/app.css', 'source/dist/css', [
    require('postcss-nested'),
    require('tailwindcss')('tailwind.config.js'),
  ])
  .js([
    'node_modules/jquery/src/jquery.js',
    'assets/js/app.js',
  ], 'source/dist/js/all.js')
  .copyDirectory('node_modules/font-awesome/fonts', 'source/dist/fonts')
  .purgeCss({
    globs: [
      path.join(__dirname, 'assets/js/**/*.{js,vue}'),
      path.join(__dirname, 'output_*/**/*.html'),
    ],
    whitelistPatterns: [/language/, /hljs/],
    whitelistPatternsChildren: [/^markdown$/]
  });
