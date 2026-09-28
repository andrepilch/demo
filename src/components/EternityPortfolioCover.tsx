'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './EternityPortfolioCover.module.css'

const BOOK_COLORS = [
  '#D4C4AD',
  '#7B6B8E',
  '#aab88f',
  '#6B9E9A',
  '#9E6B6B',
  '#7B9E7B',
  '#5E7A9A',
]

const PAIRINGS = [
  {
    name: 'Sermon',
    color: '#D4C4AD',
    ref: 'John 6:68',
    translation: 'ESV',
    when: '2m ago',
  },
  {
    name: 'Family',
    color: '#7B6B8E',
    ref: 'Genesis 9:16',
    translation: 'NKJV',
    when: '14h ago',
  },
  {
    name: 'Psalms',
    color: '#aab88f',
    ref: 'Psalm 23:4',
    translation: 'ESV',
    when: '1d ago',
  },
  {
    name: 'Kids',
    color: '#6B9E9A',
    ref: 'Luke 1:16',
    translation: 'NLT',
    when: '3d ago',
  },
  {
    name: 'Personal',
    color: '#9E6B6B',
    ref: 'Luke 1:17',
    translation: 'NTLS',
    when: '7d ago',
  },
]

interface BookParticle {
  x: number
  y: number
  width: number
  height: number
  color: string
  vx: number
  vy: number
  rotation: number
  spin: number
}

function createParticles(
  count: number,
  width: number,
  height: number
): BookParticle[] {
  return Array.from({ length: count }, (_, i) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    width: 28 + Math.random() * 36,
    height: 40 + Math.random() * 52,
    color: BOOK_COLORS[i % BOOK_COLORS.length],
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.25,
    rotation: Math.random() * Math.PI,
    spin: (Math.random() - 0.5) * 0.004,
  }))
}

function FloatingBooksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let particles: BookParticle[] = []
    let visible = true

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = window.devicePixelRatio || 1
      const { width, height } = parent.getBoundingClientRect()
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (particles.length === 0) {
        particles = createParticles(42, width, height)
      }
    }

    const draw = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)

      for (const book of particles) {
        book.x += book.vx
        book.y += book.vy
        book.rotation += book.spin

        if (book.x < -60) book.x = w + 40
        if (book.x > w + 60) book.x = -40
        if (book.y < -60) book.y = h + 40
        if (book.y > h + 60) book.y = -40

        ctx.save()
        ctx.translate(book.x, book.y)
        ctx.rotate(book.rotation)
        ctx.fillStyle = book.color
        ctx.globalAlpha = 0.82
        ctx.beginPath()
        ctx.roundRect(
          -book.width / 2,
          -book.height / 2,
          book.width,
          book.height,
          4
        )
        ctx.fill()
        ctx.restore()
      }
    }

    const loop = () => {
      if (!visible) return
      draw()
      raf = requestAnimationFrame(loop)
    }

    resize()
    const parent = canvas.parentElement
    const ro = new ResizeObserver(resize)
    if (parent) ro.observe(parent)

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        cancelAnimationFrame(raf)
        if (visible) raf = requestAnimationFrame(loop)
      },
      { threshold: 0.05 }
    )
    io.observe(canvas)

    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.booksCanvas} aria-hidden />
}

function PhoneMockup() {
  const col1 = PAIRINGS.filter((_, i) => i % 2 === 0)
  const col2 = PAIRINGS.filter((_, i) => i % 2 === 1)

  return (
    <div className={styles.phoneLayer}>
      <div className={styles.phone}>
        <div className={styles.phoneBezel} />
        <div className={styles.phoneNotch} aria-hidden />
        <div className={styles.phoneScreen}>
          <div className={styles.screenContent}>
            <div className={styles.screenTitle}>My Bibles</div>
            <div className={styles.pairingGrid}>
              <div>
                {col1.map((pairing) => (
                  <div
                    key={pairing.name}
                    className={styles.pairingCard}
                    style={{ background: pairing.color, marginBottom: 8 }}
                  >
                    <span className={styles.pairingName}>{pairing.name}</span>
                    <span className={styles.pairingRef}>{pairing.ref}</span>
                    <span className={styles.pairingMeta}>
                      {pairing.translation} · {pairing.when}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className={styles.addCard}>+ Add Bible</div>
                {col2.map((pairing) => (
                  <div
                    key={pairing.name}
                    className={styles.pairingCard}
                    style={{ background: pairing.color, marginTop: 8 }}
                  >
                    <span className={styles.pairingName}>{pairing.name}</span>
                    <span className={styles.pairingRef}>{pairing.ref}</span>
                    <span className={styles.pairingMeta}>
                      {pairing.translation} · {pairing.when}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <nav className={styles.tabBar} aria-label='App navigation'>
              <span className={styles.tabActive}>Bibles</span>
              <span>Read</span>
              <span>Notes</span>
              <span>Search</span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Full-viewport Eternity portfolio cover — floating books + phone device UI. */
export function EternityPortfolioCover() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className={styles.cover} data-eternity-cover>
      {mounted && <FloatingBooksCanvas />}
      <div className={styles.stage}>
        {mounted && <PhoneMockup />}
        <div className={styles.copyPanel}>
          <h2 className={styles.tagline}>Open the Bible more often</h2>
          <p className={styles.subtitle}>
            Pick up reading or listening where you left off in any Bible on any
            device without distractions and untracked. It&apos;s just you and the
            Bible.
          </p>
          <Link href='/work/eternity-bible' className={styles.ctaLink}>
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  )
}
