const aspectRatio = require('@tailwindcss/aspect-ratio')
const colors = require('./tailwind-colours')
const defaultTheme = require('tailwindcss/defaultTheme')
const focusVisible = require('./tailwind-plugin-focus-visible')
const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')
const { fontFamily } = defaultTheme

module.exports = {
  darkMode: false,
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
            a: {
              color: theme('colors.blue.700')
            },
            code: {
              backgroundColor: theme('colors.gray.150'),
              fontWeight: theme('fontWeight.normal'),
              paddingBottom: theme('spacing.px'),
              paddingLeft: theme('spacing.1'),
              paddingRight: theme('spacing.1'),
              paddingTop: theme('spacing.px')
            },
            h2: {
              marginBottom: theme('spacing.2'),
              marginTop: theme('spacing.8')
            },
            pre: {
              backgroundColor: theme('colors.gray.150'),
              borderRadius: '0',
              color: theme('colors.gray.800'),
              padding: theme('spacing.6')
            },
            'code::before': false,
            'code::after': false,
            'pre code::before': false,
            'pre code::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),

            code: {
              backgroundColor: theme('colors.gray.750'),
              color: theme('colors.gray.200')
            },

            'blockquote, h2, h3': {
              color: theme('colors.white')
            },

            strong: {
              color: theme('colors.gray.200')
            }
          }
        }
      }),
      colors,
      fontFamily: {
        sans: [
          'Inter',
          'Arial',
          'Helvetica Neue',
          'Helvetica',
          'sans-serif',
        ],
        mono: [
          'Operator Mono',
          'Roboto Mono',
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
