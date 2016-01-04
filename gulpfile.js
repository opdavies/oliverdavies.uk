'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('image', function () {
    // Minify images.
    gulp.src('./source/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./source/assets/images'));
});

gulp.task('default', []);
