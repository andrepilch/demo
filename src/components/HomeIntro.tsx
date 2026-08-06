import Link from 'next/link'
import { Section, SectionGap, Body } from '@/components'
import { getYearsOfExperience } from '@/lib/experience'
import * as styles from './HomeIntro.css'

export function HomeIntro() {
  const years = getYearsOfExperience()

  return (
    <Section gap={SectionGap.md} className={styles.section}>
      <div className={styles.intro}>
        <Body>
          Classically trained with a 5-year BFA in Graphic Design, I’ve spent
          over {years} years building digital products from scratch and leading
          major platform redesigns. My work spans native mobile, responsive web,
          3D modeling, and interactive prototyping.
        </Body>
        <Body>
          In recent years, I’ve expanded into frontend engineering—writing
          production React code and shipping full-stack applications to
          production (including my recently launched Bible app, Eternity, now
          live on iOS and Android).
        </Body>
        <Body>
          I bring visions to reality by bridging design and code, establishing
          systems, leading research, and doing whatever it takes to ship
          exceptional software.
        </Body>
        <Link href='/about' className={styles.aboutLink}>
          About Me
          <svg
            className={styles.aboutLinkIcon}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
            />
          </svg>
        </Link>
      </div>
    </Section>
  )
}
