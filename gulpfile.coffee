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
  g.src(srcFiles)
  .pipe g.dest(outputDir)

require('fs').readdirSync('./gulp').forEach (task) -> require "./gulp/#{task}"
