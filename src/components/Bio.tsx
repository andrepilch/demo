import Image from 'next/image'
import { Section, SectionGap } from './Section'
import { H2, Body } from './Text'
import * as styles from './Bio.css'

export function Bio() {
  return (
    <Section gap={SectionGap.lg}>
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
          <p className={styles.eyebrow}>About Me</p>
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
        </div>
      </div>
    </Section>
  )
}
