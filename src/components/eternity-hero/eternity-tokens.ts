/** Ported from andrepilch/eternity `src/app/about/hero/HeroStage.tsx` (production bundle). */

export const ETERNITY_BRAND = '#380BBB'
export const ETERNITY_BRAND_SECONDARY = '#ECEFFC'
export const ETERNITY_BRAND_FADED = '#9AA3E8'

export const HERO_COPY = {
  tagline: 'Open the Bible more often',
  subtitle:
    "Pick up reading or listening where you left off in any Bible on any device without distractions and untracked. It's just you and the Bible.",
  cta: 'View Case Study',
}

/** Floating book particle colors from Eternity demo pairings */
export const BOOK_COLORS = [
  '#D4C4AD',
  '#7B6B8E',
  '#aab88f',
  '#6B9E9A',
  '#9E6B6B',
  '#7B9E7B',
  '#5E7A9A',
] as const

export const PHONE_WIDTH = 390
export const PHONE_HEIGHT = 844

export const CAMERA_FROM = {
  focusX: 0.22,
  focusY: 0.72,
  rotX: 52,
  rotY: -18,
  rotZ: -28,
  zoom: 2.15,
}

export const CAMERA_TO = {
  focusX: 0.5,
  focusY: 0.5,
  rotX: 0,
  rotY: 0,
  rotZ: 0,
  zoom: 1,
}

export const INTRO_MS = {
  phone: 2600,
  copyDelay: 250,
  copyDuration: 850,
  complete: 3700,
}

export interface Pairing {
  id: number
  name: string
  color: string
  bookId: string
  chapter: number
  verse: number
  translationLabel: string
  demoDate: string
}

export const DEMO_PAIRINGS: Pairing[] = [
  {
    id: 1343748,
    name: 'Sermon',
    color: '#D4C4AD',
    bookId: 'JHN',
    chapter: 6,
    verse: 68,
    translationLabel: 'ESV',
    demoDate: '2 minutes ago',
  },
  {
    id: 8687657,
    name: 'Family',
    color: '#7B6B8E',
    bookId: 'GEN',
    chapter: 9,
    verse: 16,
    translationLabel: 'NKJV',
    demoDate: '14 hours ago',
  },
  {
    id: 3,
    name: 'Psalms',
    color: '#aab88f',
    bookId: 'PSA',
    chapter: 23,
    verse: 4,
    translationLabel: 'ESV',
    demoDate: '1 day ago',
  },
  {
    id: 1,
    name: 'Kids',
    color: '#6B9E9A',
    bookId: 'LUK',
    chapter: 1,
    verse: 16,
    translationLabel: 'NLT',
    demoDate: '3 days ago',
  },
  {
    id: 2,
    name: 'Personal',
    color: '#9E6B6B',
    bookId: 'LUK',
    chapter: 1,
    verse: 17,
    translationLabel: 'NTLS',
    demoDate: '7 days ago',
  },
  {
    id: 3483415,
    name: 'Study',
    color: '#7B9E7B',
    bookId: 'EXO',
    chapter: 3,
    verse: 14,
    translationLabel: 'BSB',
    demoDate: '14 days ago',
  },
  {
    id: 5501953,
    name: 'Prophets',
    color: '#5E7A9A',
    bookId: 'MIC',
    chapter: 3,
    verse: 1,
    translationLabel: 'NASB',
    demoDate: '31 days ago',
  },
]
