import { Section, SectionGap, SectionHeader, Grid } from "./Section";
import { Eyebrow, H2 } from "./Text";
import * as styles from "./SkillsMatrix.css";

interface SkillCategory {
  category: string;
  skills: string[];
}

// Skills Matrix Data
const skillsMatrix: SkillCategory[] = [
  {
    category: "Research",
    skills: [
      "Persona Building",
      "Competitive Analysis",
      "Guided Usability Testing",
      "Unguided Usability Testing",
      "A/B Testing",
      "Beta Programs",
      "Evaluative Research",
      "A/B Testing",
      "Voting based Product Feedback Tools",
      "Qualitative Data Analysis",
      "Quantitative Data Analysis",
      "User Interviews",
      "Surveys",
      "Internal Polls",
      "Journey Mapping",
      "Paper Prototyping",
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

export function SkillsMatrix() {
  return (
    <Section gap={SectionGap.lg} id="skills">
        <SectionHeader>
          <Eyebrow>Capabilities</Eyebrow>
          <H2>Skills & Methods</H2>
        </SectionHeader>

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
    </Section>
  );
}
