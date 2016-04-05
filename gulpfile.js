var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

var config = {
  assetsDir: './assets',
  bowerDir: './vendor/bower',
  outputDir: './source/assets',
  sassPattern: './assets/sass/**/*.sass',
  jsPattern: 'js/**/*.js',
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
        .pipe(gulp.dest(config.outputDir + '/css'))
        .pipe(plugins.notify())
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
        .pipe(gulp.dest(config.outputDir + '/js'))
        .pipe(plugins.notify());
};

app.copy = function (srcFiles, outputDir) {
    gulp.src(srcFiles)
        .pipe(gulp.dest(outputDir));
};

gulp.task('styles', function () {
    app.css([
      config.bowerDir + '/font-awesome/css/font-awesome.css',
      config.assetsDir + '/sass/site.sass',
    ], 'site.css');
});

gulp.task('scripts', function () {
    app.js([
        config.bowerDir + '/jquery/dist/jquery.js',
        config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        config.assetsDir + config.jsPattern
    ], 'site.js');
})

gulp.task('watch', function () {
    gulp.watch(config.sassPattern, ['styles']);
    gulp.watch(config.assetsDir + config.jsPattern, ['scripts']);
});

gulp.task('clean', function () {
    del.sync('output_*/assets/{css,fonts,images,js}');
    del.sync(config.outputDir + '/{css,fonts,images,js}');
});

gulp.task('fonts', function () {
    app.copy(config.bowerDir + '/font-awesome/fonts/*', config.outputDir + '/fonts');
});

gulp.task('meetup-thumbnails', function () {
    gulp.src(config.assetsDir + '/images/meetups/originals/*')
        .pipe(plugins.imageResize({
            height: '80'
        }))
        .pipe(gulp.dest(config.outputDir + '/images/meetups/thumbnails'))
});

gulp.task('copy-images', function () {
    app.copy(config.assetsDir + '/images/**/*', config.outputDir + '/images');
});

gulp.task('images', ['meetup-thumbnails', 'copy-images']);

gulp.task('build', ['clean', 'styles', 'scripts', 'fonts', 'images']);

gulp.task('default', ['build', 'watch']);

gulp.task('minify-prod-html', function () {
  gulp.src('output_prod/**/*.html')
      .pipe(plugins.htmlmin({
          'collapseWhitespace': true
      }))
      .pipe(gulp.dest('output_prod'));
});
