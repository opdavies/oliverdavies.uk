let mix = require('laravel-mix')

require('laravel-mix-purgecss')

mix.disableNotifications()

mix.postCss('assets/css/app.css', 'source/dist/css', [
  require('postcss-nested'),
  require('tailwindcss')('tailwind.config.js'),
])

mix.js([
  'node_modules/jquery/src/jquery.js',
  'assets/js/app.js',
], 'source/dist/js/app.js')

mix.browserSync({
  proxy: 'localhost:8000',
  files: [
    'source/**/*.{html,md,twig}',
  ],
  notify: false,
})

mix.purgeCss({
  folders: ['assets', 'output_*'],
  whitelistPatterns: [/language/, /hljs/],
  whitelistPatternsChildren: [/^markdown$/]
})
