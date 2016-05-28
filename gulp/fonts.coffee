gulp.task 'fonts', ->
    app.copy [config.bowerDir + '/font-awesome/fonts/*'], config.fonts.outputDir
