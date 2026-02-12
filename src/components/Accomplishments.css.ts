import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const block = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
})

export const list = style({
  listStylePosition: 'outside',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})
