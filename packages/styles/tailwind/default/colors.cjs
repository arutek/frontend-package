const colors = require('../../style-dict/colors.cjs')

const twColors = {
  'primary': colors.purple['90'],
  'light-primary': colors.purple['80'],
  'contrast-primary': colors.white,
  'success': colors.green['90'],
  'light-success': colors.green['80'],
  'contrast-success': colors.white,
  'danger': colors.red['90'],
  'light-danger': colors.red['80'],
  'contrast-danger': colors.white,
  'secondary': colors.navy['90'],
  'contrast-secondary': colors.white,
  'terniary': colors.navy['90'],
  'quaternary': colors.navy['90'],
  'quinary': colors.navy['90'],
  'background': colors.slate['10'],
  'foreground': colors.slate['30'],
  'white': colors.white,
  'black': colors['dark-grey'][90],
  'light-black': colors['dark-grey'][80],
  'contrast-black': colors.black,
}

module.exports = Object.assign(colors, twColors)