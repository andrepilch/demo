import type {
  CaseStudyHeroData,
  CaseStudyOverviewData,
  CaseStudySectionData,
  CaseStudyStrategyOutcome,
  CaseStudyResult,
  CaseStudyFeatureHighlightData,
  CaseStudyGalleryImage,
  CaseStudyResultsData,
} from '@/app/work/components'
import type { CardItem } from '@/app/work/components'

export const designerResults: CaseStudyResult[] = [
  {
    value: '26%',
    label: 'AOV Increase',
    description: 'vs. alternative solutions',
  },
  {
    value: '1.44x',
    label: 'YoY Growth',
    description: 'vs. alternative solutions',
  },
  { value: '6.5M+', label: 'Sessions served', description: 'and counting' },
  {
    value: '10yrs+',
    label: 'Sustained growth',
    description: 'continuing to scale',
  },
]

const projectMeta = {
  role: ['Product Designer', 'Design System', 'Research', 'Frontend Developer'],
  platforms: ['Desktop Web', 'Mobile Web'],
  devices: ['Desktop', 'Mobile'],
  tech: [
    'Figma',
    'Cursor AI',
    'Styled Components',
    'React',
    'Github',
    'Typescript',
    'Storybook',
    'Chromatic',
    'Zeroheight',
    'Pixate',
    'Origami Studio',
    'Framer',
    'InVision',
  ],
  year: '2016–Present',
  status: 'Live',
  targetAudience: ['Photographers', 'Designers', 'Photographer Clients'],
}

export const heroData: CaseStudyHeroData = {
  eyebrow: 'WHCC Designer',
  title: 'Building user confidence and saving time with a versatile designer',
  description:
    'React multi-brand web app for whcc and its partners used by hundreds of thousands of users that continues to scale',
  ctaLabel: 'Visit WHCC Designer',
  ctaUrl: 'https://www.whcc.com/ordering/',
  accentColor: '#0e5fd3',
  heroImage: '/images/projects/designer/wall_designer_cover.jpg',
}

export const overviewData: CaseStudyOverviewData = {
  eyebrow: 'Overview',
  title: 'WHCC Designer',
  description: `WHCC endeavored to create a new era of design and ordering tools for photo products. The purpose of creating this new Designer was to supply creatives in the Photography industry with professional designs and simple customization to enable them to stay focused on their expertise of taking photos while still receiving the beautiful products their clients expect and are proud to share.

This allowed clients to free up countless hours that they would have otherwise spent in Photoshop and clunky ordering software with little return. It also provided the opportunity for Photographers to share the design process with their clients and save even more time. We knew we could achieve this by combining professional designs with quality printing and easy to use software in the browser.`,
  projectMeta,
}

export const problemSection: CaseStudySectionData = {
  eyebrow: 'The Challenge',
  title: 'Problem Identification',
  description:
    'Ordering products was previously done through a clunky java desktop app from the early 2000s. This tool was limiting to our business and also to our clients. It was also a third party tool which made it hard to differentiate ourselves from competitors. To solve these problems, we needed to build an easy to use tool on modern web technologies that can be expanded to support multiple partner and internal brands, endless product variations, and always produce quality design results for clients who likely are not designers themselves.',
}

export const painPoints: CardItem[] = [
  'Our business relied on a clunky Java desktop app from the early 2000s',
  'Third party tool was limiting to our business and our clients',
  'Designs had to be made manually in Photoshop',
  'Third party tool made it hard to differentiate from competitors',
  'Could not support multiple partner and internal brands',
  'Clients who are not designers need quality design results',
  'Needed a user manual and support to order products',
  'Ordering was time consuming and frustrating',
  'Proofing products with clients was manual and time consuming',
].map((title) => ({ title }))

export const strategySection: CaseStudySectionData = {
  eyebrow: 'Goals & Vision',
  title: 'Strategic Direction',
  description: `Integrate custom card, album, and wall layout design with ordering in a theme-able tool that can be plugged into our own and our partner websites. The solution had to work for everyone from consumers to professionals and provide trusted design and printing outcomes every time.`,
}

export const strategyOutcomes: CaseStudyStrategyOutcome[] = [
  {
    principle:
      "Invite folks who've never printed all the way to people who print things every day",
    outcome: "Users don't have to be print experts",
  },
  {
    principle:
      'Build a standalone tool that is entirely self-operable within any branded flow',
    outcome:
      'Can integrate with first and third party brands to attract more print',
  },
  {
    principle: 'Invest in mobile flows to meet customers on any device',
    outcome: 'Provides access to print in more places',
  },
  {
    principle:
      'Establish systems that remove repetitive work and enhance reusability',
    outcome: 'Enables continuous improvement',
  },
  {
    principle: 'Support the needs of our enterprise accounts',
    outcome: 'Reaches a wider audience',
  },
  {
    principle:
      'Give everyone access to beautiful custom design through built-in templates and layouts',
    outcome: "Users don't have to be design experts",
  },
  {
    principle:
      'Create efficiency for the masses by relying on integrated power tools to serve power users',
    outcome: "Users and development aren't slowed down by extra features",
  },
  {
    principle: 'Always be accurate and honest about products',
    outcome: 'Builds confidence and trust that causes clients to return',
  },
  {
    principle: 'Combine design with ordering for more products',
    outcome: 'Offers more value and confidence than any other ordering tool',
  },
]

