gulp.task('styles', function () {
    app.sass([
        config.bowerDir + '/font-awesome/css/font-awesome.css',
        config.sass.sourceDir + '/site.sass'
    ], 'site.css');
});
