import type { Metadata } from 'next'
import { EternityPortfolioCover } from '@/components/EternityPortfolioCover'

export const metadata: Metadata = {
  title: 'Eternity',
  robots: { index: false, follow: false },
}

/** Standalone books + phone cover. Home embeds this route in an iframe. */
export default function EternityCoverPage() {
  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          background: #fff;
          overflow: hidden;
          overscroll-behavior: none;
        }
      `}</style>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          background: '#fff',
        }}
      >
        <EternityPortfolioCover />
      </div>
    </>
  )
}
