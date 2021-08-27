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
import { useMetaData } from '@/hooks/useMetaData'
import { useSearchForm } from '@/hooks/useSearchForm'
/* styles */
import styles from './styles.module.scss'

/**
 * Error404Template
 * @returns
 */
export const Error404Template: React.FC = () => {
  /* hooks */
  // const [states, actions] = useError404Template()
  const [{ metaData }] = useMetaData({ errorFlg: true })
  const [
    { searchText },
    { onChangeSearchText, onKeyUpSearchBlog },
  ] = useSearchForm({})

  return (
    <BaseFixedPageLayout metaData={metaData}>
      <div className={styles.error}>
        <div className={styles.title}>
          <h1>NOT FOUND</h1>
          <h2>お探しのページは見つかりませんでした。</h2>
        </div>
        {/* 検索フォーム */}
        <div className={styles.search}>
          <SearchInputForm
            text={searchText}
            placeholder="検索"
            onChange={onChangeSearchText}
            onKeyUp={onKeyUpSearchBlog}
          />
        </div>
        {/* 検索フォーム　レスポンシブ */}
        <div className={styles.search__responsive}>
          <SearchInputForm
            text={searchText}
            placeholder="検索"
            size={32}
            onChange={onChangeSearchText}
            onKeyUp={onKeyUpSearchBlog}
          />
        </div>
        {/* 検索フォーム　sp */}
        <div className={styles.search__sp}>
          <SearchInputForm
            text={searchText}
            placeholder="検索"
            size={24}
            onChange={onChangeSearchText}
            onKeyUp={onKeyUpSearchBlog}
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
