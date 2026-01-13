import { style, keyframes } from '@vanilla-extract/css';
import { vars } from './theme.css';

// ============================================
// Keyframes
// ============================================

export const twinkle = keyframes({
  '0%, 100%': { opacity: '0.3' },
  '50%': { opacity: '0.8' },
});

export const shoot = keyframes({
  '0%': {
    transform: 'translateX(-100%) translateY(-100%) rotate(-45deg)',
    opacity: '0',
  },
  '5%': { opacity: '1' },
  '15%': { opacity: '0' },
  '100%': {
    transform: 'translateX(100vw) translateY(100vh) rotate(-45deg)',
    opacity: '0',
  },
});

export const scrollLeft = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-50%)' },
});

export const fadeInUp = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(20px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  },
});

export const diagonalMorph = keyframes({
  '0%, 100%': {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 25%, 0% 55%)',
  },
  '25%': {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 40%, 0% 45%)',
  },
  '50%': {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 60%, 0% 30%)',
  },
  '75%': {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 45%, 0% 42%)',
  },
});

// ============================================
// Layout Components
// ============================================

export const sectionContainer = style({
  maxWidth: '72rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  '@media': {
    'screen and (min-width: 768px)': {
      paddingLeft: vars.space.xl,
      paddingRight: vars.space.xl,
    },
  },
});

// ============================================
// Card Components
// ============================================

export const card = style({
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  transition: 'all 0.3s ease',
  ':hover': {
    background: vars.color.bgCardHover,
    borderColor: vars.color.borderLight,
    transform: 'translateY(-2px)',
  },
});

export const statCard = style({
  position: 'relative',
  background: vars.color.bgCard,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    inset: '0',
    borderRadius: vars.radius.lg,
    padding: '1px',
    background: `linear-gradient(135deg, rgba(14, 165, 233, 0.4), transparent 50%)`,
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
    WebkitMaskComposite: 'xor',
    pointerEvents: 'none',
  },
});

export const frameworkCard = style({
  position: 'relative',
  padding: vars.space['2xl'],
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    height: '3px',
    background: `linear-gradient(90deg, ${vars.color.accent}, transparent)`,
  },
});

export const caseStudyCard = style({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: vars.radius.xl,
  '::after': {
    content: '""',
    position: 'absolute',
    inset: '0',
    background: `linear-gradient(to top, ${vars.color.bgPrimary}, transparent 60%)`,
    pointerEvents: 'none',
  },
});

// ============================================
// Button Components
// ============================================

export const btnPrimary = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  paddingTop: vars.space.md,
  paddingBottom: vars.space.md,
  borderRadius: vars.radius.full,
  fontWeight: '500',
  transition: 'all 0.3s ease',
  background: vars.color.accent,
  color: vars.color.bgPrimary,
  ':hover': {
    background: vars.color.accent,
    transform: 'translateY(-1px)',
    boxShadow: vars.shadow.glow,
  },
});

export const btnSecondary = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  paddingTop: vars.space.md,
  paddingBottom: vars.space.md,
  borderRadius: vars.radius.full,
  fontWeight: '500',
  transition: 'all 0.3s ease',
  background: 'transparent',
  border: `1px solid ${vars.color.borderLight}`,
  color: vars.color.textPrimary,
  ':hover': {
    borderColor: vars.color.accent,
    color: vars.color.accent,
  },
});

// ============================================
// Background Effects
// ============================================

export const heroGradient = style({
  position: 'absolute',
  inset: '0',
  background: vars.gradient.hero,
  pointerEvents: 'none',
});

export const starField = style({
  position: 'absolute',
  inset: '0',
  overflow: 'hidden',
  pointerEvents: 'none',
});

export const star = style({
  position: 'absolute',
  width: '2px',
  height: '2px',
  background: 'white',
  borderRadius: '50%',
  opacity: '0.3',
  animation: `${twinkle} 3s ease-in-out infinite`,
});

export const shootingStar = style({
  position: 'absolute',
  width: '100px',
  height: '1px',
  background: `linear-gradient(90deg, rgba(14, 165, 233, 0.8), transparent)`,
  animation: `${shoot} 4s ease-out infinite`,
  opacity: '0',
});

export const diagonalBackground = style({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  height: '2000px',
  pointerEvents: 'none',
  zIndex: 1,
  overflow: 'visible',
});

export const diagonalShape = style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '2000px',
  background: vars.color.accent,
  clipPath: 'polygon(0% 0%, 100% 0%, 100% 25%, 0% 50%)',
  animation: `${diagonalMorph} 100s ease-in-out infinite`,
});

// ============================================
// Animation Utilities
// ============================================

export const animateScroll = style({
  animation: `${scrollLeft} 20s linear infinite`,
});

export const animateFadeInUp = style({
  animation: `${fadeInUp} 0.6s ease-out forwards`,
});

export const animationDelay100 = style({ animationDelay: '0.1s' });
export const animationDelay200 = style({ animationDelay: '0.2s' });
export const animationDelay300 = style({ animationDelay: '0.3s' });
export const animationDelay400 = style({ animationDelay: '0.4s' });
export const animationDelay500 = style({ animationDelay: '0.5s' });

// ============================================
// Interactive Elements
// ============================================

export const linkUnderline = style({
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '-2px',
    width: '0',
    height: '2px',
    background: vars.color.accent,
    transition: 'width 0.3s ease',
  },
  selectors: {
    '&:hover::after': {
      width: '100%',
    },
  },
});

export const glow = style({
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    inset: '-20px',
    background: vars.gradient.glow,
    opacity: '0',
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    zIndex: -1,
  },
  selectors: {
    '&:hover::after': {
      opacity: '1',
    },
  },
});

// ============================================
// Badge / Tag Components
// ============================================

export const skillBadge = style({
  paddingLeft: vars.space.md,
  paddingRight: vars.space.md,
  paddingTop: vars.space.xs,
  paddingBottom: vars.space.xs,
  borderRadius: vars.radius.full,
  fontSize: '0.875rem',
  background: 'rgba(14, 165, 233, 0.1)',
  border: '1px solid rgba(14, 165, 233, 0.2)',
  color: vars.color.accent,
});

// ============================================
// Timeline
// ============================================

export const timelineItem = style({
  position: 'relative',
  paddingLeft: vars.space['2xl'],
  '::before': {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '8px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: vars.color.accent,
  },
  '::after': {
    content: '""',
    position: 'absolute',
    left: '4px',
    top: '22px',
    width: '2px',
    height: 'calc(100% - 10px)',
    background: vars.color.border,
  },
  selectors: {
    '&:last-child::after': {
      display: 'none',
    },
  },
});

// ============================================
// Pattern Background
// ============================================

export const patternDots = style({
  backgroundImage: `radial-gradient(circle, ${vars.color.border} 1px, transparent 1px)`,
  backgroundSize: '24px 24px',
});

// ============================================
// Text Utilities
// ============================================

export const textAccent = style({
  color: vars.color.accent,
});

export const textAccentGradient = style({
  background: vars.color.accent,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const textSecondary = style({
  color: vars.color.textSecondary,
});

export const textMuted = style({
  color: vars.color.textMuted,
});
