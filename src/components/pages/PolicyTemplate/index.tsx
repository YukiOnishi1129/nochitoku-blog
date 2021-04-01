/**
 * pages/PolicyTemplate
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

/**
 * props
 */
type Props = {
  title: string
  highlightedBody: string
}

/**
 * container
 * @param props Props
 * @returns
 */
export const PolicyTemplate: React.FC<Props> = (props: Props) => {
  const { title, highlightedBody } = props
  const router = useRouter()

  const metaData: MetaHeadType = {
    title: `${title} | ${BASE_TITLE}`,
    description:
      'NOCHITOKU(https://nochitoku-it.com/)（以下、「当サイト」とします。）における利用規約は、下記の通りです。',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL + router.asPath,
  }

  return (
    <Presenter
      metaData={metaData}
      title={title}
      highlightedBody={highlightedBody}
    />
  )
}
