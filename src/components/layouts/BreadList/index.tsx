/**
 * layouts/BreadList
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  breadName: string
}

/**
 * BreadList
 * @param {Props} props
 * @returns
 */
export const BreadList: React.FC<Props> = (props: Props) => {
  /* props */
  const { breadName } = props

  return (
    <div className={styles.bread}>
      <ul className={styles.bread__list}>
        <li className={styles.bread__item}>
          <Link href="/">
            <span className={styles.bread__link}>HOME</span>
          </Link>
        </li>
        <li className={styles.breadName}>{breadName}</li>
      </ul>
    </div>
  )
}
