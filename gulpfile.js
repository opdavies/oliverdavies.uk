'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./gulpfile.config')(plugins);
var del = require('del');

var app = {};

app.sass = function(paths, filename) {
    return gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer("last 2 versions"))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.cleanCss()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(plugins.if(!config.production, plugins.refresh()))
        .pipe(gulp.dest(config.sass.outputDir));
};

app.js = function(paths, filename) {
    return gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.uglify()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest(config.js.outputDir));
};

app.copy = function(source, destination) {
    return gulp.src(source)
        .pipe(gulp.dest(destination));
};

gulp.task('default', function() {
    return plugins.taskListing.withFilters(null, 'default')();
});

gulp.task('clean', function() {
    del.sync(config.fontsDir);
    del.sync(config.js.outputDir);
    del.sync(config.sass.outputDir);
    del.sync('output_*/assets/css');
    del.sync('output_*/assets/fonts');
    del.sync('output_*/assets/js');
});

gulp.task('fonts', function() {
    return app.copy([
        config.bowerDir + "/font-awesome/fonts/*"
    ], config.fontsDir);
});

gulp.task('sass', ['sass:compile', 'sass:watch']);

gulp.task('sass:compile', function() {
    return app.sass([
        config.bowerDir + '/font-awesome/css/font-awesome.css',
        config.sass.sourceDir + config.sass.pattern
    ], 'site.css');
});

gulp.task('sass:watch', ['sass:compile'], function() {
    plugins.refresh.listen();

    gulp.watch(config.sass.sourceDir + config.sass.pattern, ['styles']);
});

gulp.task('js', ['js:compile', 'js:watch']);

gulp.task('js:compile', function() {
    return app.js([
        config.bowerDir + '/jquery2/jquery.js',
        config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        config.js.sourceDir + config.js.pattern
    ], 'site.js');
});

gulp.task('js:watch', ['js:compile'], function() {
    plugins.refresh.listen();

    gulp.watch(config.js.sourceDir + config.js.pattern, ['js']);
});

gulp.task('build', ['clean', 'fonts', 'sass:compile', 'js:compile']);

gulp.task('watch', ['sass:watch', 'js:watch'])
