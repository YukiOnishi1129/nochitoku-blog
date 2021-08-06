/**
 * usePageTemplate
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/MetaHead'

/**
 * usePageTemplate
 * @returns
 */
export const usePageTemplate = () => {
  /* router */
  const router = useRouter()
  /* context */
  const { blogList, totalCount } = useBlogState()

  const [metaData] = React.useState<MetaHeadType>({
    title: BASE_TITLE,
    description:
      'のちのち役に立つITエンジニアの技術ブログ。React, Next.jsをはじめとしたフロントエンドのスキルや、AWS, Node.js, ReactNativeなど幅広いITスキルのノウハウを発信しています。',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL + router.asPath,
  })

  return {
    state: {
      metaData,
      blogList,
      totalCount,
      BLOG_SHOW_COUNT,
    },
  }
}
