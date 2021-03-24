/**
 * pages/BlogItemTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* types */
import { BlogItemType } from '@/types/blog'

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
export const BlogItemTemplate: React.FC<Props> = (props: Props) => {
  const { blogItem } = props
  const imageUrl = !!blogItem?.image ? blogItem.image.url : '/no_image.png'

  return <Presenter blogItem={blogItem} imageUrl={imageUrl} />
}
