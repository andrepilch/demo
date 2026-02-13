import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const logoGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.lg,
})

export const logoItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: vars.space.lg,
})

export const logoImg = style({
  width: '100%',
  height: 'auto',
  maxHeight: '400px',
  objectFit: 'contain',
  filter: vars.image.logoFilter,
})
