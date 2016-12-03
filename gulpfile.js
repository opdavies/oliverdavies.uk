'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

var config = {
    autoprefixer: {
        browsers: "last 2 versions"
    },
    bowerDir: 'vendor/bower_components',
    fontsDir: 'source/assets/fonts',
    js: {
        sourceDir: 'assets/js',
        outputDir: 'source/assets/js',
        pattern: '/**/*.js'
    },
    production: !!plugins.util.env.production,
    sass: {
        sourceDir: 'assets/sass',
        pattern: '/**/*.sass',
        outputDir: 'source/assets/css'
    }
};
var app = {};

app.sass = function(paths, filename) {
    return gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer(config.autoprefixer.browsers))
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

gulp.task('styles', function() {
    return app.sass([
        config.bowerDir + '/font-awesome/css/font-awesome.css',
        config.sass.sourceDir + config.sass.pattern
    ], 'site.css');
});

gulp.task('scripts', function() {
    return app.js([
        config.bowerDir + '/jquery2/jquery.js',
        config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        config.js.sourceDir + config.js.pattern
    ], 'site.js');
});

gulp.task('build', ['clean', 'fonts', 'styles', 'scripts']);

gulp.task('default', ['build']);

gulp.task('watch', ['build'], function() {
    plugins.refresh.listen();

    gulp.watch(config.sass.sourceDir + config.sass.pattern, ['styles']);
    gulp.watch(config.js.sourceDir + config.js.pattern, ['scripts']);
});
