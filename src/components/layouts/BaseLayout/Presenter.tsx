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
import { MenuModal } from '@/components/modals/MenuModal'
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
  isMenuModalVisible: boolean
  handleOpenSearchModal: () => void
  handleCloseSearchModal: () => void
  handleOpenMenuModal: () => void
  handleCloseMenuModal: () => void
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
    isMenuModalVisible,
    handleOpenSearchModal,
    handleCloseSearchModal,
    handleOpenMenuModal,
    handleCloseMenuModal,
    onChangeSearchText,
    onKeyUpSearch,
    scrollToTop,
  } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header
          handleOpenSearchModal={handleOpenSearchModal}
          handleOpenMenuModal={handleOpenMenuModal}
        />
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
      {/* メニューモーダル */}
      <MenuModal
        isMenuModalVisible={isMenuModalVisible}
        handleCloseMenuModal={handleCloseMenuModal}
      />
    </div>
  )
}
