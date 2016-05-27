gulp.task('watch', function () {
    plugins.refresh.listen();

    gulp.watch(config.assetsDir + '/' + config.sassPattern, ['styles']);
    gulp.watch(config.assetsDir + '/' + config.jsPattern, ['scripts']);
});
