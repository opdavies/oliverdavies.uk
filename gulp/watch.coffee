gulp = require 'gulp'

gulp.task 'watch', ->
    gulp.plugins.refresh.listen()

    gulp.watch gulp.config.sassPattern, ['styles']
    gulp.watch gulp.config.assetsDir + gulp.config.jsPattern, ['scripts']
    gulp.watch gulp.config.assetsDir + '/images/**/*', ['copy-images']
