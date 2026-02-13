import Image from 'next/image'
import { Section, SectionGap } from './Section'
import { H2, Body, Eyebrow } from './Text'
import { Accomplishments } from './Accomplishments'
import { Education } from './Education'
import * as styles from './Bio.css'

export function Bio() {
  return (
    <Section gap={SectionGap.md}>
      <div className={styles.heroGrid}>
        {/* Avatar */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarContainer}>
            <Image
              src='/images/avatar.jpg'
              alt='André Pilch'
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          {/* Decorative element */}
          <div className={styles.avatarDecoration} />
        </div>
        {/* Bio Content */}
        <div className={styles.bioContent}>
          {/* <p className={styles.eyebrow}>About Me</p> */}
          <H2 className={styles.pageTitle}>Hi, I'm André</H2>
          <Body>
            I'm a christian born and raised in France, now residing and working
            in the United States. Currently helping digital products grow
            through design and engineering at whcc. Previously at Thomson Reuters, La Forge Des Marques, & Wowiwe Instruction Co.
            <br />
            <br />
            I'm experienced in concepting and scaling lasting products that
            align with product strategy and vision. Skilled at simplifying
            complex ideas into clear usable solutions.
            <br />
            <br />
            My extensive design experience combined with years of software
            engineering allow me to push the boundaries of innovation with
            seamless collaboration.
            <br />
            <br />
            When I'm not designing or coding, you'll find me learning about God,
            spending time with my family, or kayaking down a river.
          </Body>
          <Accomplishments />
          <Education />
          <Eyebrow
            as='a'
            href='https://drive.google.com/file/d/1P4RGrBPG0-VclAu-JuCHNVEtmseylZSO/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.resumeLink}
            weight='bold'
          >
            View my Resume
            <svg
              className={styles.resumeLinkIcon}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden
            >
              <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
            </svg>
          </Eyebrow>
        </div>
      </div>
    </Section>
  )
}
