import Link from "next/link";
import Image from "next/image";
import {
  DiagonalBackground,
  HeroSection,
  ImpactStatsRibbon,
  BigNumbers,
  LeadershipSection,
} from "@/components";
import * as styles from "./page.css";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/andrepilch",
    icon: (
      <svg
        className={styles.socialIcon}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/andrepilch",
    icon: (
      <svg
        className={styles.socialIcon}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:hello@andrepilch.com",
    icon: (
      <svg
        className={styles.socialIcon}
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
    ),
  },
];

const caseStudies = [
  {
    title: "Gallery Wall Designer",
    outcome:
      "Increased Average Order Value by 26% through radical simplification",
    description:
      "Scaling the native ecosystem to serve 1.3M annual users while bridging design and engineering.",
    tags: ["Product Design", "React", "Design Systems"],
    href: "/work/whcc-editor",
    image: "/images/projects/wall_designer/wall_designer_cover.jpg",
    stats: [
      { value: "26%", label: "AOV Increase" },
      { value: "1.3M", label: "Annual Users" },
    ],
  },
  {
    title: "Eternity Bible",
    outcome: "Full-stack React/NextJS application built and shipped solo",
    description:
      "A living demonstration of design-to-code capabilities with modern web technologies.",
    tags: ["NextJS", "TypeScript", "Full-Stack"],
    href: "/work/eternity-bible",
    image: "/images/projects/eternity/eternity_cover.jpg",
    stats: [
      { value: "4.8★", label: "App Rating" },
      { value: "10K+", label: "Users" },
      { value: "15min", label: "Avg Session" },
    ],
  },
];

const frameworks = [
  {
    name: "The Bridge Framework",
    tagline: "Design + Engineering Synchronization",
    description:
      "My proprietary approach to product design that ensures solutions are innovative yet buildable. By speaking both design and code, I eliminate the translation gap that slows teams down.",
    icon: (
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
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
  },
  {
    name: "Radical Simplification",
    tagline: "Complex Tools, Intuitive Experiences",
    description:
      "Turning professional-grade tools into experiences that drive AOV. The web editor's 26% increase came from removing barriers, not adding features.",
    icon: (
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
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    name: "Data-Informed Design",
    tagline: "Quantitative What, Qualitative Why",
    description:
      "Using A/B testing and dashboards to identify opportunities, then user interviews to understand motivations. Data informs decisions—it doesn't make them.",
    icon: (
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero wrapper - provides relative container for diagonal background */}
      <div className={styles.heroWrapper}>
        <DiagonalBackground />
        <HeroSection />
        <BigNumbers />
      </div>
      <ImpactStatsRibbon />
      
      {/* Main Content Sections */}
      <div className={styles.sectionsWrapper}>
        {/* Featured Case Studies */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionContent}>
              <div className={styles.sectionHeaderFlex}>
                <div>
                  <p className={styles.eyebrow}>Featured Work</p>
                  <h2 className={styles.sectionTitle}>Case Studies</h2>
                </div>
                <Link href="/work" className={styles.viewAllLink}>
                  View all projects →
                </Link>
              </div>

              <div className={styles.caseStudyGrid}>
                {caseStudies.map((study, i) => (
                  <Link
                    key={i}
                    href={study.href}
                    className={styles.caseStudyCard}
                  >
                    {/* Image */}
                    <div className={styles.caseStudyImage}>
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className={styles.caseStudyImageInner}
                      />
                    </div>

                    {/* Content */}
                    <div className={styles.caseStudyContent}>
                      <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                      <p className={styles.caseStudyOutcome}>{study.outcome}</p>
                      <p className={styles.caseStudyDescription}>
                        {study.description}
                      </p>
                      
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
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <LeadershipSection />

        {/* The Framework Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionContent}>
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>How I Work</p>
                <h2 className={styles.sectionTitle}>My Design Philosophy</h2>
                <p className={styles.sectionDescription}>
                  I look for ways to differentiate products in favor of users to
                  achieve growth in competitive markets. A strong product saves
                  time, adds value, and competes well. Here's the framework that
                  guides my approach.
                </p>
              </div>

              <div className={styles.gridThree}>
                {frameworks.map((framework, i) => (
                  <div key={i} className={styles.frameworkCard}>
                    <div className={styles.frameworkIcon}>{framework.icon}</div>
                    <h3 className={styles.frameworkName}>{framework.name}</h3>
                    <p className={styles.frameworkTagline}>
                      {framework.tagline}
                    </p>
                    <p className={styles.frameworkDescription}>
                      {framework.description}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: "center" }}>
                <Link href="/about#philosophy" className={styles.linkAccent}>
                  Read my full Design Philosophy →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              {/* Background gradient */}
              <div className={styles.ctaGradient} />
              <h2 className={styles.ctaTitle}>Let's Connect</h2>
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
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
        </section>
      </div>
    </div>
  );
}
