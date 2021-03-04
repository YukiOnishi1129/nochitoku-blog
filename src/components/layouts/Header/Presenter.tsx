/**
 * layouts/Header
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
      <div css={styles.top} />
      <div css={styles.main}>
        <Link href="/">
          <div css={styles.title}>
            <h1>NOCHITOKU</h1>
            <p>ITエンジニアの技術ブログ</p>
          </div>
        </Link>

        <div css={styles.sns}>SNSエリア</div>
      </div>
    </div>
  )
}
