'use strict';

global.gulp = require('gulp');
global.plugins = require('gulp-load-plugins')();

global.config = {
    autoprefixer: {
        browsers: 'last 2 versions'
    },
    bowerDir: 'vendor/bower',
    fonts: {
        output: 'source/assets/fonts'
    },
    htmlmin: {
        collapseWhitespace: true
    },
    js: {
        source: 'assets/js',
        search: '/js/**/*.js',
        output: 'source/assets/js'
    },
    production: plugins.util.env.production || false,
    sass: {
        source: 'assets/sass',
        search: '/**/*.sass',
        output: 'source/assets/css'
    },
    scss: {
        search: '/**/*.scss'
    }
}

global.app = {};

app.css = function (paths, filename) {
    gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer(config.autoprefixer))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.cleanCss()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(plugins.if(!config.production, plugins.refresh()))
        .pipe(gulp.dest(config.sass.output));
};

app.js = function (paths, filename) {
    gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.uglify()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest(config.js.output));
};

app.copy = function (source, destination) {
    gulp.src(source)
        .pipe(gulp.dest(destination));
};

require('require-dir')('./gulp');
