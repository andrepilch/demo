import { H1, LinkButton, ButtonGroup } from "@/components";
import * as styles from "./HeroSection.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        {/* Headline */}
        <H1 color="onAccent" className={styles.heroTitle}>
          I design
          <span className={styles.interjection}>
            {" "}(and sometimes build)
          </span>{" "}
          innovative mobile & web products
        </H1>

        {/* CTA Buttons */}
        <ButtonGroup className={styles.ctaButtons}>
          <LinkButton href="/about" variant="primary">
            Learn More
          </LinkButton>
        </ButtonGroup>
      </div>
    </section>
  );
}
