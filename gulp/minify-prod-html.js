gulp.task('minify-prod-html', function () {
    gulp.src('output_prod/**/*.html')
        .pipe(plugins.htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('output_prod'));
});
