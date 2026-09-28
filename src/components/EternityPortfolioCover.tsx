'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './EternityPortfolioCover.module.css'

/** My Bibles screen from the Eternity case study gallery (final designs). */
const PHONE_SCREENSHOT = '/images/projects/eternity/eternity_home.jpg'

const BOOK_COLORS = [
  '#D4C4AD',
  '#7B6B8E',
  '#aab88f',
  '#6B9E9A',
  '#9E6B6B',
  '#7B9E7B',
  '#5E7A9A',
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
  return (
    <div className={styles.phoneLayer}>
      <div className={styles.phone}>
        <div className={styles.phoneBezel} />
        <div className={styles.phoneNotch} aria-hidden />
        <div className={styles.phoneScreen}>
          <Image
            src={PHONE_SCREENSHOT}
            alt='My Bibles - Multiple Bible cards for different contexts'
            fill
            sizes='300px'
            className={styles.phoneScreenshot}
            priority
          />
        </div>
      </div>
    </div>
  )
}

/** Full-viewport Eternity portfolio cover — floating books + phone screenshot. */
export function EternityPortfolioCover() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className={styles.cover} data-eternity-cover>
      {mounted && <FloatingBooksCanvas />}
      <div className={styles.stage}>
        <PhoneMockup />
        <div className={styles.copyPanel}>
          <h2 className={styles.tagline}>Open the Bible more often</h2>
          <p className={styles.subtitle}>
            Pick up reading or listening where you left off in any Bible on any
            device without distractions and untracked. It&apos;s just you and the
            Bible.
          </p>
          <Link
            href='/work/eternity-bible'
            target='_top'
            className={styles.ctaLink}
          >
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  )
}
