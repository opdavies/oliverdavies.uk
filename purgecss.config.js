let glob = require('glob-all')

module.exports = {
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  paths: () => glob.sync([
    'assets/**/*.vue',
    'source/**/*.{md,twig}'
  ])
}
