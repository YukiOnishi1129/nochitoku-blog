/**
 * useError404Template
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'

/**
 * useError404Template
 * @returns
 */
export const useError404Template = () => {
  /* router */
  const router = useRouter()
  /* local */
  const [searchText, setSearchText] = React.useState('')

  /**
   * 検索キーワード変更処理
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value)
    },
    []
  )

  /**
   * 検索フォーム キーアップ処理
   * @param {React.KeyboardEvent<HTMLInputElement>} event
   */
  const onSearchKeyUp = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      // 検索キーワードがあり、Enterをクリックした場合、検索ページに遷移
      if (event.key === 'Enter' && searchText !== '') {
        router.push({
          pathname: '/search',
          query: { keyword: searchText },
        })
      }
    },
    [router, searchText]
  )

  const states = {
    searchText,
  }

  const actions = {
    onChange,
    onSearchKeyUp,
  }

  return [states, actions] as const
}
