/**
 * BlogItemTemplate/organisms/TableOfContents
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import { DateArea } from '@/components/common/molecules/DateArea'
/* types */
import { BlogItemType } from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogItem } = props

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{blogItem.title}</h2>
      <div className={styles.category}>
        {blogItem.categories.length > 0 &&
          blogItem.categories.map((category) => (
            <div key={category.id}>
              <Link href={`/category/${category.id}/page/1`}>
                <div className={styles.category__item}>{category.name}</div>
              </Link>
            </div>
          ))}
      </div>
      <div className={styles.date}>
        <DateArea date={blogItem.createdAt} />
      </div>
    </div>
  )
}
