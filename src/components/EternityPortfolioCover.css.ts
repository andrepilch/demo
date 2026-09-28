import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const brand = '#380BBB'
const brandFaded = '#9AA3E8'

const phoneIntro = keyframes({
  '0%': {
    opacity: 0,
    transform:
      'translate(-50%, -50%) perspective(1200px) rotateX(52deg) rotateY(-18deg) rotateZ(-28deg) scale(2.15)',
  },
  '100%': {
    opacity: 1,
    transform:
      'translate(-50%, -50%) perspective(1200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)',
  },
})

const copyFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(16px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const cover = style({
  position: 'relative',
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  minHeight: '100vh',
  height: '100vh',
  overflow: 'clip',
  isolation: 'isolate',
  background: '#ffffff',
  color: '#1d1d1d',
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
  pointerEvents: 'none',
})

export const stage = style({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  height: '100%',
})

export const phoneLayer = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: 0,
  height: 0,
  zIndex: 2,
})

export const phone = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: 260,
  height: 520,
  marginLeft: -130,
  marginTop: -260,
  transformOrigin: 'center center',
  animation: `${phoneIntro} 2.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
  '@media': {
    'screen and (min-width: 768px)': {
      width: 300,
      height: 600,
      marginLeft: -150,
      marginTop: -300,
    },
  },
})

export const phoneBezel = style({
  position: 'absolute',
  inset: 0,
  borderRadius: 40,
  background: '#1d1d1d',
  boxShadow:
    '0 14px 34px -14px rgba(0,0,0,.45), 0 2px 6px -3px rgba(0,0,0,.3)',
})

export const phoneScreen = style({
  position: 'absolute',
  inset: 4,
  borderRadius: 36,
  overflow: 'hidden',
  background: '#ffffff',
})

export const phoneNotch = style({
  position: 'absolute',
  left: '50%',
  top: 10,
  width: 88,
  height: 24,
  marginLeft: -44,
  borderRadius: 14,
  background: '#000',
  zIndex: 2,
})

export const screenContent = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '40px 12px 0',
  fontSize: 11,
})

export const screenTitle = style({
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 12,
  paddingLeft: 4,
})

export const pairingGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
  flex: 1,
  overflow: 'hidden',
  alignContent: 'start',
})

export const pairingCard = style({
  borderRadius: 12,
  padding: '10px 8px',
  color: '#fff',
  minHeight: 72,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})

export const pairingName = style({
  fontWeight: 700,
  fontSize: 12,
})

export const pairingRef = style({
  fontSize: 10,
  opacity: 0.9,
})

export const pairingMeta = style({
  fontSize: 9,
  opacity: 0.75,
  marginTop: 'auto',
})

export const addCard = style({
  borderRadius: 12,
  border: '1.5px dashed #ccc',
  minHeight: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#888',
  fontSize: 11,
})

export const tabBar = style({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '8px 0 10px',
  borderTop: '1px solid #eee',
  fontSize: 9,
  color: '#888',
})

export const tabActive = style({
  color: brand,
  fontWeight: 600,
})

export const copyPanel = style({
  position: 'absolute',
  zIndex: 3,
  left: 'max(1.5rem, 4vw)',
  bottom: 'max(2rem, 6vh)',
  width: 'min(100% - 3rem, 36rem)',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  animation: `${copyFade} 0.85s ease 2.85s both`,
  '@media': {
    'screen and (min-width: 768px)': {
      left: 'max(3rem, 8vw)',
      bottom: 'max(3rem, 10vh)',
      width: 'min(100% - 6rem, 40rem)',
    },
  },
})

export const tagline = style({
  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  margin: 0,
})

export const subtitle = style({
  fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
  lineHeight: 1.5,
  color: '#444',
  margin: 0,
  maxWidth: '36rem',
})

export const ctaLink = style({
  display: 'inline-flex',
  alignSelf: 'flex-start',
  alignItems: 'center',
  padding: '0.75rem 1.25rem',
  borderRadius: 999,
  background: brand,
  color: '#fff',
  fontWeight: 600,
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: 'background 0.2s ease, transform 0.2s ease',
  ':hover': {
    background: brandFaded,
    transform: 'translateY(-1px)',
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.textPrimary}`,
    outlineOffset: 3,
  },
})
