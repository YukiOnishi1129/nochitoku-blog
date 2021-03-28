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
import { ArrowIcon } from '@/components/common/icons/ArrowIcon'
/* styles */
import styles from './styles.module.scss'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  breadName?: string
  scrollToTop: () => void
}

/**
 * presenter
 * @param props
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { children, breadName, scrollToTop } = props

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
      {/* スクロールトップボタン */}
      <div className={styles.fixButton} onClick={scrollToTop}>
        <ArrowIcon size={70} color="#c8c8c8" />
      </div>
      {/* スクロールトップボタン SP */}
      <div className={styles.fixButton__sp} onClick={scrollToTop}>
        <ArrowIcon size={44} color="#c8c8c8" />
      </div>
    </div>
  )
}
