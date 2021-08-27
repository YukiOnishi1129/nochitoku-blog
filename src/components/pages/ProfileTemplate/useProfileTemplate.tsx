/**
 * useProfileTemplate
 * @package Hooks
 */
import React from 'react'
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
  /* local */
  const [image] = React.useState<ImageType>({
    url: profile.articleImage.url,
    width: profile.articleImage.width,
    height: profile.articleImage.height,
  })

  const states = {
    image,
  }

  return [states]
}
