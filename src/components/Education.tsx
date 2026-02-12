import { Eyebrow } from './Text'
import * as styles from './Accomplishments.css'

const education = ['B.F.A Art & Design with Emphasis in Graphic Design']

export function Education() {
  return (
    <div className={styles.block}>
      <Eyebrow>Education</Eyebrow>
      <ul className={styles.list}>
        {education.map((item, i) => (
          <li key={i}>{item}
          <li> Minnesota State University Moorhead</li>
          </li>
        ))}
      </ul>
    </div>
  )
}
