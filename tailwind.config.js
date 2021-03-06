const typography = require('@tailwindcss/typography')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.md', './src/**/*.js', './src/**/*.ts'],
  },
  darkMode: 'media',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: colors.gray[900],
            a: {
              color: colors.indigo[600],
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              fontSize: '1.6em',
              color: 'inherit',
            },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            code: { color: 'inherit' },
            blockquote: { color: 'inherit' },
            thead: { color: 'inherit' },
          },
        },
        dark: {
          css: {
            color: colors.gray[200],
          },
        },
      },
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      fontWeight: ['active'],
    },
  },
  plugins: [typography],
}
