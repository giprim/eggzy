export const formatCurrency = (number: number) => new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'NGN' }).format(
  number,
)