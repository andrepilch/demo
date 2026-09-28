import Link from 'next/link'
import { Section, SectionGap } from '@/components/Section'
import { Body, H3, Eyebrow } from '@/components/Text'
import {
  brandBlockFooter,
  brandBlockInner,
  gapVariants,
  sectionContent,
} from '@/components/Section.css'
import {
  heroData as designerHero,
  designerResults,
} from '@/app/work/designer/data'
import { heroData as proviewHero, proviewResults } from '@/app/work/proview/data'
import { buildHeroBackground } from '@/app/work/components/buildHeroBackground'
import type { CaseStudyHeroData, CaseStudyResult } from '@/app/work/components'
import * as heroStyles from '@/app/work/components/case-study.css'
import { EternityPortfolioCover } from './EternityPortfolioCover'
import * as styles from './FeaturedCaseStudies.css'

interface ImagePortfolioProject {
  href: string
  hero: CaseStudyHeroData
  stats: CaseStudyResult[]
}

const imagePortfolioProjects: ImagePortfolioProject[] = [
  {
    href: '/work/designer',
    hero: designerHero,
    stats: designerResults.filter((stat) =>
      ['8M+', '9+Yrs'].includes(stat.value)
    ),
  },
  {
    href: '/work/proview',
    hero: proviewHero,
    stats: proviewResults,
  },
]

const productStatus = {
  released: 'Released',
  unreleased: 'Unreleased',
}

const otherProducts = [
  {
    title: 'Eternity Bible App',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'whcc Multiproduct',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'whcc Wall Designer',
    description: 'A web app for designing and ordering custom wall',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'Dela',
    description: 'Custom dela for whcc products',
    status: productStatus.unreleased,
    visible: false,
  },
  {
    title: 'Crafted Frames iOS App',
    description:
      'Native consumer mobile app with AR view on wall for ordering custom print products',
    status: productStatus.released,
    visible: true,
  },
  {
    title: 'whcc Album Designer',
    description: 'A web app for designing and ordering custom album',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'whcc Product Ordering',
    description: 'A web app for ordering custom loose print and wall products',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'whcc Studio',
    description:
      'A web app for managing photo session galleries and products as well as sharing with clients for approval or buying',
    status: productStatus.released,
    visible: true,
  },
  {
    title: 'whcc Lightroom Integration',
    description:
      'Custom Lightroom integration with customization and checkout flow in partnership with Adobe for whcc products',
    status: productStatus.released,
    visible: true,
  },
  {
    title: 'whcc Checkout',
    description: 'Custom checkout for whcc products',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'Design Depot',
    description: 'Internal tool for managing custom design templates',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'whcc Support App',
    description:
      'A native iOS app for managing and tracking orders and support requests',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'Thirmensio',
    description: 'Mobile native application for managing 3D printing projects',
    status: productStatus.unreleased,
    visible: false,
  },
  {
    title: 'whcc Card Designer',
    description: 'A web app for designing and ordering custom cards',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'whcc iPad Wall Designer',
    description:
      'A native iPad app for designing, selling, and ordering custom wall groupings',
    status: productStatus.released,
    visible: true,
  },
  {
    title: 'Thomson Reuters VR',
    description:
      'Google Cardboard and Samsung Gear VR headset app which was released to the app stores and was also granted design patents in Switzerland and US and used as a promotional tool for the company at various events including Davos World Economic Forum',
    status: productStatus.released,
    visible: true,
  },
  {
    title: 'Thomson Reuters Blacks Law',
    description: 'Proof of concept for TR Blacks Law',
    status: productStatus.unreleased,
    visible: false,
  },
  {
    title: 'Thomson Reuters Clear',
    description: 'Proof of concept for TR clear',
    status: productStatus.unreleased,
    visible: false,
  },
  {
    title: 'Thomson Reuters Convene',
    description: "TR's own conferencing app backend CMS",
    status: productStatus.released,
    visible: true,
  },
  {
    title: 'TR Unbeacon',
    description: 'Customized desktop application for Thomson Reuters',
    status: productStatus.released,
    visible: false,
  },
  {
    title: 'Archimed Ermes',
    description:
      "France's largest media library software that facilitates on-site access to electronic resources and applications offered by institutions",
    status: productStatus.released,
    visible: true,
  },
  {
    title: 'Virtual Cell',
    description: 'A desktop educational computer videogame about cell biology',
    status: productStatus.released,
    visible: true,
  },
]

function ImagePortfolioCover({ href, hero, stats }: ImagePortfolioProject) {
  const background = buildHeroBackground(hero)
  const label = `View ${hero.eyebrow} case study`

  return (
    <Link href={href} className={styles.portfolioCover} aria-label={label}>
      <section
        className={heroStyles.heroSection}
        style={{ backgroundImage: background }}
      >
        <div className={heroStyles.heroContainer}>
          <div className={heroStyles.heroContent}>
            <div className={heroStyles.heroHeadline}>
              <p className={heroStyles.heroEyebrow}>{hero.eyebrow}</p>
              <h2 className={heroStyles.heroTitle}>{hero.title}</h2>
            </div>
            <p className={heroStyles.heroDescription}>{hero.description}</p>
            {stats.length > 0 && (
              <div className={styles.coverStats}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.coverStat}>
                    <span className={styles.coverStatValue}>{stat.value}</span>
                    <span className={styles.coverStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Link>
  )
}

export function FeaturedCaseStudies() {
  const visibleProducts = otherProducts.filter((product) => product.visible)
  const WHCC_DESIGNER_PRODUCTS = 5
  const notVisibleCount =
    otherProducts.length - visibleProducts.length - WHCC_DESIGNER_PRODUCTS

  const [designerProject, proviewProject] = imagePortfolioProjects

  return (
    <>
      <Section gap={SectionGap.md}>
        <Eyebrow>Featured Case Studies</Eyebrow>
      </Section>
      <div className={styles.portfolioCovers}>
        <ImagePortfolioCover {...designerProject} />
        <EternityPortfolioCover />
        <ImagePortfolioCover {...proviewProject} />
      </div>
      <section className={brandBlockFooter}>
        <div className={brandBlockInner}>
          <div className={`${sectionContent} ${gapVariants.md}`}>
            <Eyebrow color='onAccent'>Other Products</Eyebrow>
            <div className={styles.otherProductsSection}>
              {visibleProducts.map((product, i) => (
                <div key={i} className={styles.otherProductItem}>
                  <H3 color='onAccent'>{product.title}</H3>
                  {product.description && (
                    <Body className={styles.otherProductBodyOnBrand}>
                      {product.description}
                    </Body>
                  )}
                </div>
              ))}
              <H3 color='onAccent'>{`and ${notVisibleCount} more...`}</H3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
