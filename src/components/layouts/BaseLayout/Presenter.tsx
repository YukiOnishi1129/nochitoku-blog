/**
 * layouts/BaseLayout
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* styles */
import { styles } from './style'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
}

/**
 * presenter
 * @param props
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { children } = props

  return (
    <div css={styles.wrapper}>
      <div css={styles.header}></div>
      <div css={styles.divider}>{children}</div>
      <div css={styles.footer}></div>
    </div>
  )
}
