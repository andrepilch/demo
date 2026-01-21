import { Section, Container, Eyebrow, H2 } from "@/components";
import * as styles from "./LeadershipSection.css";

// Diamond sparkle icon component
function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

// Achievement card data
const achievements = [
  {
    highlight: "Led functional & cross-functional product teams",
    text: "of up to 10 members.",
  },
  {
    highlight: "Developed UX strategy and design",
    text: "process from scratch in 4 months.",
  },
  {
    highlight: "Launched a monetization project",
    text: "(2.5 months, 5 teams of up to 12 members).",
  },
  {
    highlight: "Mentored a junior designer",
    text: "to a middle position in 9 months.",
  },
];

// Random stars for the background
function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${2 + Math.random() * 2}s`,
  }));
}

const stars = generateStars(30);

// Shooting stars data
const shootingStars = [
  { top: "15%", left: "20%", delay: "0s" },
  { top: "35%", left: "70%", delay: "2s" },
  { top: "65%", left: "40%", delay: "4s" },
];

export function LeadershipSection() {
  return (
    <Section className={styles.leadershipWrapper}>
      <Container>
        <div className={styles.outerCard}>
          {/* Starfield background */}
          <div className={styles.starfield}>
            {stars.map((star) => (
              <div
                key={star.id}
                className={styles.star}
                style={{
                  top: star.top,
                  left: star.left,
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              />
            ))}
            {shootingStars.map((star, i) => (
              <div
                key={i}
                className={styles.shootingStarLine}
                style={{
                  top: star.top,
                  left: star.left,
                  animationDelay: star.delay,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className={styles.contentWrapper}>
            <div className={styles.headerWrapper}>
              <Eyebrow>Why Me</Eyebrow>
              <H2>Leadership</H2>
              <p className={styles.subtitle}>
                Fostering growth through collaboration, where everyone learns and grows together.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {achievements.map((achievement, index) => (
                <div key={index} className={styles.achievementCard}>
                  <DiamondIcon className={styles.diamondIcon} />
                  <p className={styles.cardText}>
                    <span className={styles.highlight}>{achievement.highlight}</span>{" "}
                    {achievement.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
