gulp = require 'gulp'

gulp.task 'styles', ->
    gulp.css [
      gulp.config.bowerDir + '/font-awesome/css/font-awesome.css',
      gulp.config.assetsDir + '/sass/site.sass'
    ], 'site.css'
