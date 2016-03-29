var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

var config = {
  assetsDir: './assets',
  sassPattern: './assets/sass/**/*.sass',
  production: !!plugins.util.env.production,
  sourceMaps: !plugins.util.env.production,
  liveReload: !plugins.util.env.production
};

var app = {};

app.css = function (paths, filename) {
    gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.init()))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass())
        .pipe(plugins.concat(filename))
        .pipe(config.production ? plugins.cleanCss() : plugins.util.noop())
        .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest('source/assets/css'))
        .pipe(plugins.if(config.liveReload, plugins.livereload()));
};

app.js = function (paths, filename) {
    gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.init()))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat(filename))
        .pipe(config.production ? plugins.uglify() : plugins.util.noop())
        .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest('source/assets/js'));
};

app.copy = function (srcFiles, outputDir) {
    gulp.src(srcFiles)
        .pipe(gulp.dest(outputDir));
};

gulp.task('styles', function () {
    app.css(config.assetsDir + '/sass/site.sass', 'site.css');
});

gulp.task('watch', function () {
    gulp.watch(config.sassPattern, ['styles']);
    gulp.watch(config.assetsDir + '/js/**/*.js', ['scripts']);
});

gulp.task('clean', function () {
    del.sync('output_*/assets');
    del.sync('source/assets');
});

gulp.task('vendor-styles', function () {
    app.css([
        config.assetsDir + '/sass/vendor.sass',
        'vendor/bower/font-awesome/css/font-awesome.css'
    ], 'vendor.css')
});

gulp.task('vendor-scripts', function () {
    app.js([
      'vendor/bower/jquery/dist/jquery.js',
      'vendor/bower/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
      'scripts/vendor/**/*.js'
    ], 'vendor.js');
});

gulp.task('vendor', ['vendor-styles', 'vendor-scripts']);

gulp.task('fonts', function () {
    app.copy('./assets/fonts/*', './source/assets/fonts');
});

gulp.task('meetup-thumbnails', function () {
    gulp.src(config.assetsDir + '/images/meetups/originals/*')
        .pipe(plugins.imageResize({
            height: '50'
        }))
        .pipe(gulp.dest(config.assetsDir + '/images/meetups/thumbnails'))
});

gulp.task('copy-images', function () {
    app.copy('./assets/images/**/*', './source/assets/images');
});

gulp.task('images', ['meetup-thumbnails', 'copy-images']);

gulp.task('build', ['clean', 'vendor', 'styles', 'fonts', 'images']);

gulp.task('default', ['build', 'watch']);

gulp.task('minify-prod-html', function () {
  gulp.src('output_prod/**/*.html')
      .pipe(plugins.htmlmin({
          'collapseWhitespace': true
      }))
      .pipe(gulp.dest('output_prod'));
});
