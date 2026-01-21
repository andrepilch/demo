import * as styles from "./PhilosophyMasonry.css";

// ============================================
// Types
// ============================================

export interface PhilosophyItem {
  title: string;
  description: string;
  quote?: string;
  attribution?: string;
  category?: string;
}

interface PhilosophyCardProps {
  item: PhilosophyItem;
  index: number;
}

interface PhilosophyMasonryProps {
  items: PhilosophyItem[];
  className?: string;
}

// ============================================
// PhilosophyCard Component
// ============================================

export function PhilosophyCard({ item, index }: PhilosophyCardProps) {
  const delayClass = styles.cardDelays[index % styles.cardDelays.length];

  return (
    <article className={`${styles.philosophyCard} ${delayClass}`}>
      <div className={styles.cardContent}>
        {item.category && (
          <span className={styles.categoryTag}>{item.category}</span>
        )}
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDescription}>{item.description}</p>
        {item.quote && (
          <blockquote className={styles.cardQuote}>
            {item.quote}
            {item.attribution && (
              <cite className={styles.quoteAttribution}>
                — {item.attribution}
              </cite>
            )}
          </blockquote>
        )}
      </div>
    </article>
  );
}

// ============================================
// PhilosophyMasonry Component
// ============================================

export function PhilosophyMasonry({ items, className }: PhilosophyMasonryProps) {
  const classNames = [styles.masonryGrid, className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      {items.map((item, index) => (
        <PhilosophyCard key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}
