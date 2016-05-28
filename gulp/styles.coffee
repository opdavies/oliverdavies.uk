gulp.task 'styles', ->
    app.sass [
        config.bowerDir + '/font-awesome/css/font-awesome.css',
        config.sass.sourceDir + config.sass.pattern
    ], 'site.css'
