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
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'
/* hooks */
import { useMetaData } from '@/hooks/useMetaData'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* styles */
import styles from './styles.module.scss'

/**
 * TopTemplate
 * @returns
 */
export const TopTemplate: React.FC = () => {
  /* context */
  const { blogList, totalCount } = useBlogState()
  /* hooks */
  const [states] = useMetaData({})

  return (
    <>
      <BasePostPageLayout metaData={states.metaData}>
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
          <Pagination totalCount={totalCount} link="/page/" />
        )}
      </BasePostPageLayout>
    </>
  )
}
