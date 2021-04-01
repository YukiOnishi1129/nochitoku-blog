/**
 * pages/CategoryTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/metaHead'

/**
 * props
 */
type Props = {
  categoryId: string
  breadName: string
}

/**
 * container
 * @param prop
 * @returns
 */
export const CategoryTemplate: React.FC<Props> = (props: Props) => {
  const { categoryId, breadName } = props
  const { blogList, totalCount } = useBlogState()

  const router = useRouter()

  const metaData: MetaHeadType = {
    title: `「${breadName}」の記事一覧 | ${BASE_TITLE}`,
    description:
      'のちのち役に立つITエンジニアの技術ブログ。React, Next.jsをはじめとしたフロントエンドのスキルや、AWS, Node.js, ReactNativeなど幅広いITスキルのノウハウを発信しています。',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL + router.asPath,
  }

  return (
    <Presenter
      metaData={metaData}
      categoryId={categoryId}
      blogList={blogList}
      totalCount={totalCount}
      breadName={breadName}
    />
  )
}
