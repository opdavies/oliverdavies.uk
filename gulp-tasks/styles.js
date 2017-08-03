module.exports = function (gulp, plugins, config, sourceFiles, outputFile) {
    return function () {
        return gulp.src(sourceFiles)
            .pipe(plugins.plumber())
            .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
            .pipe(plugins.sassGlob())
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer({
                browsers: ["last 2 versions", "> 5%"],
                cascade: false
            }))
            .pipe(plugins.concat(outputFile))
            .pipe(plugins.if(config.production, plugins.purifycss([
                'source/**/*.html',
                'source/**/*.md',
                'source/**/*.twig',
            ])))
            .pipe(plugins.if(config.production, plugins.cleanCss()))
            .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
            .pipe(plugins.if(!config.production, plugins.refresh()))
            .pipe(gulp.dest(config.sass.outputDir));
    }
}
