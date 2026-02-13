import {
  CaseStudyPageWrapper,
  CaseStudyHero,
  CaseStudyOverview,
  CaseStudySection,
  CaseStudyCards,
  CaseStudyProcessList,
  CaseStudyStrategyGoals,
  CaseStudyFeatureHighlight,
  CaseStudyImageGallery,
  CaseStudyResults,
} from '@/app/work/components'
import {
  heroData,
  overviewData,
  problemSection,
  painPoints,
  strategySection,
  strategyOutcomes,
  principlesSection,
  productPrinciples,
  designProcessSection,
  designProcessSteps,
  solutionSection,
  featureMultipleBibles,
  featureSearchByMeaning,
  featureOneTapAccess,
  finalDesignsSection,
  finalDesignsImages,
  resultsData,
  featureMultipleLanguages,
  designProcessImages,
} from './data'

export default function EternityCaseStudy() {
  return (
    <CaseStudyPageWrapper>
      <CaseStudyHero data={heroData} />

      <CaseStudyOverview data={overviewData} />

      <CaseStudyCards section={problemSection} items={painPoints} />

      <CaseStudyStrategyGoals section={strategySection} items={strategyOutcomes} />

      <CaseStudyCards section={principlesSection} items={productPrinciples} />

      <CaseStudyImageGallery
        section={designProcessSection}
        images={designProcessImages}
      >
        <CaseStudyProcessList items={designProcessSteps} />
      </CaseStudyImageGallery>

      <CaseStudySection data={solutionSection} />

      <CaseStudyFeatureHighlight data={featureMultipleBibles} />
      <CaseStudyFeatureHighlight data={featureOneTapAccess} />
      <CaseStudyFeatureHighlight data={featureSearchByMeaning} />
      <CaseStudyFeatureHighlight data={featureMultipleLanguages} />

      <CaseStudyImageGallery
        section={finalDesignsSection}
        images={finalDesignsImages}
      />

      {/* <CaseStudyCards
        section={conclusionSection}
        items={digitalBibleBenefits}
      /> */}
      <CaseStudyResults data={resultsData} />
    </CaseStudyPageWrapper>
  )
}