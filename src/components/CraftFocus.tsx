import Link from 'next/link'
import { Section, SectionGap, SectionHeader } from './Section'
import { H2, Body } from './Text'
import { PhilosophyMasonry, type PhilosophyItem } from './PhilosophyMasonry'
import { Button } from './Button'

const craftFocusItems: PhilosophyItem[] = [
  {
    title: 'Designing uniqueness and improving journeys',
    description:
      "Removing pain points and finding opportunities that competitors and even users just don't see",
  },
  {
    title: 'Building and scaling systems',
    description:
      'Leveraging design tokens and components for reusability and efficiency',
  },
  {
    title: 'Writing clean, re-usable CSS',
    description:
      'Letting styles get out of control means styles are out of control which affects the quality of the product',
  },
  {
    title: 'Defining, designing, building, and refining the 0 to 1',
    description:
      'This is the foundation of the product and it needs to be done right',
  },
  {
    title: 'Making impactful improvements',
    description: 'Based on research and data insights',
  },
  {
    title: 'Sweating the details on components',
    description:
      'Designing in code means my attention to detail actually reaches beyond design files to every customer',
  },
]

export function CraftFocus() {
  return (
    <Section gap={SectionGap.md} id='craft-focus'>
      <SectionHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <H2>Driven by Design</H2>
          <Button
            as={Link}
            href='/about#passion-areas'
            variant='secondary'
            size='sm'
            style={{ whiteSpace: 'nowrap' }}
          >
            See Passion Areas
          </Button>
        </div>
        <Body color='secondary'>
          These are some of the things that keep me motivated to design and
          build great products.
        </Body>
      </SectionHeader>
      <PhilosophyMasonry items={craftFocusItems} />
    </Section>
  )
}
