import Image from 'next/image'
import { Section, SectionGap } from './Section'
import { H2, H3, Body, Eyebrow } from './Text'
import { Accomplishments } from './Accomplishments'
import { Education } from './Education'
import { getYearsOfExperience } from '@/lib/experience'
import * as styles from './Bio.css'
import { socialLinks } from './CTASection'

export function Bio() {
  const years = getYearsOfExperience()

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
          <H2 className={styles.pageTitle}>Hi, I'm André Pilch</H2>
          <Body>
            I'm a Christian born and raised in France, now residing and working
            in the United States. Currently working to help digital products
            grow through design and engineering at WHCC. Previously at Thomson
            Reuters, La Forge Des Marques, and Wowiwe Instruction Co. With over{' '}
            {years} years of visual design expertise paired with modern software
            engineering, I simplify complex ideas into clear, intuitive, and
            scalable digital products.
          </Body>
          <H3>Bringing Vision to Reality</H3>
          <Body>
            My path started at age 10 tinkering with Photoshop and basic web
            design, which led to a classically trained background (5-year BFA)
            in Graphic Design. Over the last {years}+ years, I’ve applied those
            visual roots across software products of all scales, taking ideas
            from zero to one, setting strategic direction, and leading
            end-to-end redesigns.
          </Body>
          <Body>
            I’ve designed across virtually every medium, including native
            iOS/Android, responsive web, desktop, 3D modeling, and emerging
            hardware (Watch, AR, VR, Glass). My extensive design foundation
            combined with frontend engineering allows me to push the boundaries
            of innovation while driving seamless cross-functional collaboration.
          </Body>
          <H3>Bridging Design & Engineering</H3>
          <Body>
            To build faster and close the gap between design and development, I
            stepped directly into engineering. Whether I’m conducting user
            research, establishing analytics frameworks, building high-fidelity
            interactive prototypes, or shipping production React code, I thrive
            on working through complexity to achieve the core vision.
          </Body>
          <Body>
            Most recently, I turned a goal into reality by designing, building,
            and deploying Eternity, a full-stack Bible app published on the
            Apple App Store, Google Play Store, and web using React, Next.js,
            Supabase, and Vercel.
          </Body>
          <H3>How I Work</H3>
          <Body>
            Whether it’s writing production code, building multi-level design
            systems, or aligning stakeholders, I fill whatever gaps are needed
            to keep products moving forward. Ultimately, I see my work as a way
            to steward the talents God has given me to build meaningful,
            human-centered software.
          </Body>
          <Body>
            When I’m not designing or coding, you’ll find me studying God's
            word, spending time with my family, or kayaking down a river.
          </Body>
          <Accomplishments />
          <Education />
          <div className={styles.resumeLinkWrapper}>
            <div className={styles.resumeLinkContainer}>
              <Eyebrow
                as='a'
                href='https://drive.google.com/file/d/1P4RGrBPG0-VclAu-JuCHNVEtmseylZSO/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.resumeLink}
                weight='bold'
              >
                View my Resume
              </Eyebrow>
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
            </div>
            {socialLinks
              .filter((social) => social.name !== 'Email')
              .map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.href.startsWith('mailto') ? undefined : '_blank'
                  }
                  rel={
                    social.href.startsWith('mailto')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
