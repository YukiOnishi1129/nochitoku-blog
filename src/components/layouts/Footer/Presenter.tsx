/**
 * layouts/Footer
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
      <ul className={styles.lists}>
        <Link href={NAVIGATION_LINK.TOP}>
          <li className={styles.list}>HOME</li>
        </Link>
        <li className={styles.after}>|</li>
        <Link href={NAVIGATION_LINK.POLICY}>
          <li className={styles.list}>プライバシーポリシー</li>
        </Link>
        <li className={styles.after}>|</li>
        <Link href={NAVIGATION_LINK.TERM}>
          <li className={styles.list}>免責事項</li>
        </Link>
      </ul>

      {/* copyright */}
      <p className={styles.copy}>
        © &nbsp;<span>2021 NOCHITOKU.</span>
      </p>
    </div>
  )
}
