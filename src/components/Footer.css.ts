import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const footer = style({
  marginTop: 'auto',
})

export const container = style({
  maxWidth: vars.layout.contentMaxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: `2rem ${vars.layout.sectionPaddingX}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  '@media': {
    'screen and (min-width: 768px)': {
      paddingLeft: vars.layout.sectionPaddingXMd,
      paddingRight: vars.layout.sectionPaddingXMd,
    },
  },
})

export const copyright = style({
  color: vars.color.textMuted,
  fontSize: '0.875rem',
})
