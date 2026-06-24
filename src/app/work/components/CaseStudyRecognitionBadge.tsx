import type { CaseStudyRecognition } from './types'
import * as styles from './case-study.css'

export interface CaseStudyRecognitionBadgeProps {
  recognition: CaseStudyRecognition
}

export function CaseStudyRecognitionBadge({
  recognition,
}: CaseStudyRecognitionBadgeProps) {
  const content = (
    <>
      <svg
        className={styles.heroBadgeIcon}
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M12 2l2.39 4.84 5.34.78-3.86 3.77.91 5.32L12 14.98l-4.78 2.51.91-5.32L4.27 7.62l5.34-.78L12 2z' />
      </svg>
      {recognition.label}
    </>
  )

  if (recognition.url) {
    return (
      <a
        href={recognition.url}
        target='_blank'
        rel='noopener noreferrer'
        className={styles.heroBadge}
      >
        {content}
      </a>
    )
  }

  return <span className={styles.heroBadge}>{content}</span>
}
