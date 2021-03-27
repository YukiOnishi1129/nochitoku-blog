/**
 * BlogItemTemplate/organisms/TableOfContents
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { DateArea } from '@/components/common/molcules/DateArea'
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
            <div className={styles.category__item} key={category.id}>
              {category.name}
            </div>
          ))}
      </div>
      <div className={styles.date}>
        <DateArea date={blogItem.createdAt} />
      </div>
    </div>
  )
}
