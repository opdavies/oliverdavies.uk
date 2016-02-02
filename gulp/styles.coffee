g = require 'gulp'

g.task 'styles', ->
  g.src ['vendor/bower/font-awesome/css/font-awesome.css', 'sass/styles.scss']
    .pipe g.p.plumber()
    .pipe g.p.if g.config.sourceMaps, g.p.sourcemaps.init()
    .pipe g.p.sass()
    .pipe g.p.concat 'all.css'
    .pipe g.p.if g.config.sourceMaps, g.p.sourcemaps.write('.')
    .pipe g.dest 'source/assets/css'
    .pipe g.p.if g.config.livereload, g.p.livereload()
