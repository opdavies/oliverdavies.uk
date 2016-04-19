gulp = require 'gulp'

gulp.task 'minify-images', ->
    gulp.src gulp.config.assetsDir + '/images/**/*'
        .pipe gulp.plugins.imagemin()
        .pipe gulp.dest gulp.config.assetsDir + '/images'
