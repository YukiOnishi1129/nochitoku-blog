/**
 * pages/ArchiveTemplate
 * @package Component
 */
import React from 'react'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
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
 * props
 */
type Props = {
  date: string
  breadName: string
}

/**
 * ArchiveTemplate
 * @param {Props} prop
 * @returns
 */
export const ArchiveTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { date, breadName } = props
  /* contexts */
  const { blogList, totalCount } = useBlogState()
  /* hooks */
  const [{ metaData }] = useMetaData({ title: breadName })

  return (
    <BasePostPageLayout metaData={metaData} breadName={breadName}>
      {/* ページタイトル */}
      <PageTitle title={`${breadName}の記事一覧`} />
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
        <Pagination totalCount={totalCount} link={`/archive/${date}/page/`} />
      )}
    </BasePostPageLayout>
  )
}
