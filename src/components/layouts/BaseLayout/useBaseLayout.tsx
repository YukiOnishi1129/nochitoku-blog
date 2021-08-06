/**
 * useBaseLayout
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
import { animateScroll as scroll } from 'react-scroll'

/**
 * useBaseLayout
 * @returns
 */
export const useBaseLayout = () => {
  /* router */
  const router = useRouter()

  /* local */
  // SearchModal用のstate
  const [searchText, setSearchText] = React.useState('')
  const [isSearchModalVisible, setIsSearchModalVisible] = React.useState(false)
  // MenuModal用のstate
  const [isMenuModalVisible, setIsMenuModalVisible] = React.useState(false)

  /**
   * SearchModalを開く処理
   */
  const handleOpenSearchModal = React.useCallback(() => {
    setIsSearchModalVisible(true)
  }, [])

  /**
   * SearchModalを閉じる処理
   */
  const handleCloseSearchModal = React.useCallback(() => {
    setIsSearchModalVisible(false)
  }, [])

  /**
   * SearchModalを開く処理
   */
  const handleOpenMenuModal = React.useCallback(() => {
    setIsMenuModalVisible(true)
  }, [])

  /**
   * SearchModalを閉じる処理
   */
  const handleCloseMenuModal = React.useCallback(() => {
    setIsMenuModalVisible(false)
  }, [])

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
  const onKeyUpSearch = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      // 検索キーワードがあり、Enterをクリックした場合、検索ページに遷移
      if (event.key === 'Enter' && searchText !== '') {
        router.push({
          pathname: '/search',
          query: { keyword: searchText },
        })
        handleCloseSearchModal()
      }
    },
    [router, searchText, handleCloseSearchModal]
  )

  /**
   * ページトップに移動する
   */
  const scrollToTop = React.useCallback(() => {
    scroll.scrollToTop()
  }, [])

  return {
    state: {
      searchText,
      isSearchModalVisible,
      isMenuModalVisible,
    },
    action: {
      handleOpenSearchModal,
      handleCloseSearchModal,
      handleOpenMenuModal,
      handleCloseMenuModal,
      onChangeSearchText,
      onKeyUpSearch,
      scrollToTop,
    },
  }
}
