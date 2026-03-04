import Link from 'next/link'
import Image from 'next/image'
import { Section, SectionGap, H2, Body } from '@/components'
import * as styles from './FeaturedCaseStudies.css'
import { eternityResults } from '@/app/work/eternity-bible/data'

const caseStudies = [
  {
    title: 'WHCC Designer',
    outcome:
      'React multi-brand web app for whcc and its partners used by hundreds of thousands of users that continues to scale  ',
    description:
      'Building user confidence and saving time with a versatile designer',
    tags: ['Product Design', 'React', 'Design Systems'],
    href: '/work/designer',
    image: '/images/projects/designer/wall_designer_cover.jpg',
    stats: [
      // { value: '26%', label: 'AOV Increase' },
      { value: '6.5M+', label: 'Sessions served' },
      // { value: '3M', label: 'Sessions served' },
      { value: '9+Yrs', label: 'Sustained growth' },
    ],
  },
  {
    title: 'Eternity Bible',
    outcome:
      'Full-stack React/NextJS application built and shipped solo to app stores in under 1 year',
    description: 'Challenging the norms in a saturated market',
    tags: ['NextJS', 'TypeScript', 'Full-Stack'],
    href: '/work/eternity-bible',
    image: '/images/projects/eternity/eternity_hand.jpg',
    stats: eternityResults,
  },
]

export function FeaturedCaseStudies() {
  return (
    <Section gap={SectionGap.lg}>
      {caseStudies.map((study, i) => (
        <Link key={i} href={study.href} className={styles.caseStudyCard}>
          <div className={styles.caseStudyImage}>
            <Image
              src={study.image}
              alt={study.title}
              fill
              className={styles.caseStudyImageInner}
            />
          </div>
          <div className={styles.caseStudyContent}>
            <div className={styles.caseStudyTitleContainer}>
              <H2 className={styles.caseStudyTitle}>{study.title}</H2>
              <Body className={styles.caseStudyDescription}>
                {study.description}
              </Body>
              <Body className={styles.caseStudyOutcome}>{study.outcome}</Body>
              {/* Mini Stats */}
            </div>
            {/* <div className={styles.tagList}>
              {study.tags.map((tag, j) => (
                <span key={j} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div> */}
            {study.stats && (
              <div className={styles.caseStudyStats}>
                {study.stats.map((stat, k) => (
                  <div key={k} className={styles.caseStudyStat}>
                    <span className={styles.caseStudyStatValue}>
                      {stat.value}
                    </span>
                    <span className={styles.caseStudyStatLabel}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </Section>
  )
}
