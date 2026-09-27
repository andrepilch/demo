import {
  CaseStudyHero,
  CaseStudyPageWrapper,
  CaseStudyOverview,
  CaseStudyCards,
  CaseStudySection,
  CaseStudyStrategyGoals,
  CaseStudyResults,
  CaseStudyFeatureHighlight,
  CaseStudyImageGallery,
} from '../components'
import {
  heroData,
  overviewData,
  finalDesignsSection,
  finalDesignsImages,
  painPoints,
  problemSection,
  resultsData,
  solutionSection,
  strategyOutcomes,
  strategySection,
  multipleBrandSupport,
  designFeatures,
  principlesSection,
  productPrinciples,
  conclusionSection,
} from './data'
import Image from 'next/image'
import * as styles from '../components/case-study.css'

export default function DesignerPage() {
  return (
    <CaseStudyPageWrapper>
      <CaseStudyHero data={heroData} />

      <CaseStudyResults data={resultsData} />

      <CaseStudyOverview data={overviewData} />

      <CaseStudyCards section={problemSection} items={painPoints} />

      <CaseStudyStrategyGoals
        section={strategySection}
        items={strategyOutcomes}
      />

      <CaseStudyCards section={principlesSection} items={productPrinciples} />

      {/* <CaseStudySection data={designProcessSection}>
        <CaseStudyProcessList
          items={designProcessSteps}
          images={designProcessImages}
        />
      </CaseStudySection> */}

      <CaseStudySection data={solutionSection} />

      <CaseStudyFeatureHighlight data={designFeatures} />
      <CaseStudyFeatureHighlight data={multipleBrandSupport} />

      {/* Full-viewport product demo — editors / wall designer */}
      <div
        className={styles.fullViewportMedia}
        aria-label='WHCC Wall Designer product demo'
      >
        <Image
          src='/images/projects/designer/wall.gif'
          alt='Wall Designer'
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
      </div>

      <CaseStudyImageGallery
        section={finalDesignsSection}
        images={finalDesignsImages}
      />

      <CaseStudySection data={conclusionSection} />
    </CaseStudyPageWrapper>
  )
}
