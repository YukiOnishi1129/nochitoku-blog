/**
 * pages/ArchiveTemplate
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
  date: string
  breadName: string
}

/**
 * container
 * @param prop
 * @returns
 */
export const ArchiveTemplate: React.FC<Props> = (props: Props) => {
  const { date, breadName } = props
  const { blogList, totalCount } = useBlogState()

  const router = useRouter()

  const metaData: MetaHeadType = {
    title: `「${breadName}」の記事一覧 | ${BASE_TITLE}`,
    description: '', // TODO: 後で入れる
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS', //TODO: keywordは固定？
    image: '', // TODO: 後で入れる
    url: NOCHITOKU_URL + router.asPath,
  }

  return (
    <Presenter
      metaData={metaData}
      date={date}
      blogList={blogList}
      totalCount={totalCount}
      breadName={breadName}
    />
  )
}
