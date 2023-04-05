const colors = require('../../style-dict/colors.cjs')

const twColors = {
  'primary': colors.purple['90'],
  'secondary': colors.navy['90'],
  'white': colors.white,
  'black': colors.black,
}

module.exports = Object.assign(colors, twColors)