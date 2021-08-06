/**
 * pages/CategoryTemplate
 * @package Component
 */
import React from 'react'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { BlogItem } from '@/components/common/molecules/BlogItem'
import { BlogItemResponsive } from '@/components/common/molecules/BlogItemResponsive'
import { Pagination } from '@/components/common/molecules/Pagination'
/* hooks */
import { useCategoryTemplate } from './useCategoryTemplate'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  categoryId: string
  breadName: string
}

/**
 * CategoryTemplate
 * @param {Props} prop
 * @returns
 */
export const CategoryTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { categoryId, breadName } = props
  /* hooks */
  const { state } = useCategoryTemplate({ breadName })

  return (
    <BasePostPageLayout metaData={state.metaData} breadName={breadName}>
      {/* ページタイトル */}
      <PageTitle title={`「${breadName}」の記事一覧`} />

      {/* ブログ記事一覧表示 */}
      <div className={styles.blogItem}>
        {state.blogList.length > 0 &&
          state.blogList.map((blogItem, index) => (
            <BlogItem key={`${blogItem.id}_${index}`} blogItem={blogItem} />
          ))}
      </div>

      {/* ブログ記事一覧表示 レスポンシブ*/}
      <div className={styles.blogItem__responsive}>
        {state.blogList.length > 0 &&
          state.blogList.map((blogItem, index) => (
            <BlogItemResponsive
              key={`${blogItem.id}_${index}`}
              blogItem={blogItem}
            />
          ))}
      </div>

      {/* ページネーション */}
      {state.totalCount / state.BLOG_SHOW_COUNT > 1 && (
        <Pagination
          totalCount={state.totalCount}
          link={`/category/${categoryId}/page/`}
        />
      )}
    </BasePostPageLayout>
  )
}
