import { Eyebrow } from './Text'
import * as styles from './Accomplishments.css'

const accomplishments = [
  'Creator of eternitybible.app, published to Google Play Store and Apple App Store',
  'Design patents in US and Switzerland for display screen with animated GUI',
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
