import { style, globalStyle } from '@vanilla-extract/css'
import {
  ETERNITY_BRAND,
  ETERNITY_BRAND_FADED,
  PHONE_HEIGHT,
  PHONE_WIDTH,
} from './eternity-tokens'

const fg = '#1d1d1d'
const bg = '#ffffff'
const inverted = '#1d1d1d'

export const stage = style({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  height: '100vh',
  overflow: 'clip',
  isolation: 'isolate',
  background: bg,
  color: fg,
  fontFamily: 'var(--font-outfit, var(--font-sans), system-ui, sans-serif)',
  '@supports': {
    '(min-height: 100dvh)': {
      minHeight: '100dvh',
      height: '100dvh',
    },
  },
})

export const booksCanvas = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  display: 'block',
  zIndex: 0,
})

export const phoneAnchor = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: 0,
  height: 0,
  zIndex: 3,
  opacity: 0,
})

export const phoneFrame = style({
  position: 'absolute',
  width: PHONE_WIDTH,
  height: PHONE_HEIGHT,
  left: -PHONE_WIDTH / 2,
  top: -PHONE_HEIGHT / 2 - 1,
  transformOrigin: 'center center',
})

export const phoneBezel = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  borderRadius: 55,
  background: inverted,
  boxShadow:
    '0 14px 34px -14px rgba(0,0,0,.45), 0 2px 6px -3px rgba(0,0,0,.3)',
  pointerEvents: 'none',
})

export const phoneScreen = style({
  position: 'absolute',
  inset: 4,
  zIndex: 1,
  borderRadius: 51,
  overflow: 'clip',
  background: bg,
})

export const phoneTrimSvg = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 2,
  overflow: 'visible',
})

export const phoneNotch = style({
  position: 'absolute',
  left: 139,
  top: 15,
  width: 112,
  height: 33,
  borderRadius: 20,
  background: '#000',
  zIndex: 3,
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      right: 9,
      top: 8.5,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#15171C',
      boxShadow: 'inset 0 0 0 2px #0A0B0D',
    },
  },
})

export const copyPanel = style({
  position: 'absolute',
  zIndex: 2,
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: 'min(100%, 640px)',
  maxWidth: '42%',
  padding: '48px 32px 48px 144px',
  opacity: 'var(--hero-copy-opacity, 0)',
  pointerEvents: 'none',
  '@media': {
    '(max-width: 899px)': {
      maxWidth: '100%',
      top: 0,
      left: 0,
      right: 0,
      padding: '48px 32px',
      selectors: {
        '&::before': {
          content: '""',
          position: 'absolute',
          zIndex: -1,
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 100% 90% at 50% 40%, color-mix(in srgb, #fff 90%, transparent) 45%, transparent 85%)',
        },
      },
    },
    '(min-width: 900px)': {
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      paddingLeft: 160,
    },
    '(prefers-reduced-motion: reduce)': {
      opacity: 1,
      vars: {
        '--hero-copy-events': 'auto',
      },
    },
  },
})

globalStyle(`${copyPanel} a`, {
  pointerEvents: 'var(--hero-copy-events, none)',
})

export const tagline = style({
  fontSize: '2.5rem',
  lineHeight: 1.2,
  color: fg,
  textWrap: 'pretty',
  fontWeight: 600,
})

export const subtitle = style({
  fontSize: '1.25rem',
  lineHeight: 1.5,
  color: fg,
  textWrap: 'pretty',
})

export const ctaRow = style({
  display: 'flex',
  gap: 24,
  flexWrap: 'wrap',
  alignItems: 'center',
})

export const ctaLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 48,
  padding: '0 24px',
  borderRadius: 1000,
  border: 'none',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: '1rem',
  textDecoration: 'none',
  background: ETERNITY_BRAND,
  color: '#f1f0f2',
  boxShadow: '0 2px 2px rgba(0,0,0,.2)',
  transition: 'transform 0.2s ease',
  ':hover': {
    transform: 'scale(1.03)',
  },
})

export const myBiblesRoot = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'clip',
  background: bg,
})

export const myBiblesScroll = style({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  paddingBottom: 80,
})

export const myBiblesHeader = style({
  paddingTop: 72,
  paddingBottom: 12,
  paddingLeft: 20,
  paddingRight: 20,
  fontSize: '1.5rem',
  fontWeight: 600,
})

export const pairingGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(120px, 1fr))',
  gap: 20,
  padding: '32px 20px',
  alignItems: 'start',
})

export const pairingColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  minWidth: 0,
})

export const addCard = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '0.7272727273',
  borderRadius: '2px 8px 8px 2px',
  border: `2px dashed ${ETERNITY_BRAND_FADED}`,
  color: ETERNITY_BRAND,
  fontWeight: 500,
  fontSize: '0.875rem',
  background: 'transparent',
})

export const tabBar = style({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 5,
  display: 'flex',
  justifyContent: 'space-around',
  padding: '8px 12px',
  borderTop: '1px solid #efefef',
  background: bg,
})

export const tabItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  fontSize: 10,
  color: '#797979',
})

export const tabItemActive = style({
  color: ETERNITY_BRAND,
  fontWeight: 600,
})

export const pairingCard = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  aspectRatio: '0.7272727273',
  borderRadius: '2px 8px 8px 2px',
  padding: '40px 16px 16px 52px',
  color: fg,
  flex: '1 1 auto',
  boxShadow: [
    '0 2px 1px 0 rgba(255,255,255,.25) inset',
    '-1px -2px 1px 0 rgba(0,0,0,.2) inset',
    '3px 6px 4px 0 rgba(0,0,0,.1)',
    'inset 40px 0 0 0 var(--pairing-card-color)',
  ].join(', '),
  selectors: {
    '&::before': {
      content: '""',
      pointerEvents: 'none',
      width: 15,
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.7,
      background:
        'linear-gradient(270deg, rgba(255,255,255,0) 13.33%, rgba(255,255,255,.6) 23.6%, rgba(255,255,255,0) 26.46%, rgba(0,0,0,.07) 37.71%, rgba(0,0,0,.2) 41.78%, rgba(0,0,0,.46) 50.73%, rgba(44,44,44,.05) 56.47%, rgba(255,255,255,.4) 77.09%, rgba(255,255,255,.8) 92%, rgba(255,255,255,.7))',
    },
  },
})

export const pairingName = style({
  lineHeight: 1.2,
  fontWeight: 600,
  fontSize: '1.1rem',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
})

export const pairingMeta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  width: '100%',
  fontSize: '0.8rem',
  color: '#3d3d3d',
})

export const pairingFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  fontSize: '0.75rem',
  color: '#797979',
})
