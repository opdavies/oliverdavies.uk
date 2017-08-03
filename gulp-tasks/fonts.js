module.exports = function (gulp, plugins, config) {
    return function () {
        return gulp.src('node_modules/font-awesome/fonts/*')
            .pipe(gulp.dest(config.fonts.outputDir));
    }
}
