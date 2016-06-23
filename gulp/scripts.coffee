gulp.task 'scripts', ->
    app.js [
        config.bowerDir + '/jquery2/jquery.js',
        config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        config.js.sourceDir + config.js.pattern
    ], 'site.js'
