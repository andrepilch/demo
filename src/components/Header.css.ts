import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  transition:
    'background-color 0.3s ease, backdrop-filter 0.3s ease, transform 0.3s ease',
})

export const headerHidden = style({
  transform: 'translateY(-100%)',
})

export const headerTransparent = style({
  backgroundColor: 'transparent',
  backdropFilter: 'none',
  color: vars.color.textOnAccent,
})

export const headerScrolled = style({
  // backdropFilter: "blur(12px)",
  // backgroundColor: `color-mix(in srgb, ${vars.color.bgPrimary} 80%, transparent)`,
})

export const container = style({
  maxWidth: vars.layout.contentMaxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.layout.sectionPaddingX,
  paddingRight: vars.layout.sectionPaddingX,
  '@media': {
    'screen and (min-width: 768px)': {
      paddingLeft: vars.layout.sectionPaddingXLg,
      paddingRight: vars.layout.sectionPaddingXLg,
    },
  },
})

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: vars.layout.headerHeight,
})

export const logoLink = style({
  display: 'flex',
  alignItems: 'center',
})

export const logo = style({
  height: '28px',
  width: 'auto',
  color: vars.color.accent,
  transition: 'color 0.2s ease, opacity 0.3s ease',
  selectors: {
    [`${logoLink}:hover &`]: {
      color: vars.color.textPrimary,
    },
  },
})

export const logoHidden = style({
  opacity: 0,
  pointerEvents: 'none',
})

export const logoVisible = style({
  opacity: 1,
})

export const desktopNav = style({
  display: 'none',
  alignItems: 'center',
  gap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'flex',
    },
  },
})

export const navLink = style({
  position: 'relative',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  color: vars.color.textSecondary,
  transition: 'color 0.2s ease',
  ':hover': {
    color: vars.color.textPrimary,
  },
  selectors: {
    [`${headerTransparent} &`]: {
      color: vars.color.textOnAccent,
    },
    [`${headerTransparent} &:hover`]: {
      color: vars.color.textOnAccent,
      opacity: 0.8,
    },
  },
})

export const navLinkActive = style({
  color: vars.color.accent,
})

export const navLinkIndicator = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '2px',
  backgroundColor: vars.color.accent,
})

export const desktopCta = style({
  display: 'none',
  alignItems: 'center',
  gap: '0.75rem',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'flex',
    },
  },
})

export const ctaButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  fontSize: '0.875rem',
  borderRadius: '9999px',
  fontWeight: '500',
  transition: 'all 0.3s ease',
  background: 'transparent',
  border: `1px solid ${vars.color.borderLight}`,
  color: vars.color.textPrimary,
  ':hover': {
    borderColor: vars.color.accent,
    color: vars.color.accent,
  },
  selectors: {
    [`${headerTransparent} &`]: {
      borderColor: 'rgba(255, 255, 255, 0.3)',
      color: vars.color.textOnAccent,
    },
    [`${headerTransparent} &:hover`]: {
      borderColor: vars.color.textOnAccent,
      color: vars.color.textOnAccent,
    },
  },
})

export const mobileMenuButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
  color: vars.color.textSecondary,
  backgroundColor: vars.color.accent,
  transition: 'color 0.2s ease',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
  ':hover': {
    color: vars.color.textPrimary,
  },
  selectors: {
    [`${headerTransparent} &`]: {
      color: vars.color.textOnAccent,
    },
    [`${headerTransparent} &:hover`]: {
      color: vars.color.textOnAccent,
      opacity: 0.8,
    },
  },
})

export const mobileMenu = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
  paddingTop: '1rem',
  paddingBottom: '1rem',
  borderTop: `1px solid ${vars.color.border}`,
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
})

export const mobileNavList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const mobileNavLink = style({
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  color: vars.color.textSecondary,
  transition: 'color 0.2s ease',
  ':hover': {
    color: vars.color.textPrimary,
  },
})

export const mobileNavLinkActive = style({
  color: vars.color.accent,
})

export const mobileCta = style({
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
  transition: 'all 0.3s ease',
  background: vars.color.accent,
  color: vars.color.bgPrimary,
  textAlign: 'center',
  ':hover': {
    background: vars.color.accent,
  },
})

export const icon = style({
  width: '24px',
  height: '24px',
})

// Social Links
export const socialLinks = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
  color: vars.color.textMuted,
  transition: 'color 0.2s ease',
  ':hover': {
    color: vars.color.accent,
  },
  selectors: {
    [`${headerTransparent} &`]: {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    [`${headerTransparent} &:hover`]: {
      color: vars.color.textOnAccent,
    },
  },
})

export const socialIcon = style({
  width: '20px',
  height: '20px',
})

// Mobile social links
export const mobileSocialLinks = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  paddingTop: '0.5rem',
})

export const mobileSocialLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  color: vars.color.textMuted,
  transition: 'color 0.2s ease',
  ':hover': {
    color: vars.color.accent,
  },
})
