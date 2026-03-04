'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import type { CaseStudySectionData, CaseStudyGalleryImage } from './types'
import { CaseStudySection } from './CaseStudySection'
import * as styles from './case-study.css'

export interface CaseStudyImageGalleryProps {
  section: CaseStudySectionData
  images: CaseStudyGalleryImage[]
  children?: React.ReactNode
}

export function CaseStudyImageGallery({
  section,
  images,
  children,
}: CaseStudyImageGalleryProps) {
  const [lightboxImage, setLightboxImage] =
    useState<CaseStudyGalleryImage | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lightboxImage) {
      overlayRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxImage])

  return (
    <CaseStudySection data={section}>
      <div className={styles.imageGrid}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`${styles.imageWrapper} ${styles.imageWrapperClickable}`}
            onClick={() => setLightboxImage(img)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setLightboxImage(img)
              }
            }}
            role='button'
            tabIndex={0}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      {children}
      {lightboxImage &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={overlayRef}
            className={styles.lightboxOverlay}
            onClick={() => setLightboxImage(null)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setLightboxImage(null)
            }}
            role='button'
            tabIndex={-1}
            aria-label='Close lightbox'
          >
            <div
              className={styles.lightboxImageWrapper}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  width: 'auto',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>,
          document.body
        )}
    </CaseStudySection>
  )
}
