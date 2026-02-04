import { Section, SectionGap, SectionHeader } from './Section'
import { H2, Body } from './Text'
import * as styles from './Partnerships.css'

const partners: { name: string; svg?: string }[] = [
  { name: 'Samsung', svg: '/partners/samsung-logo.svg' },
  { name: 'Adobe', svg: '/partners/adobe-logo.svg' },
  { name: 'Archimed', svg: '/partners/archimed-logo.svg' },
  { name: 'Thomson Reuters', svg: '/partners/thomson-reuters-logo.svg' },
  { name: 'and more...' },
]

export function Partnerships() {
  return (
    <Section gap={SectionGap.lg} id="partnerships">
      <SectionHeader>
        <H2>Partnerships</H2>
        <Body color="secondary">
          I&apos;ve successfully collaborated with partnerships to create an
          integration, unique products, and proof of concepts to drive growth
          and innovation
        </Body>
      </SectionHeader>
      <div className={styles.grid}>
        {partners.map((partner, i) => (
          <div key={i} className={styles.partnerCard}>
            {partner.svg ? (
              <img
                src={partner.svg}
                alt=""
                className={styles.partnerLogo}
                aria-hidden
              />
            ) : (
              <span className={styles.partnerName}>{partner.name}</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
