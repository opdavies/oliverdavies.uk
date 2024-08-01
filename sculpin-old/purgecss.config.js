let glob = require('glob-all')

module.exports = {
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  paths: () => glob.sync([
    'source/**/*.{md,twig}'
  ]),
  whitelistPatterns: [/(code|kbd|pre|samp)/, /hljs/, /language/]
}
