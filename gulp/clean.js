var del = require('del');

gulp.task('clean', function () {
    del.sync(config.outputDir + '/{css,js}');
    del.sync('output_*/assets/{css,js}');
});
