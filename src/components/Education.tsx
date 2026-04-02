import { Eyebrow, BodySmall } from './Text'
import * as styles from './Accomplishments.css'

const education = ['B.F.A Art & Design']

export function Education() {
  return (
    <div className={styles.block}>
      <Eyebrow color='accent'>Education</Eyebrow>
      <ul className={styles.list}>
        {education.map((item, i) => (
          <li key={i}>
            {item}
            <br />
            Emphasis in Graphic Design
            <br />
            MSUM
          </li>
        ))}
      </ul>
      <BodySmall>
        Featured in Behance Student Showcase, The Advocate (MSUM), and Arts &
        Humanities News (MSUM)
      </BodySmall>
    </div>
  )
}
