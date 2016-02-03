g = require 'gulp'

g.task 'styles', ->
  g.css 'sass/site.scss', 'site.css'
