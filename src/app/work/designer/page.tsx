// import { CaseStudyFeatureHighlight, CaseStudyImageGallery } from '../components'
import {
  CaseStudyHero,
  CaseStudyPageWrapper,
  //   CaseStudyOverview,
  //   CaseStudyCards,
  //   CaseStudyProcessList,
  //   CaseStudySection,
  //   CaseStudyStrategyGoals,
  //   CaseStudyResults,
} from '../components'
import {
  heroData,
  //   overviewData,
  //   designProcessImages,
  //   designProcessSection,
  //   designProcessSteps,
  //   featureMultipleBibles,
  //   featureOneTapAccess,
  //   featureSearchByMeaning,
  //   featureMultipleLanguages,
  //   finalDesignsSection,
  //   finalDesignsImages,
  //   painPoints,
  //   principlesSection,
  //   problemSection,
  //   productPrinciples,
  //   resultsData,
  //   solutionSection,
  //   strategyOutcomes,
  //   strategySection,
} from './data'
export default function DesignerPage() {
  return (
    <CaseStudyPageWrapper>
      <CaseStudyHero data={heroData} />

      {/* <CaseStudyOverview data={overviewData} /> */}

      {/* <CaseStudyCards section={problemSection} items={painPoints} />

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

      <CaseStudyFeatureHighlight data={featureMultipleBibles} />
      <CaseStudyFeatureHighlight data={featureOneTapAccess} />
      <CaseStudyFeatureHighlight data={featureSearchByMeaning} />
      <CaseStudyFeatureHighlight data={featureMultipleLanguages} />

      <CaseStudyImageGallery
        section={finalDesignsSection}
        images={finalDesignsImages}
      />

      <CaseStudyResults data={resultsData} /> */}
    </CaseStudyPageWrapper>
  )
}
