/**
 * pages/TopTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { BlogItem } from '@/components/common/molcules/BlogItem'
import { BlogItemResponsive } from '@/components/common/molcules/BlogItemResponsive'
import { Pagination } from '@/components/common/molcules/Pagination'
/* constants */
import { blogShowCount } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

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
      {totalCount / blogShowCount > 1 && (
        <Pagination totalCount={totalCount} link="/page/" />
      )}
    </BasePostPageLayout>
  )
}
