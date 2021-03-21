/**
 * layouts/BaseTopPageLayout
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'
import { Aside } from '@/components/layouts/Aside'
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
      <div className={styles.divider}>
        <article className={styles.article}>{children}</article>
        <Aside />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
