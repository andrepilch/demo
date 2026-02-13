import {
  CaseStudyPageWrapper,
  CaseStudyHero,
  CaseStudyOverview,
  CaseStudySection,
  CaseStudyCards,
  CaseStudyCardsGrid,
  CaseStudyStrategyGoals,
  CaseStudyFeatureHighlight,
  CaseStudyImageBlock,
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
  audienceSection,
  audienceCards,
  whatItIsntSection,
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
} from './data'

export default function EternityCaseStudy() {
  return (
    <CaseStudyPageWrapper>
      <CaseStudyHero data={heroData} />

      <CaseStudyOverview data={overviewData} />

      <CaseStudyCards section={problemSection} items={painPoints} />

      <CaseStudyStrategyGoals section={strategySection} items={strategyOutcomes} />

      <CaseStudyCards section={audienceSection} items={audienceCards} />

      <CaseStudySection data={whatItIsntSection} />

      <CaseStudyCards section={principlesSection} items={productPrinciples} />

      <CaseStudySection data={designProcessSection}>
        <CaseStudyCardsGrid items={designProcessSteps} />
        <CaseStudyImageBlock
          src="/images/projects/eternity/eterntiy_wireframes.png"
          alt="Design wireframes"
          marginTop="3rem"
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

      {/* <CaseStudyCards
        section={conclusionSection}
        items={digitalBibleBenefits}
      /> */}
      <CaseStudyResults data={resultsData} />
    </CaseStudyPageWrapper>
  )
}