import { Section, SectionGap, SectionHeader } from './Section'
import { Eyebrow} from './Text'
import { PhilosophyMasonry, type PhilosophyItem } from './PhilosophyMasonry'

const craftFocusItems: PhilosophyItem[] = [
  {
    title: 'Designing uniqueness and improving journeys',
    description:
      'Removing pain points and finding opportunities that competitors and even users just don\'t see',
  },
  {
    title: 'Building and scaling systems',
    description:
      'Design tokens and components for reusability and efficiency',
  },
  {
    title: 'Writing clean, re-usable CSS',
    description: 'Letting styles get out of control means styles are out of control which affects the quality of the product',
  },
  {
    title: 'Defining, designing, building, and refining the 0 to 1',
    description: 'This is the foundation of the product and it needs to be done right',
  },
  {
    title: 'Making impactful improvements',
    description: 'Based on research and data insights',
  },
  {
    title: 'Sweating the details on components',
    description:
      'Designing in code means my attention to detail reaches every customer; not just design file viewers.',
  },
]

export function CraftFocus() {
  return (
    <Section gap={SectionGap.lg} id='craft-focus'>
      <SectionHeader>
        <Eyebrow>What I Really Enjoy Doing</Eyebrow>
      </SectionHeader>

      <PhilosophyMasonry items={craftFocusItems} />
    </Section>
  )
}
