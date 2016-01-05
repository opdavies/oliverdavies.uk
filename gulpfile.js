'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

var config = {
    cssDir: './source/assets/css',
    imagesDir: './source/assets/images',
    sassPattern: './sass/**/*.scss'
};

gulp.task('styles', function () {
    gulp.src('./sass')
        .pipe(plugins.compass({
          config_file: './config.rb',
          css: config.cssDir,
          sourcemap: true
        }))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(config.cssDir));
});

gulp.task('images', function () {
    // Minify images.
    gulp.src(config.imagesDir + '/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(config.imagesDir));
});

gulp.task('watch', function () {
    gulp.watch(config.sassPattern, ['styles']);
});

gulp.task('default', ['watch']);
