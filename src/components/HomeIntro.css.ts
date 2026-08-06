import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const section = style({
  position: 'relative',
  zIndex: 10,
})

export const intro = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '42rem',
  color: vars.color.textPrimary,
})
