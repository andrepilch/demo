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

export const aboutLink = style({
  alignSelf: 'flex-start',
  marginTop: '0.25rem',
  color: vars.color.accent,
  fontSize: '0.875rem',
  transition: 'opacity 0.2s ease',
  ':hover': {
    opacity: 0.8,
  },
})
