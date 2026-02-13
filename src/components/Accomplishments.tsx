import { Eyebrow } from './Text'
import * as styles from './Accomplishments.css'

const accomplishments = [
  'Published app to Play Store and App Store',
  'Design Patent (US & Switzerland)',
  'Featured in Behance Showcase',
]

export function Accomplishments() {
  return (
    <div className={styles.block}>
      <Eyebrow color='accent'>Accomplishments</Eyebrow>
      <ul className={styles.list}>
        {accomplishments.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
