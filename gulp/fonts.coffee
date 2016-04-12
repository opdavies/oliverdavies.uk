gulp = require 'gulp'

gulp.task 'fonts', ->
    gulp.src gulp.config.bowerDir + '/font-awesome/fonts/*'
        .pipe gulp.dest gulp.config.outputDir + '/fonts'
