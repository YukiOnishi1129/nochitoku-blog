/**
 * pages/Error404Template
 * @package Component
 */
import React from 'react'
/* components */
import { BaseFixedPageLayout } from '@/components/layouts/BaseFixedPageLayout'
import { SearchInputForm } from '@/components/common/molecules/SearchInputForm'
import { CategoryArea } from '@/components/layouts/Aside/CategoryArea'
import { ArchiveArea } from '@/components/layouts/Aside/ArchiveArea'
/* hooks */
import { useError404Template } from './useError404Template'
/* styles */
import styles from './styles.module.scss'

/**
 * Error404Template
 * @returns
 */
export const Error404Template: React.FC = () => {
  /* hooks */
  const { state, action } = useError404Template()

  return (
    <BaseFixedPageLayout metaData={state.metaData}>
      <div className={styles.error}>
        <div className={styles.title}>
          <h1>NOT FOUND</h1>
          <h2>お探しのページは見つかりませんでした。</h2>
        </div>
        {/* 検索フォーム */}
        <div className={styles.search}>
          <SearchInputForm
            text={state.searchText}
            placeholder="検索"
            onChange={action.onChange}
            onKeyUp={action.onSearchKeyUp}
          />
        </div>
        {/* 検索フォーム　レスポンシブ */}
        <div className={styles.search__responsive}>
          <SearchInputForm
            text={state.searchText}
            placeholder="検索"
            size={32}
            onChange={action.onChange}
            onKeyUp={action.onSearchKeyUp}
          />
        </div>
        {/* 検索フォーム　sp */}
        <div className={styles.search__sp}>
          <SearchInputForm
            text={state.searchText}
            placeholder="検索"
            size={24}
            onChange={action.onChange}
            onKeyUp={action.onSearchKeyUp}
          />
        </div>
        {/* カテゴリーエリア */}
        <div className={styles.category}>
          <CategoryArea />
        </div>
        {/* アーカイブエリア */}
        <div className={styles.archive}>
          <ArchiveArea />
        </div>
      </div>
    </BaseFixedPageLayout>
  )
}
