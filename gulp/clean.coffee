g = require 'gulp'

g.task 'clean', ->
  g.src [
    'output_*/assets/css',
    'output_*/assets/fonts',
    'source/assets/css',
    'source/assets/fonts',
    'source/assets/js',
  ], read: false
    .pipe g.p.clean()
