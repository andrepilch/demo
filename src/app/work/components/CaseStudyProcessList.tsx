import * as styles from './case-study.css'

export interface ProcessStepItem {
  title: string
  description?: string
  number?: number
}

export interface CaseStudyProcessListProps {
  items: ProcessStepItem[]
}

/** Renders a numbered grid of process step cards. Use inside CaseStudySection. */
export function CaseStudyProcessList({ items }: CaseStudyProcessListProps) {
  return (
    <ol className={styles.processStepsList}>
      {items.map((item, i) => (
        <li key={i} className={styles.processStepItem}>
          <span className={styles.processStepNumber} aria-hidden>
            {item.number ?? i + 1}
          </span>
          <span className={styles.processStepTitle}>{item.title}</span>
          {item.description != null && item.description !== '' && (
            <p className={styles.processStepDescription}>{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  )
}
