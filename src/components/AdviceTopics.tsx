import { Section, SectionGap } from './Section'
import { H2 } from './Text'
import { Card } from './Card'
import { iconMd } from './Button'

function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg
      className={[iconMd, className].filter(Boolean).join(' ')}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  )
}

const adviceTopics = [
  'Product strategy',
  'Feature suggestions',
  'Design decisions',
  'Prototyping tips',
  'Product knowledge',
]

export function AdviceTopics() {
  return (
    <Section gap={SectionGap.lg} id="advice-topics">
      <H2>What people come to me for advice on</H2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {adviceTopics.map((item, i) => (
          <Card key={i} title={item} icon={<LightbulbIcon />} />
        ))}
      </div>
    </Section>
  )
}
