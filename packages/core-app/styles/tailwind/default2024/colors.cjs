const colors = require('../../style-dict/colors.cjs')

const twColors = {
  'primary': '#3A55C1',
  'light-primary': '#4669FA',
  'secondary': '#798699',
  'light-secondary': '#A0AEC0',
  'success': '#419779',
  'light-success': '#50C793',
  'info': '#11AEC1',
  'light-info': '#0CE7FA',
  'warning': '#B8715D',
  'light-warning': '#FA916B',
  'error': '#B24A52',
  'light-error': '#F1595C',
  'background-light': '#E2E8F0',
  'background': '#FFFFFF',
  'contrast-primary': colors.white,
  'contrast-success': colors.white,
  'danger': colors.red['90'],
  'light-danger': colors.red['80'],
  'contrast-danger': colors.white,
  'contrast-secondary': colors.white,
  'terniary': colors.navy['90'],
  'quaternary': colors.navy['90'],
  'quinary': colors.navy['90'],
  'foreground': colors.slate['30'],
  'white': colors.white,
  'black': colors['dark-grey'][90],
  'light-black': colors['dark-grey'][80],
  'contrast-black': colors.black,
}

module.exports = Object.assign(colors, twColors)