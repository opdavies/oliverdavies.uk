gulp = require 'gulp'
gulp.plugins = require('gulp-load-plugins')()

gulp.config =
    assetsDir: './assets',
    bowerDir: './vendor/bower',
    outputDir: './source/assets',
    sassPattern: './assets/sass/**/*.sass',
    jsPattern: 'js/**/*.js',
    production: !!gulp.plugins.util.env.production,
    sourceMaps: !gulp.plugins.util.env.production,
    liveReload: !gulp.plugins.util.env.production,
    notify: !gulp.plugins.util.env.production

gulp.css = (paths, filename) ->
    gulp.src paths
        .pipe gulp.plugins.plumber()
        .pipe gulp.plugins.if gulp.config.sourceMaps, gulp.plugins.sourcemaps.init()
        .pipe gulp.plugins.sassGlob()
        .pipe gulp.plugins.sass()
        .pipe gulp.plugins.autoprefixer browsers: ['last 2 versions']
        .pipe gulp.plugins.concat filename
        .pipe gulp.config.production ? gulp.plugins.cleanCss() || gulp.plugins.util.noop()
        .pipe gulp.plugins.if gulp.config.sourceMaps, gulp.plugins.sourcemaps.write '.'
        .pipe gulp.dest gulp.config.outputDir + '/css'
        # .pipe gulp.config.notify ? gulp.plugins.notify() || gulp.plugins.util.noop()
        # .pipe gulp.plugins.if gulp.config.liveReload, gulp.plugins.livereload()

gulp.js = (paths, filename) ->
    gulp.src paths
        .pipe gulp.plugins.plumber()
        .pipe gulp.plugins.if gulp.config.sourceMaps, gulp.plugins.sourcemaps.init()
        .pipe gulp.plugins.concat filename
        .pipe gulp.config.production ? gulp.plugins.uglify() || gulp.plugins.util.noop()
        .pipe gulp.plugins.if gulp.config.sourceMaps, gulp.plugins.sourcemaps.write '.'
        .pipe gulp.dest gulp.config.outputDir + '/js'
        # .pipe gulp.config.notify ? gulp.plugins.notify() || gulp.plugins.util.noop()

gulp.copy = (srcFiles, outputDir) ->
    gulp.src srcFiles
        .pipe gulp.dest outputDir

require("fs").readdirSync("./gulp").forEach (task) -> require "./gulp/#{task}"
