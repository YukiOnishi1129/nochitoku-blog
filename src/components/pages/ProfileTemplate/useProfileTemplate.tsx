/**
 * useProfileTemplate
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* constants */
import { NOCHITOKU_URL } from '@/constants/config'
/* types */
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

  let shareUrl = NOCHITOKU_URL
  if (router?.asPath && typeof router.asPath === 'string') {
    shareUrl = NOCHITOKU_URL + router.asPath
  }

  const states = {
    image,
    shareUrl,
  }

  return [states]
}
