'use strict';

var gulp = require('gulp'),
    compass = require('gulp-compass'),
    minify_css = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin');

gulp.task('compass', function () {
    gulp.src('./sass')
        .pipe(compass({
          config_file: './config.rb',
          css: './source/assets/css'
        }))
        .pipe(minify_css())
        .pipe(gulp.dest('./source/assets/css'));
});

gulp.task('image', function () {
    // Minify images.
    gulp.src('./source/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./source/assets/images'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['compass']);
});

gulp.task('default', ['watch']);
