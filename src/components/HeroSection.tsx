import Link from "next/link";
import * as styles from "./HeroSection.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        {/* Eyebrow */}
        {/* <p className={styles.eyebrow}>Hi, I'm André</p> */}

        {/* Headline */}
        <h1 className={styles.heroTitle}>
          I design
          <span className={styles.interjection}>
            (and sometimes build)
          </span>{" "}
          innovative mobile & web products
        </h1>

        {/* Sub-headline */}
        {/* <p className={styles.heroSubtitle}>
          I look for ways to differentiate products in favor of users to achieve
          growth in competitive markets
        </p> */}

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <Link href="/about" className={styles.btnPrimary}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
