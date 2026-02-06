import { Section, SectionGap } from './Section'
import { H2 } from './Text'
import { Card } from './Card'
import { iconMd } from './Button'

// Diamond sparkle icon component
function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg className={[iconMd, className].filter(Boolean).join(' ')} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z' />
    </svg>
  )
}

const accomplishments = [
  'Published app to Play Store and App Store',
  'Design Patent (US & Switzerland)',
  'Featured in Behance Showcase',
]

export function Accomplishments() {
  return (
    <Section gap={SectionGap.lg} id="accomplishments">
      <H2>Accomplishments</H2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {accomplishments.map((item, i) => (
          <Card key={i} title={item} icon={<DiamondIcon />} />
        ))}
      </div>
    </Section>
  )
}
