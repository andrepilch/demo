import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.border}`,
})

export const banner = style({
  background: '#111',
  padding: '1.25rem',
  paddingLeft: vars.layout.sectionPaddingX,
  paddingRight: vars.layout.sectionPaddingX,
  '@media': {
    'screen and (min-width: 768px)': {
      paddingLeft: vars.layout.sectionPaddingXMd,
      paddingRight: vars.layout.sectionPaddingXMd,
    },
  },
})

export const pill = style({
  display: 'inline-block',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  borderRadius: vars.radius.full,
  background: '#fff',
  color: '#111',
  fontSize: '1rem',
  fontWeight: '600',
  border: '1px solid rgba(255,255,255,0.2)',
})

export const content = style({
  padding: '2rem',
  paddingLeft: vars.layout.sectionPaddingX,
  paddingRight: vars.layout.sectionPaddingX,
  background: vars.color.bgCard,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '2.5rem',
      paddingLeft: vars.layout.sectionPaddingXMd,
      paddingRight: vars.layout.sectionPaddingXMd,
    },
  },
})

export const list = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const listItem = style({
  fontSize: '1.0625rem',
  color: vars.color.textPrimary,
  lineHeight: 1.6,
})
