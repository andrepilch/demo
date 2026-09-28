import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

/** Stack of full-viewport project covers on the home page */
export const portfolioCovers = style({
  display: 'flex',
  flexDirection: 'column',
})

/**
 * Eternity cover is a separate static route so its client chunk is not part
 * of the home page webpack graph.
 */
export const eternityFrame = style({
  display: 'block',
  width: '100vw',
  height: '100vh',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  border: 'none',
  background: '#ffffff',
  overflow: 'clip',
  '@supports': {
    '(height: 100dvh)': {
      height: '100dvh',
    },
  },
})

/** Full-bleed link wrapping each portfolio cover hero */
export const portfolioCover = style({
  display: 'block',
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'filter 0.3s ease',
  ':hover': {
    filter: 'brightness(1.05)',
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.textOnAccent}`,
    outlineOffset: '4px',
  },
})

export const coverStats = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
  marginTop: '0.5rem',
})

export const coverStat = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
})

export const coverStatValue = style({
  fontSize: '1.25rem',
  fontWeight: '700',
  color: vars.color.textOnAccent,
  lineHeight: 1.2,
})

export const coverStatLabel = style({
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.85)',
  textTransform: 'uppercase',
  letterSpacing: '0.025em',
})

export const otherProductsSection = style({
  columnCount: 1,
  columnGap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      columnCount: 2,
    },
  },
})

export const otherProductItem = style({
  breakInside: 'avoid',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: '2rem',
  ':last-child': {
    marginBottom: 0,
  },
})

/** Body copy on brand (accent) background */
export const otherProductBodyOnBrand = style({
  color: 'rgba(255, 255, 255, 0.85)',
})
