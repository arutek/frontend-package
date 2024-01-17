require('dotenv').config()
const styleName = process.env.VITE_STYLE || process.env.STYLE || 'default'
const colors = require(`./tailwind/${styleName}/colors.cjs`)
const spacing = require(`./tailwind/${styleName}/spacing.cjs`)
const fontSize = require(`./tailwind/${styleName}/fontSize.cjs`)
const letterSpacing = require(`./tailwind/${styleName}/letterSpacing.cjs`)
const minWidth = require(`./tailwind/${styleName}/minWidth.cjs`)
const maxWidth = require(`./tailwind/${styleName}/maxWidth.cjs`)


const defaultFonts = ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
let selectedFont
switch (styleName) {
case 'default2024':
  selectedFont = 'Inter'
  break
default:
  selectedFont = 'Plus Jakarta Sans'
  break
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*/index.html',
    './src/**/*.{js,jsx,md,mdx,ts,tsx}',
    './tabs/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /.*/,
      variants: ['group-hover']
    }
  ],
  theme: {
    colors: colors || {},
    extend: {
      fontFamily: {
        'sans': [selectedFont, ...defaultFonts],
      },
      maxWidth: maxWidth || {},
      minWidth: minWidth || {},
      spacing: spacing || {},
      letterSpacing: letterSpacing || {},
      fontSize: fontSize || {},
    },
  },
  plugins: [],
}
