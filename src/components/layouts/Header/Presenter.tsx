/**
 * layouts/Header
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'
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
        <div className={styles.link}>
          <Link href="/">
            <h2>ホーム</h2>
          </Link>
          <Link href="/">
            <h2>このブログについて</h2>
          </Link>
          <Link href={NAVIGATION_LINK.PROFILE}>
            <h2>プロフィール</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}
