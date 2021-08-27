/**
 * useBlogItemTemplate
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/MetaHead'
import { BlogItemType } from '@/types/Blog'

/**
 * interface
 */
interface HooksParam {
  blogItem: BlogItemType
}

/**
 * useBlogItemTemplate
 * @param {HooksParam} param
 * @returns
 */
export const useBlogItemTemplate = (param: HooksParam) => {
  /* param */
  const { blogItem } = param
  /* router */
  const router = useRouter()
  /* local */
  const [metaData] = React.useState<MetaHeadType>({
    title: `${blogItem.title} | ${BASE_TITLE}`,
    description: blogItem.description,
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: blogItem.image.url,
    url: NOCHITOKU_URL + router.asPath,
  })

  let shareUrl = NOCHITOKU_URL
  if (router?.asPath && typeof router.asPath === 'string') {
    shareUrl = NOCHITOKU_URL + router.asPath
  }

  const states = {
    metaData,
    shareUrl,
  }

  return [states] as const
}
