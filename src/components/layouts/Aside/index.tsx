/**
 * layouts/Aside/
 * @package Component
 */
import React from 'react'
/* components */
import { SearchInputForm } from '@/components/common/molecules/SearchInputForm'
import { ProfileArea } from '@/components/layouts/Aside/ProfileArea'
import { ProfileAreaResponsive } from '@/components/layouts/Aside/ProfileAreaResponsive'
import { CategoryArea } from '@/components/layouts/Aside/CategoryArea'
import { ArchiveArea } from '@/components/layouts/Aside/ArchiveArea'
/* hooks */
import { useAside } from './useAside'
/* styles */
import styles from './styles.module.scss'

/**
 * Aside
 * @returns
 */
export const Aside: React.FC = () => {
  /* hooks */
  const { state, action } = useAside()

  return (
    <aside className={styles.aside}>
      {/* 検索フォーム */}
      <div className={styles.search}>
        <SearchInputForm
          text={state.searchText}
          placeholder="検索"
          onChange={action.onChange}
          onKeyUp={action.onSearchKeyUp}
        />
      </div>

      {/* プロフィールエリア */}
      <div className={styles.profile}>
        <ProfileArea />
      </div>

      {/* プロフィールエリア レスポンシブ */}
      <div className={styles.profile__responsive}>
        <ProfileAreaResponsive />
      </div>

      {/* 検索フォーム レスポンシブ */}
      <div className={styles.search__responsive}>
        <SearchInputForm
          text={state.searchText}
          placeholder="検索"
          size={32}
          onChange={action.onChange}
          onKeyUp={action.onSearchKeyUp}
        />
      </div>

      {/* 検索フォーム レスポンシブ */}
      <div className={styles.search__sp}>
        <SearchInputForm
          text={state.searchText}
          placeholder="検索"
          size={20}
          onChange={action.onChange}
          onKeyUp={action.onSearchKeyUp}
        />
      </div>

      {/* カテゴリーエリア */}
      <div className={styles.parts}>
        <CategoryArea />
      </div>
      {/* アーカイブエリア */}
      <div className={styles.parts}>
        <ArchiveArea />
      </div>
    </aside>
  )
}
