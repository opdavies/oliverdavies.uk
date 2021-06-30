const aspectRatio = require('@tailwindcss/aspect-ratio')
const colors = require('./tailwind-colours')
const defaultTheme = require('tailwindcss/defaultTheme')
const focusVisible = require('./tailwind-plugin-focus-visible')
const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')
const { fontFamily } = defaultTheme

module.exports = {
  darkMode: 'media',
  important: true,
  purge: {
    content: [
      'tailwind-safelist-classes.txt',
      'source/**/*.{md,twig}',
    ],
  },
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
            css: {
                p: {
                    lineHeight: 400
                }
            }
        }
      }),
      colors,
      fontFamily: {
        sans: [
          'Roboto Condensed',
          'Arial',
          'Helvetica Neue',
          'Helvetica',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Consolas',
          'Liberation Mono',
          ...fontFamily.mono
        ]
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
    aspectRatio,
    focusVisible,
    forms,
    typography
  ]
}
