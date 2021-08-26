/**
 * useProfileTemplate
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/MetaHead'
import { ProfileType } from '@/types/Profile'
import { ImageType } from '@/types/Image'

/**
 * interface
 */
interface HooksParam {
  profile: ProfileType
}

/**
 * useProfileTemplate
 * @param {HooksParam} params
 * @returns
 */
export const useProfileTemplate = (params: HooksParam) => {
  /* params */
  const { profile } = params
  /* router */
  const router = useRouter()
  /* local */
  const [image] = React.useState<ImageType>({
    url: profile.articleImage.url,
    width: profile.articleImage.width,
    height: profile.articleImage.height,
  })
  const [metaData] = React.useState<MetaHeadType>({
    title: `プロフィール | ${BASE_TITLE}`,
    description: profile.description,
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: image.url,
    url: NOCHITOKU_URL + router.asPath,
  })

  let shareUrl = NOCHITOKU_URL
  if (router?.asPath && typeof router.asPath === 'string') {
    shareUrl = NOCHITOKU_URL + router.asPath
  }

  const states = {
    image,
    shareUrl,
    metaData,
  }

  return [states]
}
