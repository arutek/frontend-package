export default {
  currency (val:number) {
    if (typeof val !== 'number') val = 0
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(val)
  },
  shortCurrency (val:number, symbol = 'Rp') {
    const suffixes = ["", "Rb", "Jt", "Mil", "Tri"]
    const plusMin = val < 0 ? '-' : ''
    val = Math.abs(val)
    let suffixIndex = 0
    while (val >= 1000 && suffixIndex < suffixes.length - 1) {
      val /= 1000
      suffixIndex++
    }
    const numVal = val.toFixed(1).replace(/\.0$/, '')
    return `${plusMin}${symbol} ${numVal} ${suffixes[suffixIndex]}`
  },
  numbering (val:number) {
    if (typeof val !== 'number') val = 0
    return new Intl.NumberFormat('id-ID').format(val)
  }
}