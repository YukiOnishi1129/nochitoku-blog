/**
 * pages/TopTemplate
 * @package Component
 */
import React from 'react'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { BlogItem } from '@/components/common/molecules/BlogItem'
import { BlogItemResponsive } from '@/components/common/molecules/BlogItemResponsive'
import { Pagination } from '@/components/common/molecules/Pagination'
/* hooks */
import { useTopTemplate } from './useTopTemplate'
/* styles */
import styles from './styles.module.scss'

/**
 * TopTemplate
 * @returns
 */
export const TopTemplate: React.FC = () => {
  /* context */
  const [states] = useTopTemplate()

  return (
    <>
      <BasePostPageLayout metaData={states.metaData}>
        {/* ブログ記事一覧表示 */}
        <div className={styles.blogItem}>
          {states.blogList.length > 0 &&
            states.blogList.map((blogItem, index) => (
              <BlogItem key={`${blogItem.id}_${index}`} blogItem={blogItem} />
            ))}
        </div>

        {/* ブログ記事一覧表示 レスポンシブ*/}
        <div className={styles.blogItem__responsive}>
          {states.blogList.length > 0 &&
            states.blogList.map((blogItem, index) => (
              <BlogItemResponsive
                key={`${blogItem.id}_${index}`}
                blogItem={blogItem}
              />
            ))}
        </div>

        {/* ページネーション */}
        {states.totalCount / states.BLOG_SHOW_COUNT > 1 && (
          <Pagination totalCount={states.totalCount} link="/page/" />
        )}
      </BasePostPageLayout>
    </>
  )
}
