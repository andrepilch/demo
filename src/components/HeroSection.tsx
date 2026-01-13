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
          Hi, I'm André. <br />I design
          <span className={styles.interjection}>
            (and sometimes build)
          </span>{" "}
          innovative mobile & web products
        </h1>

        {/* Sub-headline */}
        {/* <p className={styles.heroSubtitle}>
          I bridge the gap between product vision and engineering reality
        </p> */}

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <Link href="/about" className={styles.btnPrimary}>
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
