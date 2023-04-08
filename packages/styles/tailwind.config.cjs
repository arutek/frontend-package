const colors = require(`./tailwind/${process.env.VITE_STYLE}/colors.cjs`)
const spacing = require(`./tailwind/${process.env.VITE_STYLE}/spacing.cjs`)
const letterSpacing = require(`./tailwind/${process.env.VITE_STYLE}/letterSpacing.cjs`)
const minWidth = require(`./tailwind/${process.env.VITE_STYLE}/minWidth.cjs`)
const maxWidth = require(`./tailwind/${process.env.VITE_STYLE}/maxWidth.cjs`)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*/index.html',
    './src/**/*.{js,jsx,md,mdx,ts,tsx}',
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
