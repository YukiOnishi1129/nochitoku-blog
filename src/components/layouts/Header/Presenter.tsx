/**
 * layouts/Header
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* styles */
import styles from './styles.module.scss'

/**
 * presenter
 */
export const Presenter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top} />
      <div className={styles.main}>
        <Link href="/">
          <div className={styles.title}>
            <h1>NOCHITOKU</h1>
            <p>ITエンジニアの技術ブログ</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
