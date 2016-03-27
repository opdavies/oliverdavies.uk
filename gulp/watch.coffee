g = require 'gulp'

g.task 'watch', ->
  g.watch 'styles/*.sass', ['styles']
