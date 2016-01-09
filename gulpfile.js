'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    del = require('del');

var config = {
    bowerDir: 'vendor/bower',
    assetsDir: './source/assets',
    sassPattern: './sass/**/*.scss',
    production: !!plugins.util.env.production,
    sourceMaps: !plugins.util.env.production,
    liveReload: !plugins.util.env.production
};

var app = {};

app.addStyle = function(paths, filename) {
    gulp.src(paths)
        .pipe(plugins.plumber())
        .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.init()))
        .pipe(plugins.sass())
        .pipe(plugins.concat(filename))
        .pipe(config.production ? plugins.minifyCss() : plugins.util.noop())
        .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest(config.assetsDir + '/css'))
        .pipe(plugins.if(config.liveReload, plugins.livereload()));
};

app.copy = function(srcFiles, outputDir) {
    gulp.src(srcFiles)
        .pipe(gulp.dest(outputDir));
};

gulp.task('fonts', function () {
    // Copy fonts from bower_components into source/asset/fonts.
    app.copy(config.bowerDir + '/font-awesome/fonts/*', config.assetsDir + '/fonts');
});

gulp.task('styles', function () {
    app.addStyle([
        config.bowerDir + '/font-awesome/css/font-awesome.css',
        './sass/styles.scss'
    ], 'all.css')
});

gulp.task('images', function () {
    // Minify images.
    gulp.src(config.imagesDir + '/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(config.imagesDir));
});

gulp.task('watch', function () {
    plugins.livereload.listen();
    gulp.watch(config.sassPattern, ['styles']);
});

gulp.task('clean', function () {
    del.sync(config.assetsDir + '/css');
    del.sync(config.assetsDir + '/fonts');
    del.sync('./output_*/assets/css/*');
    del.sync('./output_*/assets/fonts/*');
});

gulp.task('build', ['clean', 'styles', 'fonts']);

gulp.task('default', ['build', 'watch']);
