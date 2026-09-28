'use client'

import { useEffect, useRef } from 'react'
import { BOOK_COLORS } from './eternity-tokens'
import * as styles from './eternity-hero.css'

interface Particle {
  x: number
  y: number
  z: number
  rot: number
  spin: number
  vx: number
  vy: number
  c: string
}

function drawBook(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  z: number,
  color: string
) {
  const spine = 14 * z
  const r = -w / 2
  const s = -h / 2
  const cr = 8 * z
  const ir = 2 * z

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(r + ir, s)
  ctx.lineTo(r + w - cr, s)
  ctx.quadraticCurveTo(r + w, s, r + w, s + cr)
  ctx.lineTo(r + w, s + h - cr)
  ctx.quadraticCurveTo(r + w, s + h, r + w - cr, s + h)
  ctx.lineTo(r + ir, s + h)
  ctx.quadraticCurveTo(r, s + h, r, s + h - ir)
  ctx.lineTo(r, s + ir)
  ctx.quadraticCurveTo(r, s, r + ir, s)
  ctx.closePath()
  ctx.globalAlpha = 0.08 + 0.1 * z
  ctx.fill()

  ctx.globalAlpha = 0.34 + 0.2 * z
  ctx.fillRect(-w / 2, -h / 2, spine, h)
}

export function FloatingBooksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const sizeRef = useRef({ w: 0, h: 0 })
  const lastFrameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      sizeRef.current = { w, h }
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = w < 900 ? 10 : 20
      particlesRef.current = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.35 + Math.random() * 0.85,
        rot: (Math.random() - 0.5) * 0.5,
        spin: (Math.random() - 0.5) * 0.00014,
        vx: (Math.random() - 0.5) * 0.08,
        vy: -0.045 - Math.random() * 0.08,
        c: BOOK_COLORS[i % BOOK_COLORS.length],
      }))
    }

    const drawFrame = (dt: number) => {
      const { w, h } = sizeRef.current
      ctx.clearRect(0, 0, w, h)

      for (const p of particlesRef.current) {
        if (!reduced) {
          p.x += p.vx * dt * p.z
          p.y += p.vy * dt * p.z
          p.rot += p.spin * dt
          if (p.y < -260) {
            p.y = h + 220
            p.x = Math.random() * w
          }
          if (p.x < -240) p.x = w + 220
          if (p.x > w + 240) p.x = -220
        }

        const bw = 118 * p.z
        const bh = 162 * p.z
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        drawBook(ctx, bw, bh, p.z, p.c)
        ctx.restore()
      }
      ctx.globalAlpha = 1
    }

    let raf = 0
    let visible = true

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      if (!visible) return
      const last = lastFrameRef.current || now
      const dt = Math.min(64, now - last)
      lastFrameRef.current = now
      if (!reduced) drawFrame(dt)
    }

    resize()
    drawFrame(0)

    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement!)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(canvas)

    if (!reduced) {
      lastFrameRef.current = performance.now()
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.booksCanvas} aria-hidden />
}