export const desiredResponseSection: CaseStudySectionData = {
  eyebrow: 'Desired Response',
  title: 'Success Metric',
  description: `Adoption of this new software for design and ordering was the key metric which was expected to convert into more product sales. This meant the tool had to integrate into workflows and add more value than traditional design and ordering patterns.`,
}

export const whatItIsntSection: CaseStudySectionData = {
  eyebrow: 'Focus',
  title: "What It Isn't",
  description: '',
}

export const principlesSection: CaseStudySectionData = {
  eyebrow: 'Foundation',
  title: 'Methodologies',
}

export const productPrinciples: CardItem[] = [
  {
    title: 'Research Driven',
    description:
      'I conducted many forms of user research to discover personas, understand comptetition, and identify user needs and pain points in order to create solutions that meet their needs.',
  },
  {
    title: 'Continuous Iteration',
    description:
      'I iterated on the design based on user feedback and metrics to improve the tool. Proposing new features and solutions.',
  },
  {
    title: 'Collaborative Design',
    description:
      'I fostered cross-team collaboration to build the best possible product for users.',
  },
  {
    title: 'Design for Outcomes',
    description:
      'I design for metrics that matter to the business: conversion rates, AOV, retention, and long-term product sustainability.',
  },
  {
    title: 'Process Oriented',
    description:
      'My design process includes research, ideation, prototyping, system building,testing, iteration, release, and scaling.',
  },
  {
    title: 'Design System First',
    description:
      'I created the first design system in the company which was used to create consistent designs and experiences.',
  },
]

export const designProcessSection: CaseStudySectionData = {
  eyebrow: 'Process',
  title: 'Design Process',
  description: '',
}

export const designProcessImages: CaseStudyGalleryImage[] = []

export const designProcessSteps: CardItem[] = [
  { title: 'Research & Persona Discovery', number: 1 },
  { title: 'Competitive Analysis', number: 2 },
  { title: 'Ideate & Explore', number: 3 },
  { title: 'Prototype & Design', number: 4 },
  { title: 'Test & Iterate', number: 5 },
  { title: 'Release & Iterate', number: 6 },
  { title: 'Build a System', number: 7 },
  { title: 'Repeat & Scale', number: 8 },
]

export const solutionSection: CaseStudySectionData = {
  eyebrow: 'Solution',
  title: 'The Designer',
  description: '',
}

export const designFeatures: CaseStudyFeatureHighlightData = {
  eyebrow: 'Interaction Design',
  title: 'Built-in Design Features',
  description:
    'The designer can be trusted to generate beautiful designs every time.',
  bullets: [
    'Professional design templates easy to customize',
    'Smart handles to resize layouts',
    'Balances starter layouts with easy customization',
  ],
  imageSrc: '/images/projects/designer/collage_handles.gif',
  imageAlt: 'Collage Handles',
  imagePosition: 'right',
}

export const multipleBrandSupport: CaseStudyFeatureHighlightData = {
  eyebrow: 'Design System',
  title: 'Theming & Branding',
  description: 'The Designer can be branded for multiple brands and partners.',
  bullets: [
    'Support for multiple brands and partners',
    'Custom brand can dynamically be passed in to the designer for white labeling',
  ],
  imageSrc: '/images/projects/designer/theming.gif',
  imageAlt: 'Theming',
  imagePosition: 'left',
}

export const finalDesignsSection: CaseStudySectionData = {
  eyebrow: 'Final Designs',
  title: 'The Shipped Product',
  description:
    'The Designer is a versatile tool that can be used to design and order a variety of products.',
}

export const finalDesignsImages: CaseStudyGalleryImage[] = [
  {
    src: '/images/projects/designer/wall_designer_cover.jpg',
    alt: 'Collage Handles',
  },
  {
    src: '/images/projects/designer/editor_variations.gif',
    alt: 'Designer Variations',
  },
]

export const resultsData: CaseStudyResultsData = {
  eyebrow: 'Impact',
  // title: 'Project Results',
  description: `Adoption of the Designer has continued to grow year over year. The success of this tool from the beginning set off the plan for creating more apps just like this one and saved the card product line from being discontinued.`,
  results: designerResults,
}

export const conclusionSection: CaseStudySectionData = {
  eyebrow: 'Conclusion',
  title: 'A Huge Success',
  description:
    'Customers praised the tool for its ease of use, big time savings, and quick learning curve — many calling it a life changer and deciding to offer products again that were previously not worth their effort. Tradeshow conversations echoed this: when asked why they choose us over other labs, customers pointed to our software — with the designer as the key differentiator.',
}
