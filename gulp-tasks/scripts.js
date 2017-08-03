module.exports = function (gulp, plugins, config, sourceFiles, outputFile) {
    return function () {
        return gulp.src(sourceFiles)
            .pipe(plugins.plumber())
            .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
            .pipe(plugins.concat(outputFile))
            .pipe(plugins.if(config.production, plugins.uglify()))
            .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
            .pipe(gulp.dest(config.js.outputDir));
    }
}
