/**
 * pages/BlogItemTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/metaHead'
import { BlogItemType, TableOfContentType } from '@/types/blog'
import { ImageType } from '@/types/image'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
  highlightedBody: string
  tableOfContents: TableOfContentType[]
  draftKey?: string
}

/**
 * container
 * @param props Props
 * @returns
 */
export const BlogItemTemplate: React.FC<Props> = (props: Props) => {
  const { blogItem, highlightedBody, tableOfContents, draftKey } = props

  const propsImage: ImageType = {
    url: blogItem?.image?.url ? blogItem.image.url : '/no_image.png',
    width: blogItem?.image?.width ? blogItem.image.width : 750,
    height: blogItem?.image?.height ? blogItem.image.height : 422,
  }

  const router = useRouter()
  let shareUrl = NOCHITOKU_URL
  if (router?.asPath && typeof router.asPath === 'string') {
    shareUrl = NOCHITOKU_URL + router.asPath
  }

  const metaData: MetaHeadType = {
    title: `${blogItem.title} | ${BASE_TITLE}`,
    description: '',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS', //TODO: keywordは固定？
    image: blogItem.image.url,
    url: NOCHITOKU_URL + router.asPath,
  }

  return (
    <Presenter
      metaData={metaData}
      blogItem={blogItem}
      image={propsImage}
      highlightedBody={highlightedBody}
      tableOfContents={tableOfContents}
      shareUrl={shareUrl}
      draftKey={draftKey}
    />
  )
}
