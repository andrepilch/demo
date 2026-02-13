import type { CaseStudySectionData } from './types'
import { CaseStudySection } from './CaseStudySection'
import { CaseStudyCardsGrid, type CardItem } from './CaseStudyCardsGrid'

export type { CardItem }

export interface CaseStudyCardsProps {
  section: CaseStudySectionData
  items: CardItem[]
}

export function CaseStudyCards({ section, items }: CaseStudyCardsProps) {
  return (
    <CaseStudySection data={section}>
      <CaseStudyCardsGrid items={items} />
    </CaseStudySection>
  )
}
