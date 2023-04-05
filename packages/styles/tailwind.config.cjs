const path = require('path')
const colors = require('./tailwind/default/colors.cjs')
const spacing = require('./tailwind/default/spacing.cjs')
const letterSpacing = require('./tailwind/default/letterSpacing.cjs')
const minWidth = require('./tailwind/default/minWidth.cjs')
const maxWidth = require('./tailwind/default/maxWidth.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'**/*/index.html',
    './src/**/*.{js,jsx,md,mdx,ts,tsx}',
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
