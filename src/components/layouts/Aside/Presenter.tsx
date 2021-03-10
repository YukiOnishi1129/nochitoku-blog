/**
 * layouts/Aside
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { SearchInputForm } from '@/components/common/molcules/SearchInputForm'
/* styles */
import styles from './styles.module.scss'

/**
 * presenter
 * @returns
 */
export const Presenter: React.FC = () => {
  return (
    <aside className={styles.aside}>
      <SearchInputForm
        text=""
        placeholder="入力してください"
        onClick={() => {
          console.log('テスト')
        }}
      />
    </aside>
  )
}
