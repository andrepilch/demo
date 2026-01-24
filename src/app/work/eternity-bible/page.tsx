import Image from "next/image";
import Link from "next/link";
import * as styles from "./page.css";

// ============================================
// Project Metadata
// ============================================

const projectMeta = {
  role: ["Solo Designer", "Solo Developer", "Product Owner"],
  platforms: ["iOS (React Native)", "Web (NextJS)"],
  year: "2023–Present",
  status: "Live",
};

// ============================================
// Problems Identified
// ============================================

const problems = [
  {
    number: "1",
    title: "Overwhelming",
    description:
      "Most Bible apps are cluttered with features, ads, and social elements that distract from focused reading and study.",
  },
  {
    number: "2",
    title: "Poor Typography",
    description:
      "Long-form reading suffers from poor font choices, inadequate line spacing, and lack of attention to reading comfort.",
  },
  {
    number: "3",
    title: "Limited Personalization",
    description:
      "Users couldn't customize their reading experience to match their preferences, reading context, or accessibility needs.",
  },
];

// ============================================
// Goals (Problem → Solution)
// ============================================

const goals = [
  {
    from: "Overwhelming",
    to: "Focused",
    description:
      "Strip away distractions to create a calm, focused reading environment that puts Scripture first.",
  },
  {
    from: "Poor Typography",
    to: "Beautiful",
    description:
      "Implement carefully chosen fonts, generous spacing, and attention to typographic detail for comfortable extended reading.",
  },
  {
    from: "Limited",
    to: "Personal",
    description:
      "Give users full control over fonts, colors, themes, and layout to make the experience truly their own.",
  },
];

// ============================================
// Results/Outcomes
// ============================================

