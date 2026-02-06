import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const linkAccent = style({
  color: vars.color.accent,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-2px',
    width: 0,
    height: '2px',
    background: vars.color.accent,
    transition: 'width 0.3s ease',
  },
  selectors: {
    '&:hover::after': {
      width: '100%',
    },
  },
})
