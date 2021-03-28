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
import { SearchModal } from '@/components/modals/SearchModal'
/* types */
import { EventType } from '@/types/event'
/* styles */
import styles from './styles.module.scss'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  breadName?: string
  searchText: string
  isSearchModalVisible: boolean
  handleOpenSearchModal: () => void
  handleCloseSearchModal: () => void
  onChangeSearchText: EventType['onChange']
  onKeyUpSearch: EventType['onkeypress']
  scrollToTop: () => void
}

/**
 * presenter
 * @param props
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const {
    children,
    breadName,
    searchText,
    isSearchModalVisible,
    handleOpenSearchModal,
    handleCloseSearchModal,
    onChangeSearchText,
    onKeyUpSearch,
    scrollToTop,
  } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header handleOpenSearchModal={handleOpenSearchModal} />
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
      {/* 検索モーダル */}
      <SearchModal
        searchText={searchText}
        isSearchModalVisible={isSearchModalVisible}
        handleCloseSearchModal={handleCloseSearchModal}
        onChangeSearchText={onChangeSearchText}
        onKeyUpSearch={onKeyUpSearch}
      />
    </div>
  )
}
