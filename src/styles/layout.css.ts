import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

// ============================================
// Flex Utilities
// ============================================

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
})

export const flexCol = style({
  display: 'flex',
  flexDirection: 'column',
})

export const flexCenter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const flexBetween = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const itemsCenter = style({
  alignItems: 'center',
})

export const itemsStart = style({
  alignItems: 'flex-start',
})

export const justifyCenter = style({
  justifyContent: 'center',
})

export const justifyBetween = style({
  justifyContent: 'space-between',
})

export const flexWrap = style({
  flexWrap: 'wrap',
})

export const flex1 = style({
  flex: '1',
})

// ============================================
// Grid Utilities
// ============================================

export const gridCols2 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
})

export const gridCols3 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
})

// ============================================
// Spacing Utilities
// ============================================

export const gap2 = style({ gap: vars.space.sm })
export const gap3 = style({ gap: vars.space.md })
export const gap4 = style({ gap: vars.space.md })
export const gap6 = style({ gap: vars.space.lg })
export const gap8 = style({ gap: vars.space.xl })
export const gap10 = style({ gap: '2.5rem' })
export const gap12 = style({ gap: vars.space['3xl'] })

export const p4 = style({ padding: vars.space.md })
export const p6 = style({ padding: vars.space.lg })
export const p8 = style({ padding: vars.space.xl })
export const p10 = style({ padding: '2.5rem' })

export const px6 = style({
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
})

export const px8 = style({
  paddingLeft: vars.space.xl,
  paddingRight: vars.space.xl,
})

export const py8 = style({
  paddingTop: vars.space.xl,
  paddingBottom: vars.space.xl,
})

export const py16 = style({
  paddingTop: '4rem',
  paddingBottom: '4rem',
})

export const py20 = style({
  paddingTop: '5rem',
  paddingBottom: '5rem',
})

export const py24 = style({
  paddingTop: '6rem',
  paddingBottom: '6rem',
})

export const mb2 = style({ marginBottom: vars.space.sm })
export const mb3 = style({ marginBottom: vars.space.md })
export const mb4 = style({ marginBottom: vars.space.md })
export const mb6 = style({ marginBottom: vars.space.lg })
export const mb8 = style({ marginBottom: vars.space.xl })
export const mb10 = style({ marginBottom: '2.5rem' })
export const mb16 = style({ marginBottom: '4rem' })

export const mt2 = style({ marginTop: vars.space.sm })
export const mt4 = style({ marginTop: vars.space.md })
export const mt8 = style({ marginTop: vars.space.xl })
export const mt12 = style({ marginTop: vars.space['3xl'] })

export const mx0 = style({
  marginLeft: '0',
  marginRight: '0',
})

export const mxAuto = style({
  marginLeft: 'auto',
  marginRight: 'auto',
})

// ============================================
// Width / Height Utilities
// ============================================

export const wFull = style({ width: '100%' })
export const hFull = style({ height: '100%' })
export const minHScreen = style({ minHeight: '100vh' })

export const maxW2xl = style({ maxWidth: '42rem' })
export const maxW3xl = style({ maxWidth: '48rem' })
export const maxW4xl = style({ maxWidth: '56rem' })
export const maxW6xl = style({ maxWidth: vars.layout.contentMaxWidth })

// ============================================
// Position Utilities
// ============================================

export const relative = style({ position: 'relative' })
export const absolute = style({ position: 'absolute' })
export const fixed = style({ position: 'fixed' })
export const sticky = style({ position: 'sticky' })

export const inset0 = style({
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
})

export const top0 = style({ top: '0' })
export const left0 = style({ left: '0' })
export const right0 = style({ right: '0' })
export const bottom0 = style({ bottom: '0' })

export const zIndex10 = style({ zIndex: 10 })
export const zIndex50 = style({ zIndex: 50 })

// ============================================
// Display Utilities
// ============================================

export const hidden = style({ display: 'none' })
export const block = style({ display: 'block' })
export const inlineBlock = style({ display: 'inline-block' })
export const inlineFlex = style({ display: 'inline-flex' })

export const overflow = {
  hidden: style({ overflow: 'hidden' }),
  auto: style({ overflow: 'auto' }),
  visible: style({ overflow: 'visible' }),
}

// ============================================
// Responsive Utilities
// ============================================

export const hiddenMobile = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'block',
    },
  },
})

export const hiddenDesktop = style({
  display: 'block',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
})

export const flexMobile = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'flex',
    },
  },
})

export const gridMd2 = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})

export const gridMd3 = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})
