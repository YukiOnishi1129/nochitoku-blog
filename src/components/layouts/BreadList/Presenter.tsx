/**
 * layouts/BreadList
 * PresentationalComponent
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

export const Presenter: React.FC<Props> = (props: Props) => {
  const { breadName } = props

  return (
    <div className={styles.bread}>
      <ul className={styles.bread__list}>
        <li className={styles.bread__item}>
          <Link href="/">
            <span className={styles.bread__link}>HOME</span>
          </Link>
        </li>
        <li>{breadName}</li>
      </ul>
    </div>
  )
}
