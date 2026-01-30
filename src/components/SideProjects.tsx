import { Section, SectionGap, SectionHeader } from "./Section";
import { Eyebrow, H2 } from "./Text";
import * as styles from "./SideProjects.css";

interface SideProject {
  title: string;
  description: string;
  url: string;
  tech: string[];
  status: string;
}

// Side Projects
const sideProjects: SideProject[] = [
  {
    title: "Eternity Bible",
    description:
      "A full-stack web application demonstrating my solo React/NextJS capabilities. Built with modern tools and deployed to production.",
    url: "https://eternitybible.app",
    tech: ["NextJS", "TypeScript", "Vanilla Extract", "Vercel"],
    status: "Live",
  },
  {
    title: "Website Design & Development Volunteer Work for Non-Profits",
    description:
      "A full-stack web application demonstrating my solo React/NextJS capabilities. Built with modern tools and deployed to production.",
    url: "https://eternitybible.app",
    tech: ["NextJS", "TypeScript", "Vanilla Extract", "Vercel"],
    status: "Live",
  },
  {
    title: "Freelance Branding & Design for 15 Years",
    description:
      "A full-stack web application demonstrating my solo React/NextJS capabilities. Built with modern tools and deployed to production.",
    url: "https://eternitybible.app",
    tech: ["NextJS", "TypeScript", "Vanilla Extract", "Vercel"],
    status: "Live",
  },
];

export function SideProjects() {
  return (
    <Section gap={SectionGap.lg} id="projects">
        <SectionHeader>
          <Eyebrow>Beyond the Day Job</Eyebrow>
          <H2>Side Projects</H2>
        </SectionHeader>

          {sideProjects.map((project, i)  => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectStatus}>
                  {project.status}
                </span>
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
    </Section>
  );
}
