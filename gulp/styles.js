gulp.task('styles', function () {
    app.css([
        config.bowerDir + '/font-awesome/css/font-awesome.css',
        config.sass.source + '/site.sass'
    ], 'site.css');
});
