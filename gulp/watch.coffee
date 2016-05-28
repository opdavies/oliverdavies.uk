gulp.task 'watch', ->
    plugins.refresh.listen()

    gulp.watch config.sass.sourceDir + config.sass.pattern, ['styles']
    gulp.watch config.js.sourceDir + config.js.pattern, ['scripts']
