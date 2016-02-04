g = require('gulp')
g.p = require('gulp-load-plugins')()
g.d = require('del')

g.config =
  bowerDir: 'vendor/bower',
  assetsDir: './source/assets',
  sassPattern: './sass/**/*.scss',
  production: !!g.p.util.env.production,
  sourceMaps: !g.p.util.env.production,
  liveReload: !g.p.util.env.production

g.copy = (srcFiles, outputDir) ->
  g.src srcFiles
    .pipe g.dest outputDir

g.css = (srcFiles, destFile) ->
  g.src srcFiles
    .pipe g.p.plumber()
    .pipe g.p.if g.config.sourceMaps, g.p.sourcemaps.init()
    .pipe g.p.sass()
    .pipe g.p.concat destFile
    .pipe g.p.if g.config.sourceMaps, g.p.sourcemaps.write('.')
    .pipe g.dest 'source/assets/css'
    .pipe g.p.if g.config.liveReload, g.p.livereload()

g.js = (srcFiles, destFile) ->
  g.src srcFiles
    .pipe g.p.plumber()
    .pipe g.p.if g.config.sourceMaps, g.p.sourcemaps.init()
    .pipe g.p.concat destFile
    .pipe g.p.if g.config.production, g.p.uglify()
    .pipe g.p.if g.config.sourceMaps, g.p.sourcemaps.write('.')
    .pipe g.dest 'source/assets/js'

require('fs').readdirSync('./gulp').forEach (task) -> require "./gulp/#{task}"
