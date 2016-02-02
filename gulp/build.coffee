g = require 'gulp'

g.task 'build', ->
  g.start 'clean', 'styles', 'scripts', 'fonts'
