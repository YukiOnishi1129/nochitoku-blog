/**
 * layouts/Aside
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { SearchInputForm } from '@/components/common/molcules/SearchInputForm'
/* types */
import { EventType } from '@/types/event'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  onSearchKeyUp: EventType['onkeypress']
}

/**
 * presenter
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { onSearchKeyUp } = props
  return (
    <aside className={styles.aside}>
      <SearchInputForm
        text=""
        placeholder="入力してください"
        onKeyUp={onSearchKeyUp}
      />
    </aside>
  )
}
