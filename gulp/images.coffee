g = require 'gulp'

g.task 'images', ->
  g.src 'source/assets/images/*'
    .pipe g.p.imagemin()
    .pipe g.dest 'source/assets/images'
