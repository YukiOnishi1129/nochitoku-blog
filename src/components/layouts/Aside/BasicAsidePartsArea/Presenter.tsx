/**
 * layouts/Aside/BasicAsidePartsArea
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  children: React.ReactNode
  title: string
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { children, title } = props

  return (
    <>
      <h6 className={styles.title}>{title}</h6>
      <div className={styles.bar} />
      <div className={styles.field}>{children}</div>
    </>
  )
}
