import Image from "next/image";
import Link from "next/link";
import * as styles from "./page.css";

// Skills Matrix Data
const skillsMatrix = [
  {
    category: "Research",
    skills: [
      "Persona Building",
      "Beta Programs",
      "Evaluative Research",
      "A/B Testing",
      "Quantitative Dashboards",
      "User Interviews",
      "Journey Mapping",
    ],
  },
  {
    category: "Design",
    skills: [
      "Product Strategy",
      "Design Systems",
      "Figma",
      "Wireframing",
      "Prototyping",
      "UI/UX Design",
      "Visual Design",
    ],
  },
  {
    category: "Technical",
    skills: [
      "React.js",
      "TypeScript",
      "NextJS",
      "HTML/CSS",
      "Vanilla Extract",
      "Cursor AI",
      "Blender 3D",
    ],
  },
];

// Timeline/Resume Data
const careerTimeline = [
  {
    period: "2020 – Present",
    role: "Senior Product Designer & Frontend Engineer",
    company: "WHCC (White House Custom Colour)",
    location: "Remote / Wisconsin, USA",
    highlights: [
      "Lead end-to-end product design for digital print editors serving 1.3M+ annual users",
      "Established the company's first comprehensive Design System",
      "Increased web editor AOV by 26% through radical simplification",
      "Directly code React components to ensure design fidelity",
    ],
  },
  {
    period: "2017 – 2020",
    role: "Senior UX Designer",
    company: "Thomson Reuters",
    location: "Eagan, Minnesota, USA",
    highlights: [
      "Secured 2 international patents (US/CH) for VR document interaction",
      "Led UX strategy for professional legal and tax platforms",
      "Pioneered immersive document workflows for complex data",
    ],
  },
  {
    period: "2014 – 2017",
    role: "UX/UI Designer",
    company: "Various Agencies",
    location: "Minnesota, USA",
    highlights: [
      "Delivered impactful designs across web, mobile, and print",
      "Built strong foundation in UX/UI and visual design",
      "Collaborated with cross-functional teams on client projects",
    ],
  },
  {
    period: "2009 – 2014",
    role: "Junior Designer → Designer",
    company: "Creative Agencies",
    location: "France → USA",
    highlights: [
      "Began career in creative and digital agencies",
      "Refined skills across a variety of media",
      "Transitioned from print to digital-first design",
    ],
  },
];

