'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    del = require('del');

var config = {
    assetsDir: 'assets',
    bowerDir: 'vendor/bower',
    outputDir: 'source/assets',
    production: plugins.util.env.production || false
};

var app = {};

app.css = function (paths, filename) {
  gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer({ browsers: 'last 2 versions' }))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.cleanCss()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(plugins.if(!config.production, gulp.dest(config.outputDir + '/css')))
        .pipe(plugins.if(!config.production, plugins.refresh()))
        .pipe(gulp.dest(config.outputDir + '/css'));
};

app.js = function (paths, filename) {
    gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.uglify()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest(config.outputDir + '/js'));
};

app.copy = function (source, destination) {
    gulp.src(source)
        .pipe(gulp.dest(destination));
};

gulp.task('styles', function () {
    app.css([
      config.bowerDir + '/font-awesome/css/font-awesome.css',
      config.assetsDir + '/sass/site.sass'
    ], 'site.css');
});

gulp.task('scripts', function () {
    app.js([
        config.bowerDir + '/jquery/dist/jquery.js',
        config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        config.assetsDir + '/' + config.jsPattern
    ], 'site.js');
});

gulp.task('fonts', function () {
    app.copy(
        config.bowerDir + '/font-awesome/fonts/*',
        config.outputDir + '/fonts'
    );
});

gulp.task('meetup-thumbnails', function () {
  gulp.src(config.assetsDir + '/images/meetups/originals/*')
      .pipe(plugins.imageResize({ height: 80 }))
      .pipe(gulp.dest(config.outputDir + '/images/meetups/thumbnails'))
      .pipe(gulp.dest('output_dev/assets/images/meetups/thumbnails'));
});

gulp.task('copy-images', function () {
    app.copy(config.assetsDir + '/images/**/*', config.outputDir + '/images');
});

gulp.task('images', ['meetup-thumbnails', 'copy-images']);

gulp.task('clean', function () {
    del.sync(config.outputDir + '/css');
    del.sync(config.outputDir + '/js');
    del.sync('output_*/assets/css');
    del.sync('output_*/assets/js');
});

gulp.task('build', ['clean', 'styles', 'scripts', 'fonts', 'images']);

gulp.task('watch', function () {
  plugins.refresh.listen();

  gulp.watch('assets/sass/**/*.sass', ['styles']);
  gulp.watch('assets/js/**/*.js', ['scripts']);
  gulp.watch('assets/images/**/*', ['copy-images']);
});

gulp.task('default', ['build', 'watch']);

gulp.task('minify-prod-html', function () {
    gulp.src('output_prod/**/*.html')
        .pipe(plugins.htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('output_prod'));
});
