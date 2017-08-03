module.exports = function (gulp, plugins, config, sourceFiles, outputFile) {
    return function () {
        return gulp.src(sourceFiles)
            .pipe(plugins.plumber())
            .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
            .pipe(plugins.sassGlob())
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer(config.sass.autoprefixer))
            .pipe(plugins.concat(outputFile))
            .pipe(plugins.if(config.production, plugins.purifycss(config.sass.purifyCss)))
            .pipe(plugins.if(config.production, plugins.cleanCss()))
            .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
            .pipe(plugins.if(!config.production, plugins.refresh()))
            .pipe(gulp.dest(config.sass.outputDir));
    }
}
