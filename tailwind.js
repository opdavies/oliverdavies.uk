const _ = require('lodash')

let defaultConfig = require('tailwindcss/defaultConfig')()

var colors = {
  ...defaultConfig.colors,
  'inherit': 'inherit',
  'black': '#222b2f',
  'blue': 'hsl(203, 94%, 38%)',
  'blue-dark': '#2779bd',
  'blue-lighter': '#bcdefa',
  'green-dark': '#1f9d55',
  'grey': '#9babb4',
  'grey-dark': '#70818a',
  'grey-darker': '#596a73',
  'grey-light': 'hsl(203, 25%, 88%)',
  'grey-lighter': 'hsl(203, 22%, 95%)',
  'grey-lightest': '#fafcfc',
  'orange': '#f6993f',
  'red-dark': '#cc1f1a',
}

module.exports = {
  ...defaultConfig,
  colors: colors,
  textColors: colors,
  backgroundColors: colors,
  borderColors: Object.assign({ default: colors['grey-light'] }, colors),
  fonts: {
    ...defaultConfig.fonts,
    'mono': ['Roboto Mono', ...defaultConfig.fonts.mono],
  },
  fontWeights: _.pick(defaultConfig.fontWeights, ['normal', 'medium', 'bold']),
  borderWidths: {
    ...defaultConfig.borderWidths,
    '3': '3px',
  },
  borderRadius: {
    ...defaultConfig.borderRadius,
    'none': '0',
  },
  modules: {
    ...defaultConfig.modules,
    borderStyle: ['responsive', 'hover', 'focus'],
    borderWidths: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('tailwindcss/plugins/container')({
      center: true,
      padding: '1rem',
    }),
    require('tailwindcss-spaced-items')(),
    require('tailwindcss-visuallyhidden')(),
    require('tailwindcss-skip-link')(),
    require('tailwindcss-vuejs')(),
  ],
  options: {
    ...defaultConfig.options,
    important: true,
  }
}
