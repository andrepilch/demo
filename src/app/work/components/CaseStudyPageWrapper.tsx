import * as styles from './case-study.css'

export interface CaseStudyPageWrapperProps {
  children: React.ReactNode
}

export function CaseStudyPageWrapper({ children }: CaseStudyPageWrapperProps) {
  return <div className={styles.pageWrapper}>{children}</div>
}
