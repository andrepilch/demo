'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import * as styles from './case-study.css'

export interface CaseStudyFeatureVideoProps {
  videoSrc: string
  posterSrc: string
  alt: string
  /** Full-width layout (e.g. shipped product). Default is feature-highlight half-width. */
  fullWidth?: boolean
}

export function CaseStudyFeatureVideo({
  videoSrc,
  posterSrc,
  alt,
  fullWidth = false,
}: CaseStudyFeatureVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  async function handlePlay() {
    const video = videoRef.current
    if (!video) return

    if (!started) {
      video.src = videoSrc
      setStarted(true)
    }

    try {
      await video.play()
    } catch {
      // Autoplay/play can be blocked; leave the play button visible
      setStarted(false)
    }
  }

  function handleEnded() {
    setStarted(false)
  }

  return (
    <div className={fullWidth ? styles.imageFull : styles.imageWrapper}>
      {!started && (
        <>
          <Image
            src={posterSrc}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
          />
          <button
            type='button'
            className={styles.featurePlayButton}
            onClick={handlePlay}
            aria-label={`Play video: ${alt}`}
          >
            <span className={styles.featurePlayIcon} aria-hidden>
              <svg
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M8 5v14l11-7z' />
              </svg>
            </span>
          </button>
        </>
      )}
      <video
        ref={videoRef}
        className={styles.featureVideo}
        playsInline
        preload='none'
        onEnded={handleEnded}
        style={{ display: started ? 'block' : 'none' }}
      />
    </div>
  )
}
