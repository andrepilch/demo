import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const pageWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.section,
  paddingTop: vars.gap.section,
  paddingBottom: vars.gap.section,
})
