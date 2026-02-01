import { style, keyframes } from '@vanilla-extract/css'
import { vars } from '@/styles'

// Logo text shimmer animation
const logoShimmer = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(10px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

// Gradient flow animation for the triangle
const gradientFlow = keyframes({
  '0%': {
    stopColor: '#00aeef',
  },
  '33%': {
    stopColor: '#00d4ff',
  },
  '66%': {
    stopColor: '#0099dd',
  },
  '100%': {
    stopColor: '#00aeef',
  },
})

// Outline drawing animation
const drawOutline = keyframes({
  '0%': {
    strokeDashoffset: 500,
  },
  '100%': {
    strokeDashoffset: 0,
  },
})

export const logoContainer = style({
  position: 'relative',
  width: '190px',
  height: '121px',
  display: 'block',
  cursor: 'pointer',
  userSelect: 'none',
})

export const triangleSvg = style({
  position: 'absolute',
  top: '8px',
  left: '8px',
  width: '100%',
  height: '100%',
  overflow: 'visible',
  filter: 'drop-shadow(0 0 6px rgba(0, 174, 239, 0.3))',
  transition: 'filter 0.8s ease',
  transformOrigin: 'top left',
  ':hover': {
    filter: 'drop-shadow(0 0 12px rgba(0, 174, 239, 0.5))',
  },
})

export const trianglePath = style({
  transition: 'd 4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s ease-out',
})

// Triangle outline that draws on load
export const triangleOutline = style({
  fill: 'none',
  stroke: '#00aeef',
  strokeWidth: 2,
  strokeDasharray: 500,
  strokeDashoffset: 500,
  filter: 'drop-shadow(0 0 4px rgba(0, 174, 239, 0.8))',
  animation: `${drawOutline} 1.2s ease-out forwards`,
  transition: 'd 4s cubic-bezier(0.4, 0, 0.2, 1)',
})

// After outline is drawn, keep it visible
export const outlineDrawn = style({
  strokeDashoffset: 0,
})

export const gradientStop1 = style({
  animation: `${gradientFlow} 4s ease-in-out infinite`,
})

export const gradientStop2 = style({
  animation: `${gradientFlow} 4s ease-in-out infinite 1.3s`,
})

export const gradientStop3 = style({
  animation: `${gradientFlow} 4s ease-in-out infinite 2.6s`,
})

export const logoText = style({
  position: 'absolute',
  top: '8px',
  left: '8px',
  width: '100%',
  height: '100%',
  color: '#ffffff',
  opacity: 0,
  animation: `${logoShimmer} 0.6s ease-out 0.8s forwards`,
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
  transition: 'filter 0.3s ease',
  ':hover': {
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
  },
})

// Edge glow effect
export const edgeGlow = style({
  position: 'absolute',
  top: '8px',
  left: '8px',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  opacity: 0,
  transition: 'opacity 0.4s ease',
  selectors: {
    [`${logoContainer}:hover &`]: {
      opacity: 1,
    },
  },
})

const edgeTrace = keyframes({
  '0%': {
    strokeDashoffset: 400,
  },
  '100%': {
    strokeDashoffset: 0,
  },
})

export const edgePath = style({
  stroke: 'rgba(0, 174, 239, 0.8)',
  strokeWidth: 2,
  fill: 'none',
  strokeDasharray: 400,
  strokeDashoffset: 400,
  filter: 'drop-shadow(0 0 4px rgba(0, 174, 239, 1))',
  transition: 'd 4s cubic-bezier(0.4, 0, 0.2, 1)',
  selectors: {
    [`${logoContainer}:hover &`]: {
      animation: `${edgeTrace} 1s ease-out forwards`,
    },
  },
})

// Growing animation for the triangle path
const triangleGrowPath = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
})

