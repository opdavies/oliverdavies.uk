'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

var config = {
    bowerDir: 'vendor/bower_components',
    fontsDir: 'source/assets/fonts',
    js: {
        sourceDir: 'assets/js',
        pattern: '/**/*.js',
        outputDir: 'source/assets/js',
    },
    production: !!plugins.util.env.production,
    sass: {
        sourceDir: 'assets/sass',
        pattern: '/**/*.sass',
        outputDir: 'source/assets/css',
    }
};

gulp.task('styles', function() {
    return gulp.src([
            config.bowerDir + '/font-awesome/css/font-awesome.css',
            config.bowerDir + '/prism/themes/prism-tomorrow.css',
            config.sass.sourceDir + config.sass.pattern
        ])
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer({
            browsers: ["last 2 versions", "> 5%"],
            cascade: false
        }))
        .pipe(plugins.concat('site.css'))
        .pipe(plugins.if(config.production, plugins.purifycss([
            'source/**/*.html',
            'source/**/*.md',
            'source/**/*.twig',
        ])))
        .pipe(plugins.if(config.production, plugins.cleanCss()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(plugins.if(!config.production, plugins.refresh()))
        .pipe(gulp.dest(config.sass.outputDir));
});

gulp.task('scripts', function() {
    return gulp.src([
            config.bowerDir + '/jquery2/jquery.js',
            config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
            config.bowerDir + '/prism/prism.js',
            config.bowerDir + '/prism/components/prism-{apacheconf,bash,css,ini,json,nginx,php,sass,scss,sql,less,twig,xml,yaml}.js',
            config.js.sourceDir + config.js.pattern
        ])
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.concat('site.js'))
        .pipe(plugins.if(config.production, plugins.uglify()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest(config.js.outputDir));
});

gulp.task('fonts', function() {
    return gulp.src(config.bowerDir + "/font-awesome/fonts/*")
        .pipe(gulp.dest(config.fontsDir));
});

gulp.task('clean', function() {
    del.sync(config.fontsDir);
    del.sync(config.js.outputDir);
    del.sync(config.sass.outputDir);
    del.sync('output_*/assets/{css,fonts,js}');
});

gulp.task('default', ['clean', 'fonts', 'styles', 'scripts']);

gulp.task('watch', ['default'], function() {
    plugins.refresh.listen();

    gulp.watch(config.sass.sourceDir + config.sass.pattern, ['styles']);
    gulp.watch(config.js.sourceDir + config.js.pattern, ['scripts']);
});
