/**
 * pages/BlogItemTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* types */
import { BlogItemType, TableOfContentType } from '@/types/blog'
import { ImageType } from '@/types/image'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
  highlightedBody: string
  tableOfContents: TableOfContentType[]
}

/**
 * container
 * @param props Props
 * @returns
 */
export const BlogItemTemplate: React.FC<Props> = (props: Props) => {
  const { blogItem, highlightedBody, tableOfContents } = props

  const propsImage: ImageType = {
    url: blogItem?.image?.url ? blogItem.image.url : '/no_image.png',
    width: blogItem?.image?.width ? blogItem.image.width : 750,
    height: blogItem?.image?.height ? blogItem.image.height : 422,
  }

  return (
    <Presenter
      blogItem={blogItem}
      image={propsImage}
      highlightedBody={highlightedBody}
      tableOfContents={tableOfContents}
    />
  )
}
