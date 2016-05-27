gulp.task('styles', function () {
    app.css([
        config.bowerDir + '/font-awesome/css/font-awesome.css',
        config.assetsDir + '/sass/site.sass'
    ], 'site.css');
});
