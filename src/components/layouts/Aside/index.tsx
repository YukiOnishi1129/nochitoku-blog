/**
 * layouts/Aside/
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'

/**
 * container
 * @returns
 */
export const Aside: React.FC = () => {
  const router = useRouter()
  const [searchText, setSearchText] = React.useState('')

  /**
   * 検索キーワード変更処理
   * @param e React.ChangeEvent<HTMLInputElement>
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  /**
   * 検索フォーム キーアップ処理
   * @param e React.KeyboardEvent<HTMLInputElement>
   */
  const onSearchKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 検索キーワードがあり、Enterをクリックした場合、検索ページに遷移
    if (e.key === 'Enter' && searchText !== '') {
      router.push({
        pathname: '/search',
        query: { keyword: searchText },
      })
    }
  }
  return (
    <Presenter
      searchText={searchText}
      onChange={onChange}
      onKeyUp={onSearchKeyUp}
    />
  )
}
