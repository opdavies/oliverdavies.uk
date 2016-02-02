g = require 'gulp'

g.task 'clean', ->
  g.d.sync 'source/assets/css'
  g.d.sync 'source/assets/fonts'
  g.d.sync 'source/assets/js'
  g.d.sync 'output_*/assets/css'
  g.d.sync 'output_*/assets/fonts'
  g.d.sync 'output_*/assets/js'
