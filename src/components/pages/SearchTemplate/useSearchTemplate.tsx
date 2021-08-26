/**
 * useSearchTemplate
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* logics */
import { searchBlogListLogic } from '@/logic/BlogLogic'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/MetaHead'

/**
 * useSearchTemplate
 * @param {string} breadName
 * @returns
 */
export const useSearchTemplate = (breadName: string) => {
  /* router */
  const router = useRouter()
  /* contexts */
  const { blogList } = useBlogState()

  // 初期検索キーワード
  let queryText = ''
  if (router?.query?.keyword && typeof router.query.keyword === 'string') {
    queryText = router.query.keyword
  }

  // 検索ページで動的に変更する検索キーワード
  const [searchText, setSearchText] = React.useState(queryText)
  // 検索キーワードにHitしたブログ記事一覧
  const [showBlogList, setShowBlogList] = React.useState(blogList)
  const [metaData] = React.useState<MetaHeadType>({
    title: `${breadName} | ${BASE_TITLE}`,
    description:
      'のちのち役に立つITエンジニアの技術ブログ。React, Next.jsをはじめとしたフロントエンドのスキルや、AWS, Node.js, ReactNativeなど幅広いITスキルのノウハウを発信しています。',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL + router.pathname,
  })

  /**
   * 動的検索キーワード更新処理
   * 更新時にブログリストの検索も同時実行
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value)
      setShowBlogList(searchBlogListLogic(blogList, event.target.value))
    },
    [blogList]
  )

  React.useEffect(() => {
    // 画面遷移時のみurlのgetで渡ってきたキーワードで検索
    setShowBlogList(searchBlogListLogic(blogList, queryText))
  }, [queryText, blogList])

  const states = {
    searchText,
    showBlogList,
    metaData,
  }

  const actions = {
    onChange,
  }

  return [states, actions] as const
}
