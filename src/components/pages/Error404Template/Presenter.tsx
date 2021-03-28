/**
 * pages/Error404Template
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BaseFixedPageLayout } from '@/components/layouts/BaseFixedPageLayout'
import { SearchInputForm } from '@/components/common/molcules/SearchInputForm'
import { CategoryArea } from '@/components/layouts/Aside/CategoryArea'
import { ArchiveArea } from '@/components/layouts/Aside/ArchiveArea'
/* types */
import { EventType } from '@/types/event'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  searchText: string
  onChange: EventType['onChange']
  onKeyUp?: EventType['onkeypress']
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { searchText, onChange, onKeyUp } = props

  return (
    <BaseFixedPageLayout>
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
            onChange={onChange}
            onKeyUp={onKeyUp}
          />
        </div>
        {/* 検索フォーム　レスポンシブ */}
        <div className={styles.search__responsive}>
          <SearchInputForm
            text={searchText}
            placeholder="検索"
            size={32}
            onChange={onChange}
            onKeyUp={onKeyUp}
          />
        </div>
        {/* 検索フォーム　sp */}
        <div className={styles.search__sp}>
          <SearchInputForm
            text={searchText}
            placeholder="検索"
            size={24}
            onChange={onChange}
            onKeyUp={onKeyUp}
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