export const triangleGrowAnimation = style({
  animation: `${triangleGrowPath} 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
  transformOrigin: 'top left',
})

// Hypotenuse glow line
const hypotenuseGlow = keyframes({
  '0%': {
    strokeDashoffset: 300,
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    strokeDashoffset: 0,
    opacity: 0.6,
  },
})

export const hypotenuseLine = style({
  stroke: 'rgba(255, 255, 255, 0.6)',
  strokeWidth: 1.5,
  fill: 'none',
  strokeDasharray: 300,
  strokeDashoffset: 300,
  filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))',
  transition: 'd 4s cubic-bezier(0.4, 0, 0.2, 1)',
  selectors: {
    [`${logoContainer}:hover &`]: {
      animation: `${hypotenuseGlow} 1.2s ease-out forwards`,
    },
  },
})

// Logo wrapper for menu
export const logoWrapper = style({
  position: 'relative',
  zIndex: 100,
})

// Fade in animation for overlay
const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

// Fade in up animation for menu content
const fadeInUp = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

// Menu overlay backdrop
export const menuOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 99,
  animation: `${fadeIn} 0.3s ease-out`,
})

// Triangle menu animation - grows from top left
const triangleMenuGrow = keyframes({
  '0%': {
    transform: 'scale(0) translate(0, 0)',
    opacity: 0,
  },
  '100%': {
    transform: 'scale(1) translate(0, 0)',
    opacity: 1,
  },
})

// Triangle menu container
export const triangleMenu = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  pointerEvents: 'auto',
})

// Triangle menu SVG - grows from top left
export const triangleMenuSvg = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '80vw',
  height: '80vh',
  transformOrigin: 'top left',
  animation: `${triangleMenuGrow} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
  // Scale to cover viewport - triangle is 190x121, so we need to scale it up
  // Using a large scale factor to ensure it covers the viewport
  transform: 'scale(20)',
  '@media': {
    '(min-width: 768px)': {
      transform: 'scale(15)',
      width: '60vw',
      height: '60vh',
    },
    '(min-width: 1024px)': {
      transform: 'scale(12)',
      width: '40vw',
      height: '40vh',
    },
  },
})

// Triangle menu path - fill transitions to white
export const triangleMenuPath = style({
  fill: '#ffffff',
  transition: 'fill 0.3s ease-out',
})

// Menu content container
export const menuContent = style({
  position: 'absolute',
  top: vars.space.md,
  left: vars.space.md,
  zIndex: 101,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: vars.space.lg,
  animation: `${fadeInUp} 0.5s ease-out 0.2s both`,
  '@media': {
    '(min-width: 768px)': {
      top: vars.space.xl,
      left: vars.space.xl,
      gap: '2rem',
    },
  },
})

// Menu navigation
export const menuNav = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
})

// Menu nav link
export const menuNavLink = style({
  fontSize: '1.5rem',
  fontWeight: '500',
  color: '#0a0a0f',
  textDecoration: 'none',
  transition: 'color 0.2s ease, opacity 0.2s ease',
  ':hover': {
    color: '#00aeef',
    opacity: 0.8,
  },
  '@media': {
    '(min-width: 768px)': {
      fontSize: '2rem',
    },
  },
})

// Menu nav link active
export const menuNavLinkActive = style({
  color: '#00aeef',
})

// Menu social links
export const menuSocialLinks = style({
  display: 'flex',
  gap: '1rem',
  paddingTop: '0.5rem',
})

// Menu social link
export const menuSocialLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  color: '#0a0a0f',
  transition: 'color 0.2s ease, opacity 0.2s ease',
  ':hover': {
    color: '#00aeef',
    opacity: 0.8,
  },
})

// Menu CTA button
export const menuCta = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
  borderRadius: '9999px',
  fontWeight: '500',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  background: '#00aeef',
  color: '#ffffff',
  textAlign: 'center',
  textDecoration: 'none',
  width: 'fit-content',
  ':hover': {
    background: '#0088cc',
    transform: 'translateY(-2px)',
  },
})
