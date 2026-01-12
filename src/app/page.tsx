import Link from "next/link";
import Image from "next/image";
import { DiagonalBackground } from "@/components";
import * as styles from "./page.css";

// Stats data
const impactStats = [
  { value: "14", label: "Years Experience" },
  { value: "5", label: "Years React/TS" },
  { value: "18", label: "Released Products" },
  { value: "2", label: "Patents (US/CH)" },
];

const bigNumbers = [
  {
    value: "$22+",
    label: "Higher AOV",
    description: "Web editors outperform legacy solutions by 26%",
  },
  {
    value: "1.84x",
    label: "YoY Growth",
    description: "Portrait Canvas sales increase year-over-year",
  },
  {
    value: "6.5M+",
    label: "Editors Served",
    description: "Total reach across all product platforms",
  },
];

const caseStudies = [
  {
    title: "WHCC Digital Print Editor",
    outcome:
      "Increased Average Order Value by 26% through radical simplification",
    description:
      "Scaling the native ecosystem to serve 1.3M annual users while bridging design and engineering.",
    tags: ["Product Design", "React", "Design Systems"],
    href: "/work/whcc-editor",
    image: "/images/projects/project-01/cover-01.jpg",
  },
  {
    title: "VR Patent Innovation",
    outcome:
      "Secured 2 international patents for immersive document interaction",
    description:
      "Pioneering virtual reality interfaces for professional document workflows at Thomson Reuters.",
    tags: ["Innovation", "UX Research", "Patents"],
    href: "/work/vr-patent",
    image: "/images/projects/project-01/cover-02.jpg",
  },
  {
    title: "Eternity Bible App",
    outcome: "Full-stack React/NextJS application built and shipped solo",
    description:
      "A living demonstration of design-to-code capabilities with modern web technologies.",
    tags: ["NextJS", "TypeScript", "Full-Stack"],
    href: "/work/eternity-bible",
    image: "/images/projects/project-01/cover-03.jpg",
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
      {/* Animated diagonal background */}
      <DiagonalBackground />

      {/* Star field background */}
      <div className={styles.starField}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        <div
          className={styles.shootingStar}
          style={{ top: "15%", left: "10%", animationDelay: "0s" }}
        />
        <div
          className={styles.shootingStar}
          style={{ top: "45%", left: "60%", animationDelay: "2s" }}
        />
        <div
          className={styles.shootingStar}
          style={{ top: "75%", left: "30%", animationDelay: "4s" }}
        />
      </div>

      {/* Hero Gradient */}
      <div className={styles.heroGradient} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            {/* Eyebrow */}
            <p className={styles.eyebrow}>
              Senior Product Designer & Front-end Engineer
            </p>

            {/* Headline */}
            <h1 className={styles.heroTitle}>
              I bridge the gap between{" "}
              <span className={styles.accentGradient}>product vision</span> and{" "}
              <span className={styles.accentGradient}>engineering reality</span>
              .
            </h1>

            {/* Sub-headline */}
            <p className={styles.heroSubtitle}>
              14 years designing and building innovative mobile & web products.
              I don't just hand off designs—I ship code.
            </p>

            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <Link href="/work" className={styles.btnPrimary}>
                View Case Studies
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link href="/about" className={styles.btnSecondary}>
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Ribbon */}
      <section className={styles.ribbonSection}>
        <div className={styles.ribbonWrapper}>
          <div className={styles.ribbonTrack}>
            {[...impactStats, ...impactStats].map((stat, i) => (
              <div key={i} className={styles.ribbonItem}>
                <span className={styles.ribbonValue}>{stat.value}</span>
                <span className={styles.ribbonLabel}>{stat.label}</span>
                <span className={styles.ribbonDot}>•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Numbers Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Impact By The Numbers</p>
            <h2 className={styles.sectionTitle}>
              Designing for Business Outcomes
            </h2>
          </div>

          <div className={styles.gridThree}>
            {bigNumbers.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className={styles.sectionDivider} />

      {/* Featured Case Studies */}
      <section className={styles.section}>
        <div className={styles.container}>
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
              <Link key={i} href={study.href} className={styles.caseStudyCard}>
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
      </section>

      {/* Section Divider */}
      <div className={styles.sectionDivider} />

      {/* The Framework Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>How I Work</p>
            <h2 className={styles.sectionTitle}>My Design Philosophy</h2>
            <p className={styles.sectionDescription}>
              A strong product saves time, adds value, and competes fiercely.
              Here's the framework that guides my approach.
            </p>
          </div>

          <div className={styles.gridThree}>
            {frameworks.map((framework, i) => (
              <div key={i} className={styles.frameworkCard}>
                <div className={styles.frameworkIcon}>{framework.icon}</div>
                <h3 className={styles.frameworkName}>{framework.name}</h3>
                <p className={styles.frameworkTagline}>{framework.tagline}</p>
                <p className={styles.frameworkDescription}>
                  {framework.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/about#philosophy" className={styles.linkAccent}>
              Read my full Design Philosophy →
            </Link>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className={styles.sectionDivider} />

      {/* Why Developers Like Working With Me */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.gridTwo}>
            <div>
              <p className={styles.eyebrow}>The Engineer's Endorsement</p>
              <h2
                className={styles.sectionTitle}
                style={{ marginBottom: "1.5rem" }}
              >
                Why Developers Like Working With Me
              </h2>
              <div className={styles.spaceY4}>
                <p className={styles.textSecondary}>
                  <span
                    className={`${styles.textPrimary} ${styles.fontMedium}`}
                  >
                    I deliver React components, not just Figma files.
                  </span>{" "}
                  When I hand off a design, engineers get production-ready code
                  they can actually use.
                </p>
                <p className={styles.textSecondary}>
                  <span
                    className={`${styles.textPrimary} ${styles.fontMedium}`}
                  >
                    I speak TypeScript fluently.
                  </span>{" "}
                  5 years of React/TS experience means I understand state
                  management, component architecture, and the constraints
                  engineers face.
                </p>
                <p className={styles.textSecondary}>
                  <span
                    className={`${styles.textPrimary} ${styles.fontMedium}`}
                  >
                    I use modern tools like Cursor and AI-assisted development.
                  </span>{" "}
                  Staying current with dev workflows means my designs are always
                  feasible.
                </p>
              </div>
            </div>

            {/* Code snippet visual */}
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDotRed} />
                <div className={styles.codeDotYellow} />
                <div className={styles.codeDotGreen} />
                <span className={styles.codeFilename}>DesignSystem.tsx</span>
              </div>
              <pre className={styles.codeContent}>
                <code>{`interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
}: ButtonProps) => {
  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
};`}</code>
              </pre>
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

            <h2 className={styles.ctaTitle}>Ready to Bridge the Gap?</h2>
            <p className={styles.ctaDescription}>
              Whether you need a design partner who understands code, or a
              leader who can drive product strategy, I'd love to connect.
            </p>
            <div className={styles.ctaButtonsWrapper}>
              <a
                href="mailto:hello@andrepilch.com"
                className={styles.btnPrimary}
              >
                Email Me
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
              <a
                href="https://linkedin.com/in/andrepilch"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
