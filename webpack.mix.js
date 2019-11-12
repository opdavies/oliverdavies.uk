let mix = require('laravel-mix')

require('laravel-mix-purgecss')

mix.disableNotifications()
  .postCss('assets/css/tailwind.css', 'source/build/app.css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer')
  ])
  .js('assets/js/app.js', 'source/build')

mix.browserSync({
  proxy: 'localhost:8000',
  files: [
    'output_*/**/*'
  ],
  notify: false
})

mix.purgeCss({
  extensions: ['html', 'twig', 'vue'],
  folders: ['assets/js', 'output_*'],
  whitelistPatterns: [],
  whitelistPatternsChildren: []
})
