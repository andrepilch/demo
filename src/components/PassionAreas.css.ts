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

export const columns = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '3rem',
    },
  },
})

export const column = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
})

export const columnTitle = style({
  fontSize: '1.125rem',
  fontWeight: '700',
  color: vars.color.textPrimary,
  margin: 0,
})

export const list = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const listItem = style({
  fontSize: '1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.5,
})
