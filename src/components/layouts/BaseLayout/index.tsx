/**
 * layouts/BaseLayout
 * @package Component
 */
import React from 'react'
/* components */
import { MetaHead } from '@/components/layouts/MetaHead'
import { Header } from '@/components/layouts/Header'
import { BreadList } from '@/components/layouts/BreadList'
import { Footer } from '@/components/layouts/Footer'
import { ArrowIcon } from '@/components/common/icons/ArrowIcon'
import { SearchModal } from '@/components/modals/SearchModal'
import { MenuModal } from '@/components/modals/MenuModal'
/* hooks */
import { useBaseLayout } from './useBaseLayout'
/* types */
import { MetaHeadType } from '@/types/MetaHead'
/* styles */
import styles from './styles.module.scss'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  metaData: MetaHeadType
  breadName?: string
}

/**
 * BaseLayout
 * @param {Props} props
 */
export const BaseLayout: React.FC<Props> = (props: Props) => {
  /* props */
  const { children, metaData, breadName } = props
  /* hooks */
  const { state, action } = useBaseLayout()

  return (
    <>
      <MetaHead metaData={metaData} />
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header
            handleOpenSearchModal={action.handleOpenSearchModal}
            handleOpenMenuModal={action.handleOpenMenuModal}
          />
          <div className={styles.headerEmpty} />
        </div>
        {!!breadName && <BreadList breadName={breadName} />}

        <div className={styles.divider}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
        {/* スクロールトップボタン */}
        <div className={styles.fixButton} onClick={action.scrollToTop}>
          <ArrowIcon size={70} color="#c8c8c8" />
        </div>
        {/* スクロールトップボタン SP */}
        <div className={styles.fixButton__sp} onClick={action.scrollToTop}>
          <ArrowIcon size={44} color="#c8c8c8" />
        </div>
        {/* 検索モーダル */}
        <SearchModal
          searchText={state.searchText}
          isSearchModalVisible={state.isSearchModalVisible}
          handleCloseSearchModal={action.handleCloseSearchModal}
          onChangeSearchText={action.onChangeSearchText}
          onKeyUpSearch={action.onKeyUpSearch}
        />
        {/* メニューモーダル */}
        <MenuModal
          isMenuModalVisible={state.isMenuModalVisible}
          handleCloseMenuModal={action.handleCloseMenuModal}
        />
      </div>
    </>
  )
}
