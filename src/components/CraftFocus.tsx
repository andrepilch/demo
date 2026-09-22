import Link from 'next/link'
import { Section, SectionGap, SectionHeader } from './Section'
import { H2, Body } from './Text'
import { PhilosophyMasonry, type PhilosophyItem } from './PhilosophyMasonry'
import { Button } from './Button'

const craftFocusItems: PhilosophyItem[] = [
  {
    title: 'Unique Solutions',
    description:
      "Standing out from the competition by finding opportunities that competitors don't see and solving unsolved problems",
  },
  {
    title: 'Better Journeys',
    description:
      'Removing pain points to make the product easier to use and more enjoyable',
  },
  {
    title: 'Scalable Systems',
    description:
      'Leveraging design tokens and components for reusability and efficiency means the product can grow with the business',
  },
  {
    title: 'Impactful Improvements',
    description: 'Better design decisions based on research and data insights',
  },
  {
    title: 'Attention to Detail',
    description:
      'Designing in code means my attention to detail on every component or interaction actually reaches beyond design files to every customer',
  },
  {
    title: 'Zero to One',
    description:
      'Defining, designing, building, and refining the foundation of the product sets the stage for years to come',
  },
  // {
  //   title: 'Writing clean, re-usable CSS',
  //   description:
  //     'Letting styles get out of control means styles are out of control which affects the quality of the product',
  // },
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
