import { Section, SectionGap, Grid } from './Section'
import * as styles from './SkillsMatrix.css'

interface SkillCategory {
  category: string
  skills: string[]
}

// Skills Matrix Data
const skillsMatrix: SkillCategory[] = [
  {
    category: 'Design',
    skills: [
      'Product Strategy',
      'Design Systems',
      'Interaction Design',
      'Motion Design',
      'Aligning with Vision',
      'Stakeholder Alignment',
      'Design Leadership',
      'Journey Mapping',
      'Product Growth',
      'Innovation',
      'Accessibility',
      'Collaboration',
      'Intuition',
      'Using AI',
      'Wireframing',
      'Prototyping',
      'UI/UX Design',
      'Visual Design',
      'Taste',
      'Craft',
      'Quality',
    ],
  },
  {
    category: 'Research',
    skills: [
      'Persona Building',
      'Competitive Analysis',
      'Guided Usability Testing',
      'Unguided Usability Testing',
      'A/B Testing',
      'Beta Programs',
      'Evaluative Research',
      'A/B Testing',
      'Voting Feedback Tools',
      'Qualitative Data Analysis',
      'Quantitative Data Analysis',
      'User Interviews',
      'Surveys',
      'Internal Polls',
      'Journey Mapping',
      'Paper Prototyping',
    ],
  },
  {
    category: 'Technical',
    skills: [
      'Pen & Paper',
      'Figma',
      'Figma Prototyping',
      'Figma Make',
      'Figjam',
      'Cursor AI',
      'React.js',
      'TypeScript',
      'Javascript',
      'Github',
      'NextJS',
      'HTML/CSS',
      'Styled Components',
      'PigmentCSS',
      'PWA/TWA',
      'Supabase',
      'Webflow',
      'Motion library',
      'Origami Studio',
      'Adobe Suite',
      'Dovetail',
      'Lookback',
      'UserTesting',
      'JIRA',
      'Confluence',
      'Github Projects',
      'Linear',
      'Asana',
      'Blender 3D',
    ],
  },
]

interface SkillsMatrixProps {
  expanded: boolean
}

export function SkillsMatrix({ expanded }: SkillsMatrixProps) {
  return (
    <Section
      gap={SectionGap.lg}
      id='skills'
      className={styles.skillsSectionNoPadding}
    >
      {/* <SectionHeader>
        <Eyebrow>Capabilities</Eyebrow>
        <H2>Skills & Methods</H2>
      </SectionHeader> */}
      {expanded && (
        <div className={styles.accordionContent}>
          <Grid cols={3}>
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
          </Grid>
        </div>
      )}
    </Section>
  )
}
