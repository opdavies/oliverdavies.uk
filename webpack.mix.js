let mix = require('laravel-mix')

require('laravel-mix-purgecss')

mix.disableNotifications()
  .postCss('assets/css/app.css', 'source/dist/css', [
    require('postcss-nested'),
    require('tailwindcss')('tailwind.config.js'),
  ])
  .js('assets/js/app.js', 'source/dist/js')
  .browserSync({
    proxy: 'localhost:8000',
    files: [
      'source/**/*.{html,md,twig}',
    ],
    notify: false,
  })
  .purgeCss({
    folders: ['assets', 'output_*'],
    whitelistPatterns: [/language/, /hljs/],
    whitelistPatternsChildren: [/^markdown$/]
  })
