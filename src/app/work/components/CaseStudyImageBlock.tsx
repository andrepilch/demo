import Image from 'next/image'
import * as styles from './case-study.css'

export interface CaseStudyImageBlockProps {
  src: string
  alt: string
  /** Optional object-fit; default 'contain' */
  objectFit?: 'contain' | 'cover'
  /** Optional extra margin (e.g. for spacing after process steps) */
  marginTop?: string
}

export function CaseStudyImageBlock({
  src,
  alt,
  objectFit = 'contain',
  marginTop,
}: CaseStudyImageBlockProps) {
  return (
    <div
      className={styles.imageFull}
      style={marginTop != null ? { marginTop } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit }}
      />
    </div>
  )
}
