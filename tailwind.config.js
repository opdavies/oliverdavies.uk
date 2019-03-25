let defaultConfig = require('tailwindcss/defaultConfig')
let defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
      },
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        '2px': '2px',
      },
      borderWidth: {
        3: '3px',
      }
    }
  },
  plugins: [
    require('tailwindcss-spaced-items')({ values: defaultTheme.spacing }),
    require('tailwindcss-visuallyhidden')(),
    require('tailwindcss-skip-link')(),
    require('tailwindcss-vuejs')()
  ],
  variants: {
    borderStyle: [...defaultConfig.variants.borderStyle, 'hover', 'focus'],
    borderWidth: [...defaultConfig.variants.borderStyle, 'hover', 'focus']
  }
}
