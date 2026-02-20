import Image from 'next/image'
import type { CaseStudyGalleryImage } from './types'
import * as styles from './case-study.css'

export interface ProcessStepItem {
  title: string
  description?: string
  number?: number
}

export interface CaseStudyProcessListProps {
  items: ProcessStepItem[]
  images?: CaseStudyGalleryImage[]
}

type RenderItem =
  | { type: 'step'; data: ProcessStepItem; index: number }
  | { type: 'image'; data: CaseStudyGalleryImage; index: number }

/** Renders a numbered grid of process step cards with optional interleaved images. */
export function CaseStudyProcessList({
  items,
  images,
}: CaseStudyProcessListProps) {
  const renderItems: RenderItem[] = []

  items.forEach((item, i) => {
    const stepNumber = i + 1
    renderItems.push({ type: 'step', data: item, index: i })

    const imagesAfterStep = images?.filter((img) => img.afterStep === stepNumber)
    imagesAfterStep?.forEach((img, imgIdx) => {
      renderItems.push({ type: 'image', data: img, index: imgIdx })
    })
  })

  return (
    <div className={styles.processStepsList}>
      {renderItems.map((item) => {
        if (item.type === 'step') {
          const step = item.data
          return (
            <div key={`step-${item.index}`} className={styles.processStepItem}>
              <span className={styles.processStepNumber} aria-hidden>
                {step.number ?? item.index + 1}
              </span>
              <span className={styles.processStepTitle}>{step.title}</span>
              {step.description != null && step.description !== '' && (
                <p className={styles.processStepDescription}>
                  {step.description}
                </p>
              )}
            </div>
          )
        }

        const img = item.data
        return (
          <div
            key={`img-${img.afterStep}-${item.index}`}
            className={styles.processImageCard}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )
      })}
    </div>
  )
}
