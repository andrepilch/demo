import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const themeWrapper = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.bgPrimary,
  color: vars.color.textPrimary,
  transition: 'background-color 0.3s ease, color 0.3s ease',
})
