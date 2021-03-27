/**
 * BlogItemTemplate/organisms/TableOfContents
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
export const TitleArea: React.FC<Props> = (props: Props) => {
  const { blogItem } = props

  return <Presenter blogItem={blogItem} />
}
