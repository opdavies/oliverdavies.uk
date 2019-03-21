let defaultConfig = require('tailwindcss/defaultConfig')
let defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#2779bd',
          default: 'hsl(203, 94%, 38%)',
          lighter: '#bcdefa',
        },
        grey: {
          dark: '#70818a',
          darker: '#596a73',
          default: '#9babb4',
          light: 'hsl(203, 25%, 88%)',
          lighter: 'hsl(203, 22%, 95%)',
          lightest: '#fafcfc',
        },
      },
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        '2px': '2px',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [
    require('tailwindcss-spaced-items')({ values: defaultTheme.spacing }),
    require('tailwindcss-visuallyhidden')(),
    require('tailwindcss-skip-link')(),
    require('tailwindcss-vuejs')(),
  ],
  variants: {
    borderStyle: [...defaultConfig.variants.borderStyle, 'hover', 'focus'],
    borderWidth: [...defaultConfig.variants.borderStyle, 'hover', 'focus'],
  },
}
