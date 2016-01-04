'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

gulp.task('compass', function () {
    gulp.src('./sass')
        .pipe(plugins.compass({
          config_file: './config.rb',
          css: './source/assets/css'
        }))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('./source/assets/css'));
});

gulp.task('image', function () {
    // Minify images.
    gulp.src('./source/assets/images/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('./source/assets/images'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['compass']);
});

gulp.task('default', ['watch']);
