/**
 * useSearchTemplate
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/metaHead'

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

  /**
   * 動的検索キーワード更新処理
   * 更新時にブログリストの検索も同時実行
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)

    const searchBlogList = blogList.filter((blog) => {
      // キーワード部分一致
      return blog.title.indexOf(event.target.value) > -1
    })
    setShowBlogList(searchBlogList)
  }

  const metaData: MetaHeadType = {
    title: `${breadName} | ${BASE_TITLE}`,
    description:
      'のちのち役に立つITエンジニアの技術ブログ。React, Next.jsをはじめとしたフロントエンドのスキルや、AWS, Node.js, ReactNativeなど幅広いITスキルのノウハウを発信しています。',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL + router.pathname,
  }

  React.useEffect(() => {
    // 画面遷移時のみurlのgetで渡ってきたキーワードで検索
    const searchBlogList = blogList.filter((blog) => {
      return blog.title.indexOf(queryText) > -1
    })
    setShowBlogList(searchBlogList)
  }, [queryText, blogList])

  return {
    state: {
      searchText,
      showBlogList,
      metaData,
    },
    action: {
      onChange,
    },
  }
}
