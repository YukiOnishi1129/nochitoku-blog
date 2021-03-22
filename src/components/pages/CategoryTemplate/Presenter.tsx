/**
 * pages/CategoryTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { BlogItem } from '@/components/common/molcules/BlogItem'
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
  const { categoryId, blogList, totalCount, breadName } = props

  return (
    <BasePostPageLayout breadName={breadName}>
      <div className={styles.title}>
        <h2 className={styles.title__content}>「エンジニア」の記事一覧</h2>
        <p className={styles.title__border}></p>
      </div>
      {/* ブログ記事一覧表示 */}
      {blogList.map((blogItem, index) => (
        <BlogItem key={`${blogItem.id}_${index}`} blogItem={blogItem} />
      ))}

      {/* ページネーション */}
      {totalCount / blogShowCount > 1 && (
        <Pagination
          totalCount={totalCount}
          link={`/category/${categoryId}/page/`}
        />
      )}
    </BasePostPageLayout>
  )
}
