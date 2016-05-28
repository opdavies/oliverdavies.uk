'use strict'

global.gulp = require 'gulp'
global.plugins = require('gulp-load-plugins')()

global.config =
    autoprefixer:
        browsers: 'last 2 versions'
    bowerDir: 'vendor/bower',
    fonts:
        outputDir: 'source/assets/fonts'
    htmlmin:
        collapseWhitespace: true
    js:
        sourceDir: 'assets/js',
        pattern: '/**/*.js',
        outputDir: 'source/assets/js'
    production: plugins.util.env.production || false
    sass:
        sourceDir: 'assets/sass',
        pattern: '/**/*.sass',
        outputDir: 'source/assets/css'
    scss:
        pattern: '/**/*.scss'

global.app = {}

app.sass = (paths, filename) ->
    gulp.src paths
        .pipe plugins.plumber()
        .pipe plugins.if !config.production, plugins.sourcemaps.init()
        .pipe plugins.sassGlob()
        .pipe plugins.sass()
        .pipe plugins.autoprefixer config.autoprefixer
        .pipe plugins.concat filename
        .pipe plugins.if config.production, plugins.cleanCss()
        .pipe plugins.if !config.production, plugins.sourcemaps.write('.')
        .pipe plugins.if !config.production, plugins.refresh()
        .pipe gulp.dest config.sass.outputDir

app.js = (paths, filename) ->
    gulp.src paths
        .pipe plugins.plumber()
        .pipe plugins.if !config.production, plugins.sourcemaps.init()
        .pipe plugins.concat filename
        .pipe plugins.if config.production, plugins.uglify()
        .pipe plugins.if !config.production, plugins.sourcemaps.write('.')
        .pipe gulp.dest config.js.outputDir

app.copy = (source, destination) ->
    gulp.src source
        .pipe gulp.dest destination

require('require-dir')('./gulp')
