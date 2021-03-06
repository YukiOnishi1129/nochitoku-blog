/**
 * common/molecules/BlogItem
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* types */
import { BlogItemType } from '@/types/blog'
import { ImageType } from '@/types/image'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
}

/**
 * container
 * @param props Props
 * @returns
 */
export const BlogItem: React.FC<Props> = (props: Props) => {
  const { blogItem } = props

  const propsImage: ImageType = {
    url: blogItem?.image?.url ? blogItem.image.url : '/no_image.png',
    width: blogItem?.image?.width ? blogItem.image.width : 750,
    height: blogItem?.image?.height ? blogItem.image.height : 422,
  }

  return <Presenter blogItem={blogItem} image={propsImage} />
}
