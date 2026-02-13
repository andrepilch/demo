import Image from 'next/image'
import type { CaseStudySectionData, CaseStudyGalleryImage } from './types'
import { CaseStudySection } from './CaseStudySection'
import * as styles from './case-study.css'

export interface CaseStudyImageGalleryProps {
  section: CaseStudySectionData
  images: CaseStudyGalleryImage[]
}

export function CaseStudyImageGallery({
  section,
  images,
}: CaseStudyImageGalleryProps) {
  return (
    <CaseStudySection data={section}>
      <div className={styles.imageGrid}>
        {images.map((img, i) => (
          <div key={i} className={styles.imageWrapper}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </CaseStudySection>
  )
}
