/**
 * pages/CategoryTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { BlogItem } from '@/components/common/molcules/BlogItem'
import { Pagination } from '@/components/common/molcules/Pagination'
/* constants */
import { blogShowCount } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/blog'

/**
 * props
 */
type Props = {
  date: string
  blogList: BlogItemType[]
  totalCount: number
  breadName: string
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { date, blogList, totalCount, breadName } = props

  return (
    <BasePostPageLayout breadName={breadName}>
      {/* ページタイトル */}
      <PageTitle title={`${breadName}の記事一覧`} />
      {/* ブログ記事一覧表示 */}
      {blogList.map((blogItem, index) => (
        <BlogItem key={`${blogItem.id}_${index}`} blogItem={blogItem} />
      ))}

      {/* ページネーション */}
      {totalCount / blogShowCount > 1 && (
        <Pagination totalCount={totalCount} link={`/archive/${date}/page/`} />
      )}
    </BasePostPageLayout>
  )
}
