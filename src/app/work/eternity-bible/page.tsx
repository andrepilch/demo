import Image from 'next/image'
import * as styles from './page.css'

// ============================================
// Project Metadata
// ============================================

const projectMeta = {
  role: [
    'Solo Designer',
    'Solo and Lead Developer',
    'Product Owner',
    'Design system',
    'Project manager',
  ],
  platforms: ['iOS', 'Android', 'Mobile Web', 'Desktop Web'],
  devices: ['iPhone', 'iPad', 'Android phone', 'Android tablet', 'Web'],
  tech: [
    'ReactJS',
    'TypeScript',
    'PigmentCSS',
    'NextJS',
    'Cursor AI',
    'Vercel',
    'Github',
    'TWA',
  ],
  year: '2025–Present',
  status: 'Live',
}

// ============================================
// Common Pain Points
// ============================================

const painPoints = [
  // "Digital Bibles are designed around print expectations, not around human lives today. Particularly the churched.",
  'Only one translation available',
  'Has ads or sponsorships and promotional materials',
  'Single language eliminates bilinguals',
  'Hard and slow to navigate the Bible',
  'Takes longer to find your spot in digital Bible than it does on paper, why?!',
  'Too many features you never actually use on your phone',
  'High cognitive load',
  'Too many taps, 3-4 to get back to bookmark or history in other Bible',
  'Thinking and memory involved to find your spot means app left unopened',
  'Contains false teaching',
  'Costs money',
  'Poor formatting',
  'Full of distractions drawing you away from the Bible',
  'Too many settings',
  'Not curated',
  // "Phones don't give the full picture like paper Bibles do",
]

// ============================================
// Design Process Steps
// ============================================

const designProcessSteps = [
  'Understand problems',
  'Competitive analysis',
  'Ideation',
  'Wireframes',
  'Interviews with target audience to discuss solutions',
  'Design',
  'Develop',
  'Release incrementally',
  'Invite users to test along the way',
  'React to feedback quickly',
  'Release & Test with closed testing group',
  'Iterate on design and features',
  'Release to app stores',
  'Continue evolving features',
]

// ============================================
// Product Strategy Outcomes
// ============================================

const strategyOutcomes = [
  {
    principle: "Everything must be better in the user's mind",
    outcome: 'Clients use and want to share',
  },
  {
    principle: 'No one should feel like they need to know more',
    outcome: 'Users are comfortable',
  },
  {
    principle:
      'No one should feel like our first user, things should work as expected',
    outcome: 'Trust is built',
  },
  {
    principle: 'Save user time',
    outcome:
      'Adds value; better tools take less time to use. Tools that save time add value.',
  },
  {
    principle: 'Minimize effort',
    outcome: 'Easier to be in the app, and most importantly, in the Bible',
  },
]

// ============================================
// Product Principles
// ============================================

const productPrinciples = [
  {
    title: 'UX is primary',
    description: 'Everything must be better',
  },
  {
    title: 'Designed for the user',
    description: 'Takes you into the Bible, not out of it',
  },
  {
    title: 'Content first',
    description: 'The app does not make itself noticed',
  },
]

// ============================================
// Digital Bible Benefits
// ============================================

const digitalBibleBenefits = [
  'Can read in the dark',
  'Can hold with children in your arms',
  'Always on you in your phone',
  'Can change translation to suit your setting',
  'Can remember where you left off for many different Bibles',
  'Weigh nothing in your pocket',
  'Can have as many Biblesas you need, no limitations',
  'Quicker to get to a verse',
  'Quicker to find a verse (with searching)',
]

// ============================================
// Results/Outcomes
// ============================================

export const eternityResults = [
  {
    value: '5★',
    label: 'Rated',
    description: 'App Store rating',
  },
  // {
  //   value: "5",
  //   label: "Device Types",
  //   description: "iOS phone & tablet, Android phone & tablet, Web",
  // },
  // {
  //   value: "3",
  //   label: "Bibles Per User",
  //   description: "Average usage",
  // },
  {
    value: '95%',
    label: 'Engagement',
    description: 'With core feature',
  },
  //   {
  //   value: "18",
  //   label: "Countries",
  //   description: "Worldwide",
  // },
]

