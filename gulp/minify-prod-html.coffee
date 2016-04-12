gulp = require 'gulp'

gulp.task 'minify-prod-html', ->
  gulp.src 'output_prod/**/*.html'
      .pipe gulp.plugins.htmlmin 'collapseWhitespace': true
      .pipe gulp.dest 'output_prod'
