/**
 * layouts/BaseLayout
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'
/* styles */
import styles from './styles.module.scss'

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
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
        <div className={styles.headerEmpty} />
      </div>
      <div className={styles.bread}>
        <ul className={styles.bread__list}>
          <li className={styles.bread__item}>
            <Link href="/">
              <span className={styles.bread__link}>HOME</span>
            </Link>
          </li>
          <li>IT</li>
        </ul>
      </div>
      <div className={styles.divider}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
