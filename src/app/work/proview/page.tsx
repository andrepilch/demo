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
  designProcessSection,
  designProcessSteps,
  designProcessImages,
  solutionSection,
  featureNotesThatNeverFade,
  featureAuthorityIntegration,
  featureNavigationSearch,
  featureReadingExperience,
  finalDesignsSection,
  finalDesignsImages,
  resultsData,
  conclusionSection,
  conclusionBenefits,
} from './data'

export default function ProViewCaseStudy() {
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

      <CaseStudySection data={designProcessSection}>
        <CaseStudyProcessList
          items={designProcessSteps}
          images={designProcessImages}
        />
      </CaseStudySection>

      <CaseStudySection data={solutionSection} />

      <CaseStudyFeatureHighlight data={featureNotesThatNeverFade} />
      <CaseStudyFeatureHighlight data={featureAuthorityIntegration} />
      <CaseStudyFeatureHighlight data={featureNavigationSearch} />
      <CaseStudyFeatureHighlight data={featureReadingExperience} />

      <CaseStudyImageGallery
        section={finalDesignsSection}
        images={finalDesignsImages}
      />

      <CaseStudyCards section={conclusionSection} items={conclusionBenefits} />
    </CaseStudyPageWrapper>
  )
}
