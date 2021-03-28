/**
 * layouts/BaseLayout
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
import { animateScroll as scroll } from 'react-scroll'
/* components */
import { Presenter } from './Presenter'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  breadName?: string
}

/**
 * container
 * @param props
 */
export const BaseLayout: React.FC<Props> = (props: Props) => {
  const router = useRouter()
  const { children, breadName } = props
  // SearchModal用のstateとfunction
  const [searchText, setSearchText] = React.useState('')
  const [isSearchModalVisible, setIsSearchModalVisible] = React.useState(false)

  /**
   * SearchModalを開く処理
   */
  const handleOpenSearchModal = () => {
    setIsSearchModalVisible(true)
  }

  /**
   * SearchModalを閉じる処理
   */
  const handleCloseSearchModal = () => {
    setIsSearchModalVisible(false)
  }

  /**
   * 検索キーワード変更処理
   * @param e React.ChangeEvent<HTMLInputElement>
   */
  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  /**
   * 検索フォーム キーアップ処理
   * @param e React.KeyboardEvent<HTMLInputElement>
   */
  const onKeyUpSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 検索キーワードがあり、Enterをクリックした場合、検索ページに遷移
    if (e.key === 'Enter' && searchText !== '') {
      router.push({
        pathname: '/search',
        query: { keyword: searchText },
      })
      handleCloseSearchModal()
    }
  }

  /**
   * ページトップに移動する
   */
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Presenter
      breadName={breadName}
      searchText={searchText}
      isSearchModalVisible={isSearchModalVisible}
      scrollToTop={scrollToTop}
      handleOpenSearchModal={handleOpenSearchModal}
      handleCloseSearchModal={handleCloseSearchModal}
      onChangeSearchText={onChangeSearchText}
      onKeyUpSearch={onKeyUpSearch}
    >
      {children}
    </Presenter>
  )
}
