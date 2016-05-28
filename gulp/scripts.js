gulp.task('scripts', function () {
    app.js(
        [
            config.bowerDir + '/jquery/dist/jquery.js',
            config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
            config.js.search
        ],
        'site.js'
    );
});
