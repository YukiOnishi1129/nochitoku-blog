/**
 * layouts/Header
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* styles */
import { styles } from './style'

/**
 * presenter
 */
export const Presenter: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.top}></div>
      <div css={styles.main}>
        <div css={styles.title}>
          <h1>NOCHITOKU</h1>
          <p>ITエンジニアの技術ブログ</p>
        </div>
        <div css={styles.sns}>SNSエリア</div>
      </div>
    </div>
  )
}
