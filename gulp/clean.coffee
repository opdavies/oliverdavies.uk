g = require 'gulp'

g.task 'clean', ->
  g.src "{output_*,source}/assets/{css,fonts,js}", read: false
    .pipe g.p.clean()
