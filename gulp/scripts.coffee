g = require 'gulp'

g.task 'scripts', =>
  g.src ['vendor/bower/jquery/dist/jquery.js', 'vendor/bower/bootstrap-sass/assets/javascripts/bootstrap.js']
    .pipe g.p.plumber()
    .pipe g.p.if g.config.sourceMaps, g.p.sourcemaps.init()
    .pipe g.p.concat 'all.js'
    .pipe g.p.if g.config.production, g.p.uglify()
    .pipe g.p.if g.config.sourceMaps, g.p.sourcemaps.write('.')
    .pipe g.dest 'source/assets/js'
