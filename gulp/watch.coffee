gulp = require 'gulp'

gulp.task 'watch', ->
    gulp.watch gulp.config.sassPattern, ['styles']
    gulp.watch gulp.config.assetsDir + gulp.config.jsPattern, ['scripts']
