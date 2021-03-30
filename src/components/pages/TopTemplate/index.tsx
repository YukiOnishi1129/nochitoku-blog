/**
 * pages/TopTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/metaHead'

/**
 * container
 * @param prop
 * @returns
 */
export const TopTemplate: React.FC = () => {
  const { blogList, totalCount } = useBlogState()

  const metaData: MetaHeadType = {
    title: BASE_TITLE,
    description: '', // TODO: description考える
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS', //TODO: keywordは固定？
    image: '', // TODO: 後で入れる
    url: NOCHITOKU_URL,
  }

  return (
    <Presenter
      metaData={metaData}
      blogList={blogList}
      totalCount={totalCount}
    />
  )
}
