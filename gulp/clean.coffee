gulp = require 'gulp'
del = require 'del'

gulp.task 'clean', ->
    del.sync 'output_*/assets/{css,fonts,images,js}'
    del.sync gulp.config.outputDir + '/{css,fonts,images,js}'
