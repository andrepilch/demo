import * as styles from './case-study.css'

export interface ProcessStepItem {
  title: string
  description?: string
  number?: number
}

export interface CaseStudyProcessListProps {
  items: ProcessStepItem[]
}

/** Renders a numbered list of process steps. Use inside CaseStudySection. */
export function CaseStudyProcessList({ items }: CaseStudyProcessListProps) {
  return (
    <ol className={styles.processStepsList}>
      {items.map((item, i) => (
        <li key={i} className={styles.processStepItem}>
          {item.title}
        </li>
      ))}
    </ol>
  )
}
