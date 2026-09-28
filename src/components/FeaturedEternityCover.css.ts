import { style } from '@vanilla-extract/css'

/** Full-bleed wrapper for the interactive Eternity HeroStage cover */
export const eternityCover = style({
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
})

export const loadingShell = style({
  minHeight: '100vh',
  '@supports': {
    '(min-height: 100dvh)': {
      minHeight: '100dvh',
    },
  },
})
