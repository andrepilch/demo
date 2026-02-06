import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const title = style({
  fontSize: '1.875rem',
  fontWeight: '700',
  color: vars.color.textPrimary,
  margin: 0,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '2.25rem',
    },
  },
})

export const placeholder = style({
  fontSize: '1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.7,
})