const results = [
  {
    value: "4.8★",
    label: "App Store Rating",
    description: "User satisfaction",
  },
  {
    value: "10K+",
    label: "Active Users",
    description: "And growing",
  },
  {
    value: "15min",
    label: "Avg. Session",
    description: "Engaged reading",
  },
];

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
              Designing Eternity Bible App
            </h1>
            <p className={styles.heroDescription}>
              A distraction-free Bible reading experience designed to help you 
              open the Bible more often. Built for focus, beautiful typography, 
              and personal customization. Designed and developed as a solo project 
              from concept to App Store.
            </p>
            <a
              href="https://about.eternitybible.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroButton}
            >
              Visit Eternity Bible
              <svg
                className={styles.iconSm}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
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
              Eternity Bible is a personal project born from my own frustration 
              with existing Bible apps. As both the designer and developer, I had 
              complete creative control to build exactly the reading experience I 
              wished existed—one that prioritizes beautiful typography, focused 
              reading, and thoughtful personalization over feature bloat. The app 
              is completely free for everyone, with no ads, no tracking, and no 
              distractions.
            </p>

            {/* Project Meta */}
            <div className={styles.overviewGrid}>
              <div className={styles.overviewItem}>
                <p className={styles.overviewLabel}>My Role</p>
                <p className={styles.overviewValue}>
                  {projectMeta.role.join(" · ")}
                </p>
              </div>
              <div className={styles.overviewItem}>
                <p className={styles.overviewLabel}>Platforms</p>
                <p className={styles.overviewValue}>
                  {projectMeta.platforms.join(" · ")}
                </p>
              </div>
              <div className={styles.overviewItem}>
                <p className={styles.overviewLabel}>Timeline</p>
                <p className={styles.overviewValue}>
                  {projectMeta.year} · {projectMeta.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Cover Image */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.imageFull}>
            <Image
              src="/images/projects/eternity/eternity_cover.jpg"
              alt="Eternity Bible App Cover"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Problems Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeaderCentered}>
              <p className={styles.eyebrow}>The Challenge</p>
              <h2 className={styles.sectionTitle}>
                Why Most Bible Apps Fall Short
              </h2>
              <p className={styles.sectionDescription}>
                Through personal use and user research, I identified three core 
                problems with existing Bible apps.
              </p>
            </div>

            <div className={styles.problemsGrid}>
              {problems.map((problem) => (
                <div key={problem.number} className={styles.problemCard}>
                  <span className={styles.problemNumber}>{problem.number}</span>
                  <h3 className={styles.problemTitle}>{problem.title}</h3>
                  <p className={styles.problemDescription}>
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Goals Section */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeaderCentered}>
              <p className={styles.eyebrow}>The Opportunity</p>
              <h2 className={styles.sectionTitle}>
                Transforming Problems into Design Goals
              </h2>
            </div>

            <div className={styles.goalsGrid}>
              {goals.map((goal, i) => (
                <div key={i} className={styles.goalCard}>
                  <div className={styles.goalTransform}>
                    <span className={styles.goalFrom}>{goal.from}</span>
                    <span className={styles.goalArrow}>→</span>
                    <span className={styles.goalTo}>{goal.to}</span>
                  </div>
                  <p className={styles.goalDescription}>{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Design Iterations */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Process</p>
              <h2 className={styles.sectionTitle}>Design Iterations</h2>
              <p className={styles.sectionDescription}>
                The design evolved through multiple iterations, starting with 
                wireframes focused on the core "Multiple Bibles" concept, 
                exploring typography options for optimal readability, developing 
                a flexible theme system, and finally refining the interface to 
                be as minimal and focused as possible.
              </p>
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
                The core innovation of Eternity is the ability to create multiple 
                personal Bibles for different study purposes. Whether it's morning 
                devotion, a sermon series, Sunday School, or a small group study, 
                each Bible maintains its own reading position and settings.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Create unlimited personal Bibles for different purposes</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Each Bible remembers where you left off</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Pick up where you left off on any device</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Choose different translations for each Bible</span>
                </li>
              </ul>
            </div>
            <div className={styles.imagePlaceholder}>
              [My Bibles screen showing multiple Bible cards]
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Highlight: Reading Modes */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureSection}>
            <div className={styles.imagePlaceholder}>
              [Reading modes interface]
            </div>
            <div className={styles.featureContent}>
              <p className={styles.eyebrow}>Key Feature</p>
              <h2 className={styles.featureTitle}>
                3 Reading Modes
              </h2>
              <p className={styles.featureDescription}>
                Different reading contexts call for different presentation styles. 
                Eternity offers three distinct reading modes to match how you want 
                to engage with Scripture.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Paragraph mode for continuous, immersive reading</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Verse-by-verse mode for detailed study</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Reader mode for distraction-free focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Highlight: Typography */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureSection}>
            <div className={styles.featureContent}>
              <p className={styles.eyebrow}>Key Feature</p>
              <h2 className={styles.featureTitle}>
                Typography-First Design
              </h2>
              <p className={styles.featureDescription}>
                Reading the Bible shouldn't feel like work. I obsessed over 
                typography details to create the most comfortable reading 
                experience possible.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Carefully selected serif and sans-serif font options</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Adjustable line height and letter spacing</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Optimal measure (line length) for readability</span>
                </li>
              </ul>
            </div>
            <div className={styles.imagePlaceholder}>
              [Typography settings screenshot]
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Highlight: Multi-Language Support */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureSection}>
            <div className={styles.imagePlaceholder}>
              [Multi-language interface showing French, English, Spanish]
            </div>
            <div className={styles.featureContent}>
              <p className={styles.eyebrow}>Key Feature</p>
              <h2 className={styles.featureTitle}>
                Multiple Translations & Languages
              </h2>
              <p className={styles.featureDescription}>
                Eternity supports Bible translations in multiple languages, 
                allowing users to read in their preferred language or study 
                across different translations.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Support for multiple Bible translations</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Available in English, French, Spanish, and more</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Simple navigation for book, chapter, and verse selection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Highlight: Themes */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureSection}>
            <div className={styles.featureContent}>
              <p className={styles.eyebrow}>Key Feature</p>
              <h2 className={styles.featureTitle}>
                Personalized Reading Themes
              </h2>
              <p className={styles.featureDescription}>
                Everyone reads differently. Some prefer bright light, others 
                dim sepia. Eternity offers multiple carefully crafted themes 
                for every context.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Light, Dark, and Sepia built-in themes</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Automatic dark mode based on system settings</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Reduced eye strain for night reading</span>
                </li>
              </ul>
            </div>
            <div className={styles.imagePlaceholder}>
              [Theme options screenshot]
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Highlight: Share & Save */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureSection}>
            <div className={styles.featureContent}>
              <p className={styles.eyebrow}>Key Feature</p>
              <h2 className={styles.featureTitle}>
                Share & Save Meaningful Verses
              </h2>
              <p className={styles.featureDescription}>
                When you encounter a verse that speaks to you, Eternity makes it 
                easy to share it with others or save it for later reflection.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Share verses with friends and family</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Copy text for notes and study</span>
                </li>
                <li className={styles.featureListItem}>
                  <svg
                    className={styles.featureCheckIcon}
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
                  <span>Always return to exactly where you left off</span>
                </li>
              </ul>
            </div>
            <div className={styles.imagePlaceholder}>
              [Share and save interface]
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Highlight: Privacy */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.narrowContainer}>
            <div className={styles.sectionHeaderCentered}>
              <p className={styles.eyebrow}>Philosophy</p>
              <h2 className={styles.sectionTitle}>
                You Are Not Data, You Are a Person
              </h2>
              <p className={styles.sectionDescription}>
                Eternity is built on a fundamental respect for users as people 
                made in the image of God, not as data points. This philosophy 
                shapes every design and development decision.
              </p>
            </div>
            <div className={styles.problemsGrid}>
              <div className={styles.problemCard}>
                <h3 className={styles.problemTitle}>No Tracking</h3>
                <p className={styles.problemDescription}>
                  We don't track your app activity. Your reading habits, 
                  preferences, and engagement are yours alone.
                </p>
              </div>
              <div className={styles.problemCard}>
                <h3 className={styles.problemTitle}>No Spam</h3>
                <p className={styles.problemDescription}>
                  No push notifications, no distractions, no constant calls for 
                  your attention. It's just you and the Bible.
                </p>
              </div>
              <div className={styles.problemCard}>
                <h3 className={styles.problemTitle}>Privacy First</h3>
                <p className={styles.problemDescription}>
                  Your data stays yours. We don't sell it, share it, or use it 
                  to manipulate your behavior.
                </p>
              </div>
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
            <div className={styles.sectionHeaderCentered}>
              <p className={styles.eyebrow}>Final Designs</p>
              <h2 className={styles.sectionTitle}>
                The Shipped Product
              </h2>
              <p className={styles.sectionDescription}>
                The final designs shipped to the App Store and web.
              </p>
            </div>

            {/* Final design images */}
            <div className={styles.imageGrid}>
              <div className={styles.imagePlaceholder}>
                [My Bibles - Multiple Bible cards for different contexts]
              </div>
              <div className={styles.imagePlaceholder}>
                [Chapter selection - Simple book and chapter navigation]
              </div>
              <div className={styles.imagePlaceholder}>
                [Reading view - Clean, focused reading experience]
              </div>
              <div className={styles.imagePlaceholder}>
                [Multi-language - Support for different translations]
              </div>
            </div>

            {/* Video demo if available */}
            <div className={styles.videoWrapper}>
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
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Results Section */}
      {/* ============================================ */}
      <section className={styles.resultsSection}>
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeaderCentered}>
              <p className={styles.eyebrow}>Impact</p>
              <h2 className={styles.sectionTitle}>Project Results</h2>
            </div>

            <div className={styles.resultsGrid}>
              {results.map((result, i) => (
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
      {/* Technical Stack (Optional) */}
      {/* ============================================ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.narrowContainer}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Tech Stack</p>
              <h2 className={styles.sectionTitle}>Built With</h2>
            </div>
            <p className={styles.sectionDescription}>
              As a solo designer-developer, I chose a modern stack that allowed 
              me to move fast while maintaining quality. React Native for 
              cross-platform mobile development, NextJS for the web app, 
              TypeScript for type safety, and Vanilla Extract for type-safe 
              styling. The app is deployed on Vercel with a PostgreSQL database 
              for user data and sync.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA Section */}
      {/* ============================================ */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaGradient} />
            <h2 className={styles.ctaTitle}>Interested in Working Together?</h2>
            <p className={styles.ctaDescription}>
              This project demonstrates my ability to own a product end-to-end—from 
              research and design through development and launch. I'd love to bring 
              this same passion and craftsmanship to your team.
            </p>
            <div className={styles.ctaButtons}>
              <a href="mailto:hello@andrepilch.com" className={styles.btnPrimary}>
                Get in Touch
                <svg
                  className={styles.iconSm}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <Link href="/work" className={styles.btnSecondary}>
                View More Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
