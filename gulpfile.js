'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./gulpfile.config')(plugins);
var del = require('del');

var app = {};

app.copy = function (sourceFiles, destination) {
    return gulp.src(sourceFiles)
        .pipe(gulp.dest(destination));
};

app.css = function (sourceFiles, outputFile) {
    return gulp.src(sourceFiles)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer(config.less.autoprefixer))
        .pipe(plugins.concat(outputFile))
        .pipe(plugins.if(config.production, plugins.purifycss(config.less.purifyCss)))
        .pipe(plugins.if(config.production, plugins.cleanCss()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(plugins.if(!config.production, plugins.refresh()))
        .pipe(gulp.dest(config.less.outputDir));
};

app.js = function (sourceFiles, outputFile) {
    return gulp.src(sourceFiles)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.concat(outputFile))
        .pipe(plugins.if(config.production, plugins.uglify()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest(config.js.outputDir));
};

gulp.task('clean', function () {
    del.sync('source/assets/{css,fonts,js}');
    del.sync('output_*/assets/{css,fonts,js}');
});

gulp.task('default', ['clean', 'fonts', 'styles', 'scripts']);

gulp.task('fonts', function () {
    return app.copy('node_modules/font-awesome/fonts/*', config.fonts.outputDir);
});

gulp.task('styles', function () {
    app.css([
        'node_modules/font-awesome/css/font-awesome.css',
        'node_modules/prismjs/themes/prism-twilight.css',
        config.less.sourceDir + '/main.less'
    ], 'site.css');
});

gulp.task('scripts', function () {
    app.js([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/prismjs/prism.js',
        'node_modules/prismjs/components/prism-{apacheconf,bsash,css,diff,ini,json,nginx,php,sass,scss,sql,less,twig,xml,yaml}.js',
        config.js.sourceDir + '/**/*.js'
    ], 'site.js')
});

gulp.task('watch', ['default'], function () {
    plugins.refresh.listen();

    gulp.watch(config.less.sourceDir + config.less.pattern, ['styles']);
    gulp.watch(config.js.sourceDir + config.js.pattern, ['scripts']);
});
