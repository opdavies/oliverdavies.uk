gulp = require 'gulp'
gulp.plugins = require('gulp-load-plugins')()

gulp.config =
    assetsDir: './assets',
    bowerDir: './vendor/bower',
    outputDir: './source/assets',
    sassPattern: './assets/sass/**/*.sass',
    jsPattern: 'js/**/*.js',
    production: gulp.plugins.util.env.production || false

gulp.css = (paths, filename) ->
    gulp.src paths
        .pipe gulp.plugins.plumber()
        .pipe gulp.plugins.if !gulp.config.production, gulp.plugins.sourcemaps.init()
        .pipe gulp.plugins.sassGlob()
        .pipe gulp.plugins.sass()
        .pipe gulp.plugins.autoprefixer browsers: ['last 2 versions']
        .pipe gulp.plugins.concat filename
        .pipe gulp.plugins.if gulp.config.production, gulp.plugins.cleanCss()
        .pipe gulp.plugins.if !gulp.config.production, gulp.plugins.sourcemaps.write '.'
        .pipe gulp.plugins.if !gulp.config.production, gulp.dest 'output_dev/assets/css'
        .pipe gulp.plugins.if !gulp.config.production, gulp.plugins.refresh()
        .pipe gulp.dest gulp.config.outputDir + '/css'

gulp.js = (paths, filename) ->
    gulp.src paths
        .pipe gulp.plugins.plumber()
        .pipe gulp.plugins.if gulp.config.sourceMaps, gulp.plugins.sourcemaps.init()
        .pipe gulp.plugins.concat filename
        .pipe gulp.plugins.if gulp.config.production, gulp.plugins.uglify()
        .pipe gulp.plugins.if !gulp.config.production, gulp.plugins.sourcemaps.write '.'
        .pipe gulp.dest gulp.config.outputDir + '/js'

gulp.copy = (srcFiles, outputDir) ->
    gulp.src srcFiles
        .pipe gulp.dest outputDir

require("fs").readdirSync("./gulp").forEach (task) -> require "./gulp/#{task}"
