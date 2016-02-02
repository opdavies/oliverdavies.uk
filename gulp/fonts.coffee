g = require 'gulp'

g.task 'fonts', ->
  g.copy('./vendor/bower/font-awesome/fonts/*', './source/assets/fonts')
