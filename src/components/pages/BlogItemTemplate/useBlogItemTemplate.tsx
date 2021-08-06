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
import { ImageType } from '@/types/Image'

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
  const [image] = React.useState<ImageType>({
    url: blogItem?.image?.url ? blogItem.image.url : '/no_image.png',
    width: blogItem?.image?.width ? blogItem.image.width : 750,
    height: blogItem?.image?.height ? blogItem.image.height : 422,
  })
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

  return {
    state: {
      metaData,
      image,
      shareUrl,
    },
  }
}
