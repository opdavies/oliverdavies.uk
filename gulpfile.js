'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

var config = {
    cssDir: './source/assets/css',
    imagesDir: './source/assets/images',
    sassPattern: './sass/**/*.scss'
};

gulp.task('compass', function () {
    gulp.src('./sass')
        .pipe(plugins.compass({
          config_file: './config.rb',
          css: config.cssDir
        }))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(config.cssDir));
});

gulp.task('image', function () {
    // Minify images.
    gulp.src(imagesDir + '/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(config.imagesDir));
});

gulp.task('watch', function () {
    gulp.watch(config.sassPattern, ['compass']);
});

gulp.task('default', ['watch']);
