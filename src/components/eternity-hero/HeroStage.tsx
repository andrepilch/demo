'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { CAMERA_FROM, CAMERA_TO, INTRO_MS } from './eternity-tokens'
import {
  cameraTransform,
  clamp01,
  copyTranslate,
  easeInOutCubic,
  interpolateCamera,
  phoneScale,
} from './easing'
import { FloatingBooksCanvas } from './FloatingBooksCanvas'
import { PhoneMockup } from './PhoneMockup'
import * as styles from './eternity-hero.css'

/** Ported from andrepilch/eternity `src/app/about/hero/HeroStage.tsx`. */
export function HeroStage({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const screenScrollRef = useRef<HTMLDivElement>(null)
  const introStartRef = useRef(0)

  useEffect(() => {
    const root = rootRef.current
    const anchor = anchorRef.current
    const frame = frameRef.current
    const scroll = screenScrollRef.current
    if (!root || !anchor || !frame || !scroll) return

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let running = false
    let introComplete = reduced
    let copyBottom = 0

    const measure = () => {
      const content = root.querySelector('[data-hero-content]') as HTMLElement | null
      if (content) {
        copyBottom =
          content.getBoundingClientRect().bottom -
          root.getBoundingClientRect().top
      }
    }

    const applyFrame = (elapsed: number) => {
      const w = root.clientWidth
      const h = root.clientHeight
      const scale = phoneScale(w, h)

      const phoneT = reduced
        ? 1
        : easeInOutCubic(clamp01(elapsed / INTRO_MS.phone))
      const pose = interpolateCamera(CAMERA_FROM, CAMERA_TO, phoneT)
      frame.style.transform = cameraTransform(pose)

      const copyT = reduced
        ? 1
        : easeInOutCubic(
            clamp01(
              (elapsed - INTRO_MS.phone - INTRO_MS.copyDelay) /
                INTRO_MS.copyDuration
            )
          )
      anchor.style.transform = copyTranslate(copyT, w, h, copyBottom, scale)
      root.style.setProperty('--hero-copy-opacity', String(copyT))
      root.style.setProperty(
        '--hero-copy-events',
        copyT > 0.05 ? 'auto' : 'none'
      )

      const scrollMax = Math.max(0, scroll.scrollHeight - 801.8)
      const scrollT = reduced
        ? 1
        : easeInOutCubic(clamp01((elapsed - 100) / 2500))
      scroll.style.top = `${(-scrollMax * (1 - scrollT)).toFixed(1)}px`

      if (!introComplete && elapsed >= INTRO_MS.complete) {
        introComplete = true
        root.dataset.heroIntroComplete = 'true'
        frame.style.willChange = 'auto'
      }
    }

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      if (!running) return
      applyFrame(now - introStartRef.current)
    }

    const startIntro = () => {
      anchor.style.opacity = '1'
      frame.style.willChange = 'transform'
      introStartRef.current = performance.now()
      running = true
      if (reduced) {
        applyFrame(INTRO_MS.complete)
      }
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    const content = root.querySelector('[data-hero-content]')
    if (content) ro.observe(content)

    Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise<void>((resolve) => setTimeout(resolve, 150)),
    ]).then(() => requestAnimationFrame(startIntro))

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <div ref={rootRef} id='about-hero' className={styles.stage}>
      <FloatingBooksCanvas />
      <div ref={anchorRef} className={styles.phoneAnchor}>
        <PhoneMockup ref={frameRef} screenScrollRef={screenScrollRef} />
      </div>
      {children}
    </div>
  )
}
