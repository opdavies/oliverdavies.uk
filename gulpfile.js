'use strict';

global.gulp = require('gulp');
global.plugins = require('gulp-load-plugins')();

global.config = {
    assetsDir: 'assets',
    bowerDir: 'vendor/bower',
    jsPattern: 'js/**/*.js',
    outputDir: 'source/assets',
    production: plugins.util.env.production || false,
    sassPattern: 'sass/**/*.sass',
}

global.app = {};

app.css = function (paths, filename) {
    gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer({ browsers: 'last 2 versions' }))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.cleanCss()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(plugins.if(!config.production, gulp.dest(config.outputDir + '/css')))
        .pipe(plugins.if(!config.production, plugins.refresh()))
        .pipe(gulp.dest(config.outputDir + '/css'));
};

app.js = function (paths, filename) {
    gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.uglify()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest(config.outputDir + '/js'));
};

app.copy = function (source, destination) {
    gulp.src(source)
        .pipe(gulp.dest(destination));
};

require('require-dir')('./gulp');
