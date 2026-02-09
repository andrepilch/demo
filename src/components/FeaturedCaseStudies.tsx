import Link from 'next/link'
import Image from 'next/image'
import { H3, Section, SectionGap, H2 } from '@/components'
import * as styles from './FeaturedCaseStudies.css'
import { eternityResults } from '@/app/work/eternity-bible/page'

const caseStudies = [
  {
    title: 'WHCC Designer',
    outcome:
      'Increased Average Order Value by 26% through radical simplification',
    description:
      'Building user confidence and saving time with a versatile designer',
    tags: ['Product Design', 'React', 'Design Systems'],
    href: '/work/designer',
    image: '/images/projects/wall_designer/wall_designer_cover.jpg',
    stats: [
      // { value: '26%', label: 'AOV Increase' },
      // { value: '3M', label: 'Sessions served' },
      { value: '6.5M+', label: 'Sessions served' },
    ],
  },
  {
    title: 'Eternity Bible',
    outcome: 'Full-stack React/NextJS application built and shipped solo',
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
              {/* <p className={styles.caseStudyOutcome}>{study.outcome}</p> */}
              <H3 color='primary' className={styles.caseStudyDescription}>
                {study.description}
              </H3>
              {/* Mini Stats */}
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
            <div className={styles.tagList}>
              {study.tags.map((tag, j) => (
                <span key={j} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </Section>
  )
}
