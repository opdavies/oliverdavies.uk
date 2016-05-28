gulp.task('watch', function () {
    plugins.refresh.listen();

    gulp.watch(config.sass.source + config.sass.search, ['styles']);
    gulp.watch(config.sass.source + config.scss.search, ['styles']);
    gulp.watch(config.js.source + config.js.search, ['scripts']);
});
