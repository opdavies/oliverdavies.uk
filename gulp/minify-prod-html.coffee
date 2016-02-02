g = require 'gulp'

g.task 'minify-prod-html', ->
  g.src 'output_prod/**/*.html'
    .pipe g.p.htmlmin({ collapseWhitespace: true })
    .pipe g.dest 'output_prod'
