import { Section, SectionGap, SectionHeader } from './Section'
import { Eyebrow, H2 } from './Text'
import * as styles from './SideProjects.css'

interface SideProject {
  title: string
  description: string
  url?: string
  tech?: string[]
  status?: string
}

// Side Projects
const sideProjects: SideProject[] = [
  {
    title: 'Eternity Bible',
    description:
      'A full-stack web application demonstrating my solo React/NextJS capabilities. Built with modern tools and deployed to production',
    url: 'https://eternitybible.app',
    tech: ['ReactJS', 'NextJS', 'TypeScript', 'PigmentCSS', 'Supabase', 'Vercel'],
    status: 'Live',
  },
  {
    title: 'Website Design & Development Volunteer Work for various Non-Profits',
    description:
      'Volunteer work for various Non-Profits to help them with their websites, branding, and digital presence',
  },
  {
    title: 'Freelance Branding & Design for 15 Years',
    description:
      'Freelance branding and design work for a wide variety of clients over the past 15 years',
    url: '/branding',
  },
]

export function SideProjects() {
  return (
    <Section gap={SectionGap.lg} id='projects'>
      <SectionHeader>
        <Eyebrow>Beyond the Day Job</Eyebrow>
        <H2>Side Projects</H2>
      </SectionHeader>

      {sideProjects.map((project, i) => {
        const CardWrapper = project.url ? 'a' : 'div'
        const linkProps = project.url
          ? { href: project.url, target: '_blank' as const, rel: 'noopener noreferrer' }
          : {}
        return (
          <CardWrapper
            key={i}
            className={styles.projectCard}
            {...linkProps}
          >
            <div className={styles.projectHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              {project.status != null && project.status !== '' && (
                <span className={styles.projectStatus}>{project.status}</span>
              )}
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            {project.tech != null && project.tech.length > 0 && (
              <div className={styles.skillsList}>
                {project.tech.map((tech, j) => (
                  <span key={j} className={styles.skillBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.url != null && project.url !== '' && (
              <div className={styles.projectLink}>
                Visit site
                <svg
                  className={styles.projectLinkIcon}
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
              </div>
            )}
          </CardWrapper>
        )
      })}
    </Section>
  )
}
