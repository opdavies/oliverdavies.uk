g = require 'gulp'

g.task 'vendor', -> g.start 'vendor-styles', 'vendor-scripts'

g.task 'vendor-styles', ->
  g.css [
    'styles/vendor.sass',
    'vendor/bower/font-awesome/css/font-awesome.css'
  ], 'vendor.css'

g.task 'vendor-scripts', =>
  g.js [
    'vendor/bower/jquery/dist/jquery.js',
    'vendor/bower/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
    'scripts/vendor/github-cards.js'
  ], 'vendor.js'
