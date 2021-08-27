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
import { useSearchForm } from '@/hooks/useSearchForm'
/* styles */
import styles from './styles.module.scss'

/**
 * Aside
 * @returns
 */
export const Aside: React.FC = () => {
  /* hooks */
  const [
    { searchText },
    { onChangeSearchText, onKeyUpSearchBlog },
  ] = useSearchForm({})

  return (
    <aside className={styles.aside}>
      {/* 検索フォーム */}
      <div className={styles.search}>
        <SearchInputForm
          text={searchText}
          placeholder="検索"
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearchBlog}
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
          text={searchText}
          placeholder="検索"
          size={32}
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearchBlog}
        />
      </div>

      {/* 検索フォーム レスポンシブ */}
      <div className={styles.search__sp}>
        <SearchInputForm
          text={searchText}
          placeholder="検索"
          size={20}
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearchBlog}
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
