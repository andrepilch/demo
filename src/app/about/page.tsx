import * as styles from './page.css'
import {
  Bio,
  AboutDesignPhilosophy,
  ProductPhilosophy,
  SkillsMatrix,
  PassionAreas,
  Partnerships,
  Accomplishments,
  Process,
  SideProjects,
  CTASection,
  ImpactStatsRibbon,
  H2,
  Section,
} from '@/components'

// Timeline/Resume Data
// const careerTimeline = [
//   {
//     period: "2020 – Present",
//     role: "Senior Product Designer & Frontend Engineer",
//     company: "WHCC (White House Custom Colour)",
//     location: "Remote / Wisconsin, USA",
//     highlights: [
//       "Lead end-to-end product design for digital print editors serving 1.3M+ annual users",
//       "Established the company's first comprehensive Design System",
//       "Increased web editor AOV by 26% through radical simplification",
//       "Directly code React components to ensure design fidelity",
//     ],
//   },
//   {
//     period: "2017 – 2020",
//     role: "Senior UX Designer",
//     company: "Thomson Reuters",
//     location: "Eagan, Minnesota, USA",
//     highlights: [
//       "Secured 2 international patents (US/CH) for VR document interaction",
//       "Led UX strategy for professional legal and tax platforms",
//       "Pioneered immersive document workflows for complex data",
//     ],
//   },
//   {
//     period: "2014 – 2017",
//     role: "UX/UI Designer",
//     company: "Various Agencies",
//     location: "Minnesota, USA",
//     highlights: [
//       "Delivered impactful designs across web, mobile, and print",
//       "Built strong foundation in UX/UI and visual design",
//       "Collaborated with cross-functional teams on client projects",
//     ],
//   },
//   {
//     period: "2009 – 2014",
//     role: "Junior Designer → Designer",
//     company: "Creative Agencies",
//     location: "France → USA",
//     highlights: [
//       "Began career in creative and digital agencies",
//       "Refined skills across a variety of media",
//       "Transitioned from print to digital-first design",
//     ],
//   },
// ];

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      <Bio />
      <ImpactStatsRibbon />
      <Section
        style={{ paddingTop: '20vh', paddingBottom: '20vh', color: '#00aeef' }}
      >
        <H2>
          A strong product saves time, adds value, competes well, and provides a
          good experience start to finish.
        </H2>
      </Section>
      <PassionAreas />
      <AboutDesignPhilosophy />
      <ProductPhilosophy />
      <Partnerships />
      <Accomplishments />
      <Process />
      <SkillsMatrix />
      <SideProjects />
      <CTASection />
      {/* The Design-to-Code Advantage */}
      {/* <section className={styles.section} id="bridge">
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>The Bridge Advantage</p>
              <h2 className={styles.sectionTitle}>
                Design-to-Code: Why It Matters
              </h2>
              <p className={styles.sectionDescription}>
                My 5 years of React/TypeScript experience isn't just a
                bonus—it's a fundamental part of how I design better products.
              </p>
            </div>

            <div className={styles.gridTwo}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <div className={styles.cardIconWrapper}>
                    <svg
                      className={styles.iconMd}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>No Translation Loss</h3>
                    <p className={styles.cardDescription}>
                      When I design a component, I know exactly how it will be
                      built. No "that's not technically possible" surprises
                      during handoff.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <div className={styles.cardIconWrapper}>
                    <svg
                      className={styles.iconMd}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Faster Iteration</h3>
                    <p className={styles.cardDescription}>
                      I can prototype in code, not just Figma. This means real
                      interactions, real state, real feedback—faster.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <div className={styles.cardIconWrapper}>
                    <svg
                      className={styles.iconMd}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Better Collaboration</h3>
                    <p className={styles.cardDescription}>
                      Speaking both design and engineering languages means I'm a
                      natural bridge between teams, reducing friction and
                      misunderstandings.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <div className={styles.cardIconWrapper}>
                    <svg
                      className={styles.iconMd}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                      Design System Ownership
                    </h3>
                    <p className={styles.cardDescription}>
                      I can own the design system from Figma tokens to React
                      components, ensuring consistency across the entire
                      product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Career Timeline */}
      {/* <section className={styles.section} id="experience">
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Experience</p>
              <h2 className={styles.sectionTitle}>Career Timeline</h2>
            </div>

            <div className={styles.timelineContainer}>
              {careerTimeline.map((item, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelinePeriod}>{item.period}</div>
                  <h3 className={styles.timelineRole}>{item.role}</h3>
                  <p className={styles.timelineCompany}>{item.company}</p>
                  <p className={styles.timelineLocation}>{item.location}</p>
                  <div className={styles.timelineHighlights}>
                    {item.highlights.map((highlight, j) => (
                      <div key={j} className={styles.timelineHighlight}>
                        <svg
                          className={styles.timelineCheckIcon}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
