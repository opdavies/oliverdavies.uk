'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

var config = require('./gulpfile.config.js')(plugins);

var app = {};

app.sass = function(paths, filename) {
    return gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass({
            outputStyle: 'compressed'
        }))
        .pipe(plugins.autoprefixer({
            browsers: config.autoprefixer.browsers,
            cascade: false
        }))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(plugins.if(!config.production, plugins.refresh()))
        .pipe(gulp.dest(config.sass.destination));
};

app.js = function(paths, filename) {
    return gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.uglify()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest(config.js.destination));
};

app.copy = function(source, destination) {
    return gulp.src(source)
        .pipe(gulp.dest(destination));
};

gulp.task('clean', function() {
    del.sync(config.fonts.destination);
    del.sync(config.js.destination);
    del.sync(config.sass.destination);
    del.sync('output_*/assets/css');
    del.sync('output_*/assets/fonts');
    del.sync('output_*/assets/js');
});

gulp.task('fonts', function() {
    return app.copy(
        config.bower.path + "/font-awesome/fonts/*",
        config.fonts.destination
    );
});

gulp.task('styles', function() {
    return app.sass([
        config.bower.path + '/font-awesome/css/font-awesome.css',
        config.sass.source + config.sass.pattern
    ], 'site.css');
});

gulp.task('scripts', function() {
    return app.js([
        config.bower.path + '/jquery2/jquery.js',
        config.bower.path + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        config.js.source + config.js.pattern
    ], 'site.js');
});

gulp.task('build', ['clean', 'fonts', 'styles', 'scripts']);

gulp.task('default', ['build']);

gulp.task('watch', ['build'], function() {
    plugins.refresh.listen();

    gulp.watch(config.sass.source + config.sass.pattern, ['styles']);
    gulp.watch(config.js.source + config.js.pattern, ['scripts']);
});
