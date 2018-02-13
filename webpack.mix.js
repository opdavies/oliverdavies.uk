let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.disableNotifications()
  .less('assets/less/main.less', 'source/assets/css')
  .styles([
    'node_modules/font-awesome/css/font-awesome.css',
    'node_modules/highlightjs/styles/github-gist.css'
  ], 'source/assets/css/vendor.css')
  .copy('node_modules/font-awesome/fonts/*', 'source/assets/fonts')
  .copyDirectory('assets/images', 'source/assets/images')
  .options({
    postCss: [
      tailwindcss('./tailwind.js'),
    ]
  });

if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map'
  })
  .sourceMaps();
}
