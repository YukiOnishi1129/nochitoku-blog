/**
 * useBlogItemResponsive
 * @package Hooks
 */
import React from 'react'
/* types */
import { BlogItemType } from '@/types/Blog'
import { ImageType } from '@/types/Image'

/**
 * interface
 */
interface HooksParam {
  blogItem: BlogItemType
}

/**
 * useBlogItemResponsive
 * @param {HooksParam} param
 * @returns
 */
export const useBlogItemResponsive = (param: HooksParam) => {
  /* param */
  const { blogItem } = param
  /* local */
  const [image] = React.useState<ImageType>({
    url: blogItem?.image?.url ? blogItem.image.url : '/no_image.png',
    width: blogItem?.image?.width ? blogItem.image.width : 750,
    height: blogItem?.image?.height ? blogItem.image.height : 422,
  })

  const states = {
    image,
  }

  return [states] as const
}
