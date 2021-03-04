/**
 * layouts/Footer
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* styles */
import { styles } from './style'

/**
 * presenter
 */
export const Presenter: React.FC = () => {
  return (
    <div css={styles.container}>
      <ul css={styles.lists}>
        <Link href="/">
          <li css={styles.list}>HOME</li>
        </Link>
        <li css={styles.after}>|</li>
        <Link href="/term">
          <li css={styles.list}>利用規約</li>
        </Link>
        <li css={styles.after}>|</li>
        <Link href="/policy">
          <li css={styles.list}>プライバシーポリシー</li>
        </Link>
      </ul>
      {/* SNSエリア */}
      <div css={styles.sns}></div>

      {/* copyright */}
      <p css={styles.copy}>
        © &nbsp;<span>2021 NOCHITOKU.</span>
      </p>
    </div>
  )
}
