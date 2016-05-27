gulp.task('fonts', function () {
    app.copy(
        config.bowerDir + '/font-awesome/fonts/*',
        config.outputDir + '/fonts'
    );
});
