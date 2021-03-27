/**
 * layouts/BaseLayout
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Header } from '@/components/layouts/Header'
import { BreadList } from '@/components/layouts/BreadList'
import { Footer } from '@/components/layouts/Footer'
/* styles */
import styles from './styles.module.scss'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  breadName?: string
}

/**
 * presenter
 * @param props
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { children, breadName } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
        <div className={styles.headerEmpty} />
      </div>
      {!!breadName && <BreadList breadName={breadName} />}

      <div className={styles.divider}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
