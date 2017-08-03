'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./gulpfile.config')(plugins);

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins, config);
}

function addStyle(sourceFiles, outputFile) {
    return require('./gulp-tasks/styles')(gulp, plugins, config, sourceFiles, outputFile);
}

function addScript(sourceFiles, outputFile) {
    return require('./gulp-tasks/scripts')(gulp, plugins, config, sourceFiles, outputFile);
}

gulp.task('clean', getTask('clean'));
gulp.task('default', ['clean', 'fonts', 'styles', 'scripts']);
gulp.task('fonts', getTask('fonts'));

gulp.task('styles', addStyle([
    'node_modules/font-awesome/css/font-awesome.css',
    'node_modules/prismjs/themes/prism-twilight.css',
    config.sass.sourceDir + '/main.sass'
], 'site.css'));

gulp.task('scripts', addScript([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
    'node_modules/prismjs/prism.js',
    'node_modules/prismjs/components/prism-{apacheconf,bash,css,diff,ini,json,nginx,php,sass,scss,sql,less,twig,xml,yaml}.js',
    config.js.sourceDir + config.js.pattern
], 'site.js'));

gulp.task('watch', ['default'], getTask('watch'));
