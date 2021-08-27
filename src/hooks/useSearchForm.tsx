/**
 * useSearchForm
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'

/**
 * interface
 */
interface HooksParam {
  handleCloseSearchModal?: () => void
}

/**
 * useSearchForm
 * @returns
 */
export const useSearchForm = (param: HooksParam) => {
  /* param */
  const { handleCloseSearchModal } = param
  /* router */
  const router = useRouter()

  /* local */
  const [searchText, setSearchText] = React.useState('')

  /**
   * 検索キーワード変更処理
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const onChangeSearchText = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value)
    },
    []
  )

  /**
   * 検索フォーム キーアップ処理
   * @param {React.KeyboardEvent<HTMLInputElement>} event
   */
  const onKeyUpSearchBlog = React.useCallback(
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

  /**
   * 検索フォーム キーアップ処理 (モーダル)
   * @param {React.KeyboardEvent<HTMLInputElement>} event
   */
  const onKeyUpSearchBlogModal = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      // 検索キーワードがあり、Enterをクリックした場合、検索ページに遷移
      if (event.key === 'Enter' && searchText !== '') {
        router.push({
          pathname: '/search',
          query: { keyword: searchText },
        })
        if (handleCloseSearchModal) handleCloseSearchModal()
      }
    },
    [router, searchText, handleCloseSearchModal]
  )

  const states = {
    searchText,
  }

  const actions = {
    onChangeSearchText,
    onKeyUpSearchBlog,
    onKeyUpSearchBlogModal,
  }

  return [states, actions] as const
}
