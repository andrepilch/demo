import {
  CaseStudyHero,
  CaseStudyPageWrapper,
  CaseStudyOverview,
  CaseStudyCards,
  CaseStudyProcessList,
  CaseStudySection,
  CaseStudyStrategyGoals,
  CaseStudyResults,
  CaseStudyFeatureHighlight,
  CaseStudyImageGallery,
} from '../components'
import {
  heroData,
  overviewData,
  designProcessImages,
  designProcessSection,
  designProcessSteps,
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
} from './data'
import Image from 'next/image'
import * as styles from '../components/case-study.css'
export default function DesignerPage() {
  return (
    <CaseStudyPageWrapper>
      <CaseStudyHero data={heroData} />

      <CaseStudyOverview data={overviewData} />

      <CaseStudyCards section={problemSection} items={painPoints} />

      <CaseStudyStrategyGoals
        section={strategySection}
        items={strategyOutcomes}
      />

      <CaseStudyCards section={principlesSection} items={productPrinciples} />

      <CaseStudySection data={designProcessSection}>
        <CaseStudyProcessList
          items={designProcessSteps}
          images={designProcessImages}
        />
      </CaseStudySection>

      <CaseStudySection data={solutionSection} />

      <CaseStudyFeatureHighlight data={designFeatures} />
      <CaseStudyFeatureHighlight data={multipleBrandSupport} />

      <CaseStudyImageGallery
        section={finalDesignsSection}
        images={finalDesignsImages}
      >
        <div className={styles.imageFull}>
          <Image
            src='/images/projects/designer/wall.gif'
            alt='Wall Designer'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </CaseStudyImageGallery>

      <CaseStudyResults data={resultsData} />
    </CaseStudyPageWrapper>
  )
}
