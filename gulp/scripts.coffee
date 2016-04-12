gulp = require 'gulp'

gulp.task 'scripts', ->
    gulp.js [
        gulp.config.bowerDir + '/jquery/dist/jquery.js',
        gulp.config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        gulp.config.assetsDir + '/' + gulp.config.jsPattern
    ], 'site.js'
