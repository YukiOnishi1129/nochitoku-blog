/**
 * common/atoms/PageTitle
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
export type PageTitleProps = {
  title: string
}

/**
 * PageTitle
 * @param props PageTitleProps
 * @returns
 */
export const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
  const { title } = props

  return (
    <div className={styles.title}>
      <h2 className={styles.title__content}>{title}</h2>
      <p className={styles.title__border}></p>
    </div>
  )
}