// Philosophy Principles
const philosophyPrinciples = [
  {
    title: "Data-Informed, Not Data-Driven",
    description:
      "I use A/B testing and quantitative dashboards to find the what, and user interviews to find the why. Data informs my decisions—it doesn't make them for me.",
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
  {
    title: "Technical Feasibility by Design",
    description:
      "Because I code, I design solutions that are innovative but buildable. Every concept I create considers state management, component architecture, and engineering constraints.",
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Radical Simplification",
    description:
      "Turning complex professional tools into intuitive experiences that drive business outcomes. The best interface is one that feels invisible—yet powerful.",
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
    title: "Design for Business Outcomes",
    description:
      "Beautiful interfaces are table stakes. I design for metrics that matter: conversion rates, AOV, retention, and long-term product sustainability.",
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

// Side Projects
const sideProjects = [
  {
    title: "Eternity Bible",
    description:
      "A full-stack web application demonstrating my solo React/NextJS capabilities. Built with modern tools and deployed to production.",
    url: "https://eternitybible.app",
    tech: ["NextJS", "TypeScript", "Vanilla Extract", "Vercel"],
    status: "Live",
  },
];

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.sectionSmall}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Avatar */}
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarContainer}>
                <Image
                  src="/images/avatar.jpg"
                  alt="André Pilch"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className={styles.avatarDecoration} />
            </div>

            {/* Bio Content */}
            <div className={styles.bioContent}>
              <p className={styles.eyebrow}>About Me</p>
              <h1 className={styles.pageTitle}>André Pilch</h1>
              <div className={styles.bioText}>
                <p>
                  Born in France and now residing in Wisconsin, I've spent{" "}
                  <span className={styles.bioHighlight}>14 years</span> at the
                  intersection of design and engineering—a rare position that
                  makes me a true "Bridge" between product vision and technical
                  execution.
                </p>
                <p>
                  As a{" "}
                  <span className={styles.bioHighlight}>
                    Senior Product Designer
                  </span>{" "}
                  and{" "}
                  <span className={styles.bioHighlight}>Frontend Engineer</span>
                  , I don't just hand off Figma files—I ship production React
                  code. This dual fluency means I design solutions that are both
                  innovative and buildable, and I can communicate seamlessly
                  with both design and engineering teams.
                </p>
                <p>
                  When I'm not designing or coding, you'll find me kayaking
                  Wisconsin's lakes, exploring my Christian faith, or spending
                  time with family.
                </p>
              </div>

              {/* Quick stats */}
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>14</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>5</div>
                  <div className={styles.statLabel}>Years React/TS</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>18</div>
                  <div className={styles.statLabel}>Products Shipped</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>2</div>
                  <div className={styles.statLabel}>Patents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Design-to-Code Advantage */}
      <section className={styles.section} id="bridge">
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>The Bridge Advantage</p>
              <h2 className={styles.sectionTitle}>
                Design-to-Code: Why It Matters
              </h2>
              <p className={styles.sectionDescription}>
                My 5 years of React/TypeScript experience isn't just a bonus—it's
                a fundamental part of how I design better products.
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
                    built. No "that's not technically possible" surprises during
                    handoff.
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
                  <h3 className={styles.cardTitle}>Design System Ownership</h3>
                  <p className={styles.cardDescription}>
                    I can own the design system from Figma tokens to React
                    components, ensuring consistency across the entire product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className={styles.section} id="philosophy">
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>How I Work</p>
              <h2 className={styles.sectionTitle}>My Design Philosophy</h2>
              <p className={styles.sectionDescription}>
                These principles guide every product decision I make, from initial
                research through final implementation.
              </p>
            </div>

            <div className={styles.gridTwo}>
              {philosophyPrinciples.map((principle, i) => (
                <div key={i} className={styles.frameworkCard}>
                  <div className={styles.frameworkIcon}>{principle.icon}</div>
                  <h3 className={styles.frameworkTitle}>{principle.title}</h3>
                  <p className={styles.frameworkDescription}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className={styles.section} id="skills">
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Capabilities</p>
              <h2 className={styles.sectionTitle}>Skills & Methods</h2>
            </div>

            <div className={styles.gridThree}>
              {skillsMatrix.map((category, i) => (
                <div key={i} className={styles.skillsCard}>
                  <h3 className={styles.skillsCategory}>{category.category}</h3>
                  <div className={styles.skillsList}>
                    {category.skills.map((skill, j) => (
                      <span key={j} className={styles.skillBadge}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Side Projects */}
      <section className={styles.section} id="projects">
        <div className={styles.container}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Beyond the Day Job</p>
              <h2 className={styles.sectionTitle}>Side Projects</h2>
            </div>

            <div className={styles.maxW2xl}>
              {sideProjects.map((project, i) => (
                <a
                  key={i}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectCard}
                >
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectStatus}>{project.status}</span>
                  </div>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.skillsList}>
                    {project.tech.map((tech, j) => (
                      <span key={j} className={styles.skillBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectLink}>
                    Visit site
                    <svg
                      className={styles.projectLinkIcon}
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
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className={styles.section} id="experience">
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
      </section>

      {/* CTA Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            {/* Background gradient */}
            <div className={styles.ctaGradient} />

            <h2 className={styles.ctaTitle}>Let's Work Together</h2>
            <p className={styles.ctaDescription}>
              Whether you're looking for a design partner who understands code,
              a strategic leader, or someone who can bridge both worlds—I'd love
              to hear about your project.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="mailto:hello@andrepilch.com"
                className={styles.btnPrimary}
              >
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
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
