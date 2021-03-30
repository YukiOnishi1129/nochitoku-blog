/**
 * pages/Error404Template
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/metaHead'

/**
 * container
 * @returns
 */
export const Error404Template: React.FC = () => {
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

  const metaData: MetaHeadType = {
    title: `NOT FOUND | ${BASE_TITLE}`,
    description: '', // TODO: 後で入れる
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS', //TODO: keywordは固定？
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL,
  }

  return (
    <Presenter
      metaData={metaData}
      searchText={searchText}
      onChange={onChange}
      onKeyUp={onSearchKeyUp}
    />
  )
}
