export default {
  currency (val:number) {
    if (typeof val !== 'number') val = 0
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(val)
  },
}