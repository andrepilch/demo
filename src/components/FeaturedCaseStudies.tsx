import Link from 'next/link'
import Image from 'next/image'
import { Section, SectionGap, H2, Body, H3, Eyebrow } from '@/components'
import {
  brandBlockFooter,
  brandBlockInner,
  gapVariants,
  sectionContent,
} from '@/components/Section.css'
import * as styles from './FeaturedCaseStudies.css'
import { eternityResults } from '@/app/work/eternity-bible/data'
import { proviewResults } from '@/app/work/proview/data'

const caseStudies = [
  {
    title: 'whcc Designer',
    outcome:
      'React multi-brand web app for whcc and its partners used by hundreds of thousands of users that continues to scale  ',
    description:
      'Building user confidence and saving time with a versatile designer',
    tags: ['Product Design', 'React', 'Design Systems'],
    href: '/work/designer',
    image: '/images/projects/designer/wall_designer_cover.jpg',
    stats: [
      // { value: '26%', label: 'AOV Increase' },
      { value: '6.5M+', label: 'Sessions served' },
      // { value: '3M', label: 'Sessions served' },
      { value: '9+Yrs', label: 'Sustained product growth' },
    ],
  },
  {
    title: 'Eternity Bible',
    outcome:
      'Full-stack React/NextJS application built and shipped solo to app stores in under 1 year',
    description: 'Challenging the norms in a saturated market',
    tags: ['NextJS', 'TypeScript', 'Full-Stack'],
    href: '/work/eternity-bible',
    image: '/images/projects/eternity/eternity_hand.jpg',
    stats: eternityResults,
  },
  {
    title: 'ProView',
    outcome:
      'Proview from Thomson Reuters is an e-reader application for large volume law and accounting titles with complex deep search capabilities.',
    description: 'Powering up professional research',
    tags: ['Product Designer', 'Mobile UI/UX Designer'],
    href: '/work/proview',
    image: '/images/projects/proview/proview_cover.jpg',
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
  // {
  //   title: 'Thomson Reuters Proview',
  //   description:
  //     'Cross-platform e-reader application for Law & Accounting volumes with advanced search functionality',
  //   status: productStatus.released,
  //   visible: false,
  // },
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

export function FeaturedCaseStudies() {
  const visibleProducts = otherProducts.filter((product) => product.visible)
  const WHCC_DESIGNER_PRODUCTS = 5
  const notVisibleCount =
    otherProducts.length - visibleProducts.length - WHCC_DESIGNER_PRODUCTS
  return (
    <>
      <Section gap={SectionGap.lg}>
        <Eyebrow>Featured Case Studies</Eyebrow>
        {caseStudies.map((study, i) => (
          <Link key={i} href={study.href} className={styles.caseStudyCard}>
            <div className={styles.caseStudyImage}>
              <Image
                src={study.image}
                alt={study.title}
                fill
                className={styles.caseStudyImageInner}
              />
            </div>
            <div className={styles.caseStudyContent}>
              <div className={styles.caseStudyTitleContainer}>
                <H2 className={styles.caseStudyTitle}>{study.title}</H2>
                <Body className={styles.caseStudyDescription}>
                  {study.outcome}
                </Body>
                {/* <Body className={styles.caseStudyOutcome}>{study.outcome}</Body> */}
                {/* Mini Stats */}
              </div>
              {/* <div className={styles.tagList}>
              {study.tags.map((tag, j) => (
                <span key={j} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div> */}
              {study.stats && (
                <div className={styles.caseStudyStats}>
                  {study.stats.map((stat, k) => (
                    <div key={k} className={styles.caseStudyStat}>
                      <span className={styles.caseStudyStatValue}>
                        {stat.value}
                      </span>
                      <span className={styles.caseStudyStatLabel}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </Section>
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
