'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

var config = {
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

var app = {};

app.sass = function (sourceFiles, filename) {
    return gulp.src(sourceFiles)
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer({
            browsers: ["last 2 versions", "> 5%"],
            cascade: false
        }))
        .pipe(plugins.concat(filename))
        .pipe(plugins.if(config.production, plugins.purifycss([
            'source/**/*.html',
            'source/**/*.md',
            'source/**/*.twig',
        ])))
        .pipe(plugins.if(config.production, plugins.cleanCss()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(plugins.if(!config.production, plugins.refresh()))
        .pipe(gulp.dest(config.sass.outputDir));
}

gulp.task('styles', function () {
    app.sass([
        'node_modules/font-awesome/css/font-awesome.css',
        config.sass.sourceDir + '/main.sass'
    ], 'main.css');

    app.sass(config.sass.sourceDir + '/about.sass', 'about.css');
    app.sass(config.sass.sourceDir + '/blog.sass', 'blog.css');
    app.sass([
        'node_modules/prism/themes/prism-twilight.css',
        config.sass.sourceDir + '/blog-post.sass'
    ], 'blog-post.css');
    app.sass(config.sass.sourceDir + '/experience.sass', 'experience.css');
    app.sass(config.sass.sourceDir + '/project.sass', 'project.css');
    app.sass(config.sass.sourceDir + '/talk.sass', 'talk.css');
    app.sass(config.sass.sourceDir + '/talks-table.sass', 'talks-table.css');
    app.sass(config.sass.sourceDir + '/testimonials.sass', 'testimonials.css');
});

gulp.task('scripts', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        'node_modules/prism/prism.js',
        'node_modules/prism/components/prism-{apacheconf,bash,css,diff,ini,json,nginx,php,sass,scss,sql,less,twig,xml,yaml}.js',
        config.js.sourceDir + config.js.pattern
    ])
        .pipe(plugins.plumber())
        .pipe(plugins.if(!config.production, plugins.sourcemaps.init()))
        .pipe(plugins.concat('site.js'))
        .pipe(plugins.if(config.production, plugins.uglify()))
        .pipe(plugins.if(!config.production, plugins.sourcemaps.write('.')))
        .pipe(gulp.dest(config.js.outputDir));
});

gulp.task('fonts', function () {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest(config.fontsDir));
});

gulp.task('clean', function () {
    del.sync(config.fontsDir);
    del.sync(config.js.outputDir);
    del.sync(config.sass.outputDir);
    del.sync('output_*/assets/{css,fonts,js}');
});

gulp.task('default', ['clean', 'fonts', 'styles', 'scripts']);

gulp.task('watch', ['default'], function () {
    plugins.refresh.listen();

    gulp.watch(config.sass.sourceDir + config.sass.pattern, ['styles']);
    gulp.watch(config.js.sourceDir + config.js.pattern, ['scripts']);
});
