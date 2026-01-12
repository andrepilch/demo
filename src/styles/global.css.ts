import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Base HTML styles
globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  backgroundColor: vars.color.bgPrimary,
  color: vars.color.textPrimary,
  fontFeatureSettings: '"ss01", "ss02", "cv01"',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  transition: 'background-color 0.3s ease, color 0.3s ease',
});

globalStyle('::selection', {
  backgroundColor: 'rgba(14, 165, 233, 0.3)',
  color: vars.color.textPrimary,
});

// Custom scrollbar
globalStyle('::-webkit-scrollbar', {
  width: '8px',
});

globalStyle('::-webkit-scrollbar-track', {
  background: vars.color.bgPrimary,
});

globalStyle('::-webkit-scrollbar-thumb', {
  background: vars.color.border,
  borderRadius: '4px',
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  background: vars.color.borderLight,
});

// Reset some defaults
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  font: 'inherit',
  color: 'inherit',
});

globalStyle('ul, ol', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  margin: 0,
});
