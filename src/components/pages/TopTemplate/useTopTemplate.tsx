/**
 * useTopTemplate
 * @package Hooks
 */
import React from 'react'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE, BLOG_SHOW_COUNT } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/MetaHead'

/**
 * useTopTemplate
 * @returns
 */
export const useTopTemplate = () => {
  /* context */
  const { blogList, totalCount } = useBlogState()
  /* local */
  const [metaData] = React.useState<MetaHeadType>({
    title: BASE_TITLE,
    description:
      'のちのち役に立つITエンジニアの技術ブログ。React, Next.jsをはじめとしたフロントエンドのスキルや、AWS, Node.js, ReactNativeなど幅広いITスキルのノウハウを発信しています。',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL,
  })

  const states = {
    blogList,
    totalCount,
    metaData,
    BLOG_SHOW_COUNT,
  }

  return [states] as const
}
