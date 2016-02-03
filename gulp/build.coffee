g = require 'gulp'

g.task 'build', ->
  g.start 'clean', 'vendor', 'styles', 'fonts'