export default function EternityCaseStudy() {
  return (
    <div className={styles.pageWrapper}>
      {/* ============================================ */}
      {/* Hero Section */}
      {/* ============================================ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Case Study</p>
            <h1 className={styles.heroTitle}>
              Challenging the Norms in a Saturated Market
            </h1>
            <p className={styles.heroDescription}>
              Designed to help you open the Bible more often. Eternity Bible
              lets you create Bibles for every context and resume reading
              exactly where you left off in each Bible instantly. You can save
              settings and a translation for each Bible. The app also features a
              powerful search by meaning. By removing distractions and making
              the Bible one-tap away on any device, you can spend more time
              being in the Word.
            </p>
            <a
              href='https://eternitybible.app'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.heroButton}
            >
              Visit Eternity Bible
              <svg
                className={styles.iconSm}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Overview Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Overview</p>
              <h2 className={styles.sectionTitle}>The Project</h2>
            </div>
            <p className={styles.sectionDescription}>
              The thing I wish is that some of these organizations and
              individuals who spent their time putting their own app together
              would just work together to make an app that truly works for real
              people, Christians mostly. People who use a Bible app tend to also
              have printed Bibles, they also tend to go to church, and they tend
              to read several translations. Many people also speak several
              languages, one at home and one at church. And most people aren't
              sitting on their phone to do deep Bible study.
            </p>

            {/* Project Meta */}
            <div className={styles.overviewGrid}>
              <div className={styles.overviewItem}>
                <p className={styles.overviewLabel}>My Role</p>
                <ul className={styles.overviewList}>
                  {projectMeta.role.map((item, i) => (
                    <li key={i} className={styles.overviewValue}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.overviewItem}>
                <p className={styles.overviewLabel}>Platforms</p>
                <ul className={styles.overviewList}>
                  {projectMeta.platforms.map((item, i) => (
                    <li key={i} className={styles.overviewValue}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.overviewItem}>
                <p className={styles.overviewLabel}>Devices</p>
                <ul className={styles.overviewList}>
                  {projectMeta.devices.map((item, i) => (
                    <li key={i} className={styles.overviewValue}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.overviewItem}>
                <p className={styles.overviewLabel}>Tech</p>
                <ul className={styles.overviewList}>
                  {projectMeta.tech.map((item, i) => (
                    <li key={i} className={styles.overviewValue}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.overviewItem}>
                <p className={styles.overviewLabel}>Timeline</p>
                <ul className={styles.overviewList}>
                  <li className={styles.overviewValue}>{projectMeta.year}</li>
                  <li className={styles.overviewValue}>{projectMeta.status}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Problem Identification Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>The Challenge</p>
              <h2 className={styles.sectionTitle}>Problem Identification</h2>
              <p className={styles.sectionDescription}>
                Digital Bibles are designed around print expectations, not
                around human lives today. Particularly the churched.
              </p>
            </div>

            <div className={styles.problemsGrid}>
              {painPoints.map((painPoint, i) => (
                <div key={i} className={styles.problemCard}>
                  <h3 className={styles.problemTitle}>{painPoint}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Strategy & Goals Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Strategy</p>
              <h2 className={styles.sectionTitle}>Strategy & Goals</h2>
              <p className={styles.sectionDescription}>
                <strong>Challenger</strong> — We're aiming to position our
                product as more exciting than others available in the market
                based on features, design, and efficiency.
              </p>
            </div>

            <div className={styles.goalsGrid}>
              {strategyOutcomes.map((item, i) => (
                <div key={i} className={styles.goalCard}>
                  <div className={styles.goalTransform}>
                    <span className={styles.goalFrom}>{item.principle}</span>
                    <span className={styles.goalArrow}>→</span>
                    <span className={styles.goalTo}>{item.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Target Audience Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Audience</p>
              <h2 className={styles.sectionTitle}>Target Audience</h2>
            </div>
            <div className={styles.problemsGrid}>
              <div className={styles.problemCard}>
                <h3 className={styles.problemTitle}>
                  Do you wish it could be easier to use your Bible on your
                  phone?
                </h3>
              </div>
              <div className={styles.problemCard}>
                <h3 className={styles.problemTitle}>
                  Do you avoid opening the Bible on your phone because it takes
                  too long to find your spot?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* What It Isn't Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Focus</p>
              <h2 className={styles.sectionTitle}>What It Isn't</h2>
              <p className={styles.sectionDescription}>
                The aim isn't to create another ecosystem or publishing platform
                for our own or someone else's content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Product Principles Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Foundation</p>
              <h2 className={styles.sectionTitle}>Product Principles</h2>
            </div>

            <div className={styles.problemsGrid}>
              {productPrinciples.map((principle, i) => (
                <div key={i} className={styles.problemCard}>
                  <h3 className={styles.problemTitle}>{principle.title}</h3>
                  <p className={styles.problemDescription}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Design Process Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Process</p>
              <h2 className={styles.sectionTitle}>Design Process</h2>
            </div>

            <div className={styles.problemsGrid}>
              {designProcessSteps.map((step, i) => (
                <div key={i} className={styles.problemCard}>
                  <span className={styles.problemNumber}>{i + 1}</span>
                  <h3 className={styles.problemTitle}>{step}</h3>
                </div>
              ))}
            </div>

            {/* Wireframes */}
            <div className={styles.imageFull} style={{ marginTop: '3rem' }}>
              <Image
                src='/images/projects/eternity/eterntiy_wireframes.png'
                alt='Design wireframes'
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Solution Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Solution</p>
              <h2 className={styles.sectionTitle}>Solution</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Highlight: Multiple Bibles */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureSection}>
            <div className={styles.featureContent}>
              <p className={styles.eyebrow}>Key Feature</p>
              <h2 className={styles.featureTitle}>
                Make a Bible for Every Context
              </h2>
              <p className={styles.featureDescription}>
                Eternity Bible lets you create Bibles for every context and
                resume reading exactly where you left off in each Bible
                instantly. You can save settings and translation for each Bible.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>
                    Create unlimited personal Bibles for different purposes
                  </span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>
                    Resume reading exactly where you left off instantly
                  </span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Save settings and translation for each Bible</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Pick up where you left off on any device</span>
                </li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src='/images/projects/eternity/eternity_hand.jpg'
                alt='My Bibles screen showing multiple Bible cards'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Highlight: Search by Meaning */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureSection}>
            <div className={styles.imageWrapper}>
              <Image
                src='/images/projects/eternity/eternity_read.jpg'
                alt='Search by meaning interface'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featureContent}>
              <p className={styles.eyebrow}>Key Feature</p>
              <h2 className={styles.featureTitle}>
                Powerful Search by Meaning
              </h2>
              <p className={styles.featureDescription}>
                Find verses not just by keywords, but by meaning. Eternity's
                search feature helps you discover Scripture based on what you're
                looking for, not just exact word matches.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Search by meaning, not just keywords</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Quicker to find a verse than traditional search</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Highlight: Quick Navigation */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureSection}>
            <div className={styles.featureContent}>
              <p className={styles.eyebrow}>Key Feature</p>
              <h2 className={styles.featureTitle}>
                One-Tap Access to Your Bible
              </h2>
              <p className={styles.featureDescription}>
                By removing distractions and making the Bible one-tap away on
                any device, you can spend more time being in the Word. It
                shouldn't take you longer to open your spot in a digital Bible
                than it takes to open a paper Bible.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Simple navigation for book, chapter, and verse</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>
                    Visual way to navigate — learn the Bible by seeing the Bible
                  </span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Faster than finding your spot in a paper Bible</span>
                </li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src='/images/projects/eternity/eternity_intro.png'
                alt='Simple navigation interface'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Final Designs Gallery */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Final Designs</p>
              <h2 className={styles.sectionTitle}>The Shipped Product</h2>
              <p className={styles.sectionDescription}>
                The final designs shipped to the App Store and web.
              </p>
            </div>

            {/* Final design images */}
            <div className={styles.imageGrid}>
              <div className={styles.imageWrapper}>
                <Image
                  src='/images/projects/eternity/eternity_home.jpg'
                  alt='My Bibles - Multiple Bible cards for different contexts'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src='/images/projects/eternity/eternity_intro.png'
                  alt='Chapter selection - Simple book and chapter navigation'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src='/images/projects/eternity/eternity_read.jpg'
                  alt='Reading view - Clean, focused reading experience'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src='/images/projects/eternity/eternity_multilingual.png'
                  alt='Multi-language - Support for different translations'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Video demo if available */}
            {/* <div className={styles.videoWrapper}>
              <video
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/images/projects/eternity/video-01.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <p className={styles.imageCaption}>
              App walkthrough demonstrating the core reading experience
            </p> */}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Results Section */}
      {/* ============================================ */}
      <section className={styles.resultsSection}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Impact</p>
              <h2 className={styles.sectionTitle}>Project Results</h2>
              <p className={styles.sectionDescription}>
                Eternity Bible is receiving overwhelmingly positive feedback for
                its core, innovative feature: the ability to set up multiple,
                personalized Bibles for different purposes (e.g., personal
                devotion, family study, Sunday service). Users describe this as
                a "fantastic" and "game changer" feature that simplifies
                navigation and allows them to instantly pick up right where they
                left off in any context.
              </p>
            </div>

            <div className={styles.resultsGrid}>
              {eternityResults.map((result, i) => (
                <div key={i} className={styles.resultCard}>
                  <span className={styles.resultValue}>{result.value}</span>
                  <span className={styles.resultLabel}>{result.label}</span>
                  <span className={styles.resultDescription}>
                    {result.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Conclusion Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Conclusion</p>
              <h2 className={styles.sectionTitle}>Challenging the Norms</h2>
              <p className={styles.sectionDescription}>
                After more than a year of hard work, we launched the new website
                taking full advantage of digital capabilities
              </p>
            </div>
            <div className={styles.problemsGrid}>
              {digitalBibleBenefits.map((benefit, i) => (
                <div key={i} className={styles.problemCard}>
                  <h3 className={styles.problemTitle}>{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
