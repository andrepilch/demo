import { Section, SectionGap, SectionHeader } from '@/components/Section'
import { Eyebrow, H2, Body } from '@/components/Text'
import type { CaseStudySectionData } from './types'

export interface CaseStudySectionProps {
  /** Section header (eyebrow, title, optional description) */
  data: CaseStudySectionData
  /** Section content (e.g. grids, paragraphs, custom blocks). Omit for header-only sections. */
  children?: React.ReactNode
  /** Optional extra class for the section element */
  className?: string
}

export function CaseStudySection({
  data,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <Section
      gap={SectionGap.lg}
      className={className}
    >
      <SectionHeader align="left">
        <Eyebrow color="accent">{data.eyebrow}</Eyebrow>
        <H2>{data.title}</H2>
        {data.description != null && data.description !== '' && (
          <Body color="secondary">{data.description}</Body>
        )}
      </SectionHeader>
      {children}
    </Section>
  )
}
