/**
 * layouts/Aside/BasicAsidePartsArea
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
 * BasicAsidePartsArea
 * @param {Props} props
 * @returns
 */
export const BasicAsidePartsArea: React.FC<Props> = (props: Props) => {
  /* props */
  const { children, title } = props

  return (
    <>
      <h6 className={styles.title}>{title}</h6>
      <div className={styles.bar} />
      <div className={styles.field}>{children}</div>
    </>
  )
}
