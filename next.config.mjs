import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Required for GitHub Pages project sites (username.github.io/repo-name)
  // Uncomment and set to your repo name if deploying as a project page:
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
}

export default withVanillaExtract(nextConfig)
