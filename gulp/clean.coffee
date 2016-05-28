del = require 'del'

gulp.task 'clean', ->
    del.sync config.fonts.outputDir
    del.sync config.js.outputDir
    del.sync config.sass.outputDir
    del.sync 'output_*/assets/{css,fonts,js}'
