import type { CaseStudyHeroData } from './types'

/** Accent gradient + cover image background used by case-study and portfolio heroes. */
export function buildHeroBackground(data: CaseStudyHeroData): string {
  if (data.backgroundStyle) return data.backgroundStyle
  const accent = data.accentColor ?? '#380BBB'
  const image = data.heroImage ?? ''
  if (image) {
    return `linear-gradient(135deg, ${accent}e6 0%, ${accent}99 50%, ${accent}80 100%), url("${image}")`
  }
  return `linear-gradient(135deg, ${accent}e6 0%, ${accent}99 100%)`
}
