import { globalStyle } from '@vanilla-extract/css'

// Base HTML styles
globalStyle('html', {
  scrollBehavior: 'smooth',
  height: '100%',
})

globalStyle('body', {
  margin: 0,
  // Background and color are set on the theme wrapper in ThemeProvider
  // since the body is outside the theme scope and can't access CSS variables
  backgroundColor: '#ffffff', // Dark fallback
  color: '#0a0a0f', // Light text fallback
  fontFeatureSettings: '"ss01", "ss02", "cv01"',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  minHeight: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

globalStyle('::selection', {
  backgroundColor: 'rgba(14, 165, 233, 0.3)',
  color: 'inherit',
})

// Reset some defaults
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  font: 'inherit',
  color: 'inherit',
})

globalStyle('ul, ol', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  margin: 0,
})

// Fancy text wrapping for better typography
globalStyle('h1, h2, h3, h4, h5, h6', {
  textWrap: 'balance', // Balanced line lengths for headings
})

globalStyle('p, li, blockquote, figcaption, dd, dt, label, span', {
  textWrap: 'pretty', // Prevents orphans and awkward breaks in body text
})
