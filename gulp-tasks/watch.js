module.exports = function (gulp, plugins, config) {
    return function () {
        plugins.refresh.listen();

        gulp.watch(config.sass.sourceDir + config.sass.pattern, ['styles']);
        gulp.watch(config.js.sourceDir + config.js.pattern, ['scripts']);
    }
}
