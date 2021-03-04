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
      <div css={styles.headerTop}></div>
      <div css={styles.headerMain}></div>
    </div>
  )
}
