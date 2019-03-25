let mix = require('laravel-mix');

require('laravel-mix-purgecss');

mix.disableNotifications()

mix.postCss('assets/css/app.css', 'source/dist/css', [
  require('postcss-nested'),
  require('tailwindcss')('tailwind.config.js'),
])

mix.js([
  'node_modules/jquery/src/jquery.js',
  'assets/js/app.js',
], 'source/dist/js/app.js')

mix.purgeCss({
  globs: [
    path.join(__dirname, 'assets/js/**/*.{js,vue}'),
    path.join(__dirname, 'output_*/**/*.html'),
  ],
  whitelistPatterns: [/language/, /hljs/],
  whitelistPatternsChildren: [/^markdown$/]
});
