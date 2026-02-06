import { ThemeToggle } from './ThemeToggle'
import * as styles from './Footer.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ThemeToggle />
        <p className={styles.copyright}>
          ©2009–{currentYear} André Pilch. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
