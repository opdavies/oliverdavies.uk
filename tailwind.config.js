const { variants } = require('tailwindcss/defaultConfig')
const { fontFamily, spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        inherit: 'inherit'
      },
      fontFamily: {
        mono: ['Roboto Mono', ...fontFamily.mono]
      },
      spacing: {
        '2px': '2px'
      },
      borderWidth: {
        3: '3px'
      },
      width: {
        96: '24rem'
      }
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwindcss-spaced-items')({ values: spacing }),
    require('tailwindcss-visuallyhidden')(),
    require('tailwindcss-skip-link')()
  ],
  variants: {
    borderStyle: [...variants.borderStyle, 'hover', 'focus'],
    borderWidth: [...variants.borderStyle, 'hover', 'focus']
  }
}
