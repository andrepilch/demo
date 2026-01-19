import {
  Container,
  SectionContent,
  SectionHeader,
  Grid,
  Eyebrow,
  H2,
  StatNumber,
  H3,
  Body,
} from "@/components";
import * as styles from "./BigNumbers.css";

const bigNumbers = [
  {
    value: "26%",
    label: "AOV Increase",
    description: "vs. alternative solutions",
  },
  {
    value: "1.44x",
    label: "YoY Growth",
    description: "vs. alternative solutions",
  },
  {
    value: "2hrs",
    label: "Weekly Time Saved",
    description: "By eliminating manual tasks",
  },
];

export function BigNumbers() {
  return (
    <Container as="section" size="large" className={styles.section}>
      <div className={styles.whiteWrapper}>
        <SectionContent>
          <SectionHeader align="left">
            <Eyebrow>Impact By The Numbers</Eyebrow>
            <H2>Designing for Business Outcomes</H2>
          </SectionHeader>

          <Grid cols={3}>
            {bigNumbers.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <StatNumber gradient="accent">{stat.value}</StatNumber>
                <H3 color="secondary">{stat.label}</H3>
                <Body color="muted">{stat.description}</Body>
              </div>
            ))}
          </Grid>
        </SectionContent>
      </div>
    </Container>
  );
}
