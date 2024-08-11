
export type TStatus = 'pending' | 'approved' | 'declined'
export const Status: Record<TStatus, { light: string, dark: string }> = {
  approved: { light: '$green6Light', dark: '$green9Dark' },
  declined: { light: '$red6Light', dark: '$red9Dark' },
  pending: { light: '$orange6Light', dark: '$orange9Dark' },
}

export type alertType = 'default' | 'info' | 'warning' | 'success' | 'error'
export const AlertColor: Record<alertType, { dark: string, light: string }> = {
  default: { dark: '$color6', light: '$color3' },
  error: { dark: '$red9Dark', light: '$red6Light' },
  info: { dark: '$blue9Dark', light: '$blue6Light' },
  success: { dark: '$green9Dark', light: '$green6Light' },
  warning: { dark: '$orange9Dark', light: '$orange6Light' }
}
