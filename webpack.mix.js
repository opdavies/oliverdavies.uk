let mix = require('laravel-mix')

require('laravel-mix-purgecss')

mix.disableNotifications()
  .postCss('resources/css/app.css', 'source/dist/css', [
    require('postcss-nested'),
    require('tailwindcss')('tailwind.config.js'),
  ])
  .js('resources/js/app.js', 'source/dist/js')
  .browserSync({
    proxy: 'localhost:8000',
    files: [
      'resources/**/*.{css,js,vue}',
      'source/**/*.{html,md,twig}',
    ],
    notify: false,
  })
  .purgeCss({
    folders: ['resources', 'output_*'],
    whitelistPatterns: [/language/, /hljs/],
    whitelistPatternsChildren: [/^markdown$/]
  })
