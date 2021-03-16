/**
 * pages/TopTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { BlogItem } from '@/components/common/molcules/BlogItem'
import { Pagination } from '@/components/common/molcules/Pagination'
/* types */
import { BlogItemType } from '@/types/blogItem'

/**
 * props
 */
type Props = {
  blogList: BlogItemType[]
  totalCount: number
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogList, totalCount } = props

  return (
    <BasePostPageLayout>
      {/* ブログ記事一覧表示 */}
      {blogList.map((blogItem, index) => (
        <BlogItem key={`${blogItem.id}_${index}`} blogItem={blogItem} />
      ))}

      {/* ページネーション */}
      <Pagination totalCount={totalCount} />
    </BasePostPageLayout>
  )
}
