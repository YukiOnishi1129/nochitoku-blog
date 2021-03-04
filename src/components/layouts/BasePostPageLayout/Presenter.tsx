/**
 * layouts/BasePostPageLayout
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
    <>
      <article css={styles.article}>{children}</article>
      <aside css={styles.aside}></aside>
    </>
  )
}
