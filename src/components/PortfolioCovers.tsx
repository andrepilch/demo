'use client'

import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

const EternityPortfolioCover = dynamic(
  () =>
    import('./EternityPortfolioCover').then((mod) => mod.EternityPortfolioCover),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: '100vh' }} aria-hidden />,
  }
)

/**
 * Sole client boundary for the home portfolio covers.
 * Designer and ProView stay server-rendered slots so their vanilla-extract
 * styles are not pulled into this module. Eternity is a separate async chunk.
 */
export function PortfolioCovers({
  designer,
  proview,
}: {
  designer: ReactNode
  proview: ReactNode
}) {
  return (
    <>
      {designer}
      <EternityPortfolioCover />
      {proview}
    </>
  )
}
