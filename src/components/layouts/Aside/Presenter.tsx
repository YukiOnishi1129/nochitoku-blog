/**
 * layouts/Aside
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { SearchInputForm } from '@/components/common/molcules/SearchInputForm'
import { ProfileArea } from '@/components/layouts/Aside/ProfileArea'
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
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { searchText, onChange, onKeyUp } = props

  return (
    <aside className={styles.aside}>
      {/* 検索フォーム */}
      <SearchInputForm
        text={searchText}
        placeholder="検索"
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      {/* プロフィールエリア */}
      <div className={styles.parts}>
        <ProfileArea />
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
