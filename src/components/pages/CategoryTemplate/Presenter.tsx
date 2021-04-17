/**
 * pages/CategoryTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { BlogItem } from '@/components/common/molecules/BlogItem'
import { BlogItemResponsive } from '@/components/common/molecules/BlogItemResponsive'
import { Pagination } from '@/components/common/molecules/Pagination'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/metaHead'
import { BlogItemType } from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  metaData: MetaHeadType
  categoryId: string
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
  const { metaData, categoryId, blogList, totalCount, breadName } = props

  return (
    <BasePostPageLayout metaData={metaData} breadName={breadName}>
      {/* ページタイトル */}
      <PageTitle title={`「${breadName}」の記事一覧`} />

      {/* ブログ記事一覧表示 */}
      <div className={styles.blogItem}>
        {blogList.length > 0 &&
          blogList.map((blogItem, index) => (
            <BlogItem key={`${blogItem.id}_${index}`} blogItem={blogItem} />
          ))}
      </div>

      {/* ブログ記事一覧表示 レスポンシブ*/}
      <div className={styles.blogItem__responsive}>
        {blogList.length > 0 &&
          blogList.map((blogItem, index) => (
            <BlogItemResponsive
              key={`${blogItem.id}_${index}`}
              blogItem={blogItem}
            />
          ))}
      </div>

      {/* ページネーション */}
      {totalCount / BLOG_SHOW_COUNT > 1 && (
        <Pagination
          totalCount={totalCount}
          link={`/category/${categoryId}/page/`}
        />
      )}
    </BasePostPageLayout>
  )
}
