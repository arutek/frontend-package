require('dotenv').config()
const styleName = process.env.VITE_STYLE || process.env.STYLE || 'default'
const colors = require(`./tailwind/${styleName}/colors.cjs`)
const spacing = require(`./tailwind/${styleName}/spacing.cjs`)
const letterSpacing = require(`./tailwind/${styleName}/letterSpacing.cjs`)
const minWidth = require(`./tailwind/${styleName}/minWidth.cjs`)
const maxWidth = require(`./tailwind/${styleName}/maxWidth.cjs`)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*/index.html',
    './src/**/*.{js,jsx,md,mdx,ts,tsx}',
    './tabs/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /.*/
    }
  ],
  theme: {
    colors,
    spacing,
    letterSpacing,
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      },
      maxWidth,
      minWidth,
    },
  },
  plugins: [],
}
