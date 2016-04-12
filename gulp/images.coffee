gulp = require 'gulp'

gulp.task 'images', -> gulp.start 'copy-images', 'meetup-thumbnails'

gulp.task 'meetup-thumbnails', ->
    gulp.src gulp.config.assetsDir + '/images/meetups/originals/*'
        .pipe gulp.plugins.imageResize height: '80'
        .pipe gulp.dest gulp.config.outputDir + '/images/meetups/thumbnails'

gulp.task 'copy-images', ->
    gulp.copy gulp.config.assetsDir + '/images/**/*', gulp.config.outputDir + '/images'
