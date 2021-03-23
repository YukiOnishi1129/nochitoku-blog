/**
 * layouts/Footer
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
      <ul className={styles.lists}>
        <Link href="/">
          <li className={styles.list}>HOME</li>
        </Link>
        <li className={styles.after}>|</li>
        <Link href="/term">
          <li className={styles.list}>利用規約</li>
        </Link>
        <li className={styles.after}>|</li>
        <Link href="/policy">
          <li className={styles.list}>プライバシーポリシー</li>
        </Link>
      </ul>
      {/* SNSエリア */}
      {/* <ul className={styles.sns}></ul> */}

      {/* copyright */}
      <p className={styles.copy}>
        © &nbsp;<span>2021 NOCHITOKU.</span>
      </p>
    </div>
  )
}
